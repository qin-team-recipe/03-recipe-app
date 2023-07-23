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
