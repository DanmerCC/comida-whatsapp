const NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
console.log(NUMBER)
export default {
    currency: {
        prefix: 'S./'
    },
    formatCurrency(value, locale = 'es-PE', currency = 'PEN') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    },
    whatsapp: {
        url: 'https://api.whatsapp.com/send',
        phone: NUMBER,
        text: 'Hola, quiero pedir'
    },
} 