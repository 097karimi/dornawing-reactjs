import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/panel-admin/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-item',
    activecName: 'active'
  },
  {
    title: 'Reports',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-item',
    activecName: 'active'
  },
  {
    title: 'Products',
    path: '/panel-admin/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-item',
    activecName: 'active'
  },
  {
    title: 'Users',
    path: '/panel-admin/users',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-item',
    activecName: '!active'
  },
  {
    title: 'Messages',
    path: '/panel-admin/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-item',
    activecName: 'active'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-item',
    activecName: 'active'
  }
];