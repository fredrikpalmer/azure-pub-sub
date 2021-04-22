module.exports = async function(context, topicItem) {
    context.log("Subscriber-2, receiving msg: " + context.bindingData.messageId);
    context.log(topicItem);
    context.done();
};