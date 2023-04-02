const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-west-1' });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log("CHECKER EVENT: ", event)
  console.log("CHECKER BODY: ", event.body)
  const { name, email, message } = event;
  const params = {
    Destination: {
      ToAddresses: ['42cosmic@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        }
      },
      Subject: {
        Data: 'New message from contact form'
      }
    },
    Source: 'jokeyenoki@gmail.com'
  };
  
  console.log("CHECKER BEFORE SEND EMAIL: About to send the params payload: ", params)
  await ses.sendEmail(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully' })
  };
};
