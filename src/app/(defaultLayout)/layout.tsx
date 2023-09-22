import { ReactNode } from 'react';

import { NavBar } from '@/app/(defaultLayout)/_components/nav-bar';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto flex min-h-screen flex-col-reverse sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4 sm:pl-6'>
      <NavBar />
      <main className='border-mauve-dim flex-1 overflow-hidden pb-20 sm:border-x sm:pb-16'>
        {children}
      </main>
    </div>
  );
}
