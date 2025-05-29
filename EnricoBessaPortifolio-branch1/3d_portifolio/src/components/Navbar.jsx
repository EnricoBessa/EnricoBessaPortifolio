import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F1F1F] bg-opacity-95 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-extrabold text-2xl tracking-wide">
          Enrico<span className="text-orange-400">Dev</span>
        </div>
        <div className="flex gap-x-6">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' }
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-white !text-white hover:!text-white transition-colors duration-300 font-medium pb-1 ${
    isActive ? 'border-b-2 border-orange-500' : ''
                }`
              }
              end
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
