module.exports = async function (context, myTimer) {
    const item = {
        id: Math.floor(Math.random()*10),
        msg: "Hello world",
        date: new Date()
    }
    context.log(item);   
    context.bindings.outputSbTopic = item;
    context.done();
}