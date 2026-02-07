import { useState } from 'react';
import Navbar from './Navbar';
import FlickerCanvas from './FlickerCanvas';
import About from '../components/About';
import Projects from '../components/Projects/Projects';
import Footer from './Footer';

function AppLayout() {
  const [page, setPage] = useState('about');

  const pageComponents = {
    about: <About />,
    projects: <Projects />,
    // arts: <Arts />,
    // contact: <Contact />,
  };

  return (
    <div className="font-ibmplex grid h-screen w-screen place-items-center overflow-hidden bg-[#0a0a0a]">
      <FlickerCanvas />

      <div className="max-w-10xl relative flex h-[93vh] w-[97vw] flex-col overflow-hidden border border-red-900/40 bg-[#0d0d0d] shadow-2xl">
        <div className="pointer-events-none absolute inset-0 z-50 bg-[radial-gradient(circle,rgba(18,16,16,0)_40%,rgba(0,0,0,0.6)_100%)]"></div>

        <div className="bg-size pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.05),rgba(0,255,0,0.02),rgba(0,0,255,0.05))] opacity-20"></div>

        <div className="pointer-events-none absolute inset-0 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>

        <header className="relative z-10 shrink-0 border-b border-red-900/30">
          <Navbar active={page} onNav={setPage} />
        </header>

        <main className="relative z-10 flex-1 overflow-y-auto text-amber-50/90 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-red-900/50 [&::-webkit-scrollbar-track]:bg-transparent">
          <div className="animate-[flicker_0.2s_infinite_alternate]">
            {/* <Projects /> */}
            {pageComponents[page]}
            {/* <About /> */}
          </div>
        </main>

        <div className="pointer-events-none absolute top-2 left-2 z-50 h-4 w-4 border-t-2 border-l-2 border-red-600/30"></div>
        <div className="pointer-events-none absolute right-2 bottom-2 z-50 h-4 w-4 border-r-2 border-b-2 border-red-600/30"></div>
      </div>
      <Footer />
    </div>
  );
}
export default AppLayout;
