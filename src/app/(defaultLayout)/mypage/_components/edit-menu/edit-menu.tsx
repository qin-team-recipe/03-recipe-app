'use client';
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';
import {
  IconCopy,
  IconDotsCircleHorizontal,
  IconLockOpen,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { tv } from 'tailwind-variants';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/_components/ui/ui/dropdown-menu';

const edotMenu = tv({
  slots: {
    base: 'flex items-center justify-center gap-3',
    icon: 'h-6 w-6',
    menuContent: 'left-5 flex flex-col border border-mauve-7',
    menuItem: 'flex gap-2 text-mauve-11',
  },
});

const { base, icon, menuItem, menuContent } = edotMenu();
type Props = {
  type: 'mypage' | 'edit';
};

export const EditMenu: FC<Props> = ({ type }) => {
  return (
    <div className={base()}>
      <DropdownMenu>
        <DropdownMenuTrigger className='outline-none'>
          <IconDotsCircleHorizontal className={icon()} />
        </DropdownMenuTrigger>
        {type === 'edit' && <EditContent />}
        {type === 'mypage' && <MypageContent />}
      </DropdownMenu>
    </div>
  );
};

const EditContent = () => (
  <DropdownMenuContent className={menuContent()}>
    <DropdownMenuGroup>
      <DropdownMenuItem className={menuItem()}>
        <Link href='/' className={base()}>
          <IconPencil size={20} />
          編集する
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem className={menuItem()}>
        <Link href='/' className={base()}>
          <IconLockOpen size={20} />
          <div className='flex flex-col'>
            <p>レシピを限定公開する</p>
            <p className='text-xs'>URLを知っている方のみ閲覧可能</p>
          </div>
        </Link>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem className={menuItem()}>
      <IconTrash size={20} />
      削除する
    </DropdownMenuItem>
  </DropdownMenuContent>
);
const MypageContent = () => (
  <DropdownMenuContent className={menuContent()}>
    <DropdownMenuGroup>
      <DropdownMenuItem className={menuItem()}>
        <Link href='/' className={base()}>
          <IconPencil size={20} />
          プロフィールを編集する
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem className={menuItem()}>
        <Link href='/' className={base()}>
          <IconCopy size={20} />
          URLをコピーする
        </Link>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
);
