import React from 'react';
import styles from '@/styles/Services.module.css';
import servicesList from '@/Constants/services-data';
import PageLayout from '@/Layouts/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <div>
        {servicesList.map((data, index) => (
          <div
            id={`${data.title.toLocaleLowerCase().replace(/\s/g, '-')}`}
            key={data.title + index}
            className={`${
              index % 2 === 0 ? 'bg-gray-850' : 'bg-yellow-450'
            } flex flex-col items-center`}
          >
            <div
              className={`${styles.tiltBottom} ${
                (index === 0 || index % 2 === 1) && 'hidden'
              }`}
            >
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  className={styles.shapeFill}
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center space-y-7 py-20">
              <h1
                className={`${
                  index % 2 === 0 ? 'text-gray-150' : 'text-gray-850'
                } font-bold text-center w-full`}
              >
                {data.title}
              </h1>
              <div
                className={`${
                  index % 2 === 0 ? 'text-gray-150' : 'text-gray-850'
                } px-14`}
              >
                {data.description_long}
              </div>
            </div>
            <div className={`${styles.tiltTop} ${index % 2 === 1 && 'hidden'}`}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  className={styles.shapeFill}
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
