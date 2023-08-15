'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-mauve-12/20 p-1 text-mauve-1',
});

export const BackButton: FC = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <button className={button()} onClick={handleBack}>
      <MdArrowBack className='h-8 w-8 text-mauve-1' />
    </button>
  );
};
