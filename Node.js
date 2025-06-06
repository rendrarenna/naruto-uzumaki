// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Bot login sebagai ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!halo') {
        message.channel.send('Halo juga!');
    }
});

client.login('TOKEN_KAMU'); // Ganti dengan token asli
