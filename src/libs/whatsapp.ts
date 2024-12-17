
const createWhatsAppLink = (
    recipientNumber: string
  ): string => {
    const message = `
Halo Tim Legasi! Saya ingin berkonsultasi terkait legalitas dan perlindungan properti saya. Mohon informasi lebih lanjut. Terimakasih.
    `;
  
    const encodedMessage = encodeURIComponent(message);
  
    return `https://wa.me/${recipientNumber}?text=${encodedMessage}`;
  };
  
  const recipientNumber = "6285195911184";
  
 export const clickWhatsappLink = () => {
  const whatsappLink = createWhatsAppLink(recipientNumber);
  
  return whatsappLink
}