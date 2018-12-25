 const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

console.log("Code By ReeeBeL.");
client.on("ready", () => {
let channel =     client.channels.get("526866932419395597")
setInterval(function() {
channel.send(`Reeebel Is King .. Heeee8 !`);
}, 25)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "1s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});

client2.on("ready", () => {
let channel =     client.channels.get("526866932419395597")
setInterval(function() {
channel.send(`Reeebel Is King .. Heeee8 !`);
}, 25)
})


client2.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "2s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});

client3.on("ready", () => {
let channel =     client.channels.get("526866932419395597")
setInterval(function() {
channel.send(`Reeebel Is King .. Heeee8 !`);
}, 25)
})


client3.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "3s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});

client4.on("ready", () => {
let channel =     client.channels.get("526866932419395597")
setInterval(function() {
channel.send(`Reeebel Is King .. Heeee8 !`);
}, 25)
})


client4.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "4s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN); 
client.login(process.env.BOT_TOKEN2); 
client.login(process.env.BOT_TOKEN3); 
client.login(process.env.BOT_TOKEN4); 
