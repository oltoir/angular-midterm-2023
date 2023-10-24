export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface Like {
  id: number;
  postId: number;
  userId: number;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  text: string;
}
