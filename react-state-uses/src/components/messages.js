import React from "react";
//challenge display h1 message if array is not empty 
//solution if (array) == returns true if array has value inside
function MessageComponent()
{
    const [messages, setMessages] = React.useState(["a", "b"]);
    // let result;
    // if (messages.length > 0)
    // {
    //     result = true;
    // }
    // else
    // {
    //     result = false;
    // }

    return (
        <div>
            {/* {result && <h1>You have {messages.length} unread messages</h1> } */}
            {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
            
        </div>
    )
}
export default MessageComponent;

// Solution for challenge ampersand and tenary application 7:40:55
// {messages.length === 0 && <h1>You are all caught up </h1>}
// {messages.length > 0 && <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1>}