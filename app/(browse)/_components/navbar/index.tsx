import Actions from "./actions";
import { Logo } from "./logo";
import Search from "./search";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#252731] px-2 lg:px-4 h-20 z-[49] flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};

export default Navbar;
