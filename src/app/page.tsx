import { tv } from 'tailwind-variants';

import { NavBar } from '@/app/_components/navBar';
import { Sample } from '@/app/_components/sample';

const home = tv(
  {
    slots: {
      main: '',
      content: '',
    },
    variants: {
      size: {
        large: {
          main: 'flex w-8/12 mx-auto gap-x-4',
          content: 'order-2',
        },
      },
    },
  },
  {
    responsiveVariants: ['lg'],
  }
);

export default function Home() {
  const { main, content } = home({
    size: {
      lg: 'large',
    },
  });

  return (
    <main className={main()}>
      <div className={content()}>
        <h1>レシピアプリ</h1>
        <Sample />
      </div>
      <NavBar />
    </main>
  );
}
