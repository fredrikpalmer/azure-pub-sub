module.exports = async function(context, topicItem) {
    context.log("Subscriber-1, receiving msg: " + context.bindingData.messageId);
    context.log(topicItem);
    context.done();
};