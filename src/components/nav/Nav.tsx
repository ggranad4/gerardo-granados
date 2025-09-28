import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'About Gerardo', href: '/home' },
  { label: 'Contact me', href: '/about' },
];

export default function Nav() {
  return (
    <nav className='top-0 left-0 w-full bg-white shadow-md z-50'>
      <h1 className=' float-left mt-2.5 text-blue text-lg font-semibold ml-2 '>Gerardo Granados</h1>
      <div className='max-w-7xl mx-auto px-4 py-3 flex space-x-6'>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className='text-gray-700 hover:text-black-500 font-medium'
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
