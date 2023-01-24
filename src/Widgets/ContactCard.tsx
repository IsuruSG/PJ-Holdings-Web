import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import IContactCard from '@/Interfaces/IContactCard';
import Call from '@mui/icons-material/Call';
import LocationOn from '@mui/icons-material/LocationOn';

const ContactCard: React.FC<IContactCard> = ({ children }) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = async () => {
    console.log('pressed!');

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: email,
        name: name,
        subject: subject,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.error(error);
      return;
    }

    alert('E-mail has sent!');
  };

  return (
    <div className="flex w-full sm:space-x-4 justify-around sm:p-9 items-center rounded-2xl bg-[#232323]/80 backdrop-blur-sm">
      <section className="flex-col items-center justify-between flex-1 hidden px-3 space-y-9 lg:flex">
        <section className="flex flex-col flex-1 w-full">
          <span className="text-3xl font-black text-center text-white mb-9">
            Contact Us
          </span>
          <span className="text-sm text-center text-gray-150">{children}</span>
        </section>
        <section className="flex flex-col items-center flex-1 w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-3 text-sm">
              <MailIcon className="text-4xl text-yellow-450" />
              <section>
                <div className="text-white">Email</div>
                <div className="text-white/60">info@pjholdings.eu</div>
              </section>
            </div>
            <div className="flex space-x-3 text-sm">
              <Call className="text-4xl text-yellow-450" />
              <section>
                <div className="text-white">Phone</div>
                <div className="text-white/60">+371 28062741</div>
              </section>
            </div>
            <div className="flex space-x-3 text-sm">
              <LocationOn className="text-4xl text-yellow-450" />
              <section>
                <div className="text-white">Phone</div>
                <div className="text-white/60">
                  Matisa Lela 78A, Riga, LV-1009, Latvia
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
      <section className="flex items-center justify-center flex-1 px-6 rounded-xl py-9 sm:px-2 backdrop-blur">
        <form
          action="#"
          onSubmit={() => handleSubmit()}
          className="flex flex-col w-full px-4 space-y-10 sm:px-0 sm:w-2/3"
        >
          <Input
            onChange={(text) => setName(text)}
            type="text"
            label="Name"
            placeholder="Name"
          />
          <Input
            onChange={(text) => setEmail(text)}
            type="email"
            label="E-mail Address"
            placeholder="E-mail Address"
          />
          <Input
            onChange={(text) => setSubject(text)}
            type="text"
            label="Subject"
            placeholder="Subject"
          />
          <Input
            onChange={(text) => setMessage(text)}
            type="text"
            label="Message"
            placeholder="Message"
            multilined
          />
          <div className="flex justify-center">
            <Button type="submit" title="Send" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactCard;
