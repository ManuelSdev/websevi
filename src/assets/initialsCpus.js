const cpus = [
    {
        name: 'AMD Ryzen 5 1600 3.2GHZ BOX',
        Marca: 'AMD',
        price: 174,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1600.jpg'],
        featured: true

    },
    {
        name: 'AMD Ryzen 5 3600 3.6GHz BOX',
        Marca: 'AMD',
        price: 259,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3600.jpg']

    },
    {
        name: 'AMD Ryzen 5 5600G 4.40GHz',
        Marca: 'AMD',
        price: 259,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1183-amd-ryzen-5-5600g-440ghz.jpg']

    },
    {
        name: 'AMD Ryzen 7 3700X 3.6GHz BOX',
        Marca: 'AMD',
        price: 294,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3700x.jpg']

    },
    {
        name: 'AMD Ryzen 7 3800X 3.9GHz BOX',
        Marca: 'AMD',
        price: 310,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3800x.jpg'],


    },
    {
        name: 'AMD Ryzen 5 5600X 3.7GHz',
        Marca: 'AMD',
        price: 307,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1101-amd-ryzen-5-5600x-37ghz.jpg']

    },
    {
        name: 'AMD Ryzen 7 5700G 4.6GHz',
        Marca: 'AMD',
        price: 330,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1315-amd-ryzen-7-5700g-46ghz.jpg'],
        featured: true

    },
    {
        name: 'AMD RYZEN 7 1800X 4.0GHz',
        Marca: 'AMD',
        price: 355,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1800x.jpg']

    },
    {
        name: 'AMD Ryzen 7 5800X 3.8GHz',
        Marca: 'AMD',
        price: 379,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/168-amd-ryzen-7-5800x-38ghz.jpg']

    },
    {
        name: 'AMD Ryzen 9 5900X 3.7 GHz',
        Marca: 'AMD',
        price: 530,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1997-amd-ryzen-9-5900x-37-ghz.jpg']

    },
    {
        name: 'AMD Ryzen 9 5950X 3.4 GHz',
        Marca: 'AMD',
        price: 780,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/1235-amd-ryzen-9-5950x-34-ghz.jpg']

    },
    {
        name: 'AMD Ryzen 9 3950X 4.70 GHz',
        Marca: 'AMD',
        price: 650,
        categories: ['Componentes', 'Procesadores', 'Procesadores AMD'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+amd/3950x.jpg']

    },
    {
        name: 'Intel Core i7-12700K 5.0 GHz',
        Marca: 'Intel',
        price: 478,
        categories: ['Componentes', 'Procesadores', 'Procesadores Intel'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12700k.jpg'],
        featured: true

    },
    {
        name: 'Intel Core i5-12600K 4.9 GHz',
        Marca: 'Intel',
        price: 355,
        categories: ['Componentes', 'Procesadores', 'Procesadores Intel'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12600K.jpg']

    },
    {
        name: 'Intel Core i9-12900K 5.2 GHz',
        Marca: 'Intel',
        price: 649,
        categories: ['Componentes', 'Procesadores', 'Procesadores Intel'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12900K.jpg']

    },
    {
        name: 'Intel Core i7-12700KF 5.0 GHz',
        Marca: 'Intel',
        price: 404,
        categories: ['Componentes', 'Procesadores', 'Procesadores Intel'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12700KF.jpg']

    },
    {
        name: 'Intel Core i9-12900KF 5.2 GHz',
        Marca: 'Intel',
        price: 745,
        categories: ['Componentes', 'Procesadores', 'Procesadores Intel'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12900KF.jpg']

    },
    {
        name: 'Intel Core i5-12600KF 4.9 GHz',
        Marca: 'Intel',
        price: 357,
        categories: ['Componentes', 'Procesadores', 'Procesadores Intel'],
        images: ['https://bucketmoon.s3.eu-west-3.amazonaws.com/initProducts/cpu+intel/12600KF.jpg'],
        featured: true

    }
]

const cpusWithFilters = cpus.map(cpu => {
    cpu.filters = ['Marca', 'price']
    cpu.description = "Cuando cuentas con la arquitectura de procesadores m??s avanzada del mundo para jugadores y creadores de contenido, las posibilidades son infinitas. Ya sea que juegues los juegos m??s recientes, dise??es el pr??ximo rascacielos o proceses datos, necesitas un procesador poderoso que pueda dar respuesta a todas estas demandas, y m??s. Sin lugar a dudas, los procesadores para computadoras de escritorio AMD Ryzen??? serie 5000 elevan el nivel de expectativa para jugadores y artistas por igual."
    cpu.specs = [
        'N.?? de n??cleos de CPU 6',
        'N.?? de subprocesos 12',
        'N.?? de n??cleos de GPU 7',
        'Reloj base 3.9GHz',
        'Reloj de aumento m??x. Hasta 4.4GHz',
        'Cach?? L2 total 3MB',
        'Cach?? L3 total 16MB',
        'Desbloqueados S??',
        'CMOS TSMC 7nm FinFET',
        'Paquete AM4',
        'Versi??n de PCI Express PCIe?? 3.0',
        'Soluci??n t??rmica Wraith Stealth',
        'TDP/TDP predeterminado 65W',
        'cTDP 45-65W',
        'Temp. m??x. 95??C',
        '*Compatible con SO',
        'Windows 10 edici??n de 64??bits',
        'RHEL x86 edici??n de 64??bits',
        'Ubuntu x86 edici??n de 64??bits',
        '*El soporte del sistema operativo (SO) variar?? seg??n el fabricante.',
        'Velocidad m??xima de memoria Up to 3200MHz',
        'Tipo de memoria DDR4',
        'Canales de memoria 2',
        'Especificaciones de gr??ficos',
        'Frecuencia de gr??ficos 1900 MHz',
        'Modelo de gr??ficos Radeon??? Graphics',
        'Cant. de n??cleos de los gr??ficos 7',
        'Funcionalidades principales',
        'Display Port S??',
        'HDMI??? S??',
    ]
    return cpu
})
export default cpusWithFilters