

const decodeHtmlCharCodes = str =>
    str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
        String.fromCharCode(charCode));

export default decodeHtmlCharCodes