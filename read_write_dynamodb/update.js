var AWS = require("aws-sdk");
let awsConfig = {
  region: "sa-east-1",
  endpoint: "http://dynamodb.sa-east-1.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function() {
  var params = {
    TableName: "users",
    Key: { email_id: "rnobre.dev@gmail.com" },
    UpdateExpression: "set nome = :nome",
    ExpressionAttributeValues: {
      ":nome": "Betinhooow"
    },
    ReturnValues: "UPDATED_NEW"
  };
  docClient.update(params, function(err, data) {
    if (err) {
      console.log("users::update::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::update::success " + JSON.stringify(data));
    }
  });
};

modify();
