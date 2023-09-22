import { Header } from '@/app/(defaultLayout)/shopping/_components/header';
import { MyMemo } from '@/app/(defaultLayout)/shopping/_components/my-memo';
import { RecipeMemo } from '@/app/(defaultLayout)/shopping/_components/recipe-memo';

const recipes = [
  {
    name: '豚汁',
    ingredients: [
      { name: 'キャベツ', checked: true },
      { name: 'にんじん', checked: false },
    ],
  },
  {
    name: 'カレー',
    ingredients: [
      { name: 'じゃがいも', checked: false },
      { name: 'たまねぎ', checked: false },
    ],
  },
];

export default function Shopping() {
  return (
    <>
      <Header />
      <div className='pt-5'>
        <MyMemo />
      </div>

      {recipes.map((recipe) => (
        <div className='pt-5' key={recipe.name}>
          <RecipeMemo recipe={recipe} />
        </div>
      ))}
    </>
  );
}
