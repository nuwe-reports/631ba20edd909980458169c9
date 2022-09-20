const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "fake user", // generated ethereal user
      pass: "fake password", // generated ethereal password
    },
  });

  transporter.verify(()=>{
    console.log("Ready for sending emails")
  })

module.exports = { transporter };
