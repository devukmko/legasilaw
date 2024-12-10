
const createWhatsAppLink = (
    recipientNumber: string
  ): string => {
    const message = `
   Halo Tim Legasi Law Firm,

Saya tertarik untuk berkonsultasi terkait perlindungan properti saya. Mohon informasi lebih lanjut mengenai layanan yang tersedia, seperti perizinan dan penyelesaian sengketa.

Terima kasih, saya menantikan tanggapan dari Anda.
    `;
  
    const encodedMessage = encodeURIComponent(message);
  
    return `https://wa.me/${recipientNumber}?text=${encodedMessage}`;
  };
  
  const recipientNumber = "6282288269666";
  
 export const clickWhatsappLink = () => {
  const whatsappLink = createWhatsAppLink(recipientNumber);
  
  return whatsappLink
}