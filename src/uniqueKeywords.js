import images from './data.js'

const uniqueKeywords = uniqueArray();
export default uniqueKeywords;


function uniqueArray() {
    const arrayKeywords = [];
    
    images.forEach(el => {
        arrayKeywords.push(el.keyword);
    })

    //Output only the unique characters of the array
    //For each element in arrayKeywords, check if it is in buildArray, if not in build array then push to build Array.
    const buildArray = [];    

    arrayKeywords.forEach(element => {
        if(buildArray.every(el => {return !(element === el)})) {
            buildArray.push(element);
        }
    })
    return buildArray;
}