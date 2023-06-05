// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function deleteAllMessages() {
  const messages = await client.messages.list();
  for (message of messages) {
    console.warn(`deleting ${message.sid}`);
    message.remove();
  }
}

deleteAllMessages()
  .then(() => console.log("done!"))
  .catch((err) => console.error(err));
