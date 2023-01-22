import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import IContactCard from '@/Interfaces/IContactCard';
import Call from '@mui/icons-material/Call';
import LocationOn from '@mui/icons-material/LocationOn';

const ContactCard: React.FC<IContactCard> = ({ children }) => {
  return (
    <div className="flex w-full sm:space-x-4 justify-around sm:p-9 items-center rounded-2xl bg-[#232323]/80 backdrop-blur-sm">
      <section className="flex-1 hidden items-center lg:flex flex-col justify-between px-3 space-y-16">
        <section className="flex-1 flex w-full flex-col">
          <span className="text-3xl mb-9 text-center font-black text-white">
            Contact Us
          </span>
          <span className="text-sm text-gray-150 text-center">{children}</span>
        </section>
        <section className="flex-1 flex flex-col items-center w-full">
          <div className="flex flex-col space-y-8">
            <div className="flex space-x-3 text-sm">
              <MailIcon className="text-yellow-450 text-4xl" />
              <section>
                <div className="text-white">Email</div>
                <div className="text-white/60">info@pjholdings.eu</div>
              </section>
            </div>
            <div className="flex space-x-3 text-sm">
              <Call className="text-yellow-450 text-4xl" />
              <section>
                <div className="text-white">Phone</div>
                <div className="text-white/60">+371 28062741</div>
              </section>
            </div>
            <div className="flex space-x-3 text-sm">
              <LocationOn className="text-yellow-450 text-4xl" />
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
      <section className="flex-1 rounded-xl flex justify-center py-9 px-0 sm:px-2 items-center backdrop-blur">
        <form className="flex w-full px-4 sm:px-0 sm:w-2/3 flex-col space-y-10">
          <Input
            onChange={(text) => console.log(text)}
            type="text"
            label="Name"
            placeholder="Name"
          />
          <Input
            onChange={(text) => console.log(text)}
            type="email"
            label="E-mail Address"
            placeholder="E-mail Address"
          />
          <Input
            onChange={(text) => console.log(text)}
            type="text"
            label="Subject"
            placeholder="Subject"
          />
          <Input
            onChange={(text) => console.log(text)}
            type="text"
            label="Message"
            placeholder="Message"
            multilined
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              title="Send"
              onClick={() => console.log('')}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactCard;
