import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../data/mockData';

const Colecoes = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">COLEÇÕES</h1>
          <p className="text-schar-gray text-lg">
            Explore nossas linhas exclusivas
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="container-schar py-12">
        <div className="space-y-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-4xl font-bold tracking-tight">{collection.name}</h2>
                <p className="text-lg text-schar-gray-dark leading-relaxed">
                  {collection.description}
                </p>
                <p className="text-sm text-schar-gray uppercase tracking-wider">
                  {collection.productCount} produtos nesta coleção
                </p>
                <Link to="/loja" className="btn-primary inline-block">
                  Ver Produtos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-schar-gray-light py-20">
        <div className="container-schar text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não perca nossos lançamentos
          </h2>
          <p className="text-schar-gray mb-8 max-w-2xl mx-auto">
            Novas coleções exclusivas chegando em breve. Fique por dentro das novidades SCHAR.
          </p>
          <Link to="/novidades" className="btn-primary">
            Ver Novidades
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Colecoes;
