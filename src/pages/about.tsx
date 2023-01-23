import React from 'react';
import styles from '@/styles/AboutItem.module.css';
import aboutList from '@/Constants/about-data';
import PageLayout from '@/Layouts/PageLayout';

const About = () => {
  return (
    <PageLayout>
      <div className="flex flex-col min-h-screen bg-gray-850 pb-10 pt-24 space-y-10 justify-center">
        {aboutList.map((data, index) => (
          <div className="flex">
            <section className={index % 2 === 0 ? 'hidden' : 'block -mr-1'}>
              <svg
                className="rotate-180"
                id="visual"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  d="M75 0L411 600L0 600L0 0Z"
                  fill="#F3A904"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                ></path>
              </svg>
            </section>
            <section className="bg-yellow-450 w-full flex flex-col justify-between py-8 space-y-6 px-4 items-center">
              <div className="text-center text-2xl font-black">
                {data.title}
              </div>
              <div className={`text-center`}>{data.description}</div>
            </section>
            <section
              className={`${index % 2 === 1 ? 'hidden' : 'block -ml-1'}`}
            >
              <svg
                id="visual"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  d="M75 0L411 600L0 600L0 0Z"
                  fill="#F3A904"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                ></path>
              </svg>
            </section>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default About;
