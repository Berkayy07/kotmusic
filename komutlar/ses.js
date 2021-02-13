const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('YOUTUBE API KEY');

exports.run = async (client, message, args) => {
    const queue = client.queue;
  
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
      const asd1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Lütfen Bir Ses Kanalına Geçiniz`)
    .setFooter('🔱 K.O.T Music🔱')
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Şuan Herhangi Bir Şarkı Çalmıyor`)
    .setFooter('🔱 K.O.T Music🔱')
    if (!serverQueue) return message.channel.send(asd2);

    if (!args[0]) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Ses Seviyesini Ayarlamak İçin Bir Sayı Yazınız"));
    serverQueue.volume = args[0];
    if (args[0] > 10) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription(`Ses seviyesi en fazla \`10\` olarak ayarlanabilir.`))
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0]);
    const volumeLevelEdit = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Ayarlanan Ses Seviyesi: **${args[0]}**`)
    .setFooter('🔱 K.O.T Music🔱')
    return message.channel.send(volumeLevelEdit);

};

exports.conf = {
    enabled: true,
    aliases: ['volume'],
    permLevel: 0
};

exports.help = {
    name: 'ses',
    description: 'Muziğin sesini ayarlar.',
    usage: 'ses sayı'
};