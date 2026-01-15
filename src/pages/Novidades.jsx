import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';

const Novidades = () => {
  const newProducts = products.filter(p => p.isNew);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">NOVIDADES</h1>
          <p className="text-schar-gray text-lg">
            As últimas peças que chegaram
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="container-schar py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
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
                <span className="absolute top-4 left-4 bg-schar-black text-schar-white text-xs px-3 py-1 uppercase tracking-wider">
                  Novo
                </span>
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-schar-gray-dark">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Novidades;
