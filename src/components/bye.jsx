import React from 'react';
import byegif from '../components/images/STK-20241103-WA0001 (2).webp';

const Bye = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center text-yellow-300">
      <h1 className="text-4xl font-bold py-5 px-10 ">
        Go out there, spread the randomness, and remember: if you’re ever in doubt, just answer with the funniest option. 😉
      </h1>
      <p className="text-xl mb-8 text-white">
        Bye for now, and may your coffee be strong, and your Mondays short! ☕️😆
      </p>
      <img src={byegif} alt="Goodbye GIF" className=" rounded-lg shadow-lg" />
    </div>
  );
}

export default Bye;
