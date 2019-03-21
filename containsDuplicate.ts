
function containsDuplicate(arr:number[]):boolean{

    //answer 1
    const removeDuplicateResult = [...new Set(arr)]
    const len = arr.length
    return removeDuplicateResult.length === len ? false : true

    //answer 2
    const sortArr = arr.sort();
    for(let i=0, len =arr.length; i<len; i++;){

    }
}

console.log(containsDuplicate([1,2,3,4]))