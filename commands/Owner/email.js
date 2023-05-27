async function email(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)

    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
        host: "mail.prevosgaming.de",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'bocchibot@prevosgaming.de', // generated ethereal user
            pass: '!BocchiBot!', // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"BocchiBot" <bocchibot@prevosgaming.de>', // sender address
        to: "nando.darr@hotmail.com, hartung086@gmail.com", // list of receivers
        subject: "Anfrage ans Team", // Subject line
        text: `${a.q}`, // plain text body
        html: `<b>${a.q}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
}

module.exports = {
    email
}

//            case prefix + 'testemail':
//const emailtest = await db.getNeu('team', { 'id': sender.id })
//console.log(sender.id + '   ' + emailtest.email)
//break
