import React from 'react';
import DragCards from './DragCards';

const App = () => {
  const cards = [
    {
      src: "https://assets.playgroundai.com/346dd2b5-47b7-4c0d-b0b4-bbf3e6cd249c.jpg",
      alt: "Example image 1",
      rotate: "6deg",
      top: "20%",
      left: "25%",
      className: "w-36 md:w-56"
    },
    {
      src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Example image 2",
      rotate: "12deg",
      top: "45%",
      left: "60%",
      className: "w-24 md:w-48"
    },
    {
      src: "https://images.playground.com/761f186aa1be4904ad6f5b18586377aa.jpeg",
      alt: "Example image 3",
      rotate: "-6deg",
      top: "20%",
      left: "40%",
      className: "w-32 md:w-60"
    },
    {
      src: "https://images.playground.com/d966b49295d84f9ea369b9341e976062.jpeg",
      alt: "Example image 4",
      rotate: "8deg",
      top: "50%",
      left: "40%",
      className: "w-48 md:w-72"
    },
    {
      src: "https://images.playground.com/d4ef90509bd54bacbeb009dde9f20220.jpeg",
      alt: "Example image 5",
      rotate: "18deg",
      top: "20%",
      left: "65%",
      className: "w-40 md:w-64"
    },
    {
      src: "https://images.playground.com/c3c5e92157f04dbeb94bfecb37f41ad4.jpeg",
      alt: "Example image 6",
      rotate: "-3deg",
      top: "35%",
      left: "55%",
      className: "w-24 md:w-48"
    },
  ];

  return (
    <DragCards
      title="SPACE"
      titleColor="text-blue-800"
      accentColor="text-red-500"
      backgroundColor="bg-black"
      cards={cards}
    />
  );
};

export default App;