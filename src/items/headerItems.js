

export const categs = [
    {
        title: 'COMPONENTES',
        name: 'Componentes',
        get href() { return `/${this.name}` },
        subCategs: [
            {
                name: 'subcat1',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat2',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat3',
                get href() { return `/${this.name}` },
            }
        ]
    },
    {
        get href() { return `/${this.name}` },
        title: 'PERIFÉRICOS',
        name: 'Periféricos',
        subCategs: [
            {
                name: 'subcat1',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat2',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat3',
                get href() { return `/${this.name}` },
            }
        ]
    },
    {
        get href() { return `/${this.name}` },
        title: 'ORDENADORES',
        name: 'Ordenadores',
        subCategs: [
            {
                name: 'subcat1',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat2',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat3',
                get href() { return `/${this.name}` },
            }
        ]
    },
    {
        get href() { return `/${this.name}` },
        title: 'PORTÁTILES',
        name: 'Portátiles',
        subCategs: [
            {
                name: 'subcat1',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat2',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat3',
                get href() { return `/${this.name}` },
            }
        ]
    },
    {
        get href() { return `/${this.name}` },
        title: 'TABLETS',
        name: 'Tablets',
        subCategs: [
            {
                name: 'subcat1',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat2',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat3',
                get href() { return `/${this.name}` },
            }
        ]
    },
    {
        get href() { return `/${this.name}` },
        title: 'MÓVILES',
        name: 'Móviles',
        subCategs: [
            {
                name: 'subcat1',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat2',
                get href() { return `/${this.name}` },
            },
            {
                name: 'subcat3',
                get href() { return `/${this.name}` },
            }
        ]
    },
    {
        href: '/privado',
        title: 'PRIVADO',
        name: 'Privado'
    },
    {
        href: '/checkSesion',
        title: 'CHECK SESSION',
        name: 'Check'
    },
    {
        href: '/legalInfo',
        title: 'INFO LEGAL',
        name: 'Info'
    }

]



export const categss = {
    0: {

        title: 'COMPONENTES',
        name: 'Componentes',
        href: () => `/${this.name}`,
        subCategs: {
            0: {
                name: 'subcat1',
                href: () => `/${this.name}`,
            },
            1: {
                name: 'subcat2',
                href: () => `/${this.name}`,
            },
            2: {
                name: 'subcat3',
                href: () => `/${this.name}`,
            }
        }
    },

    1: {
        href: () => `/${this.name}`,
        title: 'PERIFÉRICOS',
        name: 'Periféricos',
        subCategs: {
            0: {
                name: 'subcat1',
                href: () => `/${this.name}`,
            },
            1: {
                name: 'subcat2',
                href: () => `/${this.name}`,
            },
            2: {
                name: 'subcat3',
                href: () => `/${this.name}`,
            }
        }
    },

    2: {
        href: () => `/${this.name}`,
        title: 'ORDENADORES',
        name: 'Ordenadores',
        subCategs: {
            0: {
                name: 'subcat1',
                href: () => `/${this.name}`,
            },
            1: {
                name: 'subcat2',
                href: () => `/${this.name}`,
            },
            2: {
                name: 'subcat3',
                href: () => `/${this.name}`,
            }
        }
    },

    3: {
        href: () => `/${this.name}`,
        title: 'PORTÁTILES',
        name: 'Portátiles',
        subCategs: {
            0: {
                name: 'subcat1',
                href: () => `/${this.name}`,
            },
            1: {
                name: 'subcat2',
                href: () => `/${this.name}`,
            },
            2: {
                name: 'subcat3',
                href: () => `/${this.name}`,
            }
        }
    },

    4: {
        href: () => `/${this.name}`,
        title: 'TABLETS',
        name: 'Tablets',
        subCategs: {
            0: {
                name: 'subcat1',
                href: () => `/${this.name}`,
            },
            1: {
                name: 'subcat2',
                href: () => `/${this.name}`,
            },
            2: {
                name: 'subcat3',
                href: () => `/${this.name}`,
            }
        }
    },

    5: {
        href: () => `/${this.name}`,
        title: 'MÓVILES',
        name: 'Móviles',
        subCategs: {
            0: {
                name: 'subcat1',
                href: () => `/${this.name}`,
            },
            1: {
                name: 'subcat2',
                href: () => `/${this.name}`,
            },
            2: {
                name: 'subcat3',
                href: () => `/${this.name}`,
            }
        }
    },

    itemsOrder: ['COMPONENTES', 'PERIFÉRICOS', 'ORDENADORES', 'PORTÁTILES', 'TABLETS', 'MÓVILES']

}

export const normalizeStr = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()