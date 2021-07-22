interface User {
  id: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  biography: string;
  avatarUrl: string;
  role: 'ADMIN' | 'USER';
  createdAt: Date;
  updatedAt: Date;
}

type IUserBody = Omit<User, 'id' | 'role' | 'createdAt' | 'updatedAt'>;

interface Picture {
  id: string;
  title: string;
  url: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PictureBody {
  title?: string;
  url?: string;
  description?: string;
}

interface Album {
  id: string;
  title: string;
  description: string;
  published: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AlbumBody {
  title?: string;
  description?: string;
}

interface Category {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
