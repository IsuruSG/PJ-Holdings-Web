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
      <div
      style="
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        background-color: #1A1A1A;
      ">
        <div
          style="
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          ">
          <div>
            <p
              style="
                text-align: center;
                color: aliceblue;
                font-size: 24px;
                font-weight: 600;
              ">
              New Contact Form Submission
            </p>
            <p style="color: aliceblue; font-size: large; font-style: italic">
              A new contact form submission has been received on your website. The
              details of the submission are as follows
            </p>
            <div
              style="
                width: 55%;
                color: #f3a904;
                padding: 8px 0px 8px 20px;
                font-size: 18px;
              ">
              <p>
                Name : <span style="color: aliceblue; font-weight: 300">${req.body.name}</span>
              </p>
              <p>
                Email : <span style="color: aliceblue; font-weight: 300">${req.body.email}</span>
              </p>
              <p>
                Subject :
                <span style="color: aliceblue; font-weight: 300">${req.body.subject}</span>
              </p>
              <p>
                Message :
                <span style="color: aliceblue; font-weight: 300">${req.body.message}</span>
              </p>
            </div>
            <p style="color: aliceblue; font-size: large; font-style: italic">
              Please review and respond to the submission as soon as possible.
            </p>
            <p style="color: aliceblue; font-size: large; font-style: italic">
              Thank you,<br />
              PJ Holdings.
            </p>
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
