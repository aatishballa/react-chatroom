import React,{Component} from 'react'
import Message from './Message'

class MessageList extends Component{


    render(){

        return(
            <div className="message-list">
                {this.props.message.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.parts[0].payload.content}/>
                    )
                })}
            </div>
        );
    }

}


export default MessageList;