
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
        phone: '51955745111',
        text: 'Hola, quiero pedir'
    },
} 