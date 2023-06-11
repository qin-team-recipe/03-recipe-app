'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const NextAuthProvider: FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
