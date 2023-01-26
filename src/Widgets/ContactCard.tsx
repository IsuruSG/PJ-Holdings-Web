import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import IContactCard from '@/Interfaces/IContactCard';
import Call from '@mui/icons-material/Call';
import LocationOn from '@mui/icons-material/LocationOn';
import Dialog from '@mui/material/Dialog';
import Lottie from '@/Components/Lottie';
import Success from '@/assets/lotties/success.json';
import Error from '@/assets/lotties/error.json';

const ContactCard: React.FC<IContactCard> = ({ children }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  interface IContactForm {
    name: string;
    emailaddress: string;
    subject: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();
  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    sendMail(data);
  };

  const sendMail = async (info: IContactForm) => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: info.emailaddress,
        name: info.name,
        subject: info.subject,
        message: info.message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.error(error);
      setError(true);
      return;
    }
    setSuccess(true);
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-4 space-y-10 sm:px-0 sm:w-2/3"
        >
          <Input
            error={!!errors.name}
            register={register}
            helperText="this field is required!"
            validations={{ required: true }}
            type="text"
            label="Name"
            placeholder="Name"
          />
          <Input
            error={!!errors.emailaddress}
            register={register}
            helperText="please enter a valid e-mail!"
            validations={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            }}
            type="email"
            label="Email Address"
            placeholder="E-mail Address"
          />
          <Input
            error={!!errors.subject}
            register={register}
            helperText="this field is required!"
            validations={{ required: true }}
            type="text"
            label="Subject"
            placeholder="Subject"
          />
          <Input
            error={!!errors.message}
            register={register}
            helperText="this field is required!"
            validations={{ required: true }}
            type="text"
            label="Message"
            placeholder="Message"
            multilined
          />
          <div className="flex justify-center">
            <Button type="submit" title="Send" />
          </div>
        </form>
        <Dialog
          open={success || error}
          onClose={() => {
            setSuccess(false);
            setError(false);
          }}
        >
          <section className="p-10 flex flex-col lg:flex-row justify-center items-center">
            <div className="flex-1">
              <Lottie source={success ? Success : Error} />
            </div>
            <div className="text-white flex-1 text-2xl text-center">
              {success ? (
                'Your message has sent!'
              ) : (
                <section className="flex flex-col">
                  <span className="text-xl">Something Went Wrong!</span>
                  <span>Please Try Again!</span>
                </section>
              )}
            </div>
          </section>
        </Dialog>
      </section>
    </div>
  );
};

export default ContactCard;
