import React from 'react';
import { FiPieChart } from "react-icons/fi";
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

export const SidebarData = [
    {
      title: 'Marketingtool',
      path: '/marketingtool',
      icon: <FiPieChart/>,
      iconClosed: <IoChevronDown />,
      iconOpened: <IoChevronUp />,
  
      subNav: [
        {
          title: 'Graphic Design',
          path: '/marketingtool/graphicdesign'
        },
        {
          title: 'Photo/Video Shooting',
          path: '/marketingtool/photo/videoshooting',
        },
        {
            title: 'Printing',
            path: '/marketingtool/printing'
        },
        {
            title: 'Outdoor Ads',
            path: '/marketingtool/outdoorads'
        },
        {
            title: 'Event Management',
            path: '/marketingtool/eventmanagement'
        },
        {
            title: 'Ads. Management',
            path: '/marketingtool/adsmanagement'
        },
        {
            title: 'Web/App Development',
            path: '/marketingtool/development'
        },
        {
            title: 'Email Marketing',
            path: '/marketingtool/emailmarketing'
        },
        {
            title: 'SMS Marketing',
            path: '/marketingtool/smsmarketing'
        },
        {
            title: 'Infuencer Marketing',
            path: '/marketingtool/infuencemarketing'
        },
        {
            title: 'Ads. Management',
            path: '/marketingtool/adsmanagement'
        },
      ]
    }
]