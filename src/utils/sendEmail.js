const nodemailer = require('nodemailer');
async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'sonuee15@gmail.com',
            pass: 'gohl held otfh himd' 
        }
    });

    const mailOptions = {
        from: 'sonuee15@gmail.com',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
