const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let müzik = new Discord.RichEmbed()  
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('RANDOM')
.addField('🔱 K.O.T Music🔱 | Müzik Komutları',`
**!çal <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**!duraklat** : Çalan Şarkıyı Durdurur
**!devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**!tekrar** : Çalan Şarkıyı Tekrarlar
**!geç** : Bi Sonraki Şarkıya Geçiş Yapar
**!durdur** : Şarkıyı Durdurur 
**!çek** : Botu Sese Çeker 
**!ses** : Ses Seviyesini Belirler`)
.setFooter('🔱 K.O.T Music🔱')
 message.channel.send(müzik) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["müzik","yardım","help"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
  