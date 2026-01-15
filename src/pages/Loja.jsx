import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';

const Loja = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'camisetas', name: 'Camisetas' },
    { id: 'moletons', name: 'Moletons' },
    { id: 'calcas', name: 'Calças' },
    { id: 'jaquetas', name: 'Jaquetas' },
    { id: 'shorts', name: 'Shorts' },
    { id: 'acessorios', name: 'Acessórios' },
  ];

  let filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">LOJA</h1>
          <p className="text-schar-gray text-lg">
            {filteredProducts.length} produtos
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-schar-gray-light">
        <div className="container-schar py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-schar-black text-schar-white'
                      : 'bg-schar-gray-light text-schar-black hover:bg-schar-gray-dark hover:text-schar-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <label className="text-sm uppercase tracking-wider text-schar-gray">
                Ordenar:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-schar-gray-light bg-schar-white text-sm uppercase tracking-wider focus:outline-none focus:border-schar-black"
              >
                <option value="default">Padrão</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container-schar py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-schar-gray text-lg">Nenhum produto encontrado nesta categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/produto/${product.id}`}
                className="product-card group animate-slide-up"
              >
                <div className="relative overflow-hidden aspect-square mb-4 bg-schar-gray-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-schar-black text-schar-white text-xs px-3 py-1 uppercase tracking-wider">
                      Novo
                    </span>
                  )}
                  <div className="absolute inset-0 bg-schar-black/0 group-hover:bg-schar-black/10 transition-all duration-300" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-schar-gray transition-colors">
                  {product.name}
                </h3>
                <p className="text-schar-gray-dark font-medium">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Loja;
