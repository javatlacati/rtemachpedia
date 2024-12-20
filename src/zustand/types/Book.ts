export interface Book {
  id: number;
  title: string;
  authors: Author[];
  downloadUrl: string;
}

export interface Author {
  id: number
  name: string;
}
