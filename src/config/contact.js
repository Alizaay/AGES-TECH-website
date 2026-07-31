export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@ages-tech.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+1 (313) 722-7220',
  /** Digits only, for tel: and WhatsApp links */
  phoneE164: import.meta.env.VITE_CONTACT_PHONE_E164 || '+13137227220',
  whatsappUrl:
    import.meta.env.VITE_WHATSAPP_URL ||
    'https://wa.me/13137227220?text=Hello%20AGES-TECH%2C%20I%20would%20like%20to%20learn%20more.',
  address:
    import.meta.env.VITE_CONTACT_ADDRESS || 'Dearborn, Michigan, USA',
}

export default contact
