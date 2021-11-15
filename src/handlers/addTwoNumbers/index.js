exports.handler = async (event) => {
    console.log("Function Invoked with event data:", event)
    const { first, second } = event
    console.log(`${first} + ${second}`)
    return  first + second
}