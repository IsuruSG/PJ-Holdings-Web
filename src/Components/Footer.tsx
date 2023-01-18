import React from 'react';

import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import servicesList from '@/Constants/services';
import Link from 'next/link';

const Footer = () => {
  const contactInfo = () => (
    <div className="flex flex-col space-y-2">
      <span>
        <MailIcon /> info@pjholdings.me
      </span>
      <span>
        <FacebookIcon /> PJ Holdings SIA
      </span>
      <span>
        <WhatsAppIcon /> +371 28062741
      </span>
      <span>
        <LocationOnIcon /> Matisa Lela 78A, Riga, LV-1009, Latvia
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
        className="hover:text-yellow-450 duration-200"
        href={service.link}
      >
        <service.Icon /> {service.title}
      </Link>
    )
  );

  return (
    <div
      className={[
        'bg-gray-850/80',
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
      <section className="text-white flex-1 w-full flex justify-center items-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
        dignissim congue. Vestibulum eget ultricies enim. Phasellus suscipit
        vestibulum libero sit amet elementum.
      </section>
      <section className="text-white flex-1 flex flex-col items-center">
        <span className="text-xl pb-5">Contact Details</span>
        {contactInfo()}
      </section>
      <section className="text-white flex-1 flex flex-col items-center">
        <span className="text-xl pb-5">Our Services</span>
        <div className="flex flex-col space-y-2">{servicesInfo}</div>
      </section>
    </div>
  );
};

export default Footer;
