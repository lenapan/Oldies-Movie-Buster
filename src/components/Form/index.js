import React from 'react';
import axios from 'axios';
import "./style.css";

class commentForm extends React.Component {
        sendForm(event){
            event.preventDefault();
        
            axios.post('http://localhost:5000/Comments' || process.env.PORT, {
                user: this.refs.user.value,
                comment: this.refs.comment.value
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            })
        }
        getItems(event){
            event.preventDefault();
            var i = 0;
            const element = document.querySelector("p");     
            axios.get('http://localhost:5000/Comments' || process.env.PORT)
            .then(
                response => 
                element.innerHTML = 
                `${response.data[0].user} says <p>"${response.data[0].comment}"</p> 
                <p>There are ${response.data.length} comments total in the database.</p>`
            );
        }
        render(){
            return (
                <> <p></p>
                {/* <p onLoad={this.getItems.bind(this)}></p> */}
                <form onSubmit={this.getItems.bind(this)}>
                    <button className="btn waves-effect waves-light btn2" type="submit"
                    nme="action">Test GET response</button>
                </form>
                <form onSubmit={this.sendForm.bind(this)}>
                    User
                    <input id="user" ref="user" type="text" placeholder/>
                    What would you like to comment on?
                    <textarea id="comment" ref="comment" type="text" />
                    <button className="btn waves-effect waves-light" type="submit"
                    nme="action">Add Comment</button>
                </form>
                
                
                </>
            );
        }
}
export default commentForm;