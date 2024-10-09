var azureStorage = require('azure-storage');
// <no> <report>
var queueSvc = azureStorage.createQueueService();
const badInput = document.getElementById("el");
// <yes> <report> JS_ACCESS_CONTROL_AZURE js11ca1
queueSvc.deleteQueue(badInput, option, function(error, response){});
// <no> <report>
var blobSvc = azureStorage.createBlobService();
// <yes> <report> JS_ACCESS_CONTROL_AZURE js11ca1
blobSvc.deleteContainer(badInput, function (error, response) {});
// <yes> <report> JS_ACCESS_CONTROL_AZURE js11ca1
queueSvc.getMessages(badInput, function(error, result, response){});
// <no> <report> 
var sharedQueueService = azure.createQueueServiceWithSas(host, queueSAS);

var queueUri = 'https://' + 'STORAGE_ACCOUNT' + '.queue.core.windows.net';
var notReport = "string";
var queueService = AzureStorage.Queue.createQueueServiceWithSas(queueUri, 'SAS_TOKEN');
// <yes> <report> JS_ACCESS_CONTROL_AZURE js11ca1
queueSvc.deleteQueueIfExists(badInput, function(error, result) {
    if (error) {
        // Delete queue error
    } else {
        // Delete queue successfully
    }
})

// <no> <report>
notReport.deleteQueueIfExists('myqueue', function(error, result) {
    if (error) {
        // Delete queue error
    } else {
        // Delete queue successfully
    }
})

this.setState({
containerHeight : this.state.containerHalfHeight,
middleList : true,
});
if (this.props.getContainerHeight != undefined) {
	
// <no> <report>
this.props.getContainerHeight(this.state.containerHalfHeight);
}

if (this.props.getContainerHeight != undefined) {
this.props.getContainerHeight(this.state.containerHalfHeight);
}

var queueName = 'taskqueue';
queueService.getMessages(queueName, function(error, serverMessages) {
    if (!error) {
        // <yes> <report> JS_ACCESS_CONTROL_AZURE js11fa1
        queueService.deleteMessage(queueName, badInput, serverMessages[0].popReceipt, function(error) {
            if (!error) {
                // Message deleted
            }
        });
    }
});
