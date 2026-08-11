export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // References Lucide React icon name
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
}
