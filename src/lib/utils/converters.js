const complement = fn => (...args) => !fn(...args);
const isNullOrUndefined = value => [null, undefined].includes(value);
const isValidValue = complement(isNullOrUndefined);
// const isValidValue = (value) => !isNullOrUndefined(value);

export const objectToFormData = object =>
  Object.entries(object).reduce((formData, [key, value]) => {
    if (isValidValue(value)) {
      Array.isArray(value)
        ? value.forEach(element => formData.append(key + '[]', element))
        : formData.append(key, value);
    }
    return formData;
  }, new FormData());



const own_objectToFormData = object => {
  var formData = new FormData();
  Object.entries(object).map(keyValue => formData.append(keyValue[0], keyValue[1]))
  return formData
}


export const withFormData = fn => (object, adId) => {
  const formData = objectToFormData(object);
  return adId ?
    fn(formData, adId)
    :
    fn(formData)
};
