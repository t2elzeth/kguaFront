import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require("nodemailer")

const senderEmail = process.env.SENDER_EMAIL || "sales@ioka.kz"
const senderEmailPass = process.env.SENDER_EMAIL_PASSWORD || "uAATIa13)xro"
const host = "smtp.mail.ru"

const transporter = nodemailer.createTransport({
  host: host,
  port: 465,
  secure: true,
  auth: {
    user: senderEmail,
    pass: senderEmailPass
  }
})

export default async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const { 
      email,
      name,
      phoneNumber,
      companySite,
      moreInfo,
      paymentsVolume
        } = req.body
  
    if (email === "" || name === "" || phoneNumber === "") {
      res.status(403).send("Заполнены не все обязательные поля")

      return
    }

    const mailerRes = await mailer({ email, name, moreInfo, companySite, phoneNumber, paymentsVolume })

    res.send(mailerRes)
  } catch(err) {
    console.log("Something went wrong: ", err)
  }
}

const mailer = ({ email, name, text, companySite, phoneNumber, paymentsVolume }: any) => {
  const message = {
    from: senderEmail,
    to: senderEmail,
    subject: `Новая заявка на подключение от ${name} <${email}>`,
    text: 
    ` Имя: ${name}
      Email: ${email}
      Номер телефона: ${phoneNumber}
      Сайт компании: ${companySite}
      Объем продаж: ${paymentsVolume}
      Дополнительно: ${text}`,
    replyTo: senderEmail
    }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error: any, info: any) =>
    error ? reject(error) : resolve(info)
    )
  })
}