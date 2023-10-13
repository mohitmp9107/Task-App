const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.sendgridAPIKey);

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'mohitsaininith@gmail.com',
        subject:'Thanks for joining in',
        text:'Welcome to the app ${name}.',
        html:''
    })
}
const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'mohitsaininith@gmail.com',
        subject:'Sorry to see you go!',
        text:'Welcome to the app ${name}.',
        html:''
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}