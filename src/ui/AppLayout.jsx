import { useState } from 'react';
import Navbar from './Navbar';
import FlickerCanvas from './FlickerCanvas';
import TypeWriterV1 from '../components/TypeWriterV1';
import About from '../components/About';

// const texts = [
//   'unemployed',
//   'open to new opportunities',
//   'looking for my next challenge',
// ];

function AppLayout() {
  const [page, setPage] = useState('about');
  return (
    <div className="font-ibmplex bg-smoky-black-500 grid h-screen w-screen place-items-center">
      <FlickerCanvas />
      <div className="max-w-10xl h-[93vh] w-[97vw] border border-white bg-black shadow-lg">
        <header className="shrink-0">
          <Navbar active={page} onNav={setPage} />
        </header>
        <main className="text-red-50">
          <About />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
