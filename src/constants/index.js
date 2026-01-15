// App Constants
export const ROUTES = {
  HOME: '/',
  LOJA: '/loja',
  PRODUTO: '/produto/:id',
  NOVIDADES: '/novidades',
  COLECOES: '/colecoes',
  SOBRE: '/sobre',
  CONTATO: '/contato',
  CARRINHO: '/carrinho',
};

export const WHATSAPP_NUMBER = '5511999999999'; // Alterar para número real

export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'Todos' },
  { id: 'camisetas', name: 'Camisetas' },
  { id: 'moletons', name: 'Moletons' },
  { id: 'calcas', name: 'Calças' },
  { id: 'jaquetas', name: 'Jaquetas' },
  { id: 'shorts', name: 'Shorts' },
  { id: 'acessorios', name: 'Acessórios' },
];

export const SORT_OPTIONS = [
  { value: 'default', label: 'Padrão' },
  { value: 'price-asc', label: 'Menor Preço' },
  { value: 'price-desc', label: 'Maior Preço' },
  { value: 'name', label: 'Nome A-Z' },
];

export const SIZE_GUIDE = {
  clothes: [
    { size: 'P', chest: '92-98', length: '68-70' },
    { size: 'M', chest: '98-104', length: '70-72' },
    { size: 'G', chest: '104-110', length: '72-74' },
    { size: 'GG', chest: '110-116', length: '74-76' },
  ],
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/schar',
  facebook: 'https://facebook.com/schar',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const CONTACT_INFO = {
  phone: '(11) 99999-9999',
  email: 'contato@schar.com.br',
  whatsapp: WHATSAPP_NUMBER,
};

export const BUSINESS_HOURS = [
  { day: 'Segunda a Sexta', hours: '9h às 18h' },
  { day: 'Sábado', hours: '9h às 13h' },
  { day: 'Domingo', hours: 'Fechado' },
];
