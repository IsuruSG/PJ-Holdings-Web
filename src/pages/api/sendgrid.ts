import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_TT || 'abc');

async function sendEmail(req: any, res: any) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `it19012902@my.sliit.lk`, // Your email where you'll receive emails
      from: 'runkavisha@gmail.com', // your website email address here
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
