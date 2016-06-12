export const isArray = arr => Array.isArray(arr)

export const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

export const isString = str => typeof str === 'string'

