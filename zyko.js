/*
   Created By zyko md official 
   My Contact wa.me/62838743303856
*/
/*• zyko menjual perlengkapan panel seperti

› Tema Panel Premium
› Vps Untuk Pterodactyl
› Vps Dari Saya
› Panel Digital Ocean
› Jasa Fix Eror Panel Pterodactyl
› Jasa Install Panel Pterodactyl
› Jasa Run Bot On 24 Jam
› Jasa Sewa Bot On 24 Jam
› Jasa Install Panel
› Jasa Install Thema Panel 
› Jasa Install Wigs/Node
› Jasa Jebol Akun Fb Sesi
› Jasa membuat Script
› Jasa Membuat Script reques
› Jasa Fix Script eror
› Jasa membuat script 
› jasa buat dana qr bisnis 
› Ready Panel Run Bot On 24 Jam
› Ready Admin Panel
› Ready Nokos All Apk
› Ready Script create panel
› Ready Script reseller
› Ready Script pushkotak/save kontak 
› Ready Vps Digital Ocean [ Do ]
› Ready Akun Digital Ocean

*/
require(`./settings`)
require(`./random`)


/*============== NODE ==============*/
const { 
WA_DEFAULT_EPHEMERAL, 
getAggregateVotesInPollMessage, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage, 
areJidsSameUser, 
getContentType 
} = require("@whiskeysockets/baileys")
const { 
FajarNews, 
BBCNews, 
metroNews, 
CNNNews, 
iNews, 
KumparanNews, 
TribunNews, 
DailyNews, 
DetikNews, 
OkezoneNews, 
CNBCNews, 
KompasNews, 
SindoNews, 
TempoNews, 
IndozoneNews, 
AntaraNews, 
RepublikaNews, 
VivaNews, 
KontanNews, 
MerdekaNews, 
KomikuSearch, 
AniPlanetSearch, 
KomikFoxSearch, 
KomikStationSearch, 
MangakuSearch, 
KiryuuSearch, 
KissMangaSearch, 
KlikMangaSearch, 
PalingMurah, 
LayarKaca21, 
AminoApps, 
Mangatoon, 
WAModsSearch, 
Emojis, 
CoronaInfo, 
JalanTikusMeme,  
Cerpen, 
Quotes, 
Couples, 
Darkjokes 
} = require("dhn-api")
const { 
exec, 
spawn, 
execSync 
} = require("child_process")
const { 
lyrics, 
lyricsv2, 
wallpaper, 
wallpaperv2, 
googleImage, 
pinterest, 
bucin, 
mediafiredl, 
jadwalsholat 
} = require('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { JSDOM } = require('jsdom')
const { createHash } = require('crypto')
const { sizeFormatter } = require('human-readable')
const { lookup } = require('mime-types')
const { otakudesu, fbdown } = require('hxz-api')
const { ytSearch } = require('./lib/scraper/yt')
const { photoOxy } = require('./lib/scraper/photooxyy')
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
/*============== LIB ==============*/
const afk = require("./lib/afk");
const levelling = require("./lib/levelling");
const { 
smsg, 
getGroupAdmins, 
formatp, 
tanggal, 
formatDate, 
getTime, 
isUrl, 
await, 
sleep, 
clockString, 
msToDate, 
sort, 
toNumber, 
enumGetKey, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
delay, 
format, 
logic, 
generateProfilePicture, 
parseMention, 
getRandom, 
pickRandom, 
reSize,
getCase 
} = require('./lib/myfunc')
const { 
toAudio, 
toPTT, 
toVideo, 
ffmpeg 
} = require('./lib/converter')
const { TelegraPh, 
UploadFileUgu, 
webp2mp4File, 
floNime 
} = require('./lib/upload')
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
/*============== JAM  ==============*/
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const Owner = global.owner + '@s.whatsapp.net'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
/*============== DATABASE==============*/
const _owner = JSON.parse(fs.readFileSync('./database/json/owner.json'))
const contacts = JSON.parse(fs.readFileSync("./database/json/contacts.json"))
const db_respon_list = JSON.parse(fs.readFileSync('./database/json/list.json'))
const dblist = JSON.parse(fs.readFileSync('./database/json/listall.json'))
let prem = JSON.parse(fs.readFileSync('./database/json/premium.json'))
let _afk = JSON.parse(fs.readFileSync('./database/json/afk.json'))
/*============== GK TAU SAMA JAM ==============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
/*============== DATABASE ==============*/
global.db.data = JSON.parse(fs.readFileSync("./database/json/database.json"))
if (global.db.data) global.db.data = {
chats: {},
database: {},
donate: {},
game: {},
group: {},
others: {},
settings: {},
sticker: {},
users: {},
...(global.db.data || {})
}
let asahotak = db.data.game.asahotak = []
let caklontong = db.data.game.caklontong = []
let kuismath = db.data.game.math = []
let siapakahaku = db.data.game.siapakahaku = []
let susunkata = db.data.game.susunkata = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebaklagu = db.data.game.tebaklagu = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tekateki = db.data.game.tekateki = []
let vote = db.data.others.vote = []
let user = JSON.parse(fs.readFileSync('./database/json/user.json'));


module.exports = zyko = async (zyko, m, chatUpdate, store) => {
require("./database/handler/handler")(zyko, m)
try {

const body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
const budy = typeof m.text == "string" ? m.text : ""
const prefix = /^[°#+,.?=''():√%!¢£¥€π¤ΠΦ_&`™️©️®️Δ^βα¦|/\\©️^]/.test(body) ? body.match(/^[°#+,.?=''():√%¢£¥€π¤ΠΦ_&!`™️©️®️Δ^βα¦|/\\©️^]/gi) : "."
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, "").slice(1).trim()
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const pushname = m.pushName || "No Name"
const tag = m.sender.split("@")[0]
const botNumber = await zyko.decodeJid(zyko.user.id)
const isOwner = [botNumber, ...global.owner].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const date = moment().tz("Asia/Jakarta").format("dddd, ll")
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const listblock = await zyko.fetchBlocklist()
const from = m.key.remoteJid
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
/*============== GROUP ==============*/
const welcm = m.isGroup ? welcom.includes(from) : false
const isGroup = from.endsWith('@g.us')
const groupMetadata = m.isGroup ? await zyko.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = m.isGroup ? groupMetadata.subject : ""
const participants = m.isGroup ? await groupMetadata.participants : ""
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(x => x.id) : ""
const groupOwner = m.isGroup ? groupMetadata.owner : ""
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const sender = m.key.fromMe ? (zyko.user.id.split(":")[0] + "@s.whatsapp.net" || zyko.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
/*============== APA YA OTHER KALI ==============*/
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isContacts = contacts.includes(sender)
const isPremium = isOwner || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
function toRupiah(angka) {
var saldo = ""
var angkarev = angka.toString().split("").reverse().join("")
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + "."
return ("" + saldo.split("", saldo.length - 1).reverse().join(""))
}
/*============== TIME JAM YA ==============*/
const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(hours < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(hours < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(hours < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(hours < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(hours < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(hours < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(hours < "03:00:00"){
var waktuucapan = 'Selamat Tengah Malam 🌌'
}
/*============== AUTO BIO ==============*/
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await zyko.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime}| Mode : ${zyko.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length}`).catch(_ => _)
setting.status = new Date() * 1
}
}


const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }

const reply = (teks) => {
return zyko.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ${namabot}`,"body": `Selamat ${waktuucapan} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/de32928aa3fedbaeba067.jpg', "thumbnail": thumb,"sourceUrl": sgc }}}, { quoted:m})} 



// Anti Link 2 HAPUS
if (db.data.chats[m.chat].antilink2) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await zyko.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
}
}
// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await zyko.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti promosi HAPUS
if (db.data.chats[m.chat].antipromosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })

}
}
// Anti promosi
if (db.data.chats[m.chat].antipromosi) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//anti toxic
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri

if (db.data.chats[m.chat].antitoxic) {
if (budy.match(`${isToxic}`)) {
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
//zyko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
//Anti Link YouTube
if (db.data.chats[m.chat].antilinkyt) {
if (budy.match(`https://youtu.be`)) {
reply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
}
}
//Anti Link Tiktok
if (db.data.chats[m.chat].antilinktt) {
if (budy.match(`https://vt.tiktok.com`)) {
reply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
}
}
//AntiVirtex
if (db.data.chats[m.chat].antivirtex) {
if (budy.length > 3500) {
reply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
reply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
}
}
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isOwner) {
return
}
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

// Response Addlist
if (!isCmd && isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
zyko.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: m
})
} else {
zyko.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}




// Public & Self
if (!zyko.public) {
if (!m.key.fromMe && !isPremium && !isOwner) return
}
if (m.message) {
if (db.data.settings[botNumber].autoread) {
zyko.readMessages([m.key]);
}
}


        
        
if (m.message) {
let argsLog = budy.length > 100 ? `${q.substring(0, 100)}...` : budy;
let me = m.sender;
if (isCmd && !m.isGroup) {
//console.log(chalk.black(chalk.yellow(`[PRIVATE]: ${time} : ${date}`)), chalk.cyan("\n✉️ : "), color(argsLog, "turquoise"), chalk.magenta("\n👤 : "), chalk.green(pushname), chalk.red(`\n🪪 : ${me.split("@")[0]}@s.whatsapp.net\n`));
} else if (m.isGroup) {
//console.log(chalk.black(chalk.yellow(`[GROUP]: ${time} : ${date}`)), chalk.cyan("\n✉️ : "), color(argsLog, "turquoise"), chalk.red("\n👤 : "), chalk.yellow(pushname), chalk.green(`\n🪪 : ${me.split("@")[0]}@s.whatsapp.net`), chalk.blue("\n👥 : "), chalk.magenta(groupName + "\n"));
} else if (!m.isGroup && !isOwner && !m.key.fromMe) {
amore = `*── 「 NEW MESSAGE 」 ──*

*• Nama :* ${pushname}
*• Nomor :* ${me.split("@")[0]}
*• Pesan :* ${m.message.conversation}`;
zyko.sendMessage(develover, { text: amore });
}
}

if (db.data.settings[botNumber].antiviewonce) {
if (m.mtype == "viewOnceMessageV2") {
try {
let msg = m.message.viewOnceMessageV2.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video"
);
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
await zyko.sendMessage(
develover,
{ video: buffer, caption: msg[type].caption },
{ quoted: m }
);
} else if (/image/.test(type)) {
await zyko.sendMessage(
develover,
{ image: buffer, caption: msg[type].caption },
{ quoted: m }
);
}
} catch (e) {
console.log(e);
}
}
}
if (db.data.users[m.sender].autolevelup) {
let user = global.db.data.users[m.sender]
if (!user.autolevelup) return !0
let before = user.level * 1
while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (user.level <= 1) {
user.role = 'Petualangan Awal 🌄'
} else if (user.level <= 11) {
user.role = 'Pertarungan Melawan Kegelapan 🗡️'
} else if (user.level <= 21) {
user.role = 'Kemunculan Ancaman Baru ☠️'
} else if (user.level <= 31) {
user.role = 'Kehancuran Dunia yang Terancam 🌍'
} else if (user.level <= 41) {
user.role = 'Revolusi Pahlawan ⚔️'
} else if (user.level <= 51) {
user.role = 'Era Kedamaian yang Rapuh 🕊️'
} else if (user.level <= 61) {
user.role = 'Masa Depan yang Tidak Pasti 🌌'
} else if (user.level <= 71) {
user.role = 'Kembalinya Ancaman Kuno 🔮'
} else if (user.level <= 81) {
user.role = 'Misi Keselamatan Galaksi 🚀'
} else if (user.level <= 91) {
user.role = 'Perang Besar: Awal dari Semua 🌟'
} else if (user.level <= 100) {
user.role = 'Perang Besar: Akhir dari Semua 💥'
}
let role = user.role
if (before !== user.level) {
let chating = `**Selamat! Anda Naik Level!**

🌟 *${before} -> ${user.level}* 🌟

*Role/Pangkat Mu:*
${db.data.users[m.sender].role}


*Hadiah Level Up:*
+1 Pangkat Yang Terbuka`.trim()
try {
let image, data, pp
try {
pp = await zyko.profilePictureUrl(m.sender, "image")
} catch {
pp = "https://i.ibb.co/m53WF9N/avatar-contact.png"
}
image = await new can.Up().setAvatar(pp).toAttachment()
data = image.toBuffer()
await zyko.sendMessage(m.chat, { image: data, caption: chating }, { quoted: m })
} catch {
reply(chating)
}
}
}

/*============== SCRAPER ==============*/

async function Tiktokdl(url) {
//async function tiktokdl(url) {
try {
function API_URL(aweme) {
return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
};
async function getAwemeId(url) {
// any :/
let result;
const Konto1 = /video\/([\d|\+]+)?\/?/;
const valid = url.match(Konto1);
if (valid) {
return valid[1];
}
else {
try {
const data = await got
.get(url, {
headers: {
"Accept-Encoding": "deflate",
},
maxRedirects: 0,
})
.catch((e) => e.response.headers.location);
const _url = data;
const _valid = _url.match(Konto1);
if (_valid) {
result = _valid[1];
}
}
catch (error) {
// console.log(error)
result = false;
}
}
return result;
};
const valid = await getAwemeId(url);
//if (!valid) return false // result = false
const data = await got
.get(API_URL(valid), {
headers: {
"Accept-Encoding": "deflate",
"User-Agent": "okhttp/3.14.9",
},
})
.catch((e) => e.response);
//if (!data) return false // result = false
const body = JSON.parse(data.body);
const obj = body.aweme_list.find((o) => o.aweme_id === valid)
const results = {
aweme_id: obj.aweme_id,
region: obj.region,
desc: obj.desc,
create_time: obj.create_time,
author: {
uid: obj.author.uid,
unique_id: obj.author.unique_id,
nickname: obj.author.nickname,
birthday: obj.author.birthday,
},
duration: obj.music.duration,
download: {
nowm: obj.video.play_addr.url_list[0],
wm: obj.video.download_addr.url_list[0],
music: obj.music.play_url.url_list[0],
music_info: {
id: obj.music.id,
title: obj.music.title,
author: obj.music.author,
is_original: obj.music.is_original,
cover_hd: obj.music.cover_hd.url_list[0],
cover_large: obj.music.cover_large.url_list[0],
cover_medium: obj.music.cover_medium.url_list[0],
},
},
};
return {
status: true,
result: results//data.body //valid
}
} catch (e) {
return { status: false, result: e }
}
}
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await zyko.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await zyko.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function jadwalTV(name) {
let list = JSON.parse(fs.readFileSync('./src/jadwaltv.json', 'utf-8'))
let data = list.find((v) => (new RegExp(name, 'gi')).test(v.channel)), result = []
if (!data) return 'List Channel Yg Tersedia:\n\n' + list.map(v => v.channel).sort().join('\n')
let html = (await axios.get(`https://www.jadwaltv.net/${data.isPay ? 'jadwal-pay-tv/' : ''}${data.value}`)).data
let $ = cheerio.load(html)
$('div > table.table').find('tbody > tr').slice(1).each(function () {
let jam = $(this).find('td').eq(0).text()
let acara = $(this).find('td').eq(1).text()
if (!/Jadwal TV/gi.test(acara) && !/Acara/gi.test(acara)) result.push({ jam, acara })
})
return { channel: data.channel.toUpperCase(), result }
}


async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}

async function xhentai(page) {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/' + page)
.then((data) => {
const $ = cheerio.load(data.data);
const hasil = [];
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
});
});
resolve(hasil);
})
.catch(reject);
});
}
////
const saying = (text) => {
let teks = text
let gtts = require("./lib/scraper/gtts")(`id`, teks)
let ranm = getRandom(".mp3")
let rano = getRandom(".ogg")
gtts.save(ranm, teks, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
let buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
zyko.sendMessage(m.chat, { audio: buff, mimetype: "audio/mp4", ptt: true }, { quoted: m })
fs.unlinkSync(rano)
})
})
}

function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}

let member = JSON.parse(fs.readFileSync('./database/json/user.json'))
const cek = (satu, dua) => {
let zyko = false
Object.keys(member).forEach((i) => {
if (member[i].id == dua) {zyko = i}})
if (zyko !== false) {
if (satu == "id") { return member[zyko].id }
if (satu == "saldo") { return member[zyko].saldo }
if (satu == "transaksi") { return member[zyko].transaksi }
if (satu == "idproduk") { return member[zyko].idproduk }
if (satu == "idtujuan") { return member[zyko].idtujuan }
if (satu == "nama") { return member[zyko].nama }
if (satu == "harga") { return member[zyko].harga }
if (satu == "seri") { return member[zyko].seri }
}
if (zyko == false) { return null }
};


const reSize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
let jimp = require('jimp')
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}
const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "name"){ return user[x1].name }
if (satu == "umur"){ return user[x1].umur }
if (satu == "gender"){ return user[x1].gender }
if (satu == "resi"){ return user[x1].resi }
if (satu == "registerOn"){ return user[x1].registerOn }
}
if (x1 == false) { return null } 
}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 99999,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `SunShine`, orderTitle: 'SunShine', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `SunShine`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`SunShine`, "title": `${namabot}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `SunShine`, "description": `${namabot}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `SunShine`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`SunShine`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `SunShine`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `SunShine`, "caption": `SunShine`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`SunShine`, "h": `Hmm`,'seconds': '359996400', 'caption': `SunShine`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `SunShine`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `SunShine`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `SunShine`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6285175463174:6285175463174\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `SunShine`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

/*============== GAME INI  ==============*/
let benar = `*Benar 🥳*\n_Selamat ya!_`
let salah = `*Salah ❌*\n_Ayo coba lagi!_`

