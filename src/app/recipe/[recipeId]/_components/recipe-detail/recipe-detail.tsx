import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { RiYoutubeLine, RiInstagramLine, RiMoreLine } from 'react-icons/ri';
import { tv } from 'tailwind-variants';

const recipe = tv({
  slots: {
    base: 'flex flex-col gap-3',
    backIcon:
      'absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-mauve-12/20 p-1 text-mauve-1',
    titleSection: 'flex items-start justify-between',
    titleText: 'text-xl font-bold text-mauve-12',
    snsIcons: 'flex items-center justify-center gap-3',
    text: 'text-sm text-[#6F6E77]',
  },
});

const { base, backIcon, titleSection, titleText, snsIcons, text } = recipe();

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
        <div className='aspect-square bg-tomato-7'>
          {imgUrl && <Image alt='image' src={imgUrl} />}
        </div>
        {/* TODO: 画面遷移処理 */}
        <div className={backIcon()}>
          <MdArrowBack className='h-8 w-8 text-mauve-1' />
        </div>
      </div>

      <div className={titleSection()}>
        <p className={titleText()}>{recipeTitle}</p>
        <div className={snsIcons()}>
          <RiYoutubeLine className='h-6 w-6' />
          <RiInstagramLine className='h-6 w-6' />
          {/* TODO: メニュー表示/ */}
          <RiMoreLine className='h-5 w-5 rounded-full border-2 border-mauve-12' />
        </div>
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
  );
};
