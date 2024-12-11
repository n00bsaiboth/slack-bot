const { App } = require('@slack/bolt');
const { config } = require('dotenv');

config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.APP_TOKEN,
    port: process.env.PORT || 3005,
});

app.message('Hey', async ({ message, say }) => {
    try {
        await say(`Hello, <@${message.user}>!`);
    } catch (error) {
        console.log('Error: ');
        console.error(error);
    }
});

(async () => {
    try {
        await app.start();
        console.log('Slack bot is starting!');
    } catch (error) {
        console.log('Error: ');
        console.error(error);
    }
    
})();

