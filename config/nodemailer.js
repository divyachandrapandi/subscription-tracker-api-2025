import nodemailer from 'nodemailer';

import { EMAIL_PASSWORD, ACCOUNT_EMAIL } from './env.js'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ACCOUNT_EMAIL,
        pass: EMAIL_PASSWORD
    }
})

export default transporter;