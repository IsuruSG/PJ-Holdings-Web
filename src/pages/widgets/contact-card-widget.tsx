import ContactCard from '@/Widgets/ContactCard';
import React from 'react';

const ContactCardWidget = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-2/3">
        <ContactCard>
          SIA PJ Holdings has established a reputation in the construction
          industry as a trendsetting residential and commercial building
          constructor that undertakes and delivers high quality innovative
          building projects. At present we have undertaken and successfully
          completed several projects for distinguished commercial and
          residential clients of both in Latvia and Europe.
        </ContactCard>
      </div>
    </div>
  );
};

export default ContactCardWidget;
