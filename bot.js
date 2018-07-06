//Use discord.js

const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = ''; //prefix for calling bot

//Listener Event: Run when message is received
bot.on('message', message=>{ 
    
    let msg = message.content.toUpperCase(); //this variable for the message and turn all to uppercase
    let sender = message.author; //this variabel take the message and find who author the message
    let cont = message.content.slice(prefix.length).split(" "); //this variable slice off the prefix
    let args = cont.slice(1); //this will slice off the commands, only leaving the arguments
    
//commands - commands for bot at here
    
    //Deleting many message with 'purge' command
    if (!msg.startsWith(prefix + '#PERKENALAN')){
        //wrap this in an async since awaits only work in them
    
        
        async function purge(){
            message.delete(); //delete the commands message, so it doesnt interfere with the message we are going to delete
  
            
            
            const fetched = await message.channel.fetchMessages({limit: args[0]}); //grabs the last number(args) of messages in the channel
            console.log(fetched.size + 'message found, deleting....'); //lets post into console how many message we are deleting 
        
        
        
        }
       purge();
    }
});

//Listener Event: Run when bot send a ready event
bot.on('ready',()=>{
   console.log('bot started.') 
});


bot.login(process.env.BOT_TOKEN);
