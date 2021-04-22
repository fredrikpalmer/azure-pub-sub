module.exports = async function (context, myTimer) {
    const item = {
        id: 1,
        msg: "Hello world",
        date: new Date()
    }
    context.log(item);   
    context.bindings.outputSbTopic = item;
    context.done();
}