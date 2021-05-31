

export const doOperation = ({ type, elements }) => 
{
    switch(type) {
        case 'addition': {            
            return addition(parseElementsToInt(elements))
        }
        case 'substraction': {            
            return substraction(parseElementsToInt(elements))
        }
        case 'division': {
            return division(parseElementsToInt(elements))
        }
        case 'multiplication': {
            return multiplication(parseElementsToInt(elements))
        }
        case 'free_form': {
            return eval(elements[0]);
        }
        case 'square_root': {            
            return Math.sqrt(parseInt(elements[0])).toFixed(2);
        }
        default:
            throw `Operation not supported!`
    }
}


const addition = elements => elements.map(s=> parseInt(s)).reduce((sum, x) => sum + x);

const substraction = elements => elements.map(s=> parseInt(s)).reduce((sum, x) => sum -  x);

const division = elements => elements.map(s=> parseInt(s)).reduce((sum, x) => sum /  x).toFixed(2);

const multiplication = elements => elements.map(s=> parseInt(s)).reduce((sum, x) => sum *  x);

const parseElementsToInt = elements => elements.map(s=> parseInt(s))