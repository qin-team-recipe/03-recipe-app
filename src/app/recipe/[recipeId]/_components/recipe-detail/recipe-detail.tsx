import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { SnsIcons } from '@/app/_components/sns-icons';
import { Sns } from '@/app/_types';
import { BackButton } from '@/app/recipe/[recipeId]/_components/back-button';

const recipe = tv({
  slots: {
    base: 'flex flex-col gap-4',
    titleSection: 'flex items-start justify-between',
    titleText: 'text-xl font-bold text-mauve-12',
    text: 'text-sm text-[#6F6E77]',
  },
});

const { base, titleSection, titleText, text } = recipe();

type Props = {
  chefName: string;
  chefId: string;
  recipeTitle: string;
  description: string;
  imgUrl?: string;
  favorite?: number;
  isFavorite: boolean;
};

export const RecipeDetail: React.FC<Props & PropsWithChildren> = ({
  chefName,
  chefId,
  recipeTitle,
  description,
  imgUrl = '',
  favorite = 0,
  children,
}) => {
  return (
    <div className={base()}>
      <div className='relative'>
        <div className='aspect-square bg-tomato-4'>
          {imgUrl && <Image alt='image' src={imgUrl} />}
        </div>
        <BackButton />
      </div>
      <div className='flex flex-col gap-3 px-4'>
        <div className={titleSection()}>
          <p className={titleText()}>{recipeTitle}</p>
          <SnsIcons snsList={snsList} />
        </div>
        <p className='text-mauve-12'>{description}</p>
        <div className='flex items-center gap-4'>
          {/* TODO: シェフ詳細へのリンク設定 */}
          <Link href={`/chef/${chefId}`} className='flex items-center gap-2'>
            {/* TODO: シェフ画像設定 */}
            <div className='h-5 w-5 rounded-full bg-mauve-6' />
            <p className={text()}>{chefName}</p>
          </Link>
          {favorite !== 0 && (
            <div className='flex items-center gap-1'>
              <p className={text({ class: 'font-semibold' })}>{favorite}</p>
              <p className={text()}>お気に入り</p>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

// TODO: APIから取得予定
const snsList: Sns[] = [
  { type: 'youtube', url: '' },
  { type: 'instagram', url: '' },
  { type: 'tiktok', url: '' },
  { type: 'twitter', url: '' },
  { type: 'facebook', url: '' },
];
