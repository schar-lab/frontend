import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Quando houver backend, integrar aqui
    const whatsappNumber = '5511999999999'; // Substituir pelo número real
    const message = `Olá! Meu nome é ${formData.name}.\n\nAssunto: ${formData.subject}\n\n${formData.message}\n\nEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-schar-black text-schar-white py-20">
        <div className="container-schar text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">CONTATO</h1>
          <p className="text-schar-gray text-lg">
            Entre em contato com a gente
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container-schar py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-schar-gray-light focus:outline-none focus:border-schar-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-schar-gray-light focus:outline-none focus:border-schar-black"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-schar-gray-light focus:outline-none focus:border-schar-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 uppercase tracking-wider">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-schar-gray-light focus:outline-none focus:border-schar-black resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar via WhatsApp
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 uppercase text-sm tracking-wider">WhatsApp</h3>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-schar-gray-dark hover:text-schar-black transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 uppercase text-sm tracking-wider">Email</h3>
                  <a
                    href="mailto:contato@schar.com.br"
                    className="text-schar-gray-dark hover:text-schar-black transition-colors"
                  >
                    contato@schar.com.br
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 uppercase text-sm tracking-wider">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-schar-gray-dark hover:text-schar-black transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-schar-gray-dark hover:text-schar-black transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-schar-gray-light p-8">
              <h3 className="font-bold text-xl mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-schar-gray-dark">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-schar-gray-light py-20">
        <div className="container-schar max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Como faço um pedido?',
                a: 'Navegue pela loja, escolha seus produtos e tamanhos, adicione ao carrinho e finalize via WhatsApp.',
              },
              {
                q: 'Qual o prazo de entrega?',
                a: 'O prazo varia de acordo com sua região. Entre em contato pelo WhatsApp para mais informações.',
              },
              {
                q: 'Como funciona a troca?',
                a: 'Aceitamos trocas em até 7 dias após o recebimento. O produto deve estar sem uso e com etiqueta.',
              },
              {
                q: 'Quais formas de pagamento?',
                a: 'Pix, cartão de crédito e boleto. Entre em contato para mais detalhes.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-schar-white p-6 cursor-pointer">
                <summary className="font-semibold">{faq.q}</summary>
                <p className="mt-3 text-schar-gray-dark">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
