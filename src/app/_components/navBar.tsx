'use client';

import { FC, ReactElement } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { LuChefHat } from 'react-icons/lu';
import { tv } from 'tailwind-variants';

import { useGetWindowSize } from '@/hooks/useGetWindowSize';

// pathは仮置き
type NavBarItem = {
  key: string;
  label: string;
  icon: ReactElement;
  path: string;
};

const navBar = tv(
  {
    slots: {
      navContainer:
        'w-full pt-2 bg-[#FDFCFD] absolute bottom-0 h-[5.25rem] shadow-top',
      chefContainer: 'invisible h-0',
      chefText: 'text-2xl font-bold',
      buttonContainer: 'flex',
      icon: 'h-12 flex flex-col items-center flex-1 gap-y-1',
      label: 'text-[0.625rem]',
    },
    variants: {
      size: {
        large: {
          navContainer:
            'w-60 pt-5 flex flex-col gap-y-10 order-1 shadow-none static h-auto',
          chefContainer: 'visible h-5 flex items-center gap-x-3',
          buttonContainer: 'flex-col gap-y-6',
          icon: 'flex-row gap-y-0 gap-x-3',
          label: 'text-2xl',
        },
      },
    },
  },
  {
    responsiveVariants: ['lg'],
  }
);

export const NavBar: FC = () => {
  const {
    navContainer,
    chefContainer,
    chefText,
    buttonContainer,
    icon,
    label,
  } = navBar({
    size: {
      lg: 'large',
    },
  });
  const { width } = useGetWindowSize();

  // useRouterを使用する想定の仮置き
  const path = '/search';

  const navbarItem: NavBarItem[] = [
    {
      key: 'search',
      label: `${width > 1024 ? '話題を検索' : '検索'}`,
      icon: <HiOutlineSearch size='1.5rem' />,
      path: '/search',
    },
    {
      key: 'heart',
      label: 'お気に入り',
      icon: <AiOutlineHeart size='1.5rem' />,
      path: '/heart',
    },
    {
      key: 'cart',
      label: `${width > 1024 ? '買い物リスト' : 'お買い物'}`,
      icon: <BsCart2 size='1.5rem' />,
      path: '/cart',
    },
  ];

  return (
    <div className={navContainer()}>
      <div className={chefContainer()}>
        <LuChefHat size='1.5rem' />
        <p className={chefText()}>Top Chefs</p>
      </div>
      <div className={buttonContainer()}>
        {navbarItem.map((item) => (
          <button
            className={icon({
              class:
                item.path === path
                  ? 'text-[#CA3214]'
                  : 'text-[#6F6E77] lg:text-[#1A1523]',
            })}
            key={item.key}
          >
            {item.icon}
            <p
              className={label({
                class:
                  item.path === path
                    ? 'text-[#CA3214]'
                    : 'text-[#6F6E77] lg:text-[#1A1523]',
              })}
            >
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
