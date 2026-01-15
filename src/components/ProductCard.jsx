import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const ProductCard = ({ product }) => {
  return (
    <Link
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
        {formatPrice(product.price)}
      </p>
    </Link>
  );
};

export default ProductCard;
