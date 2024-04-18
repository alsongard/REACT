# REACT PROJECTS & LEARNING

# Description
This project will be used for React learning purposes and building Projects

## OBJECTIVES
At the end the learner is expected to understand the use of React and develop his projects

## Features

### Setting Up 
To setup React in your local system first link your document with the essentials React Links in  your HTML document.
The code below is for this project in the Year 2024.

```
    <head>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
```

### Interacting
```
    ReactDOM.render(<h1>Hi there Welcome to React</h1>,document.querySelector(".root"));
    //for multiplel statements
    ReactDOM.render(
        <div>
            <h1>Welcome 2 React</h1>
            <p>Hi there we are starting React Session 1.</p>
        </div>,
        document.querySelector(".practise")
    )
```

### Functions
```
function HeaderInfo(){
    return (
        <div>
            <img src="../images/reactLogo.png" width="40px"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

#using the function in the render()
ReactDOM.render(<HeaderInfo/>,document.getElementById("root"))
```