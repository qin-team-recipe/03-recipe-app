type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className='mx-auto h-auto max-w-[490px] py-3'>
      <div>{children}</div>
    </main>
  );
}
