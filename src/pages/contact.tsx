import PageLayout from '@/Layouts/PageLayout';
import ContactCard from '@/Widgets/ContactCard';
import React from 'react';

const contact = () => {
  return (
    <PageLayout>
      <section className="flex flex-col justify-center items-center min-h-screen py-20">
        <span className="text-3xl mb-9 text-center font-black text-white lg:hidden">
          Contact Us
        </span>
        <div className="w-3/5">
          <ContactCard>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus, turpis eu egestas cursus, nisi velit semper neque, nec
            vehicula nunc arcu in ligula. Aliquam quis enim eu lacus sodales
            vulputate. Duis ut fermentum lectus, ut lobortis elit. Etiam egestas
            velit id nisi euismod tristique. Nullam quis mauris ac erat rutrum
            sagittis. Etiam egestas velit id nisi euismod tristique. Nullam quis
            mauris ac erat rutrum sagittis.
          </ContactCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default contact;
