const messages = [
    "Ana", 
    "Gil", 
    "Pawiz",
    "Lalo",
]

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }