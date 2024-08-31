import React from "react";
//challenge display h1 message if array is not empty 
//solution if (array) == returns true if array has value inside
function MessageComponent()
{
    const [messages, setMessages] = React.useState(["a", "b"]);
    let result;
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