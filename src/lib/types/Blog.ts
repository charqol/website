export interface Author {
  name: string;
  avatar?: string;
  bio: string;
  slug: string;
  twitter?: string;
  linkedin?: string;
}

export interface BlogMetadata {
  title: string;
  date: string;
  image: string;
  imageAlt?: string;
  description: string;
  tags?: string[];
  authorNames?: string[];
  authors?: Author[];
  category?: string;
  slug: string;
  [key: string]: any; // Allow for additional properties
  readTimeMinutes?: number;
  series?: {
    title: string;
    sequence: number;
  };
  otherBlogsInSeries?: {
    sequence: number;
    title: string;
    slug: string;
  }[];
}

export interface BlogPost extends BlogMetadata {
  content?: string;
}
