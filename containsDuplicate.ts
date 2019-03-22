
function containsDuplicate(arr:number[]):boolean{

    //answer 1
    const removeDuplicateResult = [...new Set(arr)]
    const len = arr.length
    return removeDuplicateResult.length === len ? false : true

    //answer 2
    // const sortArr = arr.sort();
    // for(let i=0, len =sortArr.length; i<len; i++){
    //     if(sortArr[i]===sortArr[i+1]){
    //         return true
    //     }
    // }
    // return false
}

console.log(containsDuplicate([1,2,3,4,5,6]))