if (asahotak[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == asahotak[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
} else {
if (--asahotak[m.chat][2] == 0) {
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${asahotak[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${asahotak[m.chat][2]} kesempatan`)
}
}
}
if (caklontong[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}\n\nAlasannya adalah ${json.deskripsi}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else {
if (--caklontong[m.chat][2] == 0) {
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${caklontong[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${caklontong[m.chat][2]} kesempatan`)
}
}
}
if (kuismath[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == kuismath[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(kuismath[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(kuismath[m.chat][3])
delete kuismath[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text == json.jawaban) {
global.db.data.users[m.sender].exp += json.hadiah
global.db.data.users[m.sender].tiketcoin += 1
clearTimeout(kuismath[m.chat][3])
delete kuismath[m.chat]
reply(`*Jawaban Benar!*\n\n+${json.hadiah} Xp\n+1 Tiketcoin`)
} else {
if (--kuismath[m.chat][2] == 0) {
clearTimeout(kuismath[m.chat][3])
delete kuismath[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else reply(`*Jawaban Salah!*\n\nMasih ada ${kuismath[m.chat][2]} kesempatan`)
}
}
}
if (siapakahaku[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == siapakahaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapakahaku[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(siapakahaku[m.chat][3])
delete siapakahaku[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(siapakahaku[m.chat][3])
delete siapakahaku[m.chat]
} else {
if (--siapakahaku[m.chat][2] == 0) {
clearTimeout(siapakahaku[m.chat][3])
delete siapakahaku[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${siapakahaku[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${siapakahaku[m.chat][2]} kesempatan`)
}
}
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else {
if (--susunkata[m.chat][2] == 0) {
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${susunkata[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${susunkata[m.chat][2]} kesempatan`)
}
}
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += 1000
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+1000 Xp\n+1 Tiketcoin`)
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else {
if (--tebakkata[m.chat][2] == 0) {
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
reply(`*Kesempatan Habis!*\n\nJawabannya adalah ${json.jawaban}`)
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
reply(`*Jawabanmu sedikit lagi benar!*\n\nMasih ada ${tebakkata[m.chat][2]} kesempatan`)
else reply(`*Jawaban Salah!*\n\nMasih ada ${tebakkata[m.chat][2]} kesempatan`)
}
}
}
if (tebaklagu[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaklagu[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklagu[m.chat][1]))
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebaklagu[m.chat][3])
delete tebaklagu[m.chat]
return reply(`*Kamu Menyerah!*\n\nJawabannya adalah ${json.judul}`)
} else if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += tebaklagu[m.chat][2]
global.db.data.users[m.sender].tiketcoin += 1
reply(`*Jawaban Benar!*\n\n+${tebaklagu[m.chat][2]} Xp\n+1 Tiketcoin`)
clearTimeout(tebaklagu[m.chat][3])
delete tebaklagu[m.chat]
} else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}


if (tebaklirik[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}
if (tekateki[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tekateki[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
answer = json.jawaban.toLowerCase().trim()
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
return reply(`*Kamu menyerah!*\n\nJawabannya adalah ${answer}`)
} else if (m.text.toLowerCase() == answer) {
reply(benar)
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), answer) >= threshold)
reply(`*_Jawabanmu sedikit lagi benar!_*`)
else reply(salah)
}
}

/*============== LUPA INI APA RPG ATAU EXP ==============*/
const items = {
buy: {
limit: {
exp: 999
},
potion: {
money: 1250,
},
trash: {
money: 4,
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
	money: 3000
}
},
sell: {
potion: {
money: 125,
},
trash: {
money: 2
},
wood: {
money: 600
},
rock: {
money: 750
},
string: {
money: 300
},
iron: {
money: 2500
},
gold: {
money: 4700
},
diamond: {
money: 9000
},
emerald: {
money: 15000
}
}
}
//
const rewards = {
  exp: 15000,
  money: 35999,
  potion: 9,
}
const rewardss = {
exp: 50000,
money: 49999,
potion: 10,
mythic: 3,
legendary: 1
}
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const totalFitur = () =>{
var mytext = fs.readFileSync("./zyko.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
/*============== AFK INI  ==============*/
if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/json/afk.json', JSON.stringify(_afk))
zyko.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
}
}

//=================================================//
switch (command) {
case 'poll': {
	if(!text) return m.reply(`Contoh: ${prefix+command} Besok main gk?|Ayo aja|Ga ah malas`) 
let anu = text.split("|") 
let name = anu.slice(0, 1) 
let value = anu.slice(1) 
zyko.sendMessage(m.chat, { poll: { name: name, values: value, selectableCount: 1 }})
}
break
case "getsw": case "sw": {
            if (!store.messages["status@broadcast"].array.length === 0) throw "Gaada 1 status pun"
            let contacts = Object.values(store.contacts)
            let [who, value] = m.text.split(/[,|\-+&]/)
            value = value?.replace(/\D+/g, "")

            let sender
            if (m.mentions.length !== 0) sender = m.mentions[0]
            else if (m.text) sender = contacts.find(v => [v.name, v.verifiedName, v.notify].some(name => name && name.toLowerCase().includes(who.toLowerCase())))?.id

            let stories = store.messages["status@broadcast"].array
            let story = stories.filter(v => v.key && v.key.participant === sender || v.participant === sender).filter(v => v.message && v.message.protocolMessage?.type !== 0)
            if (story.length === 0) throw "Gaada sw nya"
            if (value) {
               if (story.length < value) throw "Jumlahnya ga sampe segitu"
               await m.reply({ forward: story[value - 1], force: true })
            } else {
               for (let msg of story) {
                  await delay(1500)
                  await m.reply({ forward: msg, force: true })
               }
            }
         }
            break
         case "listsw": {
            if (!store.messages["status@broadcast"].array.length === 0) throw "Gaada 1 status pun"
            let stories = store.messages["status@broadcast"].array
            let story = stories.filter(v => v.message && v.message.protocolMessage?.type !== 0)
            if (story.length === 0) throw "Status gaada"
            const result = {}
            story.forEach(obj => {
               let participant = obj.key.participant || obj.participant
               participant = jidNormalizedUser(participant === "status_me" ? hisoka.user.id : participant)
               if (!result[participant]) {
                  result[participant] = []
               }
               result[participant].push(obj)
            })
            let type = (mType) => getContentType(mType) === "extendedTextMessage" ? "text" : getContentType(mType).replace("Message", "")
            let text = ""
            for (let id of Object.keys(result)) {
               if (!id) return
               text += `*- ${await hisoka.getName(id)}*\n`
               text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`
            }
            await m.reply(text.trim(), { mentions: Object.keys(result) })
         }
            break
case "upsw":
            if (!m.isOwner) return
            let statusJidList = Object.values(store.contacts).filter(v => v.isContact).map(v => v.id)
            let colors = [0xff26c4dc, 0xff792138, 0xff8b6990, 0xfff0b330, 0xffae8774, 0xff5696ff, 0xffff7b6b, 0xff57c9ff, 0xff243640, 0xffb6b327, 0xffc69fcc, 0xff54c265, 0xff6e257e, 0xffc1a03f, 0xff90a841, 0xff7acba5, 0xff8294ca, 0xffa62c71, 0xffff8a8c, 0xff7e90a3, 0xff74676a]
            if (!quoted.isMedia) {
               let text = m.text || m.quoted?.body || ""
               if (!text) throw "Mana text?"
               await hisoka.sendMessage("status@broadcast", { text }, {
                  backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  textArgb: 0xffffffff,
                  font: Math.floor(Math.random() * 9),
                  statusJidList
               })
            } else if (/audio/.test(quoted.msg.mimetype)) {
               await hisoka.sendMessage("status@broadcast", {
                  audio: await downloadM(),
                  mimetype: 'audio/mp4',
                  ptt: true
               }, { backgroundColor: colors[Math.floor(Math.random() * colors.length)], statusJidList })
            } else {
               let type = /image/.test(quoted.msg.mimetype) ? "image" : /video/.test(quoted.msg.mimetype) ? "video" : false
               if (!type) throw "Type tidak didukung"
               await hisoka.sendMessage("status@broadcast", {
                  [`${type}`]: await downloadM(),
                  caption: m.text || m.quoted?.body || ""
               }, { statusJidList })
            }
            break
case 'remini': {
			if (!m.quoted) return m.reply(`Where is the picture?`)
			if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			zyko.sendMessage(m.chat, { image: proses, caption: `Nih kak~`}, { quoted: m})
			}
			break
case 'daftar':
case 'registrasi':
case 'register':
case 'registered':
case 'regis':{
let mm = args.join(' ')
let m1 = mm.split("|")[0];
let m2 = mm.split("|")[1];
let m3 = mm.split("|")[2];
if (m.isGroup) {
m.reply(`🇮🇩 _Bot telah mengirimkan pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot ${namabot}._`)
if (!m2) return zyko.sendMessage(sender, { text: `🇮🇩 _Hi @${sender.split('@')[0]} silahkan ketik umur mu .daftar nama|usia\n\ncontoh .daftar zyko|18`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
}
if (!m1) return m.reply(`Ex : ${prefix+command} Nama|umur`)
if (m1 && !m2 && !m3) {
user.push({id: sender, name: m1})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
}
if (m1 && m2 && !m3) {
user.push({id: sender, name: m1, umur: m2})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
}
if (!m3) return zyko.sendMessage(sender, { text: `🇮🇩 _Hi @${sender.split('@')[0]} silahkan pilih jenis kelamin kamu dengan cara ketik nama|usia|jeniskelamin\n\ncontoh .daftar zyko|18|pria`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })

if (m1 && m2 && m3) {
user.push({id: sender, name: m1, umur: m2, gender: m3})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
}
try {
ppuser = await zyko.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://tinyurl.com/yx93l6da'
}
const nomor_resi = require("crypto").randomBytes(5).toString("hex").toUpperCase()
let resiNya = `${nomor_resi}`
let registerOnNya = `${hariini}`
let teks_daftar =`*──────❲ VERIFIKASI SUKSES ❳──────*
*Nama :* ${m1}
*Umur :* ${m2} Tahun
*Gender :* ${m3}
*Resi :* ${resiNya}
*freecode :* A820bdoqP
*Register On :* ${registerOnNya}
*Nomor :* ${sender.split('@')[0]}
*Status :* ${isOwner? 'Owner':'User'} ${namabot}
*User Ke :* ${user.length}
*Hit Cmd :* 1

Silahkan ketik *#rules* sebelum memulai bot.`
if (m1 && m2 && m3) {
user.push({id: sender, name: m1, umur: m2, gender: m3, resi: resiNya, registerOn: registerOnNya})
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
zyko.sendMessage(sender, { text: `*Memuat Data* › @${sender.split('@')[0]}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
zyko.sendMessage(sender, { image: { url: ppuser }, caption: teks_daftar }, { quoted: m }) 
}
}
break
case "public": {
if (!isOwner) return reply(mess.owner)
zyko.public = true
reply(`*_Sukses Mode Public ✅_*`)
}
break
case "self": {
if (!isOwner) return reply(mess.owner)
zyko.public = false
reply(`*_Sukses Mode Self ✅_*`)
}
break
case 'delete': case 'del': {
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
zyko.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//menu
case 'menu': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let imgr = pickRandom(flaaa)
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!

╔═══《 MENU LIST 》════⊱ 
╠➤ : Menumain
╠➤ : Menuowner
╠➤ : menugroup
╠➤ : menugame   
╠➤ : menurpg
╠➤ : menuexp
╠➤ : menufun 
╠➤ : menuinternet 
╠➤ : menunsfw
╠➤ : menuinfo
╠➤ : menuimage 
╠➤ : menupphotooxy
╠➤ : menuquotes
╠➤ : menuislam
╠➤ : menudownload
╠➤ : menuaticker 
╠➤ : menuopenai
╠➤ : menuasupan
╠➤ : menunews
╠➤ : menuprimbon
╠➤ : menuanime
╠➤ : menustore
╠➤ : menureseler
╠➤ : menupanel
╠➤ : menumenfess
╠➤ : menuother
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
///menu menu menu
case 'Menumain': {
if (check("id", m.sender) == null) return reply(mess.notregister)
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MAIN 》════⊱
╠➤ : menuall
╠➤ : afk
╠➤ : daftarrpg
╠➤ : regrpg
╠➤ : intro
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'Menuowner': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU OWNER 》════⊱
╠➤ : Listusr
╠➤ : Listsrv
╠➤ : Addusr
╠➤ : Addsrv
╠➤ : Delusr
╠➤ : Delsrv
╠➤ : autoread
╠➤ : addseler
╠➤ : delseler
╠➤ : listseler
╠➤ : addprem
╠➤ : delprem
╠➤ : listprem
╠➤ : myip
╠➤ : block
╠➤ : unblock
╠➤ : listblock
╠➤ : autoread  
╠➤ : speedtest
╠➤ : speed
╠➤ : setppbot
╠➤ : leave
╠➤ : welcome 
╠➤ : restart 
╠➤ : getcase
╠➤ : ambilcase
╠➤ : setcmd
╠➤ : delcmd
╠➤ : listcmd 
╠➤ : addowner
╠➤ : delown
╠➤ : listown
╠➤ : >
╠➤ : =>
╠➤ : $
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menugroup': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU GROUP 》════⊱
╠➤ : link
╠➤ : kick
╠➤ : tagall
╠➤ : hidetag
╠➤ : group
╠➤ : revoke
╠➤ : antilink
╠➤ : antilink2
╠➤ : antipromosi
╠➤ : antipromosi2
╠➤ : antitoxic
╠➤ : antilinkyt
╠➤ : antilinktt
╠➤ : antivirtex
╠➤ : mutegc
╠➤ : bcgroup
╠➤ : broadcast
╠➤ : editinfo
╠➤ : setdesc
╠➤ : setname
╠➤ : totag
╠➤ : setppgc
╠➤ : carikawangc
╠➤ : closetime
╠➤ : opentime
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menugame': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU GAME 》════⊱
╠➤ : dadu
╠➤ : suit
╠➤ : asahotak
╠➤ : caklontong
╠➤ : kuismath
╠➤ : siapakahaku
╠➤ : susunkata
╠➤ : tebakgambar
╠➤ : tebakkata
╠➤ : tebaklagu
╠➤ : tebaklirik
╠➤ : tebaktebakan
╠➤ : tekateki
╠➤ : slot
╠➤ : tebakangka
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menurpg': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU RPG 》════⊱
╠➤ : inventori
╠➤ : berkebun
╠➤ : bonus
╠➤ : merampok
╠➤ : bank
╠➤ : nabung
╠➤ : daftarrpg
╠➤ : regrpg
╠➤ : tarik
╠➤ : tarikuang
╠➤ : work
╠➤ : petualang
╠➤ : buy
╠➤ : sell
╠➤ : weekly
╠➤ : premgift
╠➤ : monthly
╠➤ : nguli
╠➤ : mulung
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuexp': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU EXP 》════⊱
╠➤ : Ceklimit
╠➤ : afk 
╠➤ : daftar  
╠➤ : tomoney
╠➤ : pp
╠➤ : profile
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menufun': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU FUN 》════⊱
╠➤ : apakah
╠➤ : bisakah
╠➤ : bagaimanakah
╠➤ : rate
╠➤ : gantengcek
╠➤ : cekganteng
╠➤ : cantikcek
╠➤ : cekcantik
╠➤ : sangecek
╠➤ : ceksange
╠➤ : gaycek
╠➤ : cekgay
╠➤ : lesbicek
╠➤ : ceklesbi
╠➤ : kapankah
╠➤ : wangy
╠➤ : cekmati
╠➤ : halah
╠➤ : hilih
╠➤ : huluh
╠➤ : heleh
╠➤ : holoh
╠➤ : memek 
╠➤ : bego
╠➤ : goblok
╠➤ : janda
╠➤ : perawan
╠➤ : babi
╠➤ : tolol
╠➤ : pinter
╠➤ : pintar
╠➤ : asu
╠➤ : bodoh
╠➤ : gay
╠➤ : lesby
╠➤ : bajingan
╠➤ : jancok
╠➤ : anjing
╠➤ : ngentod
╠➤ : ngentot
╠➤ : monyet
╠➤ : mastah
╠➤ : newbie
╠➤ : bangsat
╠➤ : bangke
╠➤ : sange
╠➤ : sangean
╠➤ : dakjal
╠➤ : horny
╠➤ : wibu
╠➤ : puki
╠➤ : peak
╠➤ : pantex
╠➤ : pantek
╠➤ : setan
╠➤ : iblis
╠➤ : cacat
╠➤ : yatim
╠➤ : piatu 
╠➤ : gaycek
╠➤ : cantikcek
╠➤ : namaninja
╠➤ : cekmemek
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuinternet': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU INTERNET 》════⊱
╠➤ : blackpink
╠➤ : bts
╠➤ : cecanrandom
╠➤ : cecanukhty
╠➤ : weather
╠➤ : exo
╠➤ : githubsearch
╠➤ : katanime
╠➤ : kopi
╠➤ : coffee
╠➤ : meme
╠➤ : pinterest
╠➤ : google
╠➤ : gimage
╠➤ : translate
╠➤ : ppcouple
╠➤ : ppcp
╠➤ : lyrics
╠➤ : darkjoke
╠➤ : kali
╠➤ : kurang
╠➤ : tambah
╠➤ : kalkulator
╠➤ : jarak
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menunsfw': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU NSFW 》════⊱
╠➤ : ahegao
╠➤ : animeass
╠➤ : animebdsm
╠➤ : animeblowjob
╠➤ : 18csply
╠➤ : cuckold
╠➤ : animecum
╠➤ : ero
╠➤ : femdom
╠➤ : foot
╠➤ : gangbang
╠➤ : glasses
╠➤ : hentai
╠➤ : vidhentai
╠➤ : hinata
╠➤ : hnt_gifs
╠➤ : kodenuklir
╠➤ : konachan
╠➤ : manga
╠➤ : masturbation
╠➤ : nuklir
╠➤ : ometv
╠➤ : orgy
╠➤ : paptt
╠➤ : pussy
╠➤ : rule34
╠➤ : viral
╠➤ : yuri
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuinfo': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU INFO 》════⊱
╠➤ : runtime
╠➤ : speed 
╠➤ : ping
╠➤ : totalfitur 
╠➤ : boost
╠➤ : script
╠➤ : sc
╠➤ : toviewonce
╠➤ : donasi
╠➤ : reports 
╠➤ : Tqto
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuimage': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU IMAGE 》════⊱
╠➤ : gunung 
╠➤ : hacker
╠➤ : wptechnology
╠➤ : wallpaper
╠➤ : wpaesthetic
╠➤ : wpgame
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menupphotooxy': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU PHOTOOXY 》════⊱
╠➤ : shadow 
╠➤ : write 
╠➤ : romantic 
╠➤ : burnpaper
╠➤ : smoke 
╠➤ : narutobanner 
╠➤ : love 
╠➤ : undergrass
╠➤ : doublelove 
╠➤ : coffecup
╠➤ : underwaterocean
╠➤ : smokyneon
╠➤ : starstext
╠➤ : rainboweffect
╠➤ : balloontext
╠➤ : metalliceffect
╠➤ : embroiderytext
╠➤ : flamingtext
╠➤ : stonetext
╠➤ : writeart
╠➤ : summertext
╠➤ : wolfmetaltext
╠➤ : nature3dtext
╠➤ : rosestext
╠➤ : naturetypography
╠➤ : quotesunder
╠➤ : shinetext
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuquotes': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU QUOTES 》════⊱
╠➤ : dare
╠➤ : truth
╠➤ : motivasi
╠➤ : bacot
╠➤ : bucin
╠➤ : fakta
╠➤ : q-islam
╠➤ : pantun
╠➤ : vidiogalau
╠➤ : renungan
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'menuislam': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 ISLAM 》════⊱
╠➤ : jadwalsholat
╠➤ : niatsholat
╠➤ : alquran
╠➤ : asmaulhusna
╠➤ : sholawat
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'menudownload': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU DOWNLOAD 》════⊱
╠➤ : play
╠➤ : ytsearch
╠➤ : ytmp3
╠➤ : ytmp4
╠➤ : getmusic
╠➤ : tiktokmp3
╠➤ : Ssweb
╠➤ : Tiktok
╠➤ : ytreels
╠➤ : getvideo
╠➤ : facebook
╠➤ : apkdl
╠➤ : gitclone
╠➤ : instagram
╠➤ : mediafire
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'menuaticker': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU STICKER 》════⊱
╠➤ : sticker
╠➤ : swm
╠➤ : emojimix
╠➤ : emojimix2
╠➤ : tovideo
╠➤ : smeme
╠➤ : toimg
╠➤ : togif
╠➤ : setexif
╠➤ : toaudio
╠➤ : tomp3
╠➤ : tovn
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuopenai': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU OPENAI 》════⊱
╠➤ : 🗿
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuasupan': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU ASUPAN 》════⊱
╠➤ : asupan
╠➤ : filebokep
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menunews': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU NEWS 》════⊱
╠➤ : jalantikus-meme
╠➤ : merdeka-news
╠➤ : kontan-news
╠➤ : cnbc-news
╠➤ : tribun-news
╠➤ : indozone-news
╠➤ : detik-news
╠➤ : daily-news
╠➤ : inews-news
╠➤ : okezone-news
╠➤ : sindo-news
╠➤ : tempo-news
╠➤ : antara-news
╠➤ : cnn-news
╠➤ : fajar-news
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuprimbon': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU PRIMBON 》════⊱
╠➤ : nomorhoki
╠➤ : artimimpi
╠➤ : artinama
╠➤ : ramaljodoh
╠➤ : ramaljodohbali
╠➤ : suamiistri
╠➤ : ramalcinta
╠➤ : cocoknama
╠➤ : pasangan
╠➤ : jadiannikah
╠➤ : sifatusaha
╠➤ : rezeki
╠➤ : pekerjaan
╠➤ : nasib
╠➤ : penyakit
╠➤ : tarot
╠➤ : fengshui
╠➤ : haribaik
╠➤ : harisangar
╠➤ : harisial
╠➤ : nagahari
╠➤ : arahrezeki
╠➤ : peruntungan
╠➤ : weton
╠➤ : karakter
╠➤ : keberuntungan
╠➤ : memancing
╠➤ : masasubur
╠➤ : zodiak
╠➤ : shio
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuanime': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU ANIME 》════⊱
╠➤ : akira
╠➤ : akiyama 
╠➤ : anna 
╠➤ : asuna 
╠➤ : ayuzawa 
╠➤ : boruto 
╠➤ : chitanda 
╠➤ : chitoge 
╠➤ : deidara 
╠➤ : doraemon 
╠➤ : elaina 
╠➤ : emilia 
╠➤ : asuna 
╠➤ : erza 
╠➤ : gremory 
╠➤ : hestia 
╠➤ : hinata 
╠➤ : inori 
╠➤ : itachi 
╠➤ : isuzu 
╠➤ : itori 
╠➤ : kaga 
╠➤ : kagura 
╠➤ : kakasih 
╠➤ : kaori 
╠➤ : kaneki 
╠➤ : kosaki 
╠➤ : kotori 
╠➤ : kuriyama 
╠➤ : kuroha 
╠➤ : kurumi 
╠➤ : madara 
╠➤ : mikasa 
╠➤ : miku 
╠➤ : minato 
╠➤ : naruto 
╠➤ : natsukawa 
╠➤ : neko2 
╠➤ : nekohime 
╠➤ : nezuko 
╠➤ : nishimiya 
╠➤ : onepiece 
╠➤ : pokemon
╠➤ : rem 
╠➤ : rize
╠➤ : sagiri
╠➤ : sakura 
╠➤ : sasuke
╠➤ : shina
╠➤ : shinka
╠➤ : shizuka
╠➤ : shota
╠➤ : tomori
╠➤ : toukachan
╠➤ : tsunade
╠➤ : yatogami
╠➤ : yuki 
╠➤ : genshin
╠➤ : charagi
╠➤ : randomanime
╠➤ : otakudesu
╠➤ : simpown
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menustore': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU STORE 》════⊱
╠➤ : Bayar
╠➤ : Listpanel
╠➤ : vps
╠➤ : buatpanel
╠➤ : Jasarun
╠➤ : Promo
╠➤ : Owner
╠➤ : addlist
╠➤ : dellist
╠➤ : updatelist
╠➤ : list
╠➤ : proses
╠➤ : done
╠➤ : order
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menureseler': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU RESELLER 》════⊱
╠➤ : 1gb,username,628xxx
╠➤ : 2gb,username,628xxx
╠➤ : 3gb,username,628xxx
╠➤ : 4gb,username,628xxx
╠➤ : 5gb,username,628xxx 
╠➤ : 6gb,username,628xxx
╠➤ : unli Khusus Owner
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menupanel': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU PANNEL 》════⊱
╠➤ : sgc
╠➤ : createadmin
╠➤ : addusr 
╠➤ : delusr
╠➤ : listusr
╠➤ : listadmin
╠➤ : detusr
╠➤ : addsrv
╠➤ : delsrv
╠➤ : listsrv
╠➤ : detsrv
╠➤ : reinstall
╠➤ : updatesr
╠➤ : startsrv
╠➤ : stopsrv
╠➤ : restartsrv
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menuother': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU OTHER 》════⊱
╠➤ : fetch
╠➤ : get
╠➤ : getpp
╠➤ : createqr
╠➤ : detectqr
╠➤ : gtts
╠➤ : tts
╠➤ : tourl
╠➤ : spoiler
╠➤ : readmore
╠➤ : react
╠➤ : style
╠➤ : jadwaltv
╠➤ : npmsearch 
╠➤ : bass 
╠➤ : blown 
╠➤ : deep 
╠➤ : earrape 
╠➤ : fast 
╠➤ : fat 
╠➤ : nightcore 
╠➤ : reverse 
╠➤ : robot 
╠➤ : slow 
╠➤ : smooth 
╠➤ : tupai 
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
case 'menumenfess': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MENU MENFES 》════⊱
╠➤ : menfess
╠➤ : confess
╠➤ : menfess2
╠➤ : confess2
╚═════════════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
////MAIN ALL MENU 
case 'all': 
case 'allmenu': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let all = `
Hello ${pushname}, ${waktuucapan}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

 *Baileys:* Multi Device
 *Total User:* ${Object.keys(global.db.data.users).length}
 *Total Premium:* ${prem.length}
 *Total Fitur:* ${totalFitur()}
 
If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!
${readmore}
╔═══《 MAIN 》════⊱
╠➤ : menuall
╠➤ : afk
╠➤ : daftarrpg
╠➤ : regrpg
╠➤ : intro
╚═════════════⊱
╔═══《 OWNER 》════⊱
╠➤ : Listusr
╠➤ : Listsrv
╠➤ : Addusr
╠➤ : Addsrv
╠➤ : Delusr
╠➤ : Delsrv
╠➤ : autoread
╠➤ : addseler
╠➤ : delseler
╠➤ : listseler
╠➤ : addprem
╠➤ : delprem
╠➤ : listprem
╠➤ : myip
╠➤ : block
╠➤ : upsw
╠➤ : unblock
╠➤ : listblock
╠➤ : autoread  
╠➤ : speedtest
╠➤ : speed
╠➤ : setppbot
╠➤ : leave
╠➤ : listsw
╠➤ : welcome
╠➤ : restart 
╠➤ : getcase
╠➤ : getsw
╠➤ : sw
╠➤ : ambilcase
╠➤ : setcmd
╠➤ : delcmd
╠➤ : listcmd 
╠➤ : addowner
╠➤ : delown
╠➤ : listown
╠➤ : >
╠➤ : =>
╠➤ : $
╚═════════════⊱
╔═══《 GROUP 》════⊱
╠➤ : link
╠➤ : kick
╠➤ : tagall
╠➤ : hidetag
╠➤ : group
╠➤ : revoke
╠➤ : antilink
╠➤ : antilink2
╠➤ : antipromosi
╠➤ : antipromosi2
╠➤ : antitoxic
╠➤ : antilinkyt
╠➤ : antilinktt
╠➤ : antivirtex
╠➤ : mutegc
╠➤ : poll
╠➤ : bcgroup
╠➤ : broadcast
╠➤ : editinfo
╠➤ : setdesc
╠➤ : setname
╠➤ : totag
╠➤ : setppgc
╠➤ : carikawangc
╠➤ : closetime
╠➤ : opentime
╚═════════════⊱
╔═══《 GAME 》════⊱
╠➤ : dadu
╠➤ : suit
╠➤ : slot
╠➤ : asahotak
╠➤ : caklontong
╠➤ : kuismath
╠➤ : siapakahaku
╠➤ : susunkata
╠➤ : tebakgambar
╠➤ : tebakkata
╠➤ : tebaklagu
╠➤ : tebaklirik
╠➤ : tebaktebakan
╠➤ : tekateki
╠➤ : tebakangka
╚═════════════⊱
╔═══《 RPG 》════⊱
╠➤ : inventori
╠➤ : berkebun
╠➤ : bonus
╠➤ : merampok
╠➤ : bank
╠➤ : nabung
╠➤ : daftarrpg
╠➤ : regrpg
╠➤ : tarik
╠➤ : tarikuang
╠➤ : work
╠➤ : petualang
╠➤ : sell
╠➤ : buy
╠➤ : weekly
╠➤ : premgift
╠➤ : monthly
╠➤ : nguli
╠➤ : mulung
╚═════════════⊱
╔═══《 EXP 》════⊱
╠➤ : Ceklimit
╠➤ : afk 
╠➤ : daftar  
╠➤ : tomoney
╠➤ : pp
╠➤ : profile
╚═════════════⊱
╔═══《 FUN 》════⊱
╠➤ : apakah
╠➤ : bisakah
╠➤ : bagaimanakah
╠➤ : rate
╠➤ : gantengcek
╠➤ : cekganteng
╠➤ : cantikcek
╠➤ : cekcantik
╠➤ : sangecek
╠➤ : ceksange
╠➤ : gaycek
╠➤ : cekgay
╠➤ : lesbicek
╠➤ : ceklesbi
╠➤ : kapankah
╠➤ : wangy
╠➤ : cekmati
╠➤ : halah
╠➤ : hilih
╠➤ : huluh
╠➤ : heleh
╠➤ : holoh
╠➤ : memek 
╠➤ : bego
╠➤ : goblok
╠➤ : janda
╠➤ : perawan
╠➤ : babi
╠➤ : tolol
╠➤ : pinter
╠➤ : pintar
╠➤ : asu
╠➤ : bodoh
╠➤ : gay
╠➤ : lesby
╠➤ : bajingan
╠➤ : jancok
╠➤ : anjing
╠➤ : ngentod
╠➤ : ngentot
╠➤ : monyet
╠➤ : mastah
╠➤ : newbie
╠➤ : bangsat
╠➤ : bangke
╠➤ : sange
╠➤ : sangean
╠➤ : dakjal
╠➤ : horny
╠➤ : wibu
╠➤ : puki
╠➤ : peak
╠➤ : pantex
╠➤ : pantek
╠➤ : setan
╠➤ : iblis
╠➤ : cacat
╠➤ : yatim
╠➤ : piatu 
╠➤ : gaycek
╠➤ : cantikcek
╠➤ : namaninja
╠➤ : cekmemek
╚═════════════⊱
╔═══《 MENFES 》════⊱
╠➤ : menfess
╠➤ : confess
╠➤ : menfess2
╠➤ : confess2
╚═════════════⊱
╔═══《 INTERNET 》════⊱
╠➤ : blackpink
╠➤ : bts
╠➤ : cecanrandom
╠➤ : cecanukhty
╠➤ : weather
╠➤ : exo
╠➤ : githubsearch
╠➤ : katanime
╠➤ : kopi
╠➤ : coffee
╠➤ : meme
╠➤ : pinterest
╠➤ : google
╠➤ : gimage
╠➤ : translate
╠➤ : ppcouple
╠➤ : ppcp
╠➤ : lyrics
╠➤ : darkjoke
╠➤ : kali
╠➤ : kurang
╠➤ : tambah
╠➤ : kalkulator
╠➤ : jarak
╚═════════════⊱
╔═══《 INFO 》════⊱
╠➤ : runtime
╠➤ : speed 
╠➤ : ping
╠➤ : totalfitur 
╠➤ : boost
╠➤ : script
╠➤ : sc
╠➤ : toviewonce
╠➤ : donasi
╠➤ : reports 
╠➤ : Tqto
╚═════════════⊱
╔═══《 IMAGE 》════⊱
╠➤ : gunung 
╠➤ : hacker
╠➤ : wptechnology
╠➤ : wallpaper
╠➤ : wpaesthetic
╠➤ : wpgame
╚═════════════⊱
╔═══《 PHOTOOXY 》════⊱
╠➤ : shadow 
╠➤ : write 
╠➤ : romantic 
╠➤ : burnpaper
╠➤ : smoke 
╠➤ : narutobanner 
╠➤ : love 
╠➤ : undergrass
╠➤ : doublelove 
╠➤ : coffecup
╠➤ : underwaterocean
╠➤ : smokyneon
╠➤ : starstext
╠➤ : rainboweffect
╠➤ : balloontext
╠➤ : metalliceffect
╠➤ : embroiderytext
╠➤ : flamingtext
╠➤ : stonetext
╠➤ : writeart
╠➤ : summertext
╠➤ : wolfmetaltext
╠➤ : nature3dtext
╠➤ : rosestext
╠➤ : naturetypography
╠➤ : quotesunder
╠➤ : shinetext
╚═════════════⊱
╔═══《 QUOTES 》════⊱
╠➤ : dare
╠➤ : truth
╠➤ : motivasi
╠➤ : bacot
╠➤ : bucin
╠➤ : fakta
╠➤ : q-islam
╠➤ : pantun
╠➤ : vidiogalau
╠➤ : renungan
╚═════════════⊱
╔═══《 ISLAM 》════⊱
╠➤ : jadwalsholat
╠➤ : niatsholat
╠➤ : alquran
╠➤ : asmaulhusna
╠➤ : sholawat
╚═════════════⊱
╔═══《 DOWNLOAD》════⊱
╠➤ : play
╠➤ : ytsearch
╠➤ : ytmp3
╠➤ : ytmp4
╠➤ : getmusic
╠➤ : tiktokmp3
╠➤ : Ssweb
╠➤ : Tiktok
╠➤ : ytreels
╠➤ : getvideo
╠➤ : facebook
╠➤ : apkdl
╠➤ : gitclone
╠➤ : instagram
╠➤ : mediafire 
╚═════════════⊱
╔═══《 STICKER 》════⊱
╠➤ : sticker
╠➤ : swm
╠➤ : emojimix
╠➤ : emojimix2
╠➤ : tovideo
╠➤ : smeme
╠➤ : toimg
╠➤ : togif
╠➤ : setexif
╠➤ : toaudio
╠➤ : tomp3
╠➤ : tovn 
╚═════════════⊱
╔═══《 OPENAI 》════⊱
╠➤ : 🗿
╚═════════════⊱
╔═══《 ASUPAN 》════⊱
╠➤ : asupan
╠➤ : filebokep
╚═════════════⊱
╔═══《 NSFW 》════⊱
╠➤ : ahegao
╠➤ : animeass
╠➤ : animebdsm
╠➤ : animeblowjob
╠➤ : 18csply
╠➤ : cuckold
╠➤ : animecum
╠➤ : ero
╠➤ : femdom
╠➤ : foot
╠➤ : gangbang
╠➤ : glasses
╠➤ : hentai
╠➤ : vidhentai
╠➤ : hinata
╠➤ : hnt_gifs
╠➤ : kodenuklir
╠➤ : konachan
╠➤ : manga
╠➤ : masturbation
╠➤ : nuklir
╠➤ : ometv
╠➤ : orgy
╠➤ : paptt
╠➤ : pussy
╠➤ : rule34
╠➤ : viral
╠➤ : yuri
╚═════════════⊱
╔═══《 NEWS 》════⊱
╠➤ : jalantikus-meme
╠➤ : merdeka-news
╠➤ : kontan-news
╠➤ : cnbc-news
╠➤ : tribun-news
╠➤ : indozone-news
╠➤ : detik-news
╠➤ : daily-news
╠➤ : inews-news
╠➤ : okezone-news
╠➤ : sindo-news
╠➤ : tempo-news
╠➤ : antara-news
╠➤ : cnn-news
╠➤ : fajar-news
╚═════════════⊱
╔═══《 PRIMBON 》════⊱
╠➤ : nomorhoki
╠➤ : artimimpi
╠➤ : artinama
╠➤ : ramaljodoh
╠➤ : ramaljodohbali
╠➤ : suamiistri
╠➤ : ramalcinta
╠➤ : cocoknama
╠➤ : pasangan
╠➤ : jadiannikah
╠➤ : sifatusaha
╠➤ : rezeki
╠➤ : pekerjaan
╠➤ : nasib
╠➤ : penyakit
╠➤ : tarot
╠➤ : fengshui
╠➤ : haribaik
╠➤ : harisangar
╠➤ : harisial
╠➤ : nagahari
╠➤ : arahrezeki
╠➤ : peruntungan
╠➤ : weton
╠➤ : karakter
╠➤ : keberuntungan
╠➤ : memancing
╠➤ : masasubur
╠➤ : zodiak
╠➤ : shio
╚═════════════⊱
╔═══《 ANIME 》════⊱
╠➤ : akira
╠➤ : akiyama 
╠➤ : anna 
╠➤ : asuna 
╠➤ : ayuzawa 
╠➤ : boruto 
╠➤ : chitanda 
╠➤ : chitoge 
╠➤ : deidara 
╠➤ : doraemon 
╠➤ : elaina 
╠➤ : emilia 
╠➤ : asuna 
╠➤ : erza 
╠➤ : gremory 
╠➤ : hestia 
╠➤ : hinata 
╠➤ : inori 
╠➤ : itachi 
╠➤ : isuzu 
╠➤ : itori 
╠➤ : kaga 
╠➤ : kagura 
╠➤ : kakasih 
╠➤ : kaori 
╠➤ : kaneki 
╠➤ : kosaki 
╠➤ : kotori 
╠➤ : kuriyama 
╠➤ : kuroha 
╠➤ : kurumi 
╠➤ : madara 
╠➤ : mikasa 
╠➤ : miku 
╠➤ : minato 
╠➤ : naruto 
╠➤ : natsukawa 
╠➤ : neko2 
╠➤ : nekohime 
╠➤ : nezuko 
╠➤ : nishimiya 
╠➤ : onepiece 
╠➤ : pokemon
╠➤ : rem 
╠➤ : rize
╠➤ : sagiri
╠➤ : sakura 
╠➤ : sasuke
╠➤ : shina
╠➤ : shinka
╠➤ : shizuka
╠➤ : shota
╠➤ : tomori
╠➤ : toukachan
╠➤ : tsunade
╠➤ : yatogami
╠➤ : yuki 
╠➤ : genshin
╠➤ : charagi
╠➤ : randomanime
╠➤ : otakudesu
╠➤ : simpown
╚═════════════⊱
╔═══《 STORE 》════⊱
╠➤ : Bayar
╠➤ : Listpanel
╠➤ : vps
╠➤ : buatpanel
╠➤ : Jasarun
╠➤ : Promo
╠➤ : Owner
╠➤ : addlist
╠➤ : dellist
╠➤ : updatelist
╠➤ : list
╠➤ : proses
╠➤ : done
╠➤ : order
╚═════════════⊱
╔═══《 RESELLER 》════⊱
╠➤ : 1gb,username,628xxx
╠➤ : 2gb,username,628xxx
╠➤ : 3gb,username,628xxx
╠➤ : 4gb,username,628xxx
╠➤ : 5gb,username,628xxx 
╠➤ : 6gb,username,628xxx
╠➤ : unli Khusus Owner
╚═════════════⊱
╔═══《 PANNEL 》════⊱
╠➤ : sgc
╠➤ : createadmin
╠➤ : addusr 
╠➤ : delusr
╠➤ : listusr
╠➤ : listadmin
╠➤ : detusr
╠➤ : addsrv
╠➤ : delsrv
╠➤ : listsrv
╠➤ : detsrv
╠➤ : reinstall
╠➤ : updatesr
╠➤ : startsrv
╠➤ : stopsrv
╠➤ : restartsrv
╚═════════════⊱
╔═══《 OTHER 》════⊱
╠➤ : fetch
╠➤ : get
╠➤ : getpp
╠➤ : createqr
╠➤ : detectqr
╠➤ : gtts
╠➤ : tts
╠➤ : tourl
╠➤ : spoiler
╠➤ : readmore
╠➤ : react
╠➤ : style
╠➤ : jadwaltv
╠➤ : npmsearch
╠➤ : bass 
╠➤ : blown 
╠➤ : deep 
╠➤ : earrape 
╠➤ : fast 
╠➤ : fat 
╠➤ : nightcore 
╠➤ : reverse 
╠➤ : robot 
╠➤ : slow 
╠➤ : smooth 
╠➤ : tupai 
╚═════════════⊱
╔═══《 𝑹𝑼𝑵𝑻𝑰𝑴𝑬 》═══⊱
╠❏ *${runtime(process.uptime())}*
╚════[ 𝙎𝙪𝙣𝙎𝙝𝙞𝙣𝙚 ]══════⊱`
zyko.sendMessage(m.chat, {
text: all + '\n\n' + footer,
contextInfo: {
//mentions: [m.sender]
externalAdReply: {
title: v,
thumbnailUrl: menu,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break 
//menu Alquran
case 'sholawat': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
rvn = fs.readFileSync(`./media/audio/sholawat.mp3`)
zyko.sendMessage(m.chat, { audio: rvn, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break
case 'salat':
case 'jadwalsholat': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!text) return reply(`Use example ${prefix}${command} semarang`)
const res = await jadwalsholat(text)
m.reply(`
Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
break
case 'niatsholat': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let niatsolat = JSON.stringify(global.niatsolat)
let json = JSON.parse(niatsolat)
let data = json.result.data.map((v, i) => `${i + 1}. ${v.niat}\n${v.arabic}\n${v.latin}\n${v.translation_id}`).join('\n\n')
   const contoh = `*Niat Sholat*\n\n`
   const anjuran = `\n\nSuatu ibadah akan diterima bila memenuhi dua hal, yaitu niat dan contoh dari rasulullah saw: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ...[رواه البخاري ومسلم]رَ"
Artinya: "Sesungguhnya (sahnya) amal itu tergantung kepada niat ... [Hadits Riwayat al-Bukhari dan Muslim]".`
m.reply(contoh + data + anjuran)
}
break
case 'alquran': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

if (!text) return reply(`Contoh:\n${prefix + command} 1\n\nMaka hasilnya adalah surah Al-Fatihah ayat beserta audionya, dan ayatnya 1 aja`)

try {
let f = await fetch(`https://api.alquran.cloud/v1/surah/${text}/ar.alafasy`)
let xx = await f.json()
let str = xx.data.ayahs.map((v, index) => {
return `${1 + index}. *${v.text}*
*audio:* ${v.audio}
*number:* ${v.number}
*numberInSurah:* ${v.numberInSurah}
*juz:* ${v.juz}
*manzil:* ${v.manzil}
*page:* ${v.page}
*ruku:* ${v.ruku}
*hizbQuarter:* ${v.hizbQuarter}
`.trim()
    }).join('\n\n')
m.reply(str, {
contextInfo: {
externalAdReply: {
mediaUrl: sig,
mediaType: 2,
description: wm,
title: '👋 Hai, ' + pushname + ' ' + waktuucapan,
body: '',
thumbnail: ppuser,
sourceUrl: sgc
}
}
})
} catch (error) {
console.error(error)
reply('Terjadi kesalahan saat mengambil data Al-Quran.')
}
}
break;
case 'asmaulhusna': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
const anjuran = `

Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
let json = JSON.parse(JSON.stringify(global.asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply(`contoh:\n${prefix + command} 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) return reply(`minimal 1 & maksimal 99!`)
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(contoh + data + anjuran)
}
break
// Menu nsfw
case 'ahegao': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)
reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(ahegao), null, `Nih *${pushname}*`, m)
}
break
case 'animeass': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)
reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(animeass), null, `Nih *${pushname}*`, m)
}
break
case 'animebdsm': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(animebdsm), null, `Nih *${pushname}*`, m)
}
break
case 'animeblowjob': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(animeblowjob), null, `Nih *${pushname}*`, m)
}
break
case '18csply': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
let url = cosplay[Math.floor(Math.random() * cosplay.length)]
let tekk = `\`\`\`➩ Nih mek! \`\`\` `
zyko.sendFile(sender, url, null, tekk.trim(), m)
}
break
case 'cuckold': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
 zyko.sendFile(sender, pickRandom(cuckold), null, `Nih *${pushname}*`, m)
}
break
case 'animecum': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
  zyko.sendFile(sender, pickRandom(animecum), null, `Nih *${pushname}*`, m)
}
break
case 'ero': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
  zyko.sendFile(sender, pickRandom(ero), null, `Nih *${pushname}*`, m)
}
break
case 'femdom': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(femdom), null, `Nih *${pushname}*`, m)
}
break
case 'foot': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(foot), null, `Nih *${pushname}*`, m)
}
break
case 'gangbang': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(gangbang), null, `Nih *${pushname}*`, m)
}
break
case 'glasses': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(glasses), null, `Nih *${pushname}*`, m)
}
break
case 'hentai': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(m.sender, pickRandom(hentai), null, `Nih *${pushname}*`, m)
}
break
case 'vidhentai': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
let cr = await xhentai(text);
let tan = cr[Math.floor(Math.random(), cr.length)]
let vap = `
⭔ Title : ${tan.title}
⭔ Category : ${tan.category}
⭔ Mimetype : ${tan.type}
⭔ Views : ${tan.views_count}
⭔ Shares : ${tan.share_count}
⭔ Source : ${tan.link}
⭔ Media Url : ${tan.video_1}
`
zyko.sendMessage(m.sender, { video: { url: tan.video_1 }, caption: vap }, { quoted: m})
};
break
case 'hinata': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
 zyko.sendFile(sender, pickRandom(hinata), null, `Nih *${pushname}*`, m)
}
break
case 'hnt_gifs': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(hnt_gifs), null, `Nih *${pushname}*`, m)
//  zyko.sendButton(sender, `Nih *${pushname}*`, botdate, pickRandom(hnt_gifs), [['Next', `/hnt_gifs`]],m)
}
break
case 'kodenuklir': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
  reply(`
	「 KODE NUKLIR 」

Code Nuklear [Doujin Hentai Genre NTR] (Netorare)

Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/

Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/

Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

Kodeu nuklir ti MILF Oneesan dugi ka bro ***** loli

https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
ht
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/

-

https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/

-

https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/

-

https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554

 https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4
 
 ● CODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942

/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba 
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ -  Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/  - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ -  Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
 /g/114053/ - Unknown Title 
 /g/78818/ - Furofuro!
 /g/15055/ - Demodori Mama
 /g/39876/ - Cherry Break
 /g/191427/ - Doutei Danshi Kousei Iinkai
 /g/192695/ - Costte Asobo.
 /g/192330/ - Level 1
 /g/191320/ - Kimi Ni Nara Dekiru
 /g/164434/ - MIDNIGHT PRINCESS
 /g/76813/ - Superior Cake
 /g/148669/ - Ohime-sama Gokko
 /g/144806/ - Youkai Watching
 /g/163698/ - Escalation
 /g/158559/ - Jiyuu de Kimama na Ore no Imouto
 /g/182210/ - Hatsujou Days
 /g/131428/ - Having Fun With The One That I Love
 /g/112853/ - Boku to Oneesan no Naisho
 /g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
 /g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
 /g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
 /g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4
 
 229144 253687 238577 236509
 ‌227675 229085 233245 266177
 254351 265855 239842 219847
 239749 230566 253104 230185
 251974 253091 251489 238030
 260614 245023 232887 233547
 262158 262870 239312 255129
 244530 246963 256050 215459
 243725 233770 250704 261819
 261830 215658 256404 260028
 261789 241254 268580 262407
 262252 201814 250193 236036
 262889 243933 245697 239750
 128983 95364 223815 225080
 110332 225767 97247 231139
 266116 217037 160657 182439
 205089 176495 199121 199425
 184068 186615 224644 129479
 251524 153374 146499 258212
 163532 255244 269825 235914
 247103 138365 124624 219718
 168941 265918 205995 191390
 ‌225496 259137 231681 161688
 ‌199613 259260 260433 235532
 ‌88323 272117 170213 256613
 ‌258382 224942 281261

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ● Milf ●
165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ - Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/ - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ - Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
/g/114053/ - Unknown Title 
/g/78818/ - Furofuro!
/g/15055/ - Demodori Mama
/g/39876/ - Cherry Break
/g/191427/ - Doutei Danshi Kousei Iinkai
/g/192695/ - Costte Asobo.
/g/192330/ - Level 1
/g/191320/ - Kimi Ni Nara Dekiru
/g/164434/ - MIDNIGHT PRINCESS
/g/76813/ - Superior Cake
/g/148669/ - Ohime-sama Gokko
/g/144806/ - Youkai Watching
/g/163698/ - Escalation
/g/158559/ - Jiyuu de Kimama na Ore no Imouto
/g/182210/ - Hatsujou Days
/g/131428/ - Having Fun With The One That I Love
/g/112853/ - Boku to Oneesan no Naisho
/g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
/g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
/g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
/g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4
/g/183714/ - Mating With Oni 1
/g/181008/ - Mating With Oni 2
/g/176948/ - Gal Shota Cinderella 1
/g/178511/ - Gal Shota Cinderella 2
/g/185653/ - Gal Shota Cinderella 3
/g/137236/ - Mika-ppoi no! 1
/g/144128/ - Mika-ppoi no! 2
/g/3508/ - Shounen Teikoku 1
/g/3509/ -Shounen Teikoku 2
/g/3510/ - Shounen Teikoku 3
/g/3511/ - Shounen Teikoku 5''
/g/3512/ -Shounen Teikoku 5
/g/3262/ Shounen Teikoku 6
/g/3466/ - Shounen Teikoku 7
/g/2598/ - Shounen Teikoku 8
/g/8196/ - Shounen Teikoku 9
/g/185406/ - Ane Zukushi 1-11
/g/188848/ - Perfect Half (long)
[13/8 17.26] Ordinary Guy: 198964 Countryside 
104436 Mismatched Thoughts
213681 Cultivating Bigger Pleasure
242460 Bokujou: Happy End
255869 Today, Surely
116018 Kahanshin No Otsukiai
165310 Suki Suki! Okaa-san
187047 Shirasaka Koume To No Kankei
116272 Akiko-san To Issho
274000 Hame Kama
93335 Henkano 
165961 Love-Ridden 
250500 Koishi-chan No Bitch Na Hon
264061 Idol Refle Sex
110896 Uchi No Imouto Ga Sukoshi Kawaii
187095 Nuki & Koki
32591 Kosu Tora
151436 FuckBuddy Collection
231188 Minatsu's Fault
275485 Nurunuru Deriheru
275306 Sweet Whispers
205199 Most Distant Neighbor
274796 The Drunk Mouth Of My Neighbor
274412 Kyousei Zecchou Batsu Game
71646 Otonashi Kotorisan
273719 Oshiri Ai
273849 Strength and III
120744 PuniKano
172759 Dogful Days
273337 I Will Serve You Tonight
273132 Watanabe's Day Off
273222 Koukando Analyze!
272129 Dog & Cat Roleplay
271958 Enemy Girl
271892 Poolside Reward
217727 Uruka-chan To Ichaicha Shitai!
271431 Toshoshitsu O Shimete Kara
271282 Hidden Quest
270752 Natsu Ni   Ecc

  ● Random ●
257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ● yg suka onee san ●
189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585 198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━281917
KUMPULAN KODE NUKLIR
270576
213340
237210/3
184644/
184212/
237987/
238657/
183994/5/
Nhentai.net/g/244044/5/
Nhentai.net/g/183603/
nhentai.net/g/189103/
Nhentai.net/g/183773/8/
Nhentai.net/g/271709/
Nhentai.net/g/271074 Kemonomimi Milf
Nhentai.net/g/270424 Atago Azurlane
Nhentai.net/g/236554 Kemonomimi Half Horse
Nhentai.net/g/238151 kemonomimi final fantasy
Nhentai.net/g/269354 kemono friends
Nhentai.net/g/239567 Cowgirl 
Nhentai.net/g/227556 Bird Girl
Nhentai.net/g/226184 Neko
Nhentai.net/g/225422 Racoon
Nhentai.net/g/268918 Lolikitsune
Nhentai.net/g/235660 Fox
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613
‌258382 224942
https://nhentai.net/g/192237/ Watashi to
https://nhentai.net/g/134318/ Watashi no Onii-chan 1
https://nhentai.net/g/165279/ Watashi no Onii-chan 2
https://nhentai.net/g/164114/ Watashi no Onii-chan 3
https://nhentai.net/g/192347/ Watashi no Onii-chan 4
https://nhentai.net/g/209026/ Cocologic
https://nhentai.net/g/207432/ Watashi no Onii-chan 4,5
https://nhentai.net/g/247574/ Watashi no Onii-chan Extra

「 TOBAT WOE 」
`)
}
break
case 'konachan': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(konachan), null, `Nih *${pushname}*`, m)
}
break
case 'manga': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(manga), null, `Nih *${pushname}*`, m)
}
break
case 'masturbation': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(masturbation), null, `Nih *${pushname}*`, m)
 // zyko.sendButton(sender, `Nih *${pushname}*`, botdate, pickRandom(masturbation), [['Next', `/masturbation`]],m)
}
break
case 'nuklir': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let konuk = `
	「 KODE NUKLIR 」

Code Nuklear [Doujin Hentai Genre NTR] (Netorare)

Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/

Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/

Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

Kodeu nuklir ti MILF Oneesan dugi ka bro ***** loli

https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
ht
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/

-

https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/

-

https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/

-

https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
`
reply(konuk)
}
break
case 'ometv': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
  zyko.sendFile(sender, pickRandom(ometv), null, `Nih *${pushname}*`, m)
}
break
case 'orgy': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(orgy), null, `Nih *${pushname}*`, m)
}
break
case 'paptt': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
let url = paptt[Math.floor(Math.random() * paptt.length)]
zyko.sendFile(sender, url, null, 'Tch, dasar sangean', m)
}
break
case 'pussy': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
zyko.sendFile(sender, pickRandom(pussy), null, `Nih *${pushname}*`, m)
}
break
case 'rule34': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)	
if (!text) return reply(`Use example ${prefix}${command} Sagiri`)
const res = await (await googleImage('rule34 ' + text)).getRandom()
zyko.sendFile(sender, res, null, ` \`\`\`➩ Random Nsfw Rule34`, m)
}
break
case 'viral': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
  zyko.sendFile(m.sender, pickRandom(viral), 'mp4', `Nih *${pushname}*`, m)
