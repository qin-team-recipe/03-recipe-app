import { redirect } from 'next/navigation';

// /chef/idが開かれた場合は新着レシピ画面にリダイレクト
export default async function Chef({ params }: { params: { chefId: string } }) {
  redirect(`/chef/${params.chefId}/new`);
}
