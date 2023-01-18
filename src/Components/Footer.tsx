import React from 'react';

import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ApartmentIcon from '@mui/icons-material/Apartment';
import PlumbingIcon from '@mui/icons-material/Plumbing';

const Footer = () => {
  return (
    <div className="bg-gray-850 w-full flex space-y-10 md:space-y-0 flex-col md:flex-row justify-around p-10">
      <div className="text-white flex-1 w-full flex justify-center items-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
        dignissim congue. Vestibulum eget ultricies enim. Phasellus suscipit
        vestibulum libero sit amet elementum.
      </div>
      <div className="text-white flex-1">
        <div className="text-xl">Contact Details</div>
        <div>
          <MailIcon /> info@pjholdings.me
          <FacebookIcon /> PJ Holdings SIA
          <WhatsAppIcon /> +371 28062741
          <LocationOnIcon /> Matisa Lela 78A, Riga, LV-1009, Latvia
        </div>
      </div>
      <div className="text-white flex-1">
        <div className="text-xl pb-5">Our Services</div>
        <div className="flex flex-col space-y-2">
          <span>Building Construction</span>
          <span>Electrical & Plumbing Services</span>
          <span>Building Completion & Finishing</span>
          <span>Architectural Services</span>
          <span>Management Consultancy Services</span>
          <span>Landscape Activities</span>
          <span>Cleaning Activities</span>
          <span>Other Services</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