await sleep(4000);   
m.reply('🚩 successfully sent to private chat, please check the botz message')
}
break
case 'yuri': {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)
reply(`_Botz Telah Mengirimkan ${command} ke private chat_`)
 zyko.sendFile(sender, pickRandom(yuri), 'image.jpg', `Nih *${pushname}*`, m)
}
break
//menu maker
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
//if (!isPrem) return replyprem(mess.premium)
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!text) return m.reply(`Example : ${prefix + command} zyko`) 
m.reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photoOxy(link, text)
zyko.sendMessage(m.chat, { image: { url: dehe }, caption: `Done` }, { quoted: m })
}
break;
///menu image
case 'gunung': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Mountain.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
zyko.sendFile(m.chat, a, 'hengkel.jpg', 'Gunung', m)
}
break
case 'hacker': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
zyko.sendFile(m.chat, a, 'hengkel.jpg', 'hacker', m)
}
break
case 'wptechnology': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Technology.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
zyko.sendFile(m.chat, a, 'wpgame.jpg', 'Wallpaper technology', m)
}
break
case 'wallpaper2':
case 'wallpaper': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

if (!text) return reply(`Use example ${prefix}${command} Minecraft`)
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
zyko.sendFile(m.chat, img, 'wallpaper.jpg', `Result from *${text}*`, m)
}
break
case 'wpaesthetic': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/aesthetic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
zyko.sendFile(m.chat, a, 'wpaesthetic.jpg', 'Wallpaper Aesthetic', m)
}
break
case 'wpgame': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/GameWallp.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
zyko.sendFile(m.chat, a, 'wpgame.jpg', 'Wallpaper Game', m)
}
break
/// menu menfes
case 'confess2':
case 'menfess2': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let [number, pesan] = text.split `|`
if (!number) return reply('Maaf Format Anda Salah\n\nContoh:\n.menfess 62××××|hallo sayang', m)
if (!pesan) return reply('Maaf Format Anda Salah\n\nContoh:\n.menfess 62××××|hallo sayang', m)
if (text > 500) return reply('Teks Kepanjangan!', m)
let user = global.db.data.users[m.sender]
let korban = `${number}`
var nomor = m.sender
let spam1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)
⬡──⬡─────────⬡──⬡
📫Pengirim : Someone

