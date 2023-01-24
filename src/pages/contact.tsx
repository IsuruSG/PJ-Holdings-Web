import PageLayout from '@/Layouts/PageLayout';
import ContactCard from '@/Widgets/ContactCard';
import React from 'react';

const contact = () => {
  return (
    <PageLayout>
      <section className="flex flex-col items-center justify-center min-h-screen pb-16 pt-28">
        <span className="text-3xl font-black text-center text-white mb-9 lg:hidden">
          Contact Us
        </span>
        <div className="w-4/5 sm:w-3/5">
          <ContactCard>
            At SIA PJ Holdings, we are committed to providing our clients with
            the highest level of service and support. Our dedicated team of
            professionals is always available to answer any questions you may
            have about our company or our services. Whether you're a current
            client or just looking for more information, we're here to help.
            Please don't hesitate to reach out to us via phone, email or by
            filling out the contact form on our website. We look forward to
            hearing from you and working with you on your next project.
          </ContactCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default contact;
