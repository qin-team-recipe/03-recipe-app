'use client';

import { useSession } from 'next-auth/react';

export const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};
