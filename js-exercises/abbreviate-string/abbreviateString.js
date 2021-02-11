import { isString } from 'util';

function abbreviateString(str) {
    let result = '';
    if (typeof (str) === 'string') 
    {
        let splitString = str.trim().split(' ');
        if (splitString.length > 1) 
            result = splitString[0] + ' ' + splitString[splitString.length - 1].charAt(0).toUpperCase() + '.';
    } 
    else {
        throw new Error('throws error on invalid parameters');
    }
    return result;
}

export { abbreviateString };
