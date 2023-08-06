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

// const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google/login`;

// export default function Page({
//   searchParams: { code, state },
// }: {
//   searchParams: { code?: string; state?: string };
// }) {
//   const login = () => {
//     const state = uuidv4();
//     setCookie('oauth_state', state, {
//       maxAge: 3600, // 有効期限は1時間
//       path: '/',
//     });

//     window.location.href = `${LOGIN_URL}?state=${state}`;
//   };

//   useEffect(() => {
//     if (code && state) {
//       console.log(code);
//       console.log(state);
//     } else {
//       console.log('login');
//       login(setCookie);
//     }
//   }, [code, state]);

//   return <h1>My Page</h1>;
// }
