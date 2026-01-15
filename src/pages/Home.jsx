import React from 'react';
import { Link } from 'react-router-dom';
import { products, collections } from '../data/mockData';

const Home = () => {
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-schar-black text-schar-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=1920&auto=format&fit=crop)',
          }}
        />
        <div className="relative z-10 text-center container-schar px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter animate-slide-up">
            SCHAR
          </h1>
          <p className="text-xl md:text-2xl mb-8 tracking-wide font-light">
            STREET CULTURE IS A LIFESTYLE
          </p>
          <Link to="/loja" className="btn-primary inline-block">
            Comprar Agora
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container-schar py-20">
        <h2 className="section-title text-center mb-12">Coleções</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to="/colecoes"
              className="group relative overflow-hidden aspect-[3/4]"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-schar-black/80 to-transparent flex flex-col justify-end p-6 text-schar-white">
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-sm text-schar-gray-light mb-2">{collection.description}</p>
                <span className="text-xs uppercase tracking-wider">
                  {collection.productCount} produtos
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-schar-gray-light py-20">
        <div className="container-schar">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title mb-0">Novidades</h2>
            <Link to="/novidades" className="nav-link">
              Ver Tudo →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <Link
                key={product.id}
                to={`/produto/${product.id}`}
                className="product-card group"
              >
                <div className="relative overflow-hidden aspect-square mb-4 bg-schar-white">
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
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-schar-gray-dark">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="container-schar py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Autenticidade sem limites
          </h2>
          <p className="text-lg text-schar-gray leading-relaxed">
            SCHAR nasceu das ruas, do skate e da cultura underground. 
            Cada peça é pensada para quem vive intensamente, sem medo de se expressar. 
            Minimalismo, qualidade e atitude definem nossa essência.
          </p>
          <Link to="/sobre" className="btn-secondary inline-block mt-8">
            Conheça Nossa História
          </Link>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar">
          <h2 className="section-title text-center mb-12">@schar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-schar-gray-dark" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
