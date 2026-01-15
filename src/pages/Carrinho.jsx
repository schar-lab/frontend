import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Carrinho = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio');
      return;
    }

    const whatsappNumber = '5511999999999'; // Substituir pelo número real
    
    let message = '🛍️ *PEDIDO SCHAR*\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Tamanho: ${item.size}\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });

    message += `💰 *TOTAL: R$ ${getCartTotal().toFixed(2).replace('.', ',')}*\n\n`;
    message += 'Gostaria de finalizar este pedido!';

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="animate-fade-in">
        <section className="bg-schar-black text-schar-white py-20">
          <div className="container-schar text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">CARRINHO</h1>
          </div>
        </section>

        <section className="container-schar py-20 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <svg
              className="w-24 h-24 mx-auto text-schar-gray-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className="text-2xl font-bold">Seu carrinho está vazio</h2>
            <p className="text-schar-gray">
              Adicione produtos incríveis da SCHAR ao seu carrinho
            </p>
            <Link to="/loja" className="btn-primary inline-block">
              Ir para Loja
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">CARRINHO</h1>
          <p className="text-schar-gray text-lg">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="container-schar py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-6 bg-schar-gray-light p-6 animate-slide-up"
              >
                <Link to={`/produto/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>

                <div className="flex-grow space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <Link
                        to={`/produto/${item.id}`}
                        className="font-semibold text-lg hover:text-schar-gray transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-schar-gray text-sm">Tamanho: {item.size}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-schar-gray hover:text-schar-black transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-schar-white hover:bg-schar-black hover:text-schar-white transition-colors"
                      >
                        -
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-schar-white hover:bg-schar-black hover:text-schar-white transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-bold text-lg">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-schar-gray hover:text-schar-black transition-colors text-sm uppercase tracking-wider"
            >
              Limpar Carrinho
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-schar-gray-light p-8 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-wider">Resumo</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-schar-gray">Subtotal</span>
                  <span className="font-semibold">
                    R$ {getCartTotal().toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-schar-gray">Frete</span>
                  <span className="font-semibold">A calcular</span>
                </div>
              </div>

              <div className="border-t border-schar-gray pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>R$ {getCartTotal().toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Finalizar no WhatsApp
              </button>

              <p className="text-xs text-schar-gray text-center leading-relaxed">
                Você será redirecionado para o WhatsApp para finalizar seu pedido com nossa equipe
              </p>

              <Link
                to="/loja"
                className="btn-secondary w-full text-center block"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Info */}
      <section className="bg-schar-black text-schar-white py-12">
        <div className="container-schar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-semibold uppercase text-sm tracking-wider">Compra Segura</h3>
              <p className="text-schar-gray text-sm">Seus dados estão protegidos</p>
            </div>
            <div className="space-y-3">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="font-semibold uppercase text-sm tracking-wider">Produtos Originais</h3>
              <p className="text-schar-gray text-sm">100% autênticos</p>
            </div>
            <div className="space-y-3">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <h3 className="font-semibold uppercase text-sm tracking-wider">Troca Fácil</h3>
              <p className="text-schar-gray text-sm">Até 7 dias após receber</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carrinho;
