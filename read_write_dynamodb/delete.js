var AWS = require("aws-sdk");
let awsConfig = {
  region: "sa-east-1",
  endpoint: "http://dynamodb.sa-east-1.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function() {
  var params = {
    TableName: "users",
    Key: {
      email_id: "com@kakaka.betinhooow"
    }
  };
  docClient.delete(params, function(err, data) {
    if (err) {
      console.log("users::delete::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::delete::success");
    }
  });
};

remove();
