import React from 'react';

const Cards = () => {
  const cards = [
    {
      title: 'Fast Performance',
      description: 'Experience lightning-fast speed and optimized performance in all our services.',
      icon: '🚀',
    },
    {
      title: 'Secure Platform',
      description: 'Your data is safe with us. We use top-notch security standards.',
      icon: '🔒',
    },
    {
      title: '24/7 Support',
      description: 'We’re always here to help you—day or night.',
      icon: '💬',
    },
  ];

  return (
    <section className="card-section bg-black py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">Our Features</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-xl shadow-md p-6 hover:shadow-blue-500/40 transition duration-300"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{card.title}</h3>
            <p className="text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
