var AWS = require("aws-sdk");
let awsConfig = {
  region: "sa-east-1",
  endpoint: "http://dynamodb.sa-east-1.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function() {
  var input = {
    email_id: "com@kakaka.betinhooow",
    nome: "wooohniteb"
  };
  var params = {
    TableName: "users",
    Item: input
  };
  docClient.put(params, function(err, data) {
    if (err) {
      console.log("users::save::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::save::success");
    }
  });
};

save();
