import React from 'react'

function TimeOfDay() {

    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: "150px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    }

    const Name = 'Anand Muraleedharan'
    const date = new Date()
    const hours = date.getHours()
    let wishes 

    if (hours < 12) {
        wishes = 'Morning'
    } else if (hours > 12 && hours < 17) {
        wishes = 'Afternoon'
    } else {
        wishes = 'Night'
    }
    return (
        <h1 style = {styles}>Good {wishes} {Name}!</h1>
    )
} 

export default TimeOfDay