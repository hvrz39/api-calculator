export const orderArray = (array, property, direction='asc') => array.sort((a,b) =>
             direction === 'asc' ? (a[property]  > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0)
                                    :(b[property]  > a[property]) ? 1 : ((a[property] > b[property]) ? -1 : 0))