import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div><img alt="mountain" src="../src/img/mountains.jpg" /></div>
      <div><img alt="road" src="../src/img/road.jpg" /></div>
      <div><img alt="sea" src="../src/img/seaPic.jpg" /></div>
      <div><img alt="sky" src="../src/img/sky.jpg" /></div>
    </Carousel>
  );
};

export default CarouselComp;
