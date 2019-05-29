import React, {Component} from 'react'


class SendMessageForm extends Component{

    constructor(){
        super()
        this.state ={
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e){
        this.setState({
            message:e.target.value
        })
        console.log(this.state.message)
    }

    handleSubmit(e){
       e.preventDefault()
       this.props.sendMessage(this.state.message)
    }


    render(){
        return(
            <form 
            onSubmit = {this.handleSubmit}
            className="send-message-form">
            <input
                onChange = {this.handleChange}
                value ={this.state.message}
                placeholder="Type your text here and hit ENTER"
                type="text" />
        </form>
        );
    }
}


export default SendMessageForm;