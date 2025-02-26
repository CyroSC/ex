const fs = require('fs')

/** info id **/
global.owner = "628892172041@s.whatsapp.net"
global.idch = "120363319695428225@newsletter"

/** jika bernilai "true" berarti aktif, dan sebaliknya kalau "false" **/
global.status = true
global.welcome = false
global.antispam = true
global.autoread = false

/** sticker watermark **/
global.packname = 'www.putroxml.com'
global.author = 'Putt | XML'

/** link group atau link channel WhatsApp **/
global.linkch = 'https://whatsapp.com/channel/0029VakgVWQGE56drxQER50C'

/** limit user premium dan bukan premium **/
global.gcount = {
    prem : 500,
    user: 15
}

/** limit **/
global.limitCount = 10,

/** message **/
global.mess = {
    group: "wkwkwk? khusus grup",
    admin: "ngapain? khusus admin kocak",
    owner: "lawak, bukan owner",
    premium: "bukan user premium",
    botadmin: "bot bukan admin",
    limited: "limitmu habis, kembali besok/sore nanti",
    private: "khusus private chat"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
