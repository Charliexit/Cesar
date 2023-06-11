let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝑫𝒆𝒔𝒑𝒊𝒆𝒓𝒕𝒂 𝒀 𝑽𝒂𝒎𝒐𝒔 𝒂 𝑱𝒖𝒈𝒂𝒓 𝒇𝒓𝒆𝒆 𝒇𝒊𝒓𝒆👀🤣* ${pesan}`
let teks = `*𝑩𝒐𝒕 𝑫𝒆 𝑪𝒔𝒂𝒓𝒇𝒇𝒙 🌶️*\n\n ${oi}\n\n *𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝑮𝒆𝒏𝒆𝒓𝒂𝒍🔥*\n`
for (let mem of participants) {
teks += `😈 @${mem.id.split('@')[0]}\n`}
teks += `*𝑪𝒔𝒂𝒓𝒇𝒇𝒙*\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes)$/i
handler.admin = true
handler.group = true
export default handler

