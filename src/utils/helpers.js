// Format currency to BRL
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

// Format price (simple version)
export const formatPrice = (price) => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

// Generate WhatsApp URL
export const generateWhatsAppUrl = (number, message) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

// Validate email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Get unique values from array
export const getUniqueValues = (array, key) => {
  return [...new Set(array.map(item => item[key]))];
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};

// Filter products
export const filterProducts = (products, category) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

// Create order message for WhatsApp
export const createOrderMessage = (items, total) => {
  let message = '🛍️ *PEDIDO SCHAR*\n\n';
  
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Tamanho: ${item.size}\n`;
    message += `   Quantidade: ${item.quantity}\n`;
    message += `   Preço: ${formatPrice(item.price * item.quantity)}\n\n`;
  });

  message += `💰 *TOTAL: ${formatPrice(total)}*\n\n`;
  message += 'Gostaria de finalizar este pedido!';

  return message;
};

// Slugify text for URLs
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

// Calculate cart statistics
export const calculateCartStats = (items) => {
  return {
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    uniqueItems: items.length,
  };
};
