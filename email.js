const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const nodemailer = require("nodemailer");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Email Service API");
});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "cakef3624@gmail.com",
    pass: "Api@615324",
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "cakef3624@gmail.com",
    to: "arpitgauravgoldisahay007@gmail.com",
    subject: "TESTING API",
    text: "Good to get such testing thing",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
