import Clock from '../components/Clock';
import NavButton from './NavButton';

function Navbar({ active, onNav }) {
  return (
    <nav className="pb-1.55 z-20 flex items-center justify-between px-1 text-xl">
      <Clock />
      <NavButton onNav={onNav} active={active} />
    </nav>
  );
}

export default Navbar;
