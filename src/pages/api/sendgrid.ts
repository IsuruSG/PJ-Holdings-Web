import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_TT || 'abc');

async function sendEmail(req: any, res: any) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `info@pjholdings.eu`, // Your email where you'll receive emails
      from: 'info@pjholdings.eu', // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>${req.body.message}</div>`,
    });
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
