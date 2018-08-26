var AWS = require("aws-sdk");
var spendings = require('./spendingData.json');
AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing Spendings into DynamoDB. Please wait.");
spendings.forEach(function(spending) {
  console.log(spending)
var params = {
        TableName: "Spendings",
        Item: {
            "id": spending.id,
            "type": spending.type,
            "spent": spending.spent,
            "saved": spending.saved
        }
    };
docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add Car", spending.type, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", spending.type);
       }
    });
});