const months = [
    'enero',
    'febrero',
    'marxo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]
/*
export const fullDate = date => {
    const month = months(date.getMonth())
    const day = date.getDate()
    const year = date.getFullYear()
    return

}
*/
export const formatDate = (rawDate, namedMonth) => {
    const date = new Date(rawDate)

    const month = namedMonth ?
        months[date.getMonth()]
        :
        `${date.getMonth() + 1}`

    const day = date.getDate()
    const year = date.getFullYear()
    const formatedDate = namedMonth ?
        `${day}-${month.substr(0, 3)}-${year}`
        :
        `${day.toString().padStart(2, "0")}/${month.padStart(2, "0")}/${year}`
    return formatedDate

}