💌 Pesan : ${pesan}
⬡──⬡─────────⬡──⬡
Maaf Anda Belum Bisa Membalas ke Pengirim

------------------------------------------

▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .menfess nomor|pesan untuknya
Contoh: .menfess 628xxxxxxxxxx|hai owner`
zyko.sendText(korban + '@s.whatsapp.net', spam1)
let logs = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
⬡──⬡─────────⬡──⬡
💌 Isi Pesan : ${pesan}
⬡──⬡─────────⬡──⬡`
reply(logs)
}
break
case 'confess':
case 'menfess': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!args || !args[0]) return reply(`Silahkan masukan pesannya\nContoh Penggunaan: ${prefix + command} ${global.nomerown} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Ganti Simbol | Jadi spasi')
if (args[0].length > 14) return reply('Nomor Kepanjangan')
if (args[0].length < 7) return reply('Nomor Kependekan')
if (args[0].startsWith('0')) return reply('Gunakan format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `👋 Saya *${zyko.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*
${htki} 💌 Pesan ${htka}
${htjava} ${txt}


${htki} PESAN RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${prefix + command} ${global.nomerown} pesan untuknya
Contoh: ${prefix + command} ${global.nomerown} hai`
if (!m.quoted) {
await zyko.sendText(mention, tujuan)
} else {
await reply(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await zyko.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}
${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
await reply(suks)
}
break
//Menu quotes
case 'bacot': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let randomBacot = bacot[Math.floor(Math.random() * bacot.length)]
let caption = `Quotes bacot:\n${randomBacot}` 
m.reply(caption)
}
break
case 'bucin': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let cin = await bucin()
//let nth = '❲ *Bᴜᴄɪɴ* ❳'
m.reply(`*_QUOTES_*\n❲ *Bᴜᴄɪɴ* ❳\n❏ ${cin}`)
}
break
case 'fakta': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let fakta = pickRandom(faktaa)
reply(fakta)
}
break
case 'q-islam': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
let caption = `Quotes Islam:\n${randomQuote}` 
m.reply(caption)
}
break
case 'pantun': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let cin = `${pickRandom(global.pantun)}`
let nth = '❲ *Pᴀɴᴛᴜɴ* ❳'
m.reply(cin)
}
break
case 'vidiogalau': 
case 'vgalau': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

zyko.sendFile(m.chat, pickRandom(galau), null, `Nih *${pushname}* Video Galaunya..`, m)
}
break
case 'renungan': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

await zyko.sendFile(m.chat, pickRandom(global.renungan), 'renungan.jpeg', 'Nih renunganmu, jangan lupa dijadikan pelajaran yah buat masa depan nanti...', m)
}
break
case 'motivasi': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let motivasii = pickRandom(global.motivasi)
await reply(motivasii, 0, {
contextInfo: { mentionedJid: [m.sender],
externalAdReply :{
mediaUrl: '',
mediaType: 2,
title: 'Ｍｏｔｉｖａｓｉ', 
body: 'Dibaca Ya Kak😉',  
sourceUrl: sgc, 
thumbnail: thumb
  }}
 })
}
break
case 'dare': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let img = "https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg"
const { dare } = require('@bochilteam/scraper')
let der = await dare()
zyko.sendFile(m.chat, img, "dare.png", `*── 「 DARE 」 ──*\n\n${der}`, m)
}
break
case 'truth': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let img = "https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg"
const { truth } = require('@bochilteam/scraper')
let tru = await truth()
zyko.sendFile(m.chat, img, "trut.png", `*── 「 TRUTH 」 ──*\n\n${tru}`, m)
}
break 
//menu openai 

//menu rpg
case 'nguli': {
if (!m.isGroup) return reply(mess.group)
if (cek("id", m.sender) == null) return reply(mess.notregist)

if (new Date - global.db.data.users[m.sender].lastnguli > 86400000) {
global.db.data.users[m.sender].limit += 10
m.reply('_Selamat kamu mendapatkan +10 limit_')
global.db.data.users[m.sender].lastnguli = new Date * 1
} else m.reply('Anda sudah mengklaim upah nguli hari ini')
}
break
case 'mulung': {
if (!m.isGroup) return reply(mess.group)
if (cek("id", m.sender) == null) return reply(mess.notregist)

let time = global.db.data.users[m.sender].lastmulung + 1800000
if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`
let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
let kalengnye = `${Math.floor(Math.random() * 1000)}`.trim()
let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
global.db.data.users[m.sender].botol += botolnye * 1
global.db.data.users[m.sender].kaleng += kalengnye * 1
global.db.data.users[m.sender].kardus += kardusnye * 1
global.db.data.users[m.sender].lastmulung = new Date * 1
m.reply(`Selamat kamu mendapatkan : \n+${botolnye} Botol\n+${kardusnye} Kardus\n+${kalengnye} Kaleng`)
setTimeout(() => {
zyko.sendText(m.chat, `Yuk waktunya mulung lagi 😅`, m)
}, timeout)
}
break
case 'monthly': {
let user = global.db.data.users[m.sender]
if (new Date - user.lastmonthly < cooldownn) return reply(`You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldownn) - new Date()).toTimeString()}*`)
let text = ''
for (let reward of Object.keys(rewardss)) if (reward in user) {
user[reward] += rewardss[reward]
text += `*––––––『 MONTHLY 』––––––*\n\n*+${rewardss[reward]}* ${rpg.emoticon(reward)}${reward}\n`
}
reply(text)
user.lastmonthly = new Date * 1
}
break
case 'premgift': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (args.length == 0) return zyko.sendText(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
if (args[0] == 'OshdnpGaka' || args[0] == 'PagpqvUac' || args[0] == '91hakHcwo' || args[0] == 'A820bdoqP') {
if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
   zyko.sendText(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n100000 XP ✨\n 100 Limit! 🎫\n1000000 Money 💹\n1000000 Tabungan 💳\n100 Gold 🪙\n2 PetFood 🍖\n50 Legendary 🧰\n1 Pet Robo 🤖', m)
global.db.data.users[m.sender].exp += 100000
global.db.data.users[m.sender].limit += 100
global.db.data.users[m.sender].money +=1000000
global.db.data.users[m.sender].gold += 100
global.db.data.users[m.sender].legendary += 50
global.db.data.users[m.sender].atm += 1000000
global.db.data.users[m.sender].robo += 1
global.db.data.users[m.sender].petFood += 2
global.db.data.users[m.sender].lastclaim = new Date * 1
} else zyko.sendText(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
zyko.sendText(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan belinya terlebih dahulu untuk mendapatkan kodegift !\n\nKetik *!buygift*`, m)
}
}
break
case 'weekly': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

let user = global.db.data.users[m.sender]
//let cooldown = cooldown
if (new Date - user.lastweekly < cooldown) return reply(`You have already claimed this daily claim!, wait for *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`)
let text = ''
for (let reward of Object.keys(rewards)) {
if (!(reward in user)) continue
user[reward] += rewards[reward]
text += `*––––––『 WEEKLY 』––––––*\n\n*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
}
reply(text)
user.lastweekly = new Date * 1
}
break
case 'sell': 
case 'buy': {
let user = global.db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
const info = `
Use Format *${prefix}${command} [crate] [count]*
Usage example: *${prefix}${command} potion 10*

📍Items list: 
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `${global.rpg.emoticon(v)}${v} | ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
}).join('\n')}
`.trim()
const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return m.reply(info)
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`You don't have enough ${global.rpg.emoticon(paymentMethod)}${paymentMethod} to buy *${total}* ${global.rpg.emoticon(item)}${item}. You need *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* more ${paymentMethod} to be able to buy`)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return m.reply(`You bought *${total}* ${global.rpg.emoticon(item)}${item}`)
} else {
if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
user[item] -= total
user.money += listItems[item].money * total
return m.reply(`You sold *${total}* ${global.rpg.emoticon(item)}${item}`)
}
}
break
case 'work':
case 'petualang': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

if (!m.isGroup) return reply(mess.group)
let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (global.db.data.users[m.sender].healt > 79) {
if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
let armor = global.db.data.users[m.sender].armor
let rubah = global.db.data.users[m.sender].rubah
let kuda = global.db.data.users[m.sender].kuda
let kucing = global.db.data.users[m.sender].kucing
let anjing = global.db.data.users[m.sender].anjing
let ____health = `${Math.floor(Math.random() * 101)}`.trim()
let ___health = (____health * 1)
let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
let uang = (Math.floor(Math.random() * 400) + (anjing * 70))
let _potion = `${Math.floor(Math.random() * 2)}`.trim()
let potion = (_potion * 1)
let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
let diamond = (_diamond * 1)
let _common = `${Math.floor(Math.random() * 3)}`.trim()
let common = (_common * 1)
let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
let uncommon = (_uncommon * 1) 
let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
let mythic = (_mythic * 1)
let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
let sampah = `${Math.floor(Math.random() * 300)}`.trim()
let legendary = (_legendary * 1)
let _kayu = `${Math.floor(Math.random() * 3)}`.trim()
let kayu = (_kayu * 1)
let _batu = `${Math.floor(Math.random() * 2)}`.trim()
let batu = (_batu * 1)
let _string = `${Math.floor(Math.random() * 2)}`.trim()
let string = (_string * 1)
let _iron = `${Math.floor(Math.random() * 2)}`.trim()
let iron = (_iron * 1)
//let prefix = prefix
let str = `
${rpg.emoticon('healt')} Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['🇯🇵 Jepang', '🇰🇷 Korea', '🇮🇳 India', '🇺🇲 Amerika', '🇵🇸 Palestin', '🇮🇶 Iraq', '🇸🇦 Arab', '🇵🇰 Pakistan', '🇩🇪 German', '🇫🇮 Finlandia', 'Ke bawa dunia mimpi 😱', 'Ujung dunia 🌏', 'Mars 👽', 'Bulan 🌚', 'Pluto 😱', 'Matahari 🌞', 'Hatinya dia ♥️', '...'])} dan mendapatkan
${rpg.emoticon('exp')} *exp:* ${exp} 
${rpg.emoticon('money')} *uang:* ${uang}
${rpg.emoticon('sampah')} *sampah:* ${sampah}${potion == 0 ? '' : `\n*${rpg.emoticon('potion')}Potion:* ` + potion + ''}${iron == 0 ? '' : `\n*${rpg.emoticon('iron')}Iron:* ` + iron + ''}${kayu == 0 ? '' : `\n*${rpg.emoticon('kayu')}Kayu:* ` + kayu + ''}${batu == 0 ? '' : `\n*${rpg.emoticon('batu')}Batu:* ` + batu + ''}${string == 0 ? '' : `\n*${rpg.emoticon('string')}String:* ` + string + ''}${diamond == 0 ? '' : `\n*${rpg.emoticon('diamond')}diamond:* ` + diamond + ''}${common == 0 ? '' : `\n*${rpg.emoticon('common')}common crate:* ` + common + ''}${uncommon == 0 ? '' : `\n*${rpg.emoticon('uncommon')}uncommon crate:* ` + uncommon + ''}
`.trim()
reply(str)
if (mythic > 0) {
   global.db.data.users[m.sender].mythic += mythic * 1
   reply('*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + `${rpg.emoticon('mythic')}Mythic Crate`)
}
if (legendary > 0) {
global.db.data.users[m.sender].legendary += legendary * 1
reply('*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + `${rpg.emoticon('legendary')}Legendary Crate`)
}
global.db.data.users[m.sender].healt -= healt * 1
global.db.data.users[m.sender].exp += exp * 1
global.db.data.users[m.sender].money += uang * 1
global.db.data.users[m.sender].potion += potion * 1
global.db.data.users[m.sender].diamond += diamond * 1
global.db.data.users[m.sender].common += common * 1 
global.db.data.users[m.sender].uncommon += uncommon * 1
global.db.data.users[m.sender].sampah += sampah * 1
global.db.data.users[m.sender].iron += iron * 1
global.db.data.users[m.sender].batu += batu * 1
global.db.data.users[m.sender].kayu += kayu * 1
global.db.data.users[m.sender].string += string * 1
global.db.data.users[m.sender].lastadventure = new Date * 1
} else reply(`Anda sudah bekerja keras hari ini, silahkan menunggu sampai ${timers}`)
} else reply(`Minimal 80 health untuk bisa bercocok tanam, beli obat dulu biar kuat dengan ketik *${prefix} shop buy potion <jumlah>*\ndan ketik *${prefix} use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *${prefix} claim*\nHealing ${prefix} heal\nBeli Potion ${prefix} shop buy potion`)
}
break
case 'tarik':
case 'tarikuang': {
let user = global.db.data.users[m.sender]
let count = command.replace(/^tarik/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
global.db.data.users[m.sender].bank -= xpperlimit * count
global.db.data.users[m.sender].money += count
reply(`Sukses menarik sebesar ${count} Money 💹`)
} else reply(`[❗] Uang dibank anda tidak mencukupi untuk ditarik sebesar ${count} money 💹`)
}
break
case 'bank': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let user = global.db.data.users[m.sender]
const caption = `
▧「 *B A N K  U S E R* 」
│ 📛 *Name:* ${user.registered ? user.name : zyko.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Yes':'No'}
└──···
`.trim()
zyko.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/00ee61b555099bbfdd614.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break
case 'nabung': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let user = global.db.data.users[m.sender]
let count = command.replace(/^nabung/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
if (user.bank > user.fullatm) return m.reply('Uang dibankmu sudah penuh!')
if (count > user.fullatm - user.bank) return m.reply('Uangnya ga muat dibank')
if (global.db.data.users[m.sender].money >= xpperlimit * count) {
global.db.data.users[m.sender].money -= xpperlimit * count
global.db.data.users[m.sender].bank += count
reply(`Sukses menabung sebesar ${count} Money 💹`)
} else reply(`[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`)
}
break
case "inventori": {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let teks = `*── 「 INVENTORI 」 ──*

*PROFILE*
• Name : ${pushname}
• Darah : ${db.data.users[m.sender].darah}
• Limit : ${db.data.users[m.sender].limit}
• Potion : ${db.data.users[m.sender].potion}
• Tiket Coin : ${db.data.users[m.sender].tiketcoin}

*BIBIT*
• Bibit Anggur : ${db.data.users[m.sender].bibitanggur}
• Bibit Apel : ${db.data.users[m.sender].bibitapel}
• Bibit Jeruk : ${db.data.users[m.sender].bibitjeruk}
• Bibit Mangga : ${db.data.users[m.sender].bibitmangga}
• Bibit Pisang : ${db.data.users[m.sender].bibitpisang}

*HASIL BERKEBUN*
• Anggur : ${db.data.users[m.sender].anggur}
• Apel : ${db.data.users[m.sender].apel}
• Jeruk : ${db.data.users[m.sender].jeruk}
• Mangga : ${db.data.users[m.sender].mangga}
• Pisang : ${db.data.users[m.sender].pisang}

*HASIL BURUAN*
• Ayam : ${db.data.users[m.sender].ayam}
• Domba : ${db.data.users[m.sender].domba}
• Gajah : ${db.data.users[m.sender].gajah}
• Ikan : ${db.data.users[m.sender].ikan}
• Kelinci : ${db.data.users[m.sender].kelinci}
• Sapi : ${db.data.users[m.sender].sapi}

*HASIL MINING*
• Besi : ${db.data.users[m.sender].besi}
• Emas : ${db.data.users[m.sender].emas}
• Emerald : ${db.data.users[m.sender].emerald}
`
reply(teks)
}
break

case "berkebun": {

if (cek("id", m.sender) == null) return reply(mess.notregist)
const timeout = 1800000
let angguru = global.db.data.users[m.sender].bibitanggur
let apelu = global.db.data.users[m.sender].bibitapel
let jeruku = global.db.data.users[m.sender].bibitjeruk
let manggau = global.db.data.users[m.sender].bibitmangga
let pisangu = global.db.data.users[m.sender].bibitpisang
let time = global.db.data.users[m.sender].lastberkebon + 1800000
if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Anggur, Bibit Jeruk, Bibit Mangga, Bibit Pisang*\n\n*Ketik :*\n${prefix}shop buy bibitmangga 500\n\n*List Bibit :*\nbibitanggur\nbibitapel\nbibitjeruk\nbibitmangga\nbibitpisang`)
if (new Date - global.db.data.users[m.sender].lastberkebon < 1800000) return reply(`*Kamu sudah berkebun!*\nSilahkan tunggu hasil panenmu dalam _${msToTime(time - new Date())}_`)
if (global.db.data.users[m.sender].bibitanggur > 499) {
if (global.db.data.users[m.sender].bibitapel > 499) {
if (global.db.data.users[m.sender].bibitjeruk > 499) {
if (global.db.data.users[m.sender].bibitmangga > 499) {
if (global.db.data.users[m.sender].bibitpisang > 499) {
let apelpoin = `${Math.floor(Math.random() * 500)}`.trim()
let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim()
let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim()
let manggapoin = `${Math.floor(Math.random() * 500)}`.trim()
let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim()
global.db.data.users[m.sender].anggur += anggurpoin * 1
global.db.data.users[m.sender].apel += apelpoin * 1
global.db.data.users[m.sender].jeruk += jerukpoin * 1
global.db.data.users[m.sender].mangga += manggapoin * 1
global.db.data.users[m.sender].pisang += pisangpoin * 1
global.db.data.users[m.sender].tiketcoin += 1
global.db.data.users[m.sender].bibitanggur -= 500
global.db.data.users[m.sender].bibitapel -= 500
global.db.data.users[m.sender].bibitjeruk -= 500
global.db.data.users[m.sender].bibitmangga -= 500
global.db.data.users[m.sender].bibitpisang -= 500
global.db.data.users[m.sender].lastberkebon = new Date * 1
reply(`Selamat kamu mendapatkan :\n\n+${apelpoin} Apel\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${manggapoin} Mangga\n+${pisangpoin} Pisang\n+1 Tiketcoin`)
setTimeout(() => {
reply(`*Waktunya berkebun lagi kak 😄*`)
}, timeout)
} else reply(`Pastikan bibit anggur kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit apel kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit jeruk kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit mangga kamu *500* untuk bisa berkebun`)
} else reply(`Pastikan bibit pisang kamu *500* untuk bisa berkebun`)
}
break
case "bonus": {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
reply(`Selamat kamu mendapatkan :\n\n• Uang : 50000`)
global.db.data.users[m.sender].money += 50000
global.db.data.users[m.sender].lastclaim = new Date * 1
} else reply(`Bilang apa hayo ?`)
}
break
case "merampok": {

if (!isPremium) return reply(mess.premium);
if (cek("id", m.sender) == null) return reply(mess.notregist)
const timeout = 1800000
let time = global.db.data.users[m.sender].lastmulung + 604800000
if (new Date - global.db.data.users[m.sender].lastmulung< 604800000) return reply(`*Kamu sudah merampok!*\n\nTunggu selama ${msToTime(time - new Date())} lagi`)
let botolnye = `${Math.floor(Math.random() * 30000)}`.trim()
let kalengnye = `${Math.floor(Math.random() * 999)}`.trim()
let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
global.db.data.users[m.sender].money += botolnye * 1
global.db.data.users[m.sender].exp += kalengnye * 1
global.db.data.users[m.sender].kardus += kardusnye * 1
global.db.data.users[m.sender].lastmulung = new Date * 1
reply(`*Selamat kamu mendapatkan :*\n\n• Exp : ${kalengnye}\n• Kardus : ${kardusnye}\n• Uang : ${botolnye}`)
setTimeout(() => {
reply(`*Waktunya merampok lagi kak 😄*`)
}, timeout)
}
break
//menu news
case 'cnn-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await CNNNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { text: teks }, { quoted: m });
break;
} 
case 'sindo-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await SindoNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { text: teks }, { quoted: m });
break;
}
case 'fajar-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await FajarNews();
let no = 0;
let teks = "=============\n";

for (let i of res) {
no += 1;
teks += `=============\n`;
teks += `│⭔ ${no.toString()} │⭔\n`;
teks += `Berita: ${i.berita}\n`;
teks += `Upload: ${i.berita_diupload}\n`;
teks += `Jenis: ${i.berita_jenis}\n`;
teks += `Link: ${i.berita_url}\n`;
}

teks += "=============";
zyko.sendMessage(m.chat, { text: teks }, { quoted: m });
break;
}
case 'jalantikus-meme': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await JalanTikusMeme();
let teks = "==============\n";
teks += `Source: ${res}\n`;
teks += "==============";
zyko.sendMessage(m.chat, { image: { url: res }, caption: teks }, { quoted: m });
break;
}
case 'merdeka-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await MerdekaNews();
let no = 0;
let teks = "==============\n";

for (let i of res) {
no += 1;
teks += `│⭔ ${no.toString()} │⭔\n`;
teks += `Berita: ${i.berita}\n`;
teks += `Upload: ${i.berita_diupload}\n`;
teks += `Link: ${i.berita_url}\n\n`;
}

teks += "==============";
zyko.sendMessage(m.chat, { image: { url: res[0].berita_thumb }, caption: teks }, { quoted: m });
break;
}
case 'cnbc-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await CNBCNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'tribun-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await TribunNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'indozone-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await IndozoneNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'detik-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await DetikNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'daily-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await DailyNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'okezone-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await OkezoneNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'tempo-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await TempoNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break;
}
case 'antara-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await AntaraNews()
let no = 0
let teks = "=============="
for (let i of res) {
no += 1
teks += `\n│⭔ ${no.toString()} │⭔\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
zyko.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
break
}
case 'kontan-news': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await KontanNews();
let no = 0;
let teks = "==============\n";

for (let i of res) {
no += 1;
teks += `│⭔ ${no.toString()} │⭔\n`;
teks += `Berita: ${i.berita}\n`;
teks += `Jenis: ${i.berita_jenis}\n`;
teks += `Upload: ${i.berita_diupload}\n`;
teks += `Link: ${i.berita_url}\n\n`;
}

teks += "==============";
zyko.sendMessage(m.chat, { image: { url: res[0].berita_thumb }, caption: teks }, { quoted: m });
}
break 
// menu info
///tqto nama² bawah itu jangan hapus tambahin aja nama lo 
case 'tqto': case 'credits': case 'credit': {
let tqto = `
BiG Thanks To
Allah Yang Maha Esa
Orang Tua
Teman Gw
Pacar Gw Lisa Amelia 🗿

_The Name That Helped me_ 

SunShine (me)
Aldi Lesmana
Wh Mods Dev
Danzz Coding
Lorenzo 
Adrian
XTRAM-TEAM
`
zyko.sendMessage(m.chat, {
text: tqto,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/a0d4dadf97dc29fba2c32.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break
case 'reports':
case 'masalah':
case 'report':
case 'lapor':
case 'bug': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!text) return reply(`kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${prefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`)
let buy = (`*_${command}_*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`)
zyko.sendMessage(`${jasa}@s.whatsapp.net`, { text: `${buy}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
if (m.isGroup) {
m.reply(`_Pesan terkirim kepemilik bot, jika ${command} hanya main-main tidak akan ditanggapi._`)
}
}
break
case 'donasi':
case 'donate': {  
let cap = `▷ DONASI BOT ◁

▪ Pulsa: ${global.ppulsa}
▫ Pulsa: ${global.ppulsa2}
▫ Dana: ${global.pdana}
▫ OVO: ${global.povo}
▪ Gopay: ${global.pgopay}

▲ Donasi juga kepadah pembuat script bot ini 6283874330385

Semoga Anda diberikan kemudahan rezeki dan dilipatgandakan rezeki Anda.`
zyko.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
title: v,
body: 'D O N A T E',
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break
case 'assalamualaikum':
case 'salam': {
let info = ` _📚 ʙᴀᴄᴀ ʏᴀɴɢ ᴅɪʙᴀᴡᴀʜ ʏᴀ!_\n
*"ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇɴɢᴜᴄᴀᴘᴋᴀɴ ꜱᴀʟᴀᴍ ꜱᴇᴘᴇʀᴛɪ ɪɴɪ ᴍᴀᴋᴀ ɪᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ 30 ᴘᴀʜᴀʟᴀ, ᴋᴇᴍᴜᴅɪᴀɴ, ᴏʀᴀɴɢ ʏᴀɴɢ ᴅɪʜᴀᴅᴀᴘᴀɴ ᴀᴛᴀᴜ ᴍᴇɴᴅᴇɴɢᴀʀɴʏᴀ ᴍᴇᴍʙᴀʟᴀꜱ ᴅᴇɴɢᴀɴ ᴋᴀʟɪᴍᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ʏᴀɪᴛᴜ “ᴡᴀ'ᴀʟᴀɪᴋᴜᴍ ꜱᴀʟᴀᴍ ᴡᴀʀᴀʜᴍᴀᴛᴜʟʟᴀʜɪ ᴡᴀʙᴀʀᴀᴋᴀᴛᴜʜ” ᴀᴛᴀᴜ ᴅɪᴛᴀᴍʙᴀʜ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ (ᴡᴀʀɪᴅʜᴡᴀᴀɴᴀ). ᴀʀᴛɪɴʏᴀ ꜱᴇʟᴀɪɴ ᴅᴀʀɪᴘᴀᴅᴀ ᴅᴏ'ᴀ ꜱᴇʟᴀᴍᴀᴛ ᴊᴜɢᴀ ᴍᴇᴍɪɴᴛᴀ ᴘᴀᴅᴀ ᴀʟʟᴀʜ ꜱᴡᴛ"* `
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

reply(info, m, { contextInfo: { externalAdReply: {title: wm, body: 'ᴡᴀᴀʟᴀɪᴋᴜᴍᴍᴜꜱꜱᴀʟᴀᴍ ᴡᴀʀᴀʜᴍᴀᴛᴜʟʟᴀʜɪ ᴡᴀʙᴀʀᴏᴋᴀᴛᴜʜ', sourceUrl: owner, thumb: thumb }}})
}
break
case 'toonce':
case 'toviewonce': {
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await zyko.downloadAndSaveMediaMessage(quoted)
zyko.sendMessage(m.chat, {
image: {
url: anuan
},
caption: `Here you go!`,
fileLength: "999",
viewOnce: true
}, {
quoted: m
})
} else if (/video/.test(mime)) {
anuanuan = await zyko.downloadAndSaveMediaMessage(quoted)
zyko.sendMessage(m.chat, {
video: {
url: anuanuan
},
caption: `Here you go!`,
fileLength: "99999999",
viewOnce: true
}, {
quoted: m
})
}
}
break
case 'sc':
case 'script': 
sc = `
_Hello ${pushname} 👋_


*_Cari Sc Ya ?_*
*_Cek Ke Cannel SunShine_*
*_Atau Bisa click link bawah ini ⤵️_*
*_https://www.youtube.com/@SunShine_*

*_Mau Beli Sc request Bisa hubungi saya ke WhatsApp SunShine_*

*_Contact owner_*
wa.me/6285175463174`
zyko.sendMessage(m.chat, { text: sc }, { quoted: zyko.chat });
break
case "boost": {
if (!isOwner) return reply(mess.owner)
let start = `*Boosting the ${namabot}...*`
let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]'])}`
let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]'])}`
let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]'])}`
let boost5 = `${pickRandom(['[██████████▒▒▒]'])}`
let boost6 = `${pickRandom(['[████████████▒]'])}`
let boost7 = `${pickRandom(['[████████████]'])}`
await m.reply(start)
await m.reply(boost)
await m.reply(boost2)
await m.reply(boost3)
await m.reply(boost4)
await m.reply(boost5)
await m.reply(boost6)
await m.reply(boost7)
let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let finish = `*Sukses boost ${namabot}*\n\n*_Speed : ${speed} Second_*`
reply(finish)
}
break
case 'speedtest': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
reply('Testing Speed...')
let cp = require('child_process')
let {
promisify
} = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let {
stdout,
stderr
} = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
case 'totalfitur':
case 'fitur': 

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
reply(`Total Bot Features Are ${totalFitur()}`)
break
case 'ping': case 'speed': case 'botstatus': case 'statusbot': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'runtime': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let loo = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
reply(loo)
}
break
//menu exp
case 'profile': case 'pp': {
  let _pp = './src/avatar_contact.png'
  let user = db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? zyko.user.jid : m.sender
let pp = await zyko.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
let username = zyko.getName(who)
let name = zyko.getName(who)
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let str = `
]──────────❏ *PROFILE* ❏──────────[
💌 • *Name:* ${username} 
🎐 • *Username:* ${registered ? name : ''}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *Link:* https://wa.me/${who.split`@`[0]}
🎨 • *Age:* ${registered ? age : ''}
${readmore}
🌟 • *Premium:* ${premium ? "✅" :"❌"}
⏰ • *PremiumTime:* 
${clockString(user.premiumTime)}
📑 • *Registered:* ${registered ? '✅': '❌'}
`.trim()
zyko.sendFile(m.chat, pp, null, str, fkontak) 
}
break
case 'tomoney': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let user = global.db.data.users[m.sender]
let count = command.replace(/^tomoney/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
global.db.data.users[m.sender].exp -= xpperlimit * count
global.db.data.users[m.sender].money += count
reply(`Sukses menukarkan exp sebesar ${count} Exp ✨`)
} else reply(`[❗] Exp anda tidak mencukupi untuk ditukar sebesar ${count} ✨`)
}
break
case 'regrpg':
case 'daftarrpg': {
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let namae = zyko.getName(m.sender)
let md = `
╔══✪〘 𝟏𝐒𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐓𝐈𝐎𝐍 〙✪══
║
║Hai ${namae}, untuk mendaftar silahkan gunakan perintah ${prefix}${command} namaAnda.umur
║Contoh: ${prefix}${command} ZYKO.18
║
╚═〘 𝐙𝐘𝐊𝐎𝐁𝐎𝐓𝐙 〙`

  let user = global.db.data.users[m.sender]
  if (user.registered === true) return reply(`[💬] Kamu sudah terdaftar\nMau daftar ulang? *${prefix}unreg <SERIAL NUMBER>*`)
  if (!Reg.test(text)) return zyko.sendMessage(m.chat, {
text: md,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/975b07343239240e5a0be.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return reply('Nama tidak boleh kosong (Alphanumeric)')
  if (!age) return reply('Umur tidak boleh kosong (Angka)')
  age = parseInt(age)
  if (age > 30) return reply('WOI TUA (。-`ω´-)')
  if (age < 5) return reply('Halah dasar bocil')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? zyko.user.jid : m.sender
  let caption = `
  ╔══✪〘 𝟏𝐒𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐓𝐈𝐎𝐍 〙✪══
  ║
  ║ *Successful Registration Rpg!*
  ║
  ║Nama: ${name}
  ║Umur: ${age} tahun
  ║SN: ${sn}
  ║
  ╚═〘 𝐙𝐘𝐊𝐎𝐁𝐎𝐓𝐙 〙`  
zyko.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/975b07343239240e5a0be.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
break
case 'ceklimit': 
case 'checklimit': 
case 'limit':{
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
reply('Your Limit: ' + (db.data.users[m.sender].limit))
}
break
//Menu x main
case 'afk':
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!m.isGroup) return reply(mess.group)
if (isAfkOn) return reply(`${pushname} Sudah Afk Sebelumnya`)
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
reply(`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)
break
/// menu game
case 'tebakangka': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let bonusExp = Math.floor(Math.random() * 100)
let bonusMoney = Math.floor(Math.random() * 1000)
if (!args[0]) return zyko.sendText(m.chat, `Harap masukkan angka tebakanmu`, m)
if (args[0] < 1 || args[0] > 100) return zyko.sendText(m.chat, `Harap masukkan angka antara 1 dan 100`, m)
let number = Math.floor(Math.random() * 100) + 1
let userGuess = parseInt(args[0])
let result = (userGuess === number) ? `*Selamat Anda menang!*\n+${bonusExp} XP\n+Rp${bonusMoney}` : `Maaf Anda kalah\nAngka yang benar adalah ${number}`
let user = global.db.data.users[m.sender]
if (userGuess === number) {
user.exp += bonusExp
user.money += bonusMoney
}
reply(result)
}
break
case "dadu": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
const da = [ "https://tinyurl.com/gdd01", "https://tinyurl.com/gdd02", "https://tinyurl.com/gdd003", "https://tinyurl.com/gdd004", "https://tinyurl.com/gdd05", "https://tinyurl.com/gdd006" ];
zyko.sendFile(m.chat, pickRandom(da), "dado.webp", "", m)
}
break
case "slot": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
try {
let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
WinOrLose = "Kamu menang lagi dan mendapatkan Mega Jackpot!"
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
WinOrLose = "Kamu menang dan mendapatkan Jackpot!"  
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
WinOrLose = "Kamu menang dalam Pertandingan ini!"
} else {
WinOrLose = "Kamu kalah dalam Pertandingan ini!"
}
reply(`*── 「 SLOT 」 ──*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

_*${WinOrLose}*_`.trim(), )
} catch (e) {
reply(mess.error.api)
}
}
break
case "suit": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let salah = `Example: ${prefix+command} gunting\n\n*Pilihan yang tersedia :*\nBatu, Gunting, Kertas`
if (!text) return reply(salah)
var astro = Math.random()
if (astro < 0.34) {
astro = "batu"
} else if (astro > 0.34 && astro < 0.67) {
astro = "gunting"
} else {
astro = "kertas"
}
if (text == astro) {
reply(`*── 「 SUIT 」 ──*\n\n*Seri!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else if (text == "batu") {
if (astro == "gunting") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "gunting") {
if (astro == "kertas") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else if (text == "kertas") {
if (astro == "batu") {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu menang!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
} else {
reply(`*── 「 SUIT 」 ──*\n\n*Kamu kalah!*\n\n🤖 ${namabot} : ${astro}\n👤 ${pushname} : ${text}`)
}
} else {
return reply(salah)
}
}
break
case "asahotak": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (asahotak[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: asahotak[m.chat][0] })
var anu = await bochil.asahotak()
console.log("Jawaban : " + anu.jawaban)
asahotak[m.chat] = [
await reply(`*── 「 ASAH OTAK 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (asahotak[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete asahotak[m.chat]
}
}, 180000)
]
}
break
case "caklontong": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (caklontong[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: caklontong[m.chat][0] })
var anu = await bochil.caklontong()
console.log("Jawaban : " + anu.jawaban)
caklontong[m.chat] = [
await zyko.sendText(m.chat, `*── 「 CAK LONTONG 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`, m),
anu, 4,
setTimeout(() => {
if (caklontong[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*\n\nAlasannya adalah *${anu.deskripsi}*`)
delete caklontong[m.chat]
}
}, 180000)
]
}
break
case "kuismath": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (kuismath[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: kuismath[m.chat][0] })
let { genMath, modes } = require("./lib/math");
if (!text) return reply(`*Example: ${prefix+command} noob*\n\nMode : ${Object.keys(modes).join(" | ")}`.trim(), )
let src = await genMath(text.toLowerCase())
console.log("Jawaban : " + src.jawaban)
kuismath[m.chat] = [
await reply(`*── 「 KUIS MATH 」 ──*

• Soal : Berapa hasil dari ${src.soal} ?
• Mode : ${src.mode}
• Reward : +${src.hadiah} Xp
• Timeout : ${(src.waktu / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
src, 4,
setTimeout(() => {
if (kuismath[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${src.jawaban}*`)
delete kuismath[m.chat]
}
}, src.waktu)
]
}
break
case "siapakahaku": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (siapakahaku[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: siapakahaku[m.chat][0] })
var anu = await bochil.siapakahaku()
console.log("Jawaban : " + anu.jawaban)
siapakahaku[m.chat] = [
await reply(`*── 「 SIAPAKAH AKU 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (siapakahaku[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete siapakahaku[m.chat]
}
}, 180000)
]
}
break
case "susunkata": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (susunkata[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: susunkata[m.chat][0] })
var anu = await bochil.susunkata()
console.log("Jawaban : " + anu.jawaban)
susunkata[m.chat] = [
await reply(`*── 「 SUSUN KATA 」 ──*

• Soal : ${anu.soal}
• Tipe : ${anu.tipe}
• Reward : +1000 Xp
• Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (susunkata[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete susunkata[m.chat]
}
}, 180000)
]
}
break
case "tebakgambar": {
if (tebakgambar[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebakgambar[m.chat][0] })
var anu = await bochil.tebakgambar()
console.log("Jawaban : " + anu.jawaban)
tebakgambar[m.chat] = [
await zyko.sendMessage(m.chat, { image: { url: anu.img }, caption: `*── 「 TEBAK GAMBAR 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.deskripsi}\n⏳ Timeout : ${(180000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`}, { quoted: m }), anu, 4999,
setTimeout(() => {
if (tebakgambar[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebakgambar[m.chat]
}
}, 180000)
]
}
break
case "tebakkata": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (tebakkata[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebakkata[m.chat][0] })
var anu = await bochil.tebakkata()
console.log("Jawaban : " + anu.jawaban)
tebakkata[m.chat] = [
await reply(`*── 「 TEBAK KATA 」 ──*

• Soal : ${anu.soal}
• Reward : +1000 Xp
• Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`),
anu, 4,
setTimeout(() => {
if (tebakkata[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebakkata[m.chat]
}
}, 180000)
]
}
break
case "tebaklagu": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (tebaklagu[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebaklagu[m.chat][0] })
let poin = 1000
let src = await fetchJson("https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json")
let json = src[Math.floor(Math.random() * src.length)]
let msg = await zyko.sendMessage(m.chat, { audio: { url: json.lagu }, mimetype: "audio/mpeg" }, { quoted: m })
console.log("Jawaban : " + json.judul)
tebaklagu[m.chat] = [
await reply(`*── 「 TEBAK LAGU 」 ──*

• Artis : ${json.artis}
• Judul : _____
• Reward : +${poin} Xp
• Tiketcoin : +1 Tiketcoin
• Timeout : ${(180000 / 1000).toFixed(2)} Detik

*Balas pesan ini untuk Menjawab atau Menyerah!*`), json, poin,
setTimeout(() => {
if (tebaklagu[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${json.judul}*`)
delete tebaklagu[m.chat]
}
}, 180000)
]
}
break
case "tebaklirik": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (tebaklirik[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebaklirik[m.chat][0] })
var anu = await bochil.tebaklirik()
console.log("Jawaban : " + anu.jawaban)
tebaklirik[m.chat] = [
await reply(`*── 「 TEBAK LIRIK 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.soal}\n⏳ Timeout : ${(180000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`), anu, 4999,
setTimeout(() => {
if (tebaklirik[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebaklirik[m.chat]
}
}, 180000)
]
}
break
case "tebaktebakan": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (tebaktebakan[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tebaktebakan[m.chat][0] })
var anu = await bochil.tebaktebakan()
console.log("Jawaban : " + anu.jawaban)
tebaktebakan[m.chat] = [
await reply(`*── 「 TEBAK TEBAKAN 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.soal}\n⏳ Timeout : ${(180000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`), anu, 4999,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tebaktebakan[m.chat]
}
}, 180000)
]
}
break
case "tekateki": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (tekateki[m.chat]) return zyko.sendMessage(m.chat, { text: "Soal ini belum selesai" }, { quoted: tekateki[m.chat][0] })
var anu = await bochil.tekateki()
console.log("Jawaban : " + anu.jawaban)
tekateki[m.chat] = [
await reply(`*── 「 TEKA TEKI 」 ──*\n\n🎁 Gift :\n📖 Question : ${anu.soal}\n⏳ Timeout : ${(180000 / 1000).toFixed(2)} Detik\n\n📌 *Rules :*\n• *Reply dan ketik jawaban untuk menjawab.*\n• *Reply dan ketik nyerah untuk menyerah.*`), anu, 4999,
setTimeout(() => {
if (tekateki[m.chat]) {
reply(`*Waktu habis!*\n\nJawabannya adalah *${anu.jawaban}*`)
delete tekateki[m.chat]
}
}, 180000)
]
}
break
//Menu Other
case 'style': {
if (!q) return reply('masukan text nya su')

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
zyko.sendText(m.chat, Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`, m)
}
break
case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'tupai': {
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
(mess.wait)
let media = await zyko.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return (err)
let buff = fs.readFileSync(ran)
zyko.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else (`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
(e)
}
}
break
case 'npmsearch': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply('Input Query')
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) return reply(`Query "${text}" not found :/`)
let txt = objects.map(({ package: pkg }) => {
return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
}).join`\n\n`
m.reply(txt)
}
break
case 'jadwaltv': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply('Input Query')
let res = await jadwalTV(text)
let txt = res.result.map((v) => `[${v.jam.replace('WIB', ' WIB')}] ${v.acara}`).join`\n`
m.reply(`Jadwal TV ${res.channel}\n\n${txt}`)
}
break
case 'react': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!m.quoted) return reply('🚩 Reply Chat!')
if (text.length > 2) return reply('🚩Only For 1 Emoji!')
if (!text) return reply(`📍 Usage Example :\n${prefix}react 🗿`)
zyko.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
text: `${text}`}}, { messageId: m.id })
}
break
case 'spoiler':
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`masukan text contoh ${command} kamujelek|tapii boong`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
reply(l + readmore + r)
}
break
case 'tourl': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
await m.reply(mess.wait)
if (!/video/.test(mime) && !/image/.test(mime)) return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
//let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await zyko.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case "createqr": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 2) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 2
if (!isPremium) return m.reply(mess.premium)
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} zykomd`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
zyko.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break
case "detectqr": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 2) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 2
if (!isPremium) return m.reply(mess.premium)
try {
mee = await zyko.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0]))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break 
case "tts": case "gtts": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
let sp = "•"
if (!text.includes(" ")) return reply(`*Example : ${prefix+command} kodebahasa text*\n\n${sp} af: Afrikaans,
${sp} sq: Albanian
${sp} ar: Arabic
${sp} hy: Armenian
${sp} ca: Catalan
${sp} zh: Chinese
${sp} zh-cn: Chinese (Mandarin/China)
${sp} zh-tw: Chinese (Mandarin/Taiwan)
${sp} zh-yue: Chinese (Cantonese)
${sp} hr: Croatian
${sp} cs: Czech
${sp} da: Danish
${sp} nl: Dutch
${sp} en: English
${sp} en-au: English (Australia)
${sp} en-uk: English (United Kingdom)
${sp} en-us: English (United States)
${sp} eo: Esperanto
${sp} fi: Finnish
${sp} fr: French
${sp} de: German
${sp} el: Greek
${sp} ht: Haitian Creole
${sp} hi: Hindi
${sp} hu: Hungarian
${sp} is: Icelandic
${sp} id: Indonesian
${sp} it: Italian
${sp} ja: Japanese
${sp} ko: Korean
${sp} la: Latin
${sp} lv: Latvian
${sp} mk: Macedonian
${sp} no: Norwegian
${sp} pl: Polish
${sp} pt: Portuguese
${sp} pt-br: Portuguese (Brazil)
${sp} ro: Romanian
${sp} ru: Russian
${sp} sr: Serbian
${sp} sk: Slovak
${sp} es: Spanish
${sp} es-es: Spanish (Spain)
${sp} es-us: Spanish (United States)
${sp} sw: Swahili
${sp} sv: Swedish
${sp} ta: Tamil
${sp} th: Thai
${sp} tr: Turkish
${sp} vi: Vietnamese
${sp} cy: Welsh`)
let kode = body.split(" ")[1]
let teks = body
.toLowerCase()
.replace(command + " ", "")
.replace(kode + " ", "")
let gtts = require("./lib/scraper/gtts")(`${kode}`, teks)
let ranm = getRandom(".mp3")
let rano = getRandom(".ogg")
teks.length > 2000 ? reply("Teks nya terlalu panjang") : gtts.save(ranm, teks, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
let buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
zyko.sendMessage(m.chat, { audio: buff, mimetype: "audio/mp4", ptt: true, contextInfo: { externalAdReply: { showAdAttribution: true, title: namabot, body: wm, previewType: `PHOTO`, thumbnail: thumb, sourceUrl: sig }}}, { quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "getpp": {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (Input) {
try {
var ppWong = await zyko.profilePictureUrl(Input, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
zyko.sendMessage(m.chat, { image: { url: ppWong }}, { quoted : m })
} else {
try {
var ppWong = await zyko.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
zyko.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
case 'fetch':
case 'get': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? zyko.user.jid : m.sender
let name = await zyko.getName(who)
if (!text) return reply('*Masukkan Link*')
let { href: url, origin } = new URL(text)
let res = await fetch(url, { headers: { 'referer': origin }})
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) return reply(`Content-Length: ${res.headers.get('content-length')}`)
if (!/text|json/.test(res.headers.get('content-type'))) return zyko.sendFile(m.chat, url, waktuucapan, author, m, null, { fileName: waktuucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, caption: author, contextInfo: {
externalAdReply :{
body: 'zykotbotz',
containsAutoReply: true,
mediaType: 2, 
mediaUrl: sig,
showAdAttribution: true,
sourceUrl: sig,
thumbnailUrl: thumb,
renderLargerThumbnail: true,
title: pushname,
}}
})
let txt = await res.buffer()
try {
txt = format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m.reply(txt.slice(0, 65536) + '')
}
}
break
//Menu Internet
case 'jarak': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

var [text1, text2] = text.split`|`
if (!(text1 && text2)) return reply(`🚩 *Example:* ${prefix+command} Sukabumi|bandung`)
var data = await zzyko.jarak(text1, text2)
if (data.img) return zyko.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m.reply(data.desc)
}
break
case 'kalkulator':
case 'tambah':
case 'kurang':
case 'kali': {
let id = m.chat
zyko.math = zyko.math ? zyko.math : {}
if (id in zyko.math) {
clearTimeout(zyko.math[id][3])
delete zyko.math[id]
m.reply('Hmmm...ngecheat?')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) return result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('Isinya?')
return reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
case 'darkjoke': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
const res = await Darkjokes()
await zyko.sendFile(m.chat, res, 'darkjoke.jpg', `Dark ga si adick adick`, m)
}
break
case 'lyrics':
case 'lirik': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) return reply(`Use example ${prefix}${command} hallo`)
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
m.reply(`
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}
break
case 'ppcouple': 
case 'ppcp': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
let cita = data[Math.floor(Math.random() * data.length)]
let cowi = await(await fetch(cita.cowo)).buffer()
await zyko.sendFile(m.chat, cowi, '', '♂️', m)
let ciwi = await(await fetch(cita.cewe)).buffer()
await zyko.sendFile(m.chat, ciwi, '', '♀️', m)
}
break
case "translate": {
if (cek("id", m.sender) == null) return reply(mess.notregist)
const { translate } = require("@vitalets/google-translate-api")
let lang, text;
if (args.length >= 2) {
(lang = args[0]), (text = args.slice(1).join(" "))
} else if (m.quoted && m.quoted.text) {
(lang = args[0]), (text = m.quoted.text)
} else
return reply(`*Example : ${prefix+command} id Selamat pagi*`)
let res = await translate(text, { to: lang, autoCorrect: true }).catch((_) => null)
if (!res) return reply(`*Error : The language "${lang}" is not supported*`)
let gtts = require("./lib/scraper/gtts")(`${lang}`, `${res.text}`)
let ranm = getRandom(".mp3")
let rano = getRandom(".ogg")
res.text.length > 10000 ? reply("Teks nya terlalu panjang") : gtts.save(ranm, res.text, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
let buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
zyko.sendMessage(m.chat, { audio: buff, mimetype: "audio/mp4", ptt: true, contextInfo: { externalAdReply: { showAdAttribution: true, title: namabot, body: wm, previewType: `PHOTO`, thumbnail: thumb, sourceUrl: sig }}}, { quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case 'pinterest': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Example : ${prefix + command}`)
reply(mess.wait)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
anu = await zzyko.pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]   
zyko.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
}
break
case 'google': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} pisang`)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `• *Title* : ${g.title}\n`
teks += `• *Description* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'gimage': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} zykobotz`)
reply(mess.wait)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
zyko.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
})
}
break
case 'kopi':
case 'coffee': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await fetch("https://coffee.alexflipnote.dev/random.json");
if (!res.ok) return reply(`${res.status} ${res.statusText}`)
let json = await res.json();
if (json.file) {
zyko.sendMessage(m.chat, { image: { url: json.file }, caption: 'Ngopi skuy' }, { quoted: m });
} else {
return reply(json)
}
}
break
case 'katanime': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
if (!res.ok) return await res.text()
let json = await res.json()
if(!json.result[0]) return json
let { indo, character, anime } = json.result[0]
m.reply(`${indo}\n\n${character}\n${anime}`)
}
break
case 'meme': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json')
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
zyko.sendMessage(m.chat, { image: { url: url.image }, caption: 'Nih Memeindo' }, { quoted: m})
}
break
case 'githubsearch': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
  if (!q) return reply(`Contoh:\n${prefix + command} stikerinbot`);
  let res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(text)}`);
  if (!res.ok) return reply('Terjadi kesalahan saat mencari di GitHub')
  let json = await res.json();
  let str = json.items.map((repo, index) => {
return `>      「 ${ 1 + index } 」       <
*ɢɪᴛʜᴜʙ sᴇᴀʀᴄʜ*
ɴᴀᴍᴇ ʀᴇᴘᴏ : ${repo.name}
ʙʏ : ${repo.owner.login}
ғᴏʀᴋᴇᴅ : ${repo.fork ? 'True' : 'False'}
ᴘʀɪᴠᴀᴛᴇ : ${repo.private ? 'True': 'False'}

➔ ᴄʀᴇᴀᴛᴇᴅ ᴏɴ : ${formatDate(repo.created_at)}
➔ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇ ᴏɴ : ${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
❗ ɪssᴜᴇ : ${repo.open_issues} ${repo.description ? `
📚 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:
${repo.description}` : ''}

⑂ ᴄʟᴏɴᴇ :
$ git clone ${repo.clone_url}
`.trim();
  }).join('\n— — — — — — — — — — — — — —\n');
m.reply(str);
}
break;
case 'cuaca':
case 'weather': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
  if (!q) return reply(`Penggunaan:\n${prefix + command} <teks>\n\nContoh:\n${prefix + command} Sukabumi`)
let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(text)}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`);
if (!res.ok) return reply('Lokasi tidak ditemukan')
let json = await res.json();
if (json.cod !== 200) return json;
m.reply(`
Lokasi: ${json.name}
Negara: ${json.sys.country}
Cuaca: ${json.weather[0].description}
Suhu saat ini: ${json.main.temp} °C
Suhu tertinggi: ${json.main.temp_max} °C
Suhu terendah: ${json.main.temp_min} °C
Kelembapan: ${json.main.humidity} %
Angin: ${json.wind.speed} km/jam
`.trim());
}
break;
case 'cecanukhty': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let bpink = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
.then(res => res.text())
.then(txt => txt.split('\n'));
let img = bpink[Math.floor(Math.random() * bpink.length)];
if (!img) return img;
zyko.sendMessage(m.chat, { image: { url: img }, caption: '© Nih cecanukhty, jangan lupa subscribe channel SunShine 👍' }, { quoted: m });
}
break
case 'exo': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let bpink = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/exo.txt')
.then(res => res.text())
.then(txt => txt.split('\n'));
let img = bpink[Math.floor(Math.random() * bpink.length)];
if (!img) return img;
zyko.sendMessage(m.chat, { image: { url: img }, caption: '© Nih exo, jangan lupa subscribe channel SunShine 👍' }, { quoted: m });
}
break
case 'blackpink': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let bpink = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt')
.then(res => res.text())
.then(txt => txt.split('\n'));
let img = bpink[Math.floor(Math.random() * bpink.length)];
if (!img) return img;
zyko.sendMessage(m.chat, { image: { url: img }, caption: '© Nih Blackpinknya, jangan lupa subscribe channel SunShine 👍' }, { quoted: m });
}
break;
case 'bts': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let bts = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/batues.txt')
.then(res => res.text())
.then(txt => txt.split('\n'));
let img = bts[Math.floor(Math.random() * bts.length)];
if (!img) return img;
zyko.sendMessage(m.chat, { image: { url: img }, caption: '© Nih bts, jangan lupa subscribe channel SunShine 👍' }, { quoted: m });
}
break;
case 'cecanrandom': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let arr = await fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
.then(res => res.text())
.then(txt => txt.split('\n'));
let img = arr[Math.floor(Math.random() * arr.length)];
if (!img) return img;
zyko.sendMessage(m.chat, { image: { url: img }, caption: '© Nih cecanrandom, jangan lupa subscribe channel SunShine 👍' }, { quoted: m });
}
break;
//Menu Asupan
case 'filebokep':  {
if (!m.isGroup) return reply(mess.group)
if (!isPremium) return reply(mess.premium)

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
await m.reply('_Bot Telah Mengirimkan Ke private chat_')
zyko.sendText(sender, `${pickRandom(global.bokep)}`, m)
}
break
case 'asupan': {
if (!isPremium) return m.reply(mess.premium)

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
reply(`_hallo ${pushname} asupan telah bot kirim ke private chat_`)
zyko.sendMessage(sender, { video: { url: pickRandom(global.asupan) }, caption: wm }, { quoted: m})

}
break
//Menu Fun
case 'cantikcek': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

reply(`${pickRandom(cantikk)}`)
}
break
case 'namaninja': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
m.reply(teks.replace(/[a-z]/gi, v => {
return {
'a': 'ka',
'b': 'tu',
'c': 'mi',
'd': 'te',
'e': 'ku',
'f': 'lu',
'g': 'ji',
'h': 'ri',
'i': 'ki',
'j': 'zu',
'k': 'me',
'l': 'ta',
'm': 'rin',
'n': 'to',
'o': 'mo',
'p': 'no',
'q': 'ke',
'r': 'shi',
's': 'ari',
't': 'ci',
'u': 'do',
'v': 'ru',
'w': 'mei',
'x': 'na',
'y': 'fu',
'z': 'zi'
}[v.toLowerCase()] || v
}))
}
break
case 'cekmemek': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

if (!text) return reply('Ketik Namanya Tolol!')
reply(`
╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`)
}
break
case 'gaycek': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
reply(`“${pickRandom(global.gay)}”`, m)
}
break 
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu': {
if (!m.isGroup) return m.reply(mess.group);
if (cek("id", m.sender) == null) return reply(mess.notregist)
let member = participants.map(u => u.id).filter(v => v !== zyko.user.jid)
let org = member[Math.floor(Math.random() * member.length)];
zyko.sendMessage(m.chat, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
}
break
case 'apakah': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek':
case 'cekganteng': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}%`)
}
break
case 'cantikcek':
case 'cekcantik': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}%`)
}
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Contoh : .wangy Riy`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break
case 'cekmati': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
}
break
case 'halah':
case 'hilih':
case 'huluh':
case 'heleh':
case 'holoh': {
if (!m.quoted && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
//Menu Primbon
case 'nomerhoki': case 'nomorhoki': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!Number(text)) return reply(`Contoh : ${prefix + command} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
zyko.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
zyko.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
}
break
//MENU Downloader
case 'apkdl': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Ex: ${prefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`)
let res = await zzyko.apkDl(q)
await m.reply('_In progress, please wait..._')
zyko.sendMessage(m.chat, { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName }, { quoted: m })
}
break
case 'facebook': case 'fb': case 'fbdl': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Example : ${prefix + command} https://www.facebook.com/100065164892842/posts/731701032345387/?mibextid=rS40aB7S9Ucbxw6v`)
//let { ytv } = require('./lib/scraper/y2mate')
let quality = args[1] ? args[1] : '360p'
let media = await api.fbdl(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
zyko.sendMessage(m.chat, { video: { url: media.videoUrl}, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.size}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'gitclone': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!args[0]) return reply(`Example user ${prefix}${command} link`)
if (!regex.test(args[0])) return reply('link salah!')
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
zyko.sendFile(m.chat, url, filename, null, m)
}
break
case 'instagram': 
case 'ig': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!args[0]) return reply(`🚩 *Example:* ${prefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`)
let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/instagram?apikey=YT:LORENZOBOTMD&url=${args[0]}`)
let data = await res.json()
let json = data.result
let cap = `Title: ${json.title}\n${footer}`
zyko.sendMessage(m.chat, { video: { url: json.url }, caption: cap }, { quoted: m})
};
break
case 'mediafire':
case 'mf': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!args[0]) return reply('Input URL')
if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) return reply('Invalid URL')
let res = await mediafiredl(args[0])
let mimetype = await lookup(res.url)
delete res.url2
m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
zyko.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype }, { quoted: m })
}
break
case 'play': case 'ytplay': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Example : ${prefix + command} coding`)
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let cop = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}

${footer}`
zyko.sendMessage(m.chat, {
text: cop,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: anu.thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
zyko.sendMessage(m.chat, { audio: { url: anu.url }, mimetype: 'audio/mpeg', fileName: `${anu.url}.mp3` }, { quoted: ftroli })
 	
}
break
case 'yts': case 'ytsearch': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
zyko.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
//=================================================
case 'ytmp3': case 'youtubemp3': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/shorts/Akm3ijSj5Xc?si=2bWdhUa4dhAxLiV0`)
await reply(mess.wait)
downloadMp3(text)
}
break
//=================================================
case 'ytmp4': case 'youtubemp4': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/shorts/Akm3ijSj5Xc?si=2bWdhUa4dhAxLiV0`)
//let { ytv } = require('./lib/scraper/y2mate')
let quality = args[1] ? args[1] : '360p'
let media = await api.ytmp4(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
zyko.sendMessage(m.chat, { video: { url: media.dl_url }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.size}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================
case 'getmusic': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) return reply(`Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
await reply(mess.wait)
downloadMp3(urls[text - 1])
}
break
//=================================================
case 'getvideo': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let { ytv } = require('./lib/scraper/y2mate')
if (!text) return reply(`Example : ${prefix + command} 1`)
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) return reply(`Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
zyko.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================
case "ytreels": case "youtubereels":{
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return m.reply('Masukan Link Nya!!!')
await reply(mess.wait)
downloadMp4(text)
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await reply(mess.wait)
require('./lib/scraper/tiktok').Tiktok(q).then( data => {
zyko.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktok': case 'tt': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 2) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 2
if (!q) return reply(`🚩 *Example:* ${prefix+command} https://vt.tiktok.com/ZSNCXnAUj/`)
await zyko.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
spas = "             "
let ler = await Tiktokdl(q)
let cer = ler.result
let cap = `${spas}*「 T I K T O K 」*

*📛Author:* ${cer.author.nickname}
*📒Title:* ${cer.desc}

${footer}
`
zyko.sendMessage(m.chat, { video: { url: cer.download.nowm }, caption: cap }, { quoted: m})
}
break
case 'ss': case 'ssweb':{

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
zyko.sendMessage(m.chat,{image: krt.result, caption: mess.success},{quoted:m})
}
break
//MENU Main
case 'intro': {
let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       「 Kartu Intro 」
│ Nama     : 
│ Gender   : 
│ Umur      : 
│ Hobby    : 
│ Kelas      : 
│ Asal         : 
│ Agama    : 
|  Status     : 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
m.reply(krtu)
}
break
//Menu Anime
case 'otakudesu': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Use example ${prefix}${command} Anime`)
let result = await otakudesu(text)
let datathumb = await(await fetch(result.img)).buffer()
let otaku = `
*JUDUL:* ${result.judul}
*JEPANG:* ${result.jepang}
*RATE:* ${result.rate}
*PRODUSER:* ${result.produser}
*TIPE:* ${result.tipe}
*STATUS:* ${result.status}
*EPISODE:* ${result.episode}
*DURASI:* ${result.durasi}
*RILIS:* ${result.rilis}
*STUDIO:* ${result.studio}
*GENRE:* ${result.genre}
*DESC:* ${result.desc}
*BATCH:* ${result.batch}

*BATCHSD:* ${result.batchSD}

*BATCHHD:* ${result.batchHD}
`
zyko.sendFile(m.chat, datathumb, 'image.jpg', otaku, m)
}
break
case 'randomanime':
case 'animerandom': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()
let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await zyko.sendFile(m.chat, cita, 'image.jpg', `Nihh ${command}nya`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
break
case 'simpown': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let url = gamanaufal[Math.floor(Math.random() * gamanaufal.length)]
zyko.sendFile(m.chat, url, 'image.jpg', '*ɪɴɪ ᴄᴜᴍᴀ ꜱɪᴍᴘᴇɴᴀɴ ᴏᴡɴᴇʀ ʙᴏᴛ ᴋᴏᴋ ᴋᴀᴋ (≧ω≦)* ', m)
}
break
case 'genshin':
case 'charagi': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let list = ['amber','ayaka','baizhu','barbara','beidou','bennett','childe','chongyun','cyno','dainsleif','diluc','diona','fischl','ganyu','jean','kaeya','keqing','klee','lisa','mona','ningguang','noelle','qiqi','razor','sucrose','venti','xiangling','xiao','xingqiu','xinyan','zhongli']

if (!list.includes(text.toLowerCase())) return m.reply('🚩 *List of Chara GIs:*\n\n' + list.map(v => v).join('\n'))

let chara = await genshin.characters(text.toLowerCase())
let { name, quote, cv, description, image, city, element, weapon, rating } = chara

let capt = `
*Name:* ${name}
*CV:* ${cv}
*City:* ${city}
*Element:* ${element}
*Weapon:* ${weapon}
*Rating:* ${rating}
*Quote:* ${quote}
*Description:*
${description}
`.trim()
zyko.sendMessage(m.chat, { image: { url: image }, caption: capt }, { quoted: m})
}
break
case 'akira': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/akira.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'akiyama': { 

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/akiyama.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'anna': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/ana.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'asuna': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/asuna.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'ayuzawa': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/ayuzawa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'boruto': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/boruto.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'chitanda': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/chitanda.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'chitoge': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/chitoge.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'deidara': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/deidara.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'doraemon': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/doraemon.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'elaina': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/elaina.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'emilia': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/emilia.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'asuna': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/asuna.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'erza': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/erza.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'gremory': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/gremory.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'hestia': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/hestia.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'hinata': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await ( fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/hinata.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'inori': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/inori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'isuzu': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/isuzu.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'itachi': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/itachi.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'itori': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/itori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kaga': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kaga.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kagura': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kagura.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kakasih': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kakasih.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kaori': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kaori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kosaki': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kosaki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'kotori': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kotori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kuriyama': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kuriyama.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kuroha': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kuroha.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'kurumi': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/kurumi.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'loli': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/loli.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'madara': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/madara.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'mikasa': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/mikasa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'miku': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/miku.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'minato': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/minato.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'naruto': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/naruto.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'natsukawa': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/natsukawa.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'neko2': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/neko.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})

}
break
case 'nekohime': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/nekohime.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'nezuko': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/nezuko.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'nishimiya':  {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/nishimiya.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'onepiece': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/onepiece.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'pokemon': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/pokemon.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'rem': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/rem.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'rize': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/rize.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'sagiri': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/sagiri.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'sakura': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/sakura.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'sasuke': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/sasuke.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'shina': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shina.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'shinka': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shinka.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'shizuka': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shizuka.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'shota': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/shota.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'tomori': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/tomori.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break
case 'toukachan': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/toukachan.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'tsunade': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/tsunade.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'yatogami': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/yatogami.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
case 'yuki': { 

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/yuki.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
zyko.sendMessage(m.chat, { image: { url: cita }, caption: command }, { quoted: m})
}
break 
//Menu Sticker 
case 'toaud': 
case 'toaudio': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await zyko.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
zyko.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })

}
break
case 'tomp3': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await zyko.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
zyko.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Zyko.mp3`}, { quoted : m })

}
break
case 'tovn': 
case 'toptt': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await zyko.downloadMediaMessage(qmsg)
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
zyko.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'setexif': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Contoh : ${prefix + command} packname|author`)
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
}
break
case 'togif': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await zyko.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await zyko.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toimage': 
case 'toimg': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await zyko.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
zyko.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': 
case 'tovideo': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await zyko.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await zyko.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'sticker':
case 'stiker':
case 's':{

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zyko.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await zyko.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'smeme':

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
 if (!text) return `Balas Image Dengan Caption ${prefix + command}`
if (!quoted) return `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('*Sabar Cuy Loading*')
mee = await zyko.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
zyko.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break
case 'swm': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
let [teks1, teks2] = text.split`|`
if (!teks1) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
reply(mess.wait)
if (/image/.test(mime)) {
let media = await zyko.downloadMediaMessage(qmsg)
let encmedia = await zyko.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await zyko.downloadMediaMessage(qmsg)
let encmedia = await zyko.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'emojimix': {

if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await zyko.sendImageAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: global.author,
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
}
break
case 'emojimix2': {
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!text) return reply(`Contoh : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await zyko.sendImageAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: global.author,
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
}
break  
//MENU OWNER
case "welcome": {
if (!isOwner) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
welcom.push(from)
var groupe = await zyko.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
zyko.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = welcom.indexOf(from)
welcom.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
//=================================================//
case 'setcmd': {
if (!isOwner) return m.reply(mess.owner)
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!m.quoted) return reply('Reply Pesan!')
if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
if (!text) return reply(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to change this sticker command')
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isOwner) return m.reply(mess.owner)
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
if (!m.quoted) return reply('Reply Pesan!')
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return reply(`Tidak ada hash`)
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to delete this sticker command')
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isOwner) return m.reply(mess.owner)
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let teks = `list cmd`
zyko.sendText(from, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case "restart": {
if (!isOwner) return reply(mess.owner)
reply(`*Restarting ${namabot}*`)
await sleep(3000)
process.send("reset")
}
break
case 'getcase':
case 'ambilcase':
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`contoh ${command} tiktok`)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("zyko.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
reply(`${getCase(q)}`)
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await zyko.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case "setppbot": {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await zyko.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await zyko.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await zyko.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
break
case 'block': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyko.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyko.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case "listblock": {
if (!isOwner) return reply(mess.owner)
let teks = `*── 「 LIST BLOCK 」 ──*\n\n`;
for (let x of listblock) {
teks += `◦ @${x.split("@")[0]}\n`;
}
teks += `\n*Total Block : ${listblock.length} Users*`;
reply(teks);
}
break;
case 'author': case 'owner': case 'creator': {
if (cek("id", m.sender) == null) return reply(mess.notregist)

await zyko.sendContact(m.chat, global.owner, m)
}
break
case 'autoread':
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on'){
global.db.data.settings[botNumber].autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off'){
global.db.data.settings[botNumber].autoread = false
reply(`Berhasil mengubah autoread ke ${q}`)
}
break
case 'myip': {
if (!isOwner) return reply(mess.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
reply("🔎 My public IP address is: " + ip);
})
})
}
break
case 'addprem':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zyko.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(bnnd)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
reply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
break
case 'delprem':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62`)
pem = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(pem)
premium.splice(unp, 1)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium))
reply(`Nomor ${pem} Telah Di Hapus Dari Premium!!!`)
break
case 'listprem':
preom = '*List Premium*\n\n'
for (let i of premium) {
preom += `- ${i}\n`
}
preom += `\n*Total : ${premium.length}*`
zyko.sendMessage(m.chat, { text: preom.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'addowner':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let cekown = await zyko.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekown.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/json/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Jadi Owner!!!`)
break
case 'delown':
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62`)
pem = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(_owner)
owner.splice(unp, 1)
fs.writeFileSync('./database/json/owner.json', JSON.stringify(owner))
reply(`Nomor ${pem} Telah Di Hapus Dari Owner!!!`)
break
case 'listown':
if (cek("id", m.sender) == null) return reply(mess.notregist)
preom = `*List Owner*\n\nTotal Owner : ${_owner.length}\n`
var no = 1
for (let x of owner) {
preom += `\nUser: ${no++}\nID: ${x}\n\n`
}
preom += `\n*Untuk Menghapus Akses owner Ketik ${prefix}delown 628xxx/@tag*`
zyko.sendMessage(m.chat, {text: preom },{quoted: zyko.chat})
break
///MENU GROUP
case 'caritemangc': 
case 'carikawangc': {
if (!m.isGroup) return reply(mess.group)
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (participants.length === 0) {
return reply('Tidak ada anggota di grup.');
}
const member = participants.map(u => u.id).filter(v => v !== zyko.user.jid);
if (member.length === 0) {
return reply('Tidak ada anggota non-bot di grup.');
}
const phoneNumber = member[Math.floor(Math.random() * member.length)];
const waLink = `https://wa.me/${phoneNumber.split("@")[0]}`;
await sleep(1000);
reply('Sedang mencari...');
await sleep(4000);
reply('Berhasil mendapatkan satu orang');
await sleep(3000);
zyko.sendMessage(m.chat, { text: `Nih Kak ${phoneNumber.split("@")[0]}\n\n${waLink}` }, m);
}
break
case "closetime":{
if (!m.isGroup) return m.reply(mess.group);
if (!isAdmins) return m.reply(mess.admin);
if (!isBotAdmins) return m.reply(mess.botAdmin);
if (args[1] == "detik") {
var timer = args[0] * `1000`;
} else if (args[1] == "menit") {
var timer = args[0] * `60000`;
} else if (args[1] == "jam") {
var timer = args[0] * `3600000`;
} else if (args[1] == "hari") {
var timer = args[0] * `86400000`;
} else {
return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
}
m.reply(`Close time grup ${q} dimulai dari sekarang`);
setTimeout(() => {
var nomor = m.participant;
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
zyko.groupSettingUpdate(from, "announcement");
m.reply(close);
}, timer);
}
break
case "opentime":{
if (!m.isGroup) return m.reply(mess.group);
if (!isAdmins) return m.reply(mess.admin);
if (!isBotAdmins) return m.reply(mess.botAdmin);
if (args[1] == "detik") {
var timer = args[0] * `1000`;
} else if (args[1] == "menit") {
var timer = args[0] * `60000`;
} else if (args[1] == "jam") {
var timer = args[0] * `3600000`;
} else if (args[1] == "hari") {
var timer = args[0] * `86400000`;
} else {
return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
}
m.reply(`Open time grup ${q} dimulai dari sekarang`);
setTimeout(() => {
var nomor = m.participant;
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
zyko.groupSettingUpdate(from, "not_announcement");
m.reply(open);
}, timer);
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === 'open') {
 await zyko.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close') {
 await zyko.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => reply(jsonformat(err)))
} else {
 reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'setname':
case 'setsubject': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply('Text ?')
await zyko.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc':
case 'setdesk': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return mess.admin
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply('Text ?')
await zyko.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`)
zyko.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isOwner) return reply('khusus creator bot')
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zyko.downloadAndSaveMediaMessage(m)
await zyko.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply('done')
}
break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(mess.owner)
let getGroups = await zyko.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
if(!pesan) return reply('teksnya?')
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
for (let i of anu) {
zyko.sendMessage(i, {
text: `${pesan}`,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: brocas,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: zyko.chat}) 
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcchat': { 
if (!isOwner) return reply(mess.owner)
let chats = Object.keys(zyko.chats)
let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
m.reply(`Mengirim Broadcast Ke ${chats.length} Chat ${chats.length} `)
await delay(1500)
for (let id of chats) {
zyko.sendMessage(id, {
text: `${pesan}`,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: brocas,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: zyko.chat}) 
}
m.reply(`Suksess Broadcastke ${chats.length} `)
}
break
case 'linkgroup': case 'linkgc': case 'link': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) reply(mess.botAdmin)
let response = await zyko.groupInviteCode(m.chat)
reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
zyko.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
 case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
zyko.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
reply(`Antilink Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antilink2': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = true
reply(`antilink2 Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = false
reply(`antilink2 Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antipromosi': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antipromosi) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antipromosi = true
reply(`antipromosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antipromosi) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antipromosi = false
reply(`antipromosi Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antipromosi2': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antipromosi2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antipromosi2 = true
reply(`antipromosi2 Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antipromosi2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antipromosi2 = false
reply(`antipromosi2 Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antitoxic': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antitoxic) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antitoxic = true
reply(`antitoxic Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antitoxic) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antitoxic = false
reply(`antitoxic Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antilinkyt': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkyt) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilinkyt = true
reply(`antilinkyt Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkyt) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilinkyt = false
reply(`antilinkyt Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antilinktt': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinktt) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilinktt = true
reply(`antilinktt Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinktt) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilinktt = false
reply(`antilinktt Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antivirtex': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antivirtex) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antivirtex = true
reply(`antivirtex Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivirtex) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antivirtex = false
reply(`antivirtex Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'mutegc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`mute Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`mute Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'group': case 'grup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await zyko.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zyko.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}Open/Close`)
}
}
break
case 'revoke': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
await zyko.groupRevokeInvite(m.chat)
.then(res => {
reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
}).catch((err) => reply(jsonformat(err)))
}
break

///MENU STORE X Payment 
case "buy": case "order": {
let d = new Date(new Date + 3600000);
let locale = "id";
let clock = d.toLocaleTimeString(locale, { hour: "numeric", minute: "numeric", second: "numeric" });
let date = d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", { day: "numeric", month: "long", year: "numeric" }).format(d);
let week = d.toLocaleDateString(locale, { weekday: "long" });
let weton = [ "Pahing", "Pon", "Wage", "Kliwon", "Legi" ][Math.floor(d / 84600000) % 5];
	if (!q) return reply('*Contoh Beli Ketik .caraorder*')
let buy = (`「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${date}\n⌚ JAM     : ${time}\n📦 PRODUK     : ${text}\n✨ STATUS  : Pending\`\`\`\n\n*--------------------------*\n\n*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya🙏*\n*Atau Chat : Wa.me//${jasa}*`)
zyko.sendMessage(`${jasa}@s.whatsapp.net`, { text: buy }, { quoted: m })
if (m.isGroup) {
zyko.sendMessage(m.chat, { text: buy }, { quoted: m })
}
}
break
case "carabuy": case "caraorder": {
m.reply(`*📮 Cara Melakukan Topup/Order Pada Bot WhatsApp*

1. Silahkan lihat listprice/harga terlebih dahulu
2. Ingat Kode Produk yang ada pada list harga tadi
3. Silahkan pastikan bahwa kode produk benar
4. Jika sudah,ketik seperti ini :
#order panel ram 1gb cpu 30%

*Keterangan :*
• _jika tidak paham silahkan tanya kan pada owner dengan ketik .owner_`)
}
break
case 'addlist':
function _0x188a(){var _0x1826ea=['includes','existsSync','\x20*Nama\x20Item@Item*\x0a\x0a_Contoh_\x0a\x0a','List\x20respon\x20dengan\x20key\x20:\x20*','4189977apUbUl','1041220qBKFWy','16931mlUIGL','12EcEzCR','\x20namalist@List','8LRjgxN','2199156KzxPoa','525546zTZioO','106oCaYir','*\x20sudah\x20ada\x20di\x20group\x20ini.','14868lNDkoc','group','slice','split','test','462xxGRbE','unlinkSync','Sukses\x20set\x20list\x20message\x20dengan\x20key\x20:\x20*','845pXIMgJ','Sukses\x20Add\x20List\x20Dengan\x20Kunci\x20:\x20*','74053nfNvGL','downloadAndSaveMediaMessage'];_0x188a=function(){return _0x1826ea;};return _0x188a();}function _0x2161ca(_0x5b3072,_0x19f425){return _0x21a8(_0x5b3072-0xfc,_0x19f425);}(function(_0x4f9e61,_0x3253e4){var _0x26454b=_0x4f9e61();function _0xbfa347(_0x632218,_0x1ff859){return _0x21a8(_0x632218-0x25e,_0x1ff859);}while(!![]){try{var _0x127416=-parseInt(_0xbfa347(0x3a2,0x397))/0x1*(-parseInt(_0xbfa347(0x3a8,0x3a6))/0x2)+parseInt(_0xbfa347(0x3a6,0x39d))/0x3+parseInt(_0xbfa347(0x3aa,0x3ab))/0x4*(-parseInt(_0xbfa347(0x3b2,0x3bd))/0x5)+parseInt(_0xbfa347(0x3af,0x3af))/0x6*(-parseInt(_0xbfa347(0x3b4,0x3b3))/0x7)+-parseInt(_0xbfa347(0x3a5,0x3a3))/0x8*(-parseInt(_0xbfa347(0x3a7,0x3b1))/0x9)+-parseInt(_0xbfa347(0x3bb,0x3be))/0xa+parseInt(_0xbfa347(0x3ba,0x3c2))/0xb*(parseInt(_0xbfa347(0x3a3,0x3b0))/0xc);if(_0x127416===_0x3253e4)break;else _0x26454b['push'](_0x26454b['shift']());}catch(_0x5baf36){_0x26454b['push'](_0x26454b['shift']());}}}(_0x188a,0x7fa42));if(!isOwner)return reply(mess['owner']);if(!m['isGroup'])return reply(mess[_0x2161ca(0x249,0x24d)]);var args1=text['split']('@')[0x0],args2=text[_0x2161ca(0x24b,0x246)]('@')[0x1];function _0x21a8(_0x474419,_0x112e86){var _0x188aaa=_0x188a();return _0x21a8=function(_0x21a8cf,_0x380815){_0x21a8cf=_0x21a8cf-0x144;var _0x10d027=_0x188aaa[_0x21a8cf];return _0x10d027;},_0x21a8(_0x474419,_0x112e86);}if(!q[_0x2161ca(0x254,0x25f)]('@'))return reply('Gunakan\x20dengan\x20cara\x20'+(prefix+command[_0x2161ca(0x24a,0x242)](0x0))+_0x2161ca(0x256,0x251)+(prefix+command[_0x2161ca(0x24a,0x242)](0x0))+_0x2161ca(0x242,0x23e));if(isAlreadyResponList(from,args1,db_respon_list))return reply(_0x2161ca(0x257,0x24f)+args1+_0x2161ca(0x247,0x251));if(/image/[_0x2161ca(0x24c,0x256)](mime)){media=await zyko[_0x2161ca(0x253,0x250)](quoted),mem=await TelegraPh(media),addResponList(from,args1,args2,!![],''+mem,db_respon_list),reply(_0x2161ca(0x24f,0x250)+args1+'*');if(fs[_0x2161ca(0x255,0x252)](media))fs[_0x2161ca(0x24e,0x259)](media);}else addResponList(from,args1,args2,![],'-',db_respon_list),reply(_0x2161ca(0x251,0x246)+args1+'*');
break
case 'dellist':
(function(_0x51864a,_0x2c0b46){function _0x2e272c(_0x43be06,_0x950e3c){return _0x30ef(_0x43be06-0x272,_0x950e3c);}var _0x2cbc58=_0x51864a();while(!![]){try{var _0x9c5001=-parseInt(_0x2e272c(0x332,0x33a))/0x1*(-parseInt(_0x2e272c(0x333,0x32f))/0x2)+-parseInt(_0x2e272c(0x33d,0x33e))/0x3+parseInt(_0x2e272c(0x33b,0x343))/0x4+parseInt(_0x2e272c(0x33c,0x33f))/0x5+-parseInt(_0x2e272c(0x33a,0x344))/0x6*(parseInt(_0x2e272c(0x32d,0x333))/0x7)+-parseInt(_0x2e272c(0x335,0x33f))/0x8+parseInt(_0x2e272c(0x331,0x331))/0x9*(parseInt(_0x2e272c(0x334,0x33d))/0xa);if(_0x9c5001===_0x2c0b46)break;else _0x2cbc58['push'](_0x2cbc58['shift']());}catch(_0xb343aa){_0x2cbc58['push'](_0x2cbc58['shift']());}}}(_0x3b5a,0x1fe7c));if(!isOwner)return reply(mess[_0x37032d(-0x30e,-0x305)]);if(!m[_0x37032d(-0x31b,-0x319)])return reply(mess[_0x37032d(-0x316,-0x315)]);if(db_respon_list['length']===0x0)return reply(_0x37032d(-0x317,-0x317));function _0x3b5a(){var _0x3b9e46=['List\x20Item\x20dengan\x20Nama\x20*','Belum\x20ada\x20list\x20message\x20di\x20database','group','203373jZFCOT','1jhGrNA','163670SXJCFL','150MpGVtE','769952iLWfGq','slice','\x20*Nama\x20Item*\x0a\x0a_Contoh_\x0a\x0a','owner','\x20namalist','498qAfPhQ','69712BQureP','951145CngebQ','750132KGPlxx','Sukses\x20delete\x20list\x20message\x20dengan\x20key\x20*','isGroup','*\x20tidak\x20ada\x20di\x20database!','12775EGUQUY'];_0x3b5a=function(){return _0x3b9e46;};return _0x3b5a();}if(!q)return reply('Gunakan\x20dengan\x20cara\x20'+command[_0x37032d(-0x310,-0x313)](0x1)+_0x37032d(-0x30f,-0x30f)+command[_0x37032d(-0x310,-0x30d)](0x1)+_0x37032d(-0x30d,-0x307));if(!isAlreadyResponList(from,q,db_respon_list))return reply(_0x37032d(-0x318,-0x31d)+q+_0x37032d(-0x31a,-0x314));delResponList(from,q,db_respon_list);function _0x30ef(_0x1e9199,_0x3caf82){var _0x3b5a10=_0x3b5a();return _0x30ef=function(_0x30ef21,_0x315a6f){_0x30ef21=_0x30ef21-0xb9;var _0x3e9943=_0x3b5a10[_0x30ef21];return _0x3e9943;},_0x30ef(_0x1e9199,_0x3caf82);}function _0x37032d(_0x1ee0b7,_0x6aa986){return _0x30ef(_0x1ee0b7- -0x3d4,_0x6aa986);}reply(_0x37032d(-0x308,-0x2ff)+q+'*');
break
case 'updatelist':
(function(_0x1fec75,_0x75f63a){var _0x10e016=_0x1fec75();function _0x4b8f68(_0x903b16,_0x3ce9d4){return _0x2613(_0x903b16-0x1b1,_0x3ce9d4);}while(!![]){try{var _0x43cff3=-parseInt(_0x4b8f68(0x21f,0x227))/0x1+-parseInt(_0x4b8f68(0x225,0x225))/0x2*(-parseInt(_0x4b8f68(0x22e,0x237))/0x3)+parseInt(_0x4b8f68(0x230,0x225))/0x4*(parseInt(_0x4b8f68(0x231,0x233))/0x5)+parseInt(_0x4b8f68(0x224,0x222))/0x6+parseInt(_0x4b8f68(0x22f,0x236))/0x7+parseInt(_0x4b8f68(0x223,0x229))/0x8*(-parseInt(_0x4b8f68(0x221,0x22d))/0x9)+-parseInt(_0x4b8f68(0x226,0x21c))/0xa;if(_0x43cff3===_0x75f63a)break;else _0x10e016['push'](_0x10e016['shift']());}catch(_0x184e9a){_0x10e016['push'](_0x10e016['shift']());}}}(_0x56ea,0x45ac7));if(!isOwner)return reply(mess[_0x6ca23e(0x279,0x273)]);if(!m['isGroup'])return reply(mess[_0x6ca23e(0x27f,0x27d)]);var args1=q[_0x6ca23e(0x272,0x27d)]('@')[0x0],args2=q[_0x6ca23e(0x272,0x277)]('@')[0x1];if(!q[_0x6ca23e(0x286,0x27f)]('@'))return reply('Gunakan\x20dengan\x20cara\x20'+command['slice'](0x1)+_0x6ca23e(0x27d,0x276)+command[_0x6ca23e(0x287,0x28b)](0x1)+'\x20namalist@List');function _0x6ca23e(_0x4262c5,_0x4b1e2f){return _0x2613(_0x4262c5-0x203,_0x4b1e2f);}if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0x6ca23e(0x274,0x268)+args1+_0x6ca23e(0x27e,0x27a));if(/image/[_0x6ca23e(0x288,0x280)](mime)){media=await zyko[_0x6ca23e(0x284,0x28f)](quoted),mem=await TelegraPh(media),updateResponList(from,args1,args2,!![],''+mem,db_respon_list),reply(_0x6ca23e(0x27c,0x275)+args1+'*');if(fs[_0x6ca23e(0x27b,0x272)](media))fs[_0x6ca23e(0x27a,0x270)](media);}else updateResponList(from,args1,args2,![],'-',db_respon_list),reply(_0x6ca23e(0x285,0x27a)+args1+'*');function _0x2613(_0x2d2715,_0x17bcd3){var _0x56ea90=_0x56ea();return _0x2613=function(_0x2613ae,_0x3da915){_0x2613ae=_0x2613ae-0x6e;var _0x16e5d5=_0x56ea90[_0x2613ae];return _0x16e5d5;},_0x2613(_0x2d2715,_0x17bcd3);}function _0x56ea(){var _0x5706ae=['59151SSMsQO','779583PaXzKF','207132vybflB','35yeaLpW','downloadAndSaveMediaMessage','Sukses\x20update\x20respon\x20list\x20dengan\x20key\x20*','includes','slice','test','393977DHGbAi','split','2408139sgqyKX','Maaf,\x20untuk\x20key\x20*','8BMJDhv','1448250rFgluH','28yGyFxX','443320vCUzXB','owner','unlinkSync','existsSync','Sukses\x20update\x20list\x20message\x20dengan\x20key\x20:\x20*','\x20*Nama\x20Item@Item*\x0a\x0a_Contoh_\x0a\x0a','*\x20belum\x20terdaftar\x20di\x20group\x20ini','group'];_0x56ea=function(){return _0x5706ae;};return _0x56ea();}
break
case "list": {
if (!m.isGroup) return reply(mess.group)
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (db_respon_list.length === 0) return reply(`*Belum ada list message di Group ini*`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`*Belum ada list message yang terdaftar di Group ini*`)
let no = 0
let teks = `*── 「 LIST STORE 」 ──*\n\n*👥 Group : ${groupName}*\n*📅 Tanggal : ${date}*\n*🕐 Waktu : ${time}*\n\n*_Untuk melihat list, silahkan ketik sesuai key list dibawah_*\n\n`
for (let x of db_respon_list) {
if (x.id === m.chat) {
teks += `*${no+=1}. ${x.key}*\n`
}
}
reply(teks)
}
break
case "done":{
if (!isOwner) return reply(mess.owner)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return reply("*Reply pesanannya!*")
let tekk = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let sukses = `*── 「 TRANSAKSI SUKSES 」 ──*\n\n\`\`\`👤 Buyer    : @${users.split("@")[0]}\n📝 Pesanan  : ${tekk}\n📆 Tanggal  : ${date}\n🕐 Waktu    : ${time}\n⏳ Status   : Sukses\`\`\`\n\n*Catatan :*\n*Terimakasih sudah order di ${namaowner} kak. ditunggu orderan selanjutnya yah 😗*`
zyko.sendMessage(m.chat, { text: sukses, mentions: [users] }, { quoted: m })
}
break
case "proses":{
if (!isOwner) return reply(mess.owner)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return reply("*Reply pesanannya!*")
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let proses = `*── 「 STATUS TRANSAKSI 」 ──*\n\n\`\`\`👤 Buyer    : @${users.split("@")[0]}\n📝 Pesanan  : ${tek}\n📆 Tanggal  : ${date}\n🕐 Waktu    : ${time}\n⏳ Status   : Proses\`\`\`\n\n*Catatan :*\n*Transaksi sedang diproses. Silahkan menunggu informasi berikutnya.*`
m.quoted.copyNForward(develover, true)
zyko.sendMessage(m.chat, { text: proses, mentions: [users] }, { quoted: m })
}
break
case 'bayar': {
tol = `*_PEMBAYARAN ALL QRIS_*
Dana
Ovo
Orku
Gopay
Ketik Pembayaran Contoh .dana
`
reply(tol)
}
break
case 'orkut' :
zyko.sendMessage(from, { image: {url : "https://telegra.ph/file/0ebc4a733052351b2b8e7.jpg"}, caption: "Silahkan Scan QR OrderKuota Diatas Jangan Lupa Kirim Bukti Transaksinya Ya" }, { quoted: zyko.chat })
break

case 'dana' :
zyko.sendMessage(from, { image:{url : "https://telegra.ph/file/51b29b4f9bdacb9692d47.png"}, caption: "Silahkan Scan Code Qr Diatas Jangan Lupa Kirim Bukti Transaksinya Ke wa.me/6285175463174" }, { quoted: zyko.chat })
break

case 'gopay': case 'gojek' :
zyko.sendMessage(from, { image: {url : "https://telegra.ph/file/3a146c6a231be82220606.jpg"}, caption: "Silahkan Scan Code Qr Diatas Jangan Lupa Kirim Bukti Transaksinya Ke wa.me/6285175463174" }, { quoted: zyko.chat })
break

case 'qrish': case 'qr': case 'qris' :
zyko.sendMessage(from, { image: {url : "https://telegra.ph/file/0ebc4a733052351b2b8e7.jpg"}, caption: "Silahkan Scan Code Qr Diatas Jangan Lupa Kirim Bukti Transaksinya Ya" }, { quoted: zyko.chat })
break
case 'buatpanel': {
lop = `🌟🌟🌟 PROMO SPESIAL! 🌟🌟🌟
🔥🔥🔥 PANEL INSTALASI HANYA 15K! 🔥🔥🔥

Butuh bantuan untuk menginstal panel dengan mudah dan cepat? Jangan khawatir! SunShine hadir untuk memberikan solusi terbaik untuk Anda.

✨ Tawaran Istimewa ✨
🌈 Jasa instalasi panel seharga 15K saja!
💥 Dapatkan panel yang Anda inginkan tanpa ribet!
💻 Kami akan menangani semua langkah instalasi untuk Anda.
🌟 Tingkatkan pengalaman Anda dalam mengelola bot dan aplikasi dengan mudah!

✅ Keuntungan Jasa Instalasi kami:
🔹 Profesional dan Terpercaya
🔹 Proses Instalasi yang Cepat
🔹 Bisa disesuaikan dengan kebutuhan Anda
🔹 Bantuan teknis yang responsif

Jadi, tunggu apa lagi? Manfaatkan promo spesial ini sekarang juga!

📲 Hubungi kami melalui WhatsApp:
wa.me/${jasa}

🌟🌟🌟 SunShine - Solusi Terbaik untuk Anda! 🌟🌟🌟`
reply(lop)
}
break 
case 'jasarun': {
lol = `JASA RUN PANNEL
-Run 7 Hari : 5k
-Run 30 Hari : 15k`
reply(lol)
}
break
case 'promo': {
lo = ` PROMO PANNEL
RAM 8GB CPU 175% 10K/BULAN
RAM,DISK,CPU, UNLIMITED 15K/BULAN
`
reply(lo)
}
break
case 'buysc': {
pl = ` BUY SCRIPT SUNG PM
https://wa.me/6285175463174
`
reply(pl)
}
break 
//Menu Pannel
case 'sgc': {
op = `⚡PANNEL BY SunShine ⚡
Klik link Bawah Untuk Join Group
${sgc}
`
reply(op)
}
break 
case 'listpanel': case 'panel': case 'buypanel':{
let menu_nya =`Hai Kak ${pushname}

*LIST HARGA PANEL BY SunShine*

- RAM 1GB CPU 30% 3K/BULAN
- RAM 2GB CPU 50% 7K/BULAN
- RAM 3GB CPU 75% 10K/BULAN
- RAM 4GB CPU 100% 15K/BULAN
- RAM 5GB CPU 130% 20K/BULAN
- RAM 6GB CPU 150% 25K/BULAN
- RAM 7GB CPU 175% 30K/BULAN
- RAM 8GB CPU 175% 35K/BULAN

- RAM,CPU,DISK UNLIMITED 15K/BATAS

- RAM,CPU,DISK UNLIMITED 40K/BULAN

- ADMIN PANEL 50K/BULAN

*[ KEUNTUNGAN PANEL ]*

- BISA BUAT RUN BOT NO RIBET
- WEBSITE/APK CLOSE BOT TETAP ON/JALAN
- GA BOROS KUOTA
- GA MENUHIN MEMORI
- BISA OPEN MURBUG

*[ KEUNTUNGAN ADMIN PANEL ]*

- BISA CREATE PANEL SENDIRI
- BISA CREATE PANEL SEPUAS NYA
- BISA JUAL PANEL KE ORANG LAIN
- BISA BALMOD KALO LU NIAT JUALAN

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

PROSES 1-3 MENIT
PEMBAYARAN LEWAT
VIA DANA, QRISH, GOPAY

*MINAT? CHAT*
Wa.me/6285175463174

*© SunShine*`
zyko.sendMessage(m.chat, { image: thumb, caption: `${menu_nya}` }, {quoted: zyko.chat})
}
break
case 'listvps': case 'vps': case 'buyvps':{
let menu_nya =`Hai Kak ${pushname}

Sudahkah Anda mencoba membeli VPS? 💻 Jika belum, inilah LIST HARGA VPS SunShine yang dapat membuat bisnis online Anda semakin terdongkrak! 🚀

🔹 RAM 2GB CORE 1: Rp15K
🔹 RAM 2GB CORE 2: Rp20K
🔹 RAM 4GB CORE 2: Rp30K
🔹 RAM 8GB CORE 4: Rp50K

NOTE:
✨ Kami memberikan GARANSI 7 HARI untuk memberikan Anda jaminan kepuasan penuh.
⏰ MASA AKTIF 1 BULAN yang memberikan Anda fleksibilitas dan kebebasan dalam menjalankan proyek Anda.
💡 VPS kami menggunakan platform DIGITALOCEAN (DO) yang terkenal akan keandalan dan performa tinggi.

MINAT? 💬 Jangan ragu untuk menghubungi kami melalui WhatsApp di nomor ini:
wa.me/${jasa}

© SunShine 🌟`
zyko.sendMessage(m.chat, { image: thumb, caption: `${menu_nya}` }, {quoted: zyko.chat})
}
break
///Pesan buyer
case 'pesan': case 'buyer': {
if (!isOwner) return reply(mess.owner)
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
zyko.sendText(mention, tujuan)
} else {
zyko.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await zyko.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
zyko.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })
}
break
//MENU SELLER
case 'addseler': case 'addseller':{
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @tag/nomor`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let cekadd = await zyko.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekadd.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/json/seller.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
}
break
case 'delseler': case 'delseller':{
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @tag/nomor`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/json/seller.json', JSON.stringify(owner))
reply(`Nomor ${ya} Sudah Tidak Bisa Add Server`)
}
break
case 'listseler': case 'listseller':{
if (cek("id", m.sender) == null) return reply(mess.notregist)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 
if (!isOwner) return reply(mess.owner)
let listseller =`*LIST SELLER SunShine*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listseller +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listseller +=`Untuk Menghapus Akses Seller Ketik ${prefix}delseler 628xxx/@tag`
zyko.sendMessage(m.chat, {text: listseller },{quoted: zyko.chat})
}
break
//Create Panel Simple 1GB - UNLI
//Bagian Reseller Menu
case "1gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1000"
let cpu = "30"
let disk = "1000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}
break
case "2gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2000"
let cpu = "50"
let disk = "2000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}
break
case "3gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3000"
let cpu = "75"
let disk = "3000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break
case "4gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4000"
let cpu = "100"
let disk = "4000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break
case "5gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5000"
let cpu = "130"
let disk = "5000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break
case "6gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6000"
let cpu = "150"
let disk = "6000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break

case "unli": {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u, {text: ctf },{quoted: zyko.chat})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB

`)

}

break
// MENU PANEL BY ZYKOMD
////cret admin
case "createadmin": {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await zyko.sendMessage(m.chat, { text: `

*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
️CREATED AT: ${week} ${date}
JAM : ${jam} WIB


*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`, mentions:[u],
})
zyko.sendMessage(u, { text: `Hai Kak ${pushname} 

*BERIKUT DETAIL AKUN ADMIN PANEL ANDA*\n
 
ID: ${user.id}
EMAIL: ${user.email}
USERNAME: ${user.username}
PASSWORD: ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN: ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us



*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}`,
})
}
break
case 'addusr': {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
//let password
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[5]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await zyko.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${week} ${date}
JAM : ${jam} WIB

LOGIN: ${domain}
*Password telah dikirim di private chat @${u.split`@`[0]}*`, mentions:[u],
})
zyko.sendMessage(u, {
text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
🆔ID: ${user.id}
📬EMAIL : ${email}
👤USERNAME: ${username}
🔐PASSWORD: ${password.toString()} 
☢️CREATED AT: ${week} ${date}
⌚JAM : ${jam} WIB

🖥️LOGIN: ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}`,

})
}
break
case 'delusr': {
if (!isOwner) return reply(mess.owner)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
//let res = await f.json()
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
break
case "listusr": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
}
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await zyko.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey
}
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
  messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
  messageText += `${u.username}\n`;
  messageText += `${u.first_name} ${u.last_name}\n\n`;
}
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await zyko.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'detusr': {
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${week} ${date}\`\`\``)
}
break
case 'addsrv': {
if (!isOwner) return reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,desc,userId,15,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
//console.log(data.attributes.startup)
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 20,
"allocations": 0,
},
// "allocation": {
// "default": 36
// }
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
JAM : ${jam} WIB
`)
}
break
case 'delsrv': {
if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'listsrv': {
if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let messageText = "Berikut list selver:\n\n";

for (let server of servers) {
let s = server.attributes
messageText += `ID: ${s.id} - Status: ${s.attributes?.server?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${s.name}\n`;
messageText += `${s.name} ${s.name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Selver: ${res.meta.pagination.count}`;
  
  await zyko.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'detsrv': {
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey
}
})
let data = await f2.json();
let t = data.attributes
reply(`*${s.name.toUpperCase()} SERVER DETAILS*

\`\`\`STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${week} ${date}\`\`\``)
}
break
case 'reinstall': {
if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv': {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
zyko.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
console.log(util.format(err))
let e = String(err)
zyko.sendMessage(`${global.owner}@s.whatsapp.net`, {text:e})
}
}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
