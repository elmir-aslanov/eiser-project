import React from 'react';
import { FaMoneyBillWave, FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const featureList = [
    {
      icon: <FaMoneyBillWave size={45} />,
      title: 'MONEY BACK GURANTEE',
      description: 'Shall open divide a one',
    },
    {
      icon: <FaTruck size={45} />,
      title: 'FREE DELIVERY',
      description: 'Shall open divide a one',
    },
    {
      icon: <FaHeadset size={45} />,
      title: 'ALWAY SUPPORT',
      description: 'Shall open divide a one',
    },
    {
      icon: <FaShieldAlt size={45} />,
      title: 'SECURE PAYMENT',
      description: 'Shall open divide a one',
    },
  ];

  return (
    <section className="features-area py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap -mx-4">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <div className="bg-white border border-gray-100 p-12 text-center transition-all duration-300 hover:shadow-xl group h-full flex flex-col items-center justify-center">
                <div className="mb-8 text-[#222222] transition-colors duration-300 group-hover:text-[#71cd14]">
                  {feature.icon}
                </div>
                <h4 className="text-[#222222] text-sm font-bold uppercase mb-4 tracking-widest">
                  {feature.title}
                </h4>
                <p className="text-[#777777] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
