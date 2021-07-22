import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const users = {
  getOne: (id: string): Promise<User> => axios.get(`${API_URL}/users/${id}`).then((res) => res.data),

  getAlbums: (id: string): Promise<Album[]> => axios.get(`${API_URL}/users/${id}/albums`).then((res) => res.data),

  getPictures: (id: string): Promise<Picture[]> => axios.get(`${API_URL}/users/${id}/pictures`).then((res) => res.data),

  getCategories: (id: string): Promise<Category[]> =>
    axios.get(`${API_URL}/users/${id}/categories`).then((res) => res.data),

  updateUser: (id: string, user: User): Promise<null> =>
    axios.put(`${API_URL}/users/${id}`, user).then((res) => res.data),
};

export const albums = {
  getOne: (id: string): Promise<Album> => axios.get(`${API_URL}/albums/${id}`).then((res) => res.data),

  getPictures: (id: string): Promise<Picture[]> =>
    axios.get(`${API_URL}/albums/${id}/pictures`).then((res) => res.data),

  getCategories: (id: string): Promise<Category[]> =>
    axios.get(`${API_URL}/albums/${id}/categories`).then((res) => res.data),

  createAlbum: (album: AlbumBody): Promise<Album> => axios.post(`${API_URL}/albums`, album).then((res) => res.data),

  addPicture: (userId: string, pictureId: Picture): Promise<null> =>
    axios.post(`${API_URL}/albums/${userId}/pictures/${pictureId}`).then((res) => res.data),

  removePicture: (albumId: string, pictureId: Picture): Promise<null> =>
    axios.delete(`${API_URL}/albums/${albumId}/pictures/${pictureId}`).then((res) => res.data),
};

export const pictures = {
  getOne: (id: string): Promise<Picture> => axios.get(`${API_URL}/pictures/${id}`).then((res) => res.data),

  create: (picture: PictureBody): Promise<Picture> =>
    axios.post(`${API_URL}/pictures`, picture).then((res) => res.data),

  update: (id: string, picture: PictureBody): Promise<null> =>
    axios.put(`${API_URL}/pictures/${id}`, picture).then((res) => res.data),

  delete: (id: string): Promise<null> => axios.delete(`${API_URL}/pictures/${id}`).then((res) => res.data),
};

export const categories = {
  getOne: (id: string): Promise<Category> => axios.get(`${API_URL}/categories/${id}`).then((res) => res.data),

  create: (category: { name: string; userId: string }): Promise<Category> =>
    axios.post(`${API_URL}/categories`, category).then((res) => res.data),

  update: ({ id, category }: { id: string; category: { name?: string } }): Promise<null> =>
    axios.put(`${API_URL}/categories/${id}`, category).then((res) => res.data),

  addAlbum: (categoryId: string, albumId: string): Promise<null> =>
    axios.post(`${API_URL}/categories/${categoryId}/albums/${albumId}`).then((res) => res.data),

  deleteAlbum: (categoryId: string, albumId: string): Promise<null> =>
    axios.delete(`${API_URL}/categories/${categoryId}/albums/${albumId}`).then((res) => res.data),

  delete: (id: string): Promise<null> => axios.delete(`${API_URL}/categories/${id}`).then((res) => res.data),
};
