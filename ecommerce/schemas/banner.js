export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image (Imagem)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText (Texto do Botão)',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Product (Produto)',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Short Description (Descrição Curta)',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'SmallText (Texto Pequeno)',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText (Texto Médio)',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText 1 (Texto Grande 1)',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'LargeText 2 (Texto Grande 2)',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount (Desconto)',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime (Tempo de duração)',
            type: 'string',
        },
    ],
};