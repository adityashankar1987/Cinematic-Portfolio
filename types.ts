
export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  hasPlayButton?: boolean;
}

export interface Offering {
  id: string;
  icon: string;
  title: string;
  description: string;
}
