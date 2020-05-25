import React from "react"

class UserLogin extends React.Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    
    render () {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn? "In" : "Out"}</h1>
            </div>
        )
    }
}

export default UserLogin