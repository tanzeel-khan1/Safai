import { brand } from '../data/brand';

export const getWhatsAppOrderUrl = (productName = '', size = '') => {
  const message = `Hello Safaï,

I would like to order:

• Product: ${productName}
• Size: ${size}
• Quantity:

Please share payment and delivery details.`;

  return `${brand.whatsappLink}?text=${encodeURIComponent(message)}`;
};

export const getGeneralWhatsAppUrl = () => {
  const message = `Hello Safaï,

I would like to order:

• Product:
• Size:
• Quantity:

Please share payment and delivery details.`;

  return `${brand.whatsappLink}?text=${encodeURIComponent(message)}`;
};
