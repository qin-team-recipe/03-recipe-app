import { NavBar } from '@/app/_components/navBar';
import { Sample } from '@/app/_components/sample';

export default function Home() {
  return (
    <div className='mx-auto flex min-h-screen flex-col-reverse sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4 sm:pl-6'>
      <NavBar />
      <main className='border-mauve-dim flex-1 overflow-hidden pb-20 sm:border-x sm:pb-16'>
        <h1>レシピアプリ</h1>
        <Sample text='sample' />
      </main>
    </div>
  );
}
