import { CopyButton } from '@/app/_components/copy-button';
import { RecipeStepItem } from '@/app/_components/recipe-step-item';

export default function Resipe() {
  return (
    <main>
      {recipeItems.map((item, i) => (
        <RecipeStepItem
          key={i}
          index={i + 1}
          text={item.text}
          annotation={item.annotation}
          isLast={recipeItems.length - 1 === i}
        />
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
    annotation:
      '※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
    annotation:
      '※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
    annotation:
      '※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
    annotation:
      '※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。',
  },
];
