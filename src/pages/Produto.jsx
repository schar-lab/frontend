import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Produto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="container-schar py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Link to="/loja" className="btn-primary">
          Voltar para Loja
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho');
      return;
    }

    addToCart(product, selectedSize);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-20 right-4 bg-schar-black text-schar-white px-6 py-4 z-50 animate-slide-up shadow-lg">
          <p className="font-semibold">Produto adicionado ao carrinho!</p>
        </div>
      )}

      {/* Product Details */}
      <section className="container-schar py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-schar-gray-light overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-schar-black' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {product.isNew && (
              <span className="inline-block bg-schar-black text-schar-white text-xs px-3 py-1 uppercase tracking-wider">
                Novo
              </span>
            )}
            
            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
            
            <p className="text-3xl font-bold">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>

            <div className="border-t border-schar-gray-light pt-6">
              <p className="text-schar-gray-dark leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block font-semibold mb-3 uppercase text-sm tracking-wider">
                Selecione o tamanho:
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-schar-black text-schar-white'
                        : 'bg-schar-gray-light text-schar-black hover:bg-schar-gray-dark hover:text-schar-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full"
            >
              Adicionar ao Carrinho
            </button>

            {/* Size Guide */}
            <div className="border-t border-schar-gray-light pt-6">
              <details className="cursor-pointer">
                <summary className="font-semibold uppercase text-sm tracking-wider mb-3">
                  Guia de Tamanhos
                </summary>
                <table className="w-full text-sm mt-3">
                  <thead className="border-b border-schar-gray-light">
                    <tr>
                      <th className="text-left py-2">Tamanho</th>
                      <th className="text-left py-2">Peito (cm)</th>
                      <th className="text-left py-2">Comprimento (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="text-schar-gray-dark">
                    <tr className="border-b border-schar-gray-light">
                      <td className="py-2">P</td>
                      <td className="py-2">92-98</td>
                      <td className="py-2">68-70</td>
                    </tr>
                    <tr className="border-b border-schar-gray-light">
                      <td className="py-2">M</td>
                      <td className="py-2">98-104</td>
                      <td className="py-2">70-72</td>
                    </tr>
                    <tr className="border-b border-schar-gray-light">
                      <td className="py-2">G</td>
                      <td className="py-2">104-110</td>
                      <td className="py-2">72-74</td>
                    </tr>
                    <tr>
                      <td className="py-2">GG</td>
                      <td className="py-2">110-116</td>
                      <td className="py-2">74-76</td>
                    </tr>
                  </tbody>
                </table>
              </details>
            </div>

            {/* Product Details */}
            <div className="border-t border-schar-gray-light pt-6">
              <details className="cursor-pointer">
                <summary className="font-semibold uppercase text-sm tracking-wider mb-3">
                  Detalhes do Produto
                </summary>
                <ul className="list-disc list-inside text-schar-gray-dark space-y-2 mt-3">
                  <li>100% algodão premium</li>
                  <li>Modelagem oversized</li>
                  <li>Estampa exclusiva SCHAR</li>
                  <li>Fabricado no Brasil</li>
                  <li>Lavar em água fria</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-schar-gray-light py-20">
          <div className="container-schar">
            <h2 className="section-title mb-12">Você também pode gostar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/produto/${relatedProduct.id}`}
                  className="product-card group"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="relative overflow-hidden aspect-square mb-4 bg-schar-white">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="product-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-schar-gray-dark">
                    R$ {relatedProduct.price.toFixed(2).replace('.', ',')}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Produto;
