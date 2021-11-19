import fs from 'fs'

//fs = require('fs')
//\s+ =regexp para todos los "\..."
const xmlToCleanString = xml => xml.replace(/\n|\t/g, '').trim();
const mySplit = text => str => str.split(text, 12)
const deleteProlog = arr => arr.slice(1)

/**
 * /id/g matchea TODOS (todos por el atributo g de global) los id
 * Usamos new RegExp(pattern,attributes), poniendo g como atributo
 */
const tagNamesToTags = names => names.map(name => `<${name}>`)
const tagNamesToClosingTags = names => names.map(name => `</${name}>`)
const myReplaceAll = (oldElement, newElement) => str => str.replace(new RegExp(oldElement, 'g'), newElement)
const splitInSubArrays = key => arr => arr.map(elem => mySplit(key)(elem))

const categoriesToArray = arr => arr.map(subArr =>
    subArr.map((str, index) => index === 1 ? //Los nombres de las categorías están en el índice 1
        mySplit('</category>')(str) //Divido string en nuevo arrat
            .filter(word => word.length > 0) //Elimino elementos "" del array
            .map(value => myReplaceAll("[^\\w ]*", "")(value)) //Genero el mismo array con sus elementos limpios de símbolos
        :
        str)
)

const arraysToObjs = arr => arr.map(subArr => {
    const [id, categories, name, description, manufacturer, pvp, canon, stock, ean, status, reference, images] = subArr
    return { id, categories, name, description, manufacturer, pvp, canon, stock, ean, status, reference, images }
})

const pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)

const tagNames = ['id', 'categories', 'name', 'description', 'manufacturer', 'pvp', 'canon', 'stock', 'ean', 'status', 'reference', 'images']



export const csv = (cb) => fs.readFile('./catalog.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    }
    cb(data)
})


export const test = (cb) => fs.readFile('./trozoINFO.xml', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    }
    const xmlOnArray = pipe(
        xmlToCleanString,
        myReplaceAll(
            tagNamesToTags(tagNames).join('|')
            + '|' + '</product>'
            + '|' + '<category>'
            + '|' + '<\!\\[CDATA\\['
            + '|' + '\]\]>'
            , ''
        ),
        //myReplaceAll("<\!\\[CDATA\\[", ''),
        myReplaceAll(tagNamesToClosingTags(tagNames).join('|'), '*break*'),
        // [] agrupa, \w pilla alfanuméricos, el resto pilla símbolos y * lo repite todo...si no, solo pilla <A> pero no <AX> o <A1>
        myReplaceAll("<[\\w-'\"/= ]*>", match => match.toLowerCase()),

        mySplit('<product>'),

        deleteProlog,
        splitInSubArrays('*break*'),
        categoriesToArray,
        arraysToObjs)
        (data)
    //console.log(xmlOnArray)
    // console.log("ANTES  ", data)
    //console.log("DESPUES  ", xmlOnArray)
    //return xmlOnArray
    cb(xmlOnArray)
})




//module.exports = xmlToObject

