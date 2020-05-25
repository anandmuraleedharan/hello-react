import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"

/* eslint-disable */
import HelloWorld from './components/HelloWorld'
import MyList from './components/MyList'
import MyInfo from './components/MyInfo'
import App from './components/App'
import TodoApp from './components/TodoApp'
import TimeOfDay from './components/TimeOfDay'
import Contacts from './components/Contacts'
import JokesApp from './components/JokesApp'
import ProductsApp from './components/ProductsApp'
import ClassBasedComponent from './components/ClassBasedComponent'
import UserLogin from './components/UserLogin'
import EventHandler from './components/EventHandler'
import ClickCounter from './components/ClickCounter'
import ConditionalRendering from './components/ConditionalRendering'
import StarwarsApi from './components/StarwarsApi'
import MyForm1 from './components/MyForm1'
import TravelForm from './components/TravelForm'
/* eslint-enable */

//Practice #1: Hello World
// ReactDOM.render(<HelloWorld/>, document.getElementById("root"))

//Practice #2: My List
// ReactDOM.render(<MyList/>, document.getElementById("root"))

// Practice #3: Move into a new component
//ReactDOM.render(<MyInfo/>, document.getElementById("root"))

//Practice #4: Parent/Child Components
//ReactDOM.render(<App/>, document.getElementById("root"))

//Practice #5: TodoApp
//ReactDOM.render(<TodoApp/>, document.getElementById("root"))

//Practice #6: Wishes
//ReactDOM.render(<TimeOfDay/>, document.getElementById("root"))

//Practice #7: Contact
//ReactDOM.render(<Contacts/>, document.getElementById("root"))

//Practice #8: Jokes
// ReactDOM.render(<JokesApp/>, document.getElementById("root"))

//Practice #8: Products
//ReactDOM.render(<ProductsApp/>, document.getElementById("root"))

//Practice #9: Class based Components
//ReactDOM.render(<ClassBasedComponent/>, document.getElementById("root"))

//Practice #10: Class based Components 2 - UserLogin
//ReactDOM.render(<UserLogin/>, document.getElementById("root"))

//Practice #11: Event Handling - Click/Hover
// ReactDOM.render(<ClickCounter/>, document.getElementById("root"))

// Life Cycle Methods - Important Links
// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
// https://scrimba.com/g/greacthooks

//Practice #12: ConditionalRendering
//ReactDOM.render(<ConditionalRendering/>, document.getElementById("root"))

//Practice #13: API
//ReactDOM.render(<StarwarsApi/>, document.getElementById("root"))

//Practice #14: Forms
//ReactDOM.render(<MyForm1/>, document.getElementById("root"))

//Practice #15: TravelForm (You may apply separation of concerns on this!!!)
ReactDOM.render(<TravelForm/>, document.getElementById("root"))