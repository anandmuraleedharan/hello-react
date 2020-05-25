import React from 'react'

// Hello World -JSX
//Arrow function: const HelloWorld = () => <h1>Hello world!</h1>
function HelloWorld() {
    const firstName = "Anand"
    const lastName = "Muraleedharan"
    return (
        <div>
            <h1>Hello world!</h1>
            <p>This is {firstName} {lastName}!</p>
        </div>
    )
} 

export default HelloWorld