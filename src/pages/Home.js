import React from 'react';
import CarouselSwitch from '../components/CarousalSwitch';
import PartnersShowcase from '../components/PartnersShowcase';

export default function Home() {
  return (
    <div>
      <h2 style={{textAlign: 'center', marginTop: '2rem'}}>Welcome to VibeCoding</h2>
      <CarouselSwitch />
      <PartnersShowcase />
    </div>
  );
}