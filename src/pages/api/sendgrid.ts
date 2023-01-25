import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_TT || 'abc');

async function sendEmail(req: any, res: any) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `info@pjholdings.eu`, // Your email where you'll receive emails
      from: 'info@pjholdings.eu', // your website email address here
      subject: `${req.body.subject}`,
      html: `
      <div style="background-color: #f3a904; border-radius: 12px; padding: 20px; display:flex; justify-content: center;">
        <div style="width: 60%; border: 2px solid white; border-radius: 12px; padding-left: 20px; padding-right: 20px;">
          <div style="text-align: center;">
            <h3 style="color:#1A1A1A; font-size: 28px">Contact Us Form Submission</h3>
          </div>
          <div style="margin-top: 24px">
            <div>
              <p style="color:#565656; margin-top: 16px"><span style="font-weight: 700; color:white;">Name :</span>${
                ' ' + req.body.name
              }</p>
              <p style="color:#565656; margin-top: 16px"><span style="font-weight: 700; color:white;">Email :</span>${
                ' ' + req.body.email
              }</p>
            </div>
            <div style="margin-top: 16px">
              <p style="color:#565656;"><span style="font-weight: 700; color:white;">Subject :</span>${
                ' ' + req.body.subject
              }</p>
              <p style="color:#565656;"><span style="font-weight: 700; color:white;">Message :</span>${
                ' ' + req.body.message
              }</p>
            </div>
          </div>
        </div>
      </div>`,
    });
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
