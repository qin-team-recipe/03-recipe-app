import { Header } from '@/app/login/_components/header';
import { LoginContent } from '@/app/login/_components/login-content';

export default function Page() {
  return (
    <>
      <Header />
      <div className='p-4 text-center'>
        <LoginContent />
      </div>
    </>
  );
}
