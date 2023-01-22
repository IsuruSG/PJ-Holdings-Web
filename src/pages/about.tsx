import React from 'react';
import styles from '@/styles/AboutItem.module.css';
import aboutList from '@/Constants/about-data';
import PageLayout from '@/Layouts/PageLayout';

const About = () => {
  return (
    <PageLayout>
      <div className="flex flex-col bg-gray-850 h-full mt-20 space-y-3">
        {[''].map((data, index) => (
          <div className="flex">
            <svg
              id="visual"
              viewBox="0 0 900 600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <path
                d="M545 600L786 0L900 0L900 600Z"
                fill="#F3A904"
                stroke-linecap="square"
                stroke-linejoin="bevel"
              ></path>
            </svg>
            {/* <div className="bg-yellow-450 w-2/3">huiohui</div> */}
            <section>
              <svg
                id="visual"
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
{
  /* <div
            className={`${styles.shape1} flex flex-col items-center font-bold my-12`}
          >
            <h1 className="text-xl">{data.title}</h1>
            <div>{data.title}</div>
          </div> */
}
