import Card from '@/Components/Card';
import Lottie from '@/Components/Lottie';
import servicesList from '@/Constants/services-data';
import PageLayout from '@/Layouts/PageLayout';
import styles from '@/styles/Home.module.css';
import ArrowDown from '@/assets/lotties/arrowDown.json';

export default function Home() {
  const cardList = servicesList.map((service, index) => (
    <Card
      key={service.title + index}
      heading={service.title}
      Icon={service.Icon}
      onClick={() => (window.location.href = service.link)}
    >
      {service.description}
    </Card>
  ));

  return (
    <PageLayout>
      <>
        <section
          className={`flex relative flex-col justify-center items-center space-y-2 h-screen ${styles.landing_page_bg}`}
        >
          <span className="text-6xl font-cookie">Welcome to</span>
          <span className="text-white text-6xl md:text-8xl font-righteous">
            PJ Holdings
          </span>
          <div className="absolute bottom-0 w-24 h-24">
            <Lottie source={ArrowDown} loop />
          </div>
        </section>
        <section className="flex flex-col py-28 justify-center items-center">
          <span className="text-white font-black text-2xl text-center">
            Browse Our Services
          </span>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8 py-24">
            {cardList}
          </div>
        </section>
      </>
    </PageLayout>
  );
}
