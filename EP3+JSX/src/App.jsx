import "./App.css";
import React from "react";

function user() {
  return ("Kesavan", 456, true);
}
console.log(user());

let username = "kesavan";
let islogged=true;
function App() {
  return (
    // div element
    // <div>
    //   <h1>React jsx</h1>
    //   <div className="container">
    //     <br />
    //     <h1 style={{backgroundColor:"red",padding:'20px'}}> JSX-JavaScript</h1>
    //     <label htmlFor="user">  </label>
    //     <input id="user" type="text" />
    //     <p>{username}</p>
    //     {
    //       islogged && <p> Welcome to our Website</p> // conditional rendering 
    //     }
    //     <button onClick={username}>Click Me</button>
    //   </div>
    // </div>

    //---------------------------------------------------Fragment Method---------------------------------------
    // <>...</> or 
      <React.Fragment>
      <h1>React jsx</h1>
      <div className="container">
        <br />
        <h1 style={{backgroundColor:"red",padding:'20px'}}> JSX-JavaScript</h1>
        <label htmlFor="user">  </label>
        <input id="user" type="text" />
        <p>{username}</p>
        {
          islogged && <p> Welcome to our Website</p> // conditional rendering 
        }
        <button onClick={username}>Click Me</button>
      </div>
    </React.Fragment>,
    <>
    <h1>Next Episode - React Component</h1>
    </>

  );
}

export default App;
