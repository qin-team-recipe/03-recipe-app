import { CopyButton } from '@/app/recipe/[recipeId]/_components/copy-button';
import { RecipeStepItem } from '@/app/recipe/[recipeId]/_components/recipe-step-item';

export default function Recipe() {
  return (
    <main>
      {recipeItems.map((item, i) => (
        <RecipeStepItem key={i} index={i + 1} text={item.text} />
      ))}
      <div className='m-2 flex justify-end'>
        <CopyButton recipeItems={recipeItems} />
      </div>
    </main>
  );
}

const recipeItems = [
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
];
