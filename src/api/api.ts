const BASE_URL = 'https://product-catalog-backend-vhc5.onrender.com';
// const BASE_URL = 'http://localhost:5000';

export const getPhones = async (searchParams: string) => {
  const fetchUrl = `${BASE_URL}/phones?${searchParams}`;

  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data;
  } catch {
    throw new Error('bad request');
  }
};

export const getCollection = async (collectionName: string) => {
  const fetchUrl = `${BASE_URL}/phones/collection/${collectionName}`;

  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data;
  } catch {
    throw new Error('bad request');
  }
};

export const getOnePhone = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/phones/${id}`);
    const data = await response.json();

    return data;
  } catch {
    throw new Error('bad request');
  }
};

export const getImage = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}/download?url=${url}`);
    const blob = await response.blob();
    const currentImageUrl = URL.createObjectURL(blob);

    return currentImageUrl;
  } catch {
    throw new Error('not found');
  }
};

export const getCount = async (category: string) => {
  try {
    const response = await fetch(`${BASE_URL}/count/${category}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error('bad request');
  }
};

export const getCategories = async () => {
  const fetchUrl = `${BASE_URL}/categories`;

  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data;
  } catch {
    throw new Error('bad request');
  }
};
