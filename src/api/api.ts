const BASE_URL = 'https://product-catalog-backend-vhc5.onrender.com';

export const getPhones = async () => {
  try {
    const response = await fetch(`${BASE_URL}/phones`);
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
