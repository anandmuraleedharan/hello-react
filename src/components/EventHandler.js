import React from "react"

function handleClick() {
    alert("I was clicked")
}

function handleHover() {
    alert("I was hovered")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img onMouseOver={handleHover} alt="" src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App