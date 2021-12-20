

const filtersFieldToOneArray = filters => {
    const arrayOfFiltersArrays = filters.map(filter => {
        const key = Object.keys(filter)
        return filter[`${key}`]

    })
    const merged = [].concat.apply([], arrayOfFiltersArrays);
    const mergedFormated = merged.length > 0 ?
        merged.map(filter => toPlainString(filter))
        :
        ['1', '2']
    return mergedFormated
}