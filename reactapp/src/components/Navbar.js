import { size } from '@floating-ui/react';
import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Import your icons
// import tablemonIcon from "../"
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
    <Disclosure as="nav" className="bg-gray-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 items-center"></div>
            {/* Scrollable navbar container */}
            <div className="hidden sm:block overflow-x-auto whitespace-nowrap">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-2 py-1 text-[10px] font-small flex items-center space-x-1'
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

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

