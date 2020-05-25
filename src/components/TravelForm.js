import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class TravelForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            veg:"",
            milk:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/><br/>
                    <input placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/><br/>
                    <input placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange}/><br/><br/>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label><br/>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label><br/><br/>
                    <label>Destination:</label>
                    <select value={this.state.destination} onChange={this.handleChange} name="destination">
                        <option value="">-- Please Choose a destination --</option>
                        <option value="America">America</option>
                        <option value="Canada">Canada</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Australia">Australia</option>
                        <option value="Dubai">Dubai</option>
                    </select><br/><br/>
                    <h>Your dietary restrictions</h><br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="veg"
                            checked={this.state.veg}
                            onChange={this.handleChange}
                        /> Vegetarian
                    </label><br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="milk"
                            checked={this.state.milk}
                            onChange={this.handleChange}
                        /> Milk Allergy
                    </label><br/><br/>
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions: {this.state.veg && "Veg,"} {this.state.milk && "Milk"} </p>
            </main>
        )
    }
}

export default TravelForm