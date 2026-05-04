export type Code = {
  code: string;
  reward: string;
  status: 'active' | 'expired';
};

export type Skin = {
  id: string;
  name: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  weapon: string;
  image: string;
  description: string;
};

export type Map = {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  tips: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};
