'use client';
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconDotsCircleHorizontal,
  IconBrandYoutube,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { tv } from 'tailwind-variants';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/ui/dropdown-menu';
import { Sns } from '@/app/_types';
import { capitalizeFirstLetter } from '@/app/_utils/capitalizeFirstLetter';

const snsIcons = tv({
  slots: {
    base: 'flex items-center justify-center gap-3',
    icon: 'h-6 w-6',
    menuContent: 'left-5 flex flex-col gap-3 border border-mauve-7',
    menuItem: 'flex gap-2 text-mauve-11',
  },
});

const { base, icon, menuItem, menuContent } = snsIcons();

type Props = {
  snsList: Sns[];
};

/**
 * YouTube → Instagram → TikTok → Twitter → Facebookの順に最大2つのSNSを出す。
 * それ以外は右のメニューに押し込める。
 * @param snsList
 * @returns
 */
export const SnsIcons: FC<Props> = ({ snsList }) => {
  // snsが2つ以下の場合
  if (snsList.length <= 2) {
    return (
      <div className={base()}>
        {snsList.map((sns) => (
          <Link
            href={sns.url}
            target='_blank'
            rel='noopener noreferrer'
            className={base()}
            key={sns.type}
          >
            <SnsIcon type={sns.type} />
          </Link>
        ))}
      </div>
    );
  }

  // snsが3つ以上の場合
  return (
    <div className={base()}>
      {snsList.slice(0, 2).map((sns) => (
        <Link
          href={sns.url}
          target='_blank'
          rel='noopener noreferrer'
          className={base()}
          key={sns.type}
        >
          <SnsIcon type={sns.type} />
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className='outline-none'>
          <IconDotsCircleHorizontal className={icon()} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={menuContent()}>
          {snsList.slice(2).map((sns) => (
            <DropdownMenuItem key={sns.type} className={menuItem()}>
              <Link
                href={sns.url}
                target='_blank'
                rel='noopener noreferrer'
                className={base()}
              >
                <SnsIcon type={sns.type} isDropdown />
                {capitalizeFirstLetter(sns.type)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const SnsIcon: FC<Pick<Sns, 'type'> & { isDropdown?: boolean }> = ({
  type,
  isDropdown = false,
}) => {
  const size = isDropdown ? 16 : 24;
  switch (type) {
    case 'youtube':
      return <IconBrandYoutube size={size} />;

    case 'instagram':
      return <IconBrandInstagram size={size} />;

    case 'tiktok':
      return <IconBrandTiktok size={size} />;

    case 'twitter':
      return <IconBrandTwitter size={size} />;

    case 'facebook':
      return <IconBrandFacebook size={size} />;

    default:
      return null;
  }
};
