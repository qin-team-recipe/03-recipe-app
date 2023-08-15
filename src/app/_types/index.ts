export type SnsType =
  | 'youtube'
  | 'instagram'
  | 'tiktok'
  | 'twitter'
  | 'facebook';

export type Sns = {
  type: SnsType;
  url: string;
};

export type Recipe = {
  id: string;
  img: string;
  title: string;
  chef: string;
  like: number;
};
