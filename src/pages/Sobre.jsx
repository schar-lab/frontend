import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-schar-black text-schar-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&auto=format&fit=crop)',
          }}
        />
        <div className="relative z-10 text-center container-schar px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">SOBRE A SCHAR</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Nascemos das ruas
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container-schar py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Nossa História</h2>
            <p className="text-lg text-schar-gray-dark leading-relaxed">
              SCHAR nasceu em 2026 com a missão de trazer autenticidade para o streetwear brasileiro. 
              Inspirados pela cultura skate, hip-hop e underground, criamos peças que representam 
              o espírito das ruas com design minimalista e atemporal.
            </p>
            <p className="text-lg text-schar-gray-dark leading-relaxed">
              Cada produto é pensado para quem vive intensamente, sem medo de se expressar. 
              Acreditamos que a moda é uma forma de comunicação, e nossas peças falam por si mesmas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold">100%</div>
              <p className="text-sm uppercase tracking-wider text-schar-gray">
                Autêntico
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold">BR</div>
              <p className="text-sm uppercase tracking-wider text-schar-gray">
                Feito no Brasil
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold">∞</div>
              <p className="text-sm uppercase tracking-wider text-schar-gray">
                Sem Limites
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Valores</h2>
            <ul className="space-y-4 text-lg text-schar-gray-dark">
              <li className="flex items-start">
                <span className="font-bold mr-3">→</span>
                <span><strong>Autenticidade:</strong> Somos reais, sem filtros ou máscaras</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">→</span>
                <span><strong>Qualidade:</strong> Apenas materiais premium e acabamento impecável</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">→</span>
                <span><strong>Cultura:</strong> Respeitamos e celebramos a cultura das ruas</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">→</span>
                <span><strong>Comunidade:</strong> Construímos junto com quem veste SCHAR</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Street Culture is a Lifestyle
          </h2>
          <p className="text-lg text-schar-gray leading-relaxed mb-8">
            Não é só sobre roupa. É sobre atitude, expressão e liberdade. 
            SCHAR é para quem vive sem medo de ser quem realmente é.
          </p>
          <Link to="/loja" className="btn-primary">
            Conheça Nossa Loja
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
