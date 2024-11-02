import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Import your icons
import tablemonIcon from "./images/icons/tablemon.png";
import adminpanel from "./images/icons/adminpanel.png";
import iphone from "./images/icons/iphone.png";
import camera from "./images/icons/camera.png";
import app from "./images/icons/app.png";
import computer from "./images/icons/computer.png";
import megaphone from "./images/icons/megaphone.png";
import workspace from "./images/icons/workspace.png";
import computerkeyboard from "./images/icons/computerkeyboard.png";
import mouse from "./images/icons/mouse.png";

const navigation = [
  { icons: tablemonIcon, name: 'Видеостены', href: '#', current: false },
  { icons: adminpanel, name: 'Интерактивные Панели', href: '#', current: false },
  { icons: iphone, name: 'Инфокиоски', href: '#', current: false },
  { icons: camera, name: 'Камеры', href: '#', current: false },
  { icons: app, name: 'Мобильные Стойки', href: '#', current: false },
  { icons: computer, name: 'Моноблоки', href: '#', current: false },
  { icons: megaphone, name: 'Спикерфоны', href: '#', current: false },
  { icons: workspace, name: 'Электронные Трибуны', href: '#', current: false },
  { icons: computerkeyboard, name: 'Клавиатура', href: '#', current: false },
  { icons: mouse, name: 'Мышки', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-sky-200 fixed top-0 left-0 w-full z-50">
  <div className="mx-auto max-w-7xl px-1 sm:px-5 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      {/* Main Navbar items, scrollable horizontally */}
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 items-center"></div>
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-2 py-2 text-[15px] font-small flex items-center space-x-0.5'
                )}
              >
                <img src={item.icons} alt={`${item.name} icon`} className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</Disclosure>
  );

}

