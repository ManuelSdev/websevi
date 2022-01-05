
const mapFilters = [
    ['brand', 'Marca'],
    ['price', 'Precio'],
    ['chipset', 'Chipset'],
    ['size', 'Factor de forma'],
]

const mapFields = {
    brand: 'Marca',
    price: 'Precio',
    chipset: 'Chipset',
    size: 'Factor de forma'
}

export const mapNames = field => mapFields[`${field}`]