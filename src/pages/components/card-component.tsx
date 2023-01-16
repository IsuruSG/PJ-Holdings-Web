import Card from '@/Components/Card';
import { Construction } from '@mui/icons-material';
import React from 'react';

const CardComponent = () => {
  return (
    <div className="h-screen flex justify-center items-center space-x-4">
      <Card
        onClick={() => console.log("You just clicked the card")}
        heading="Lorem Ipsum"
        Icon={Construction}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis
        vel purus sit amet egestas. Suspendisse quis elit massa. Integer mollis
        sem eu mauris lobortis, sit amet dapibus dui posuere. Praesent quis
        consequat ipsum. Sed magna risus,.
      </Card>
    </div>
  );
};

export default CardComponent;
