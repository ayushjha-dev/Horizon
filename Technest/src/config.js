export const config = {
  shopName: "TechNest Electronics",
  phone: "+91 99999 99999",
  whatsappNumber: "919999999999", // Format: countrycode + number (no spaces or plus)
  address: "Shop 14, Silicon Plaza, Cyber Sector, New Delhi, India 110001",
  email: "hello@technest.in",
  hours: [
    { days: "Monday - Saturday", time: "09:30 AM - 08:00 PM" },
    { days: "Sunday", time: "10:00 AM - 04:00 PM" }
  ],
  socials: {
    instagram: "https://instagram.com/technest_repairs",
    facebook: "https://facebook.com/technest.repairs",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961605374465!2d77.21832047631326!3d28.630026275665814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37e2850931%3A0xe2b7617b07dbd0c!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const getWhatsAppLink = (message) => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
