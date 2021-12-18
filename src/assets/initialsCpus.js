const cpus = [
    {
        name: 'AMD Ryzen 5 1600 3.2GHZ BOX',
        brand: 'AMD',
        price: 174,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1600.jpg']

    },
    {
        name: 'AMD Ryzen 5 3600 3.6GHz BOX',
        brand: 'AMD',
        price: 259,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3600.jpg']

    },
    {
        name: 'AMD Ryzen 5 5600G 4.40GHz',
        brand: 'AMD',
        price: 259,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1183-amd-ryzen-5-5600g-440ghz.jpg']

    },
    {
        name: 'AMD Ryzen 7 3700X 3.6GHz BOX',
        brand: 'AMD',
        price: 294,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3700x.jpg']

    },
    {
        name: 'AMD Ryzen 7 3800X 3.9GHz BOX',
        brand: 'AMD',
        price: 310,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3800x.jpg']

    },
    {
        name: 'AMD Ryzen 5 5600X 3.7GHz',
        brand: 'AMD',
        price: 307,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1101-amd-ryzen-5-5600x-37ghz.jpg']

    },
    {
        name: 'AMD Ryzen 7 5700G 4.6GHz',
        brand: 'AMD',
        price: 330,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1315-amd-ryzen-7-5700g-46ghz.jpg']

    },
    {
        name: 'AMD RYZEN 7 1800X 4.0GHz',
        brand: 'AMD',
        price: 355,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1800x.jpg']

    },
    {
        name: 'AMD Ryzen 7 5800X 3.8GHz',
        brand: 'AMD',
        price: 379,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/168-amd-ryzen-7-5800x-38ghz.jpg']

    },
    {
        name: 'AMD Ryzen 9 5900X 3.7 GHz',
        brand: 'AMD',
        price: 530,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1997-amd-ryzen-9-5900x-37-ghz.jpg']

    },
    {
        name: 'AMD Ryzen 9 5950X 3.4 GHz',
        brand: 'AMD',
        price: 780,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1235-amd-ryzen-9-5950x-34-ghz.jpg']

    },
    {
        name: 'AMD Ryzen 9 3950X 4.70 GHz',
        brand: 'AMD',
        price: 650,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3950x.jpg']

    },
    {
        name: 'Intel Core i7-12700K 5.0 GHz',
        brand: 'INTEL',
        price: 478,
        categories: ['Componentes', 'Procesadores', 'Procesadores INTEL'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12700k.jpg']

    },
    {
        name: 'Intel Core i5-12600K 4.9 GHz',
        brand: 'INTEL',
        price: 355,
        categories: ['Componentes', 'Procesadores', 'Procesadores INTEL'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12600K.jpg']

    },
    {
        name: 'Intel Core i9-12900K 5.2 GHz',
        brand: 'INTEL',
        price: 649,
        categories: ['Componentes', 'Procesadores', 'Procesadores INTEL'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12900K.jpg']

    },
    {
        name: 'Intel Core i7-12700KF 5.0 GHz',
        brand: 'INTEL',
        price: 404,
        categories: ['Componentes', 'Procesadores', 'Procesadores INTEL'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12700KF.jpg']

    },
    {
        name: 'Intel Core i9-12900KF 5.2 GHz',
        brand: 'INTEL',
        price: 745,
        categories: ['Componentes', 'Procesadores', 'Procesadores INTEL'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12900KF.jpg']

    },
    {
        name: 'Intel Core i5-12600KF 4.9 GHz',
        brand: 'INTEL',
        price: 357,
        categories: ['Componentes', 'Procesadores', 'Procesadores INTEL'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12600KF.jpg']

    }
]

const cpusWithFilters = cpus.map(cpu => {
    cpu.filters = ['brand', 'price']
    return cpu
})
export default cpusWithFilters