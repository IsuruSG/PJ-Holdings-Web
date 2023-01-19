import React from 'react';

import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import servicesList from '@/Constants/services-data';
import Link from 'next/link';

const Footer = () => {
  const contactInfo = () => (
    <div className="flex flex-col space-y-6">
      <span className="flex space-x-3">
        <MailIcon className="text-yellow-450" /> <span>info@pjholdings.eu</span>
      </span>
      <span className="flex space-x-3">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100087504332993"
        >
          <FacebookIcon className="text-yellow-450" />
        </Link>{' '}
        <span>PJ Holdings SIA</span>
      </span>
      <span className="flex space-x-3">
        <CallIcon className="text-yellow-450" /> <span>+371 28062741</span>
      </span>
      <span className="flex space-x-3">
        <WhatsAppIcon className="text-yellow-450" /> <span>+371 28062741</span>
      </span>
      <span className="flex space-x-3">
        <LocationOnIcon className="text-yellow-450" />{' '}
        <span className="flex flex-col">
          <span>Matisa Lela 78A, Riga, LV-1009,</span> <span>Latvia</span>
        </span>
      </span>
    </div>
  );

  const servicesInfo = servicesList.map(
    (
      service: {
        title: string;
        link: string;
        description: string;
        Icon: any;
      },
      index: number
    ) => (
      <Link
        key={service.title + index}
        className="hover:text-yellow-450 flex space-x-3 duration-200"
        href={service.link}
        scroll={false}
      >
        <service.Icon className="text-yellow-450" />{' '}
        <span>{service.title}</span>
      </Link>
    )
  );

  return (
    <div
      className={[
        'bg-gray-850/80',
        'backdrop-blur-sm',
        'w-full',
        'flex',
        'space-y-10',
        'md:space-y-0',
        'flex-col',
        'md:flex-row',
        'justify-around',
        'p-10',
      ].join(' ')}
    >
      <section className="text-white flex-1 w-full flex text-center justify-center items-center">
        SIA PJ Holdings has established a reputation in the construction
        industry as a trendsetting residential and commercial building
        constructor that undertakes and delivers high quality innovative
        building projects. At present we have undertaken and successfully
        completed several projects for distinguished commercial and residential
        clients of both in Latvia and Europe.
      </section>
      <section className="text-white flex-1 flex flex-col items-center">
        <div className=" flex flex-col space-y-8">
          <span className="text-2xl">Contact Details</span>
          {contactInfo()}
        </div>
      </section>
      <section className="text-white flex-1 flex flex-col items-center">
        <div className=" flex flex-col space-y-8">
          <span className="text-2xl">Our Services</span>
          <div className="flex flex-col space-y-2">{servicesInfo}</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
