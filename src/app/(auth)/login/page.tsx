import { getServerSession } from 'next-auth';

import { SignInButton } from '@/app/_components/auth/sign-in-button';
import { SignOutButton } from '@/app/_components/auth/sign-out-button';
import { UserInfo } from '@/app/_components/auth/user-info';
import { authOptions } from '@/app/_lib/auth';

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  // eslint-disable-next-line no-console
  console.log(session);

  return (
    <>
      <SignInButton />
      <SignOutButton />
      <UserInfo />
    </>
  );
};

export default LoginPage;
