import API_CONFIG from '../config/api';

// Generic API handler
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Erro na requisição');
  }
  return response.json();
};

const handleError = (error) => {
  console.error('API Error:', error);
  throw error;
};

// Generic fetch wrapper
const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${endpoint}`, {
      ...options,
      headers: {
        ...API_CONFIG.headers,
        ...options.headers,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Products API
export const productsAPI = {
  getAll: () => apiFetch('/products'),
  getById: (id) => apiFetch(`/products/${id}`),
  getByCategory: (category) => apiFetch(`/products?category=${category}`),
  getNew: () => apiFetch('/products?isNew=true'),
  search: (query) => apiFetch(`/products?search=${query}`),
};

// Collections API
export const collectionsAPI = {
  getAll: () => apiFetch('/collections'),
  getById: (id) => apiFetch(`/collections/${id}`),
};

// Orders API
export const ordersAPI = {
  create: (orderData) => apiFetch('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  }),
  getById: (id) => apiFetch(`/orders/${id}`),
};

// Contact API
export const contactAPI = {
  send: (formData) => apiFetch('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  }),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (email) => apiFetch('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),
};

export default {
  products: productsAPI,
  collections: collectionsAPI,
  orders: ordersAPI,
  contact: contactAPI,
  newsletter: newsletterAPI,
};
