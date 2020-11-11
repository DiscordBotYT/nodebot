const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', message => {
    if(message.content == '!출근 3001#') {
        message.reply(' ``출근 완료.`` ')
    } else if(message.content == '!퇴근 0042#') {
        message.reply(' ``퇴근완료`` ')
    }
})

client.login(token);