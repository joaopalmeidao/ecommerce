export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image (Imagem)',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name (Nome do Produto)',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price (Preço)',
            type: 'number',
        },
        {
            name: 'promotional_price',
            title: 'Promotional Price (Preço Promocional)',
            type: 'number',
        },
        { 
            name: 'details',
            title: 'Details (Detalhes)',
            type: 'string',
        }
    ]
}
