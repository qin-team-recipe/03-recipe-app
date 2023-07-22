import Link from 'next/link';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

import { SearchBox } from '@/app/_components/search-box';

type ChefList = {
  id: string;
  img: string;
  name: string;
  description: string;
  recipeLength: number;
};

const chefListItem: ChefList[] = [
  {
    id: '1',
    img: '',
    name: 'ひふみシェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeLength: 123,
  },
  {
    id: '2',
    img: '',
    name: 'しまぶー',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeLength: 123,
  },
  {
    id: '3',
    img: '',
    name: '山田太郎',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeLength: 123,
  },
  {
    id: '4',
    img: '',
    name: 'りゅーじ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeLength: 123,
  },
  {
    id: '5',
    img: '',
    name: '長谷部シェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeLength: 123,
  },
];

const searchChef = tv({
  slots: {
    chefList: 'flex flex-col gap-y-4 px-4 pt-2',
    chefItem: 'flex w-full gap-x-4',
    chefImg: 'h-[116px] w-[88px] shrink-0 rounded-2xl bg-tomato-4',
    detailContainer: 'flex flex-col gap-y-[5px]',
    chefName: 'line-clamp-1 text-lg font-bold text-mauve-12',
    chefDescription: 'line-clamp-3 text-sm leading-5 text-mauve-10',
    metaContainer: 'flex items-center gap-x-1.5',
    metaText: 'text-sm text-mauve-12',
  },
});

const {
  chefList,
  chefItem,
  chefImg,
  detailContainer,
  chefName,
  chefDescription,
  metaContainer,
  metaText,
} = searchChef();

export default function SearchChef({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q } = searchParams as { [key: string]: string };

  return (
    <>
      <SearchBox q={q} />
      <div className={chefList()}>
        {chefListItem.map((item) => (
          // シェフ詳細画面への遷移
          <Link href='/' key={item.id} className={chefItem()}>
            <div className={chefImg()}>
              {/* imgが入る */}
              <div></div>
            </div>
            <div className={detailContainer()}>
              <h2 className={chefName()}>{item.name}</h2>
              <p className={chefDescription()}>{item.description}</p>
              <div className={metaContainer()}>
                <TbToolsKitchen2 size='16px' className='text-mauve-12' />
                <p className={metaText()}>{item.recipeLength} レシピ</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
