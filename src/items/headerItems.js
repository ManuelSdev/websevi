

export const categs = [
    {
        title: 'COMPONENTES',
        page: 'componentes',
        get href() { return `/${this.page}` },
        subCategs: [
            {
                page: 'subcat1',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat2',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat3',
                get href() { return `/${this.page}` },
            }
        ]
    },
    {
        get href() { return `/${this.page}` },
        title: 'PERIFÉRICOS',
        page: 'perifericos',
        subCategs: [
            {
                page: 'subcat1',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat2',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat3',
                get href() { return `/${this.page}` },
            }
        ]
    },
    {
        get href() { return `/${this.page}` },
        title: 'ORDENADORES',
        page: 'ordenadores',
        subCategs: [
            {
                page: 'subcat1',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat2',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat3',
                get href() { return `/${this.page}` },
            }
        ]
    },
    {
        get href() { return `/${this.page}` },
        title: 'PORTÁTILES',
        page: 'portatiles',
        subCategs: [
            {
                page: 'subcat1',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat2',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat3',
                get href() { return `/${this.page}` },
            }
        ]
    },
    {
        get href() { return `/${this.page}` },
        title: 'TABLETS',
        page: 'tablets',
        subCategs: [
            {
                page: 'subcat1',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat2',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat3',
                get href() { return `/${this.page}` },
            }
        ]
    },
    {
        get href() { return `/${this.page}` },
        title: 'MÓVILES',
        page: 'moviles',
        subCategs: [
            {
                page: 'subcat1',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat2',
                get href() { return `/${this.page}` },
            },
            {
                page: 'subcat3',
                get href() { return `/${this.page}` },
            }
        ]
    },
    {
        href: '/privado',
        title: 'PRIVADO',
        page: 'Privado'
    },
    {
        href: '/checkSession',
        title: 'CHECK SESSION',
        page: 'Check'
    },
    {
        href: '/legalInfo',
        title: 'INFO LEGAL',
        page: 'Info'
    },
    {
        href: '/upload',
        title: 'SUBIR IMAGENES',
        page: 'Upload'
    }


]





export const normalizeStr = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()