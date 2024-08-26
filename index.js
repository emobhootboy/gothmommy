const { Client, GatewayIntentBits, PermissionsBitField, EmbedBuilder, Events } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');

const token = ""; // Replace with your bot token
const prefix = '.';

const OPENAI_API_KEY = '';

const url = 'https://api.openai.com/v1/chat/completions';
const data = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Calculate the following math expression: 5 + 3 * (2 - 1)' }],
    max_tokens: 50
};



const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, // Required for guild-related events
        GatewayIntentBits.GuildMessages, // Required for receiving messages in guilds
        GatewayIntentBits.MessageContent, // Required for accessing message content
        GatewayIntentBits.DirectMessages, // Required for receiving direct messages
    ],
    partials: [
        'CHANNEL' // Required to handle messages in direct message channels
    ]
});
const { format } = require('date-fns'); // You can use any date formatting library
const fetch = require('node-fetch');
const axios = require('axios');


axios.post(url, data, {
    headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error fetching AI result:', error);
});


  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    // Set the bot's status to a simple message
    client.user.setPresence({
        activities: [{ name: 'wit sfwwn' }],
        status: 'online', // 'online', 'idle', 'dnd', or 'invisible'
    });
});












async function fetchMeme() {
    try {
      const response = await fetch('https://meme-api.com/gimme');
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error fetching meme:', error);
      return null;
    }
  }

client.on("messageCreate", (message) => {
    if (message.content == ".ping"){
        message.reply("pong! I am working bro ..")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "ILOVEUGOTHMOMMY"){
        message.reply("I love you too <3")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == ".playlist"){
        message.reply("https://open.spotify.com/playlist/3F3YLQ5ElnPYqX8ZuuxaXn?si=9cc78ee331684a97")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "zahin"){
        message.reply("kalakutta")
    }
})

////////////////////////////////////////////////////////////////////////

client.on('messageCreate', (message) => {
    if (message.content === ".ehan") {
        // Define your image URLs
        const imageUrls = [
            'https://media.discordapp.net/attachments/1273887967076946005/1273911495679545354/image.png?ex=66c05608&is=66bf0488&hm=97034826a96b4f7d5602843969889e95dadc2e4654a528ca00e7ee82cb32b837&=&format=webp&quality=lossless&width=196&height=108',
            'https://media.discordapp.net/attachments/1273887967076946005/1273892735190958152/Screenshot_20211030-234710__01.png?ex=66c0448f&is=66bef30f&hm=dda2b2340376f951443ee83fd2e0d8027a1457fabed48b507043094448b6ea35&=&format=webp&quality=lossless&width=331&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891950025638000/unknown.png?ex=66c043d4&is=66bef254&hm=3e489997ce3456c42871d209d177bbabd700f3d5684db574cf50563a789f0bd7&=&format=webp&quality=lossless&width=368&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891888121778273/unknown.png?ex=66c043c5&is=66bef245&hm=83d4eac922242f1a0ce7fc96f6935e65f3d8a12973ca2cfa56460d0700657bc3&=&format=webp&quality=lossless&width=492&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891808648106055/image.png?ex=66c043b2&is=66bef232&hm=7553415562122a9a8a8516fa2f88d55f1a7da986f22153baf2e65825f6a85727&=&format=webp&quality=lossless&width=292&height=280',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891375255130182/image.png?ex=66c0434b&is=66bef1cb&hm=753419de43b28649badada333868934a9986f59cdf6302fe758bb7d01e77970a&=&format=webp&quality=lossless&width=751&height=670',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891440220442677/Screenshot_20220325-193845.png?ex=66c0435b&is=66bef1db&hm=e97733d07d47e420cb33f8f13985961d508b13d58e4cb2277a475d6db330f5b5&=&format=webp&quality=lossless&width=309&height=670',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891082144317473/image.png?ex=66c04305&is=66bef185&hm=882729256f49b045af8e39ca9d3a5f605f2880cb62072925f09c023b8d06f599&=&format=webp&quality=lossless&width=990&height=505',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891105158725652/image.png?ex=66c0430b&is=66bef18b&hm=b7b6bdc80bbab7db1a70beec326f984109ba7b12ddaf60dacc179f842e200b35&=&format=webp&quality=lossless&width=592&height=118',
            'https://media.discordapp.net/attachments/1273887967076946005/1273891353138303008/image.png?ex=66c04346&is=66bef1c6&hm=467b77db98342ac57364f686a34f2aafc8d9a96ca56cde80974bd9c202c5d4e7&=&format=webp&quality=lossless&width=565&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273890912434389063/unknown.png?ex=66c042dd&is=66bef15d&hm=3f73893f2d4978a58692919be96183b28ece8c892633647ad8dc05f1aacee2e8&=&format=webp&quality=lossless&width=570&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273890536213839965/unknown.png?ex=66c04283&is=66bef103&hm=5eb1dd48d0ce5185c96f8e97a335ab2994e1194f3279fa59a080c60ed58209fc&=&format=webp&quality=lossless&width=404&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273890511718977577/Screenshot_20220427-222518__01.png?ex=66c0427d&is=66bef0fd&hm=c4fa1515535870df7c96a5a792ba8bbad97c5f23330ae6c32476a54fb8949ab9&=&format=webp&quality=lossless&width=606&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273890489845813324/image.png?ex=66c04278&is=66bef0f8&hm=de05735ba85d587731084c124c60a5117138eafb497cf594b7e6409857887230&=&format=webp&quality=lossless&width=660&height=140',
            'https://media.discordapp.net/attachments/1273887967076946005/1273890414482690069/image.png?ex=66c04266&is=66bef0e6&hm=66ac324ad92099d02ea4b7b7638edd684c02e3f306168d791818be0159ba8e36&=&format=webp&quality=lossless&width=249&height=260',
            'https://media.discordapp.net/attachments/1273887967076946005/1273889851648770069/Screenshot_2024-05-09-09-29-44-533_com.png?ex=66c041e0&is=66bef060&hm=aee8afa4f7165d78370fffa560017821d1700902dbe276a975f27840b62a9669&=&format=webp&quality=lossless&width=520&height=420',
            'https://media.discordapp.net/attachments/1273887967076946005/1273892458131881984/image.png?ex=66c0444d&is=66bef2cd&hm=c492fba9ec62e76b5e550e93fd6a299525076881fd3c8ed34c70d15588d577f1&=&format=webp&quality=lossless&width=230&height=314'
        ];

        // Create an embed
        const embed = new EmbedBuilder()
            .setColor('#FF69B4')
            .setTitle('Collecting Data On Ehan')
            .setDescription('Images Collected on Ehan : ')
            .setImage('https://preview.redd.it/some-characters-give-the-middle-finger-v0-nz4ipspiz81b1.png?width=640&crop=smart&auto=webp&s=b6e296bf2a0eb25c2bb2f435fb169f8039551f81')
            .setThumbnail('https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg');

        // Add fields for each image
        imageUrls.forEach((url, index) => {
            embed.addFields({
                name: `Image ${index + 1}`,
                value: `[View Image](${url})`,
                inline: true
            });
        });

        // Send the embed
        message.reply({ embeds: [embed] });
    }
});


//////////////////////////////////////////////////////////////////////////



client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    // Handle "gu kha" command
    if (message.content.toLowerCase() === 'gu kha') {
        try {
            await message.react('💩'); // Poop emoji
            console.log('Poop emoji reacted to "gu kha".');
        } catch (error) {
            console.error('Error reacting with poop emoji:', error);
        }
    }
});


client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    // Handle "gu kha" command
    if (message.content.toLowerCase() === 'ehan') {
        try {
            await message.react('🤮'); // Poop emoji
            console.log('Poop emoji reacted to "ehan".');
        } catch (error) {
            console.error('Error reacting with poop emoji:', error);
        }
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    // Handle "gu kha" command
    if (message.content.toLowerCase() === 'rudaba') {
        try {
            await message.react('👎🏿'); // Poop emoji
            console.log('Poop emoji reacted to "rudaba".');
        } catch (error) {
            console.error('Error reacting with poop emoji:', error);
        }
    }
});






client.on('messageCreate', (message) => {
    if (message.content === '.coinflip') {
        // Generate a random number (0 or 1)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        // Reply with the result
        message.reply(`The coin landed on **${result}**!`);
    }
});

client.on('messageCreate', async message => {
    if (message.content === '.meme') {
      const memeUrl = await fetchMeme();
      if (memeUrl) {
        message.channel.send(memeUrl);
      } else {
        message.channel.send('Sorry, I couldn\'t fetch a meme at the moment.');
      }
    }
  });




const notificationChannelId = '1273948508415725578';




client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    // Handle the .senddm command
    if (message.content.startsWith('.senddm')) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return message.reply('You do not have permission to use this command.');
        }

        const args = message.content.split(' ').slice(1);
        const userMention = args.shift();
        const dmMessage = args.join(' ');

        if (!userMention.startsWith('<@') || !userMention.endsWith('>')) {
            return message.reply('Please mention a valid user.');
        }

        const userId = userMention.replace(/[<@!>]/g, '');

        try {
            const user = await client.users.fetch(userId);
            await user.send(dmMessage);
            message.reply(`Message sent to ${user.tag}!`);
        } catch (error) {
            console.error('Error sending DM:', error);
            message.reply('Could not send the message. Ensure the mention is correct and the bot has the necessary permissions.');
        }
    }

    // Handle incoming DMs
    if (message.channel.type === 'DM') {
        const notificationChannel = client.channels.cache.get(notificationChannelId);

        if (!notificationChannel) {
            console.error(`Notification channel with ID ${notificationChannelId} not found.`);
            return;
        }

        const replyMessage = `Received a DM from ${message.author.tag}:\n${message.content}`;
        
        try {
            await notificationChannel.send(replyMessage);
            console.log('Notification sent successfully.');
        } catch (error) {
            console.error('Error sending notification:', error);
            console.error('Notification channel ID:', notificationChannelId);
            console.error('DM content:', replyMessage);
        }
    }
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    // Log incoming DMs
    if (message.channel.type === 'DM') {
        console.log(`Received a DM from ${message.author.tag}: ${message.content}`);
        
        const notificationChannel = client.channels.cache.get(notificationChannelId);
        if (!notificationChannel) {
            console.error(`Notification channel with ID ${notificationChannelId} not found.`);
            return;
        }

        const replyMessage = `Received a DM from ${message.author.tag}:\n${message.content}`;
        
        try {
            await notificationChannel.send(replyMessage);
            console.log('Notification sent successfully.');
        } catch (error) {
            console.error('Error sending notification:', error);
            console.error('Notification channel ID:', notificationChannelId);
            console.error('DM content:', replyMessage);
        }
    }
});
  

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    if (message.content === '.roll') {
        // Roll the dice three times
        const rolls = [rollDice(), rollDice(), rollDice()];
        const total = rolls.reduce((acc, roll) => acc + roll, 0);

        // Format the result
        const rollResults = rolls.join(' + ');
        message.channel.send(`${message.author}, you rolled: ${rollResults} = ${total}`);
    }
});

// Function to roll a six-sided dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


const rateLimitDelay = 60000; // 60 seconds

async function fetchAIResponse(data) {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.error('Rate limit exceeded. Waiting before retrying...');
            await new Promise(resolve => setTimeout(resolve, rateLimitDelay));
            return fetchAIResponse(data); // Retry after waiting
        } else {
            console.error('Error fetching AI result:', error);
            throw error; // Re-throw other errors
        }
    }
}

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('.calc')) {
        const query = message.content.slice(6).trim(); // Extract the math expression

        if (!query) {
            return message.reply('Please provide a math expression to calculate.');
        }

        try {
            const data = {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: `Calculate the following math expression: ${query}`
                    }
                ],
                max_tokens: 50
            };

            const result = await fetchAIResponse(data);
            message.reply(`The result of "${query}" is ${result.choices[0].message.content.trim()}`);
        } catch (error) {
            message.reply('Sorry, I couldn\'t process that request.');
        }
    }
});


axios.post(url, data, {
    headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    if (error.response && error.response.status === 429) {
        console.error('Rate limit exceeded. Retrying...');
        // Implement retry logic here
    } else {
        console.error('Error fetching AI result:', error);
    }
});


client.login(token);