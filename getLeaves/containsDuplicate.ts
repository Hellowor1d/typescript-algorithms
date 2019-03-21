
function containsDuplicate(arr:number[]):boolean{
    const removeDuplicateResult = [...new Set(arr)]
    const len = arr.length
    return removeDuplicateResult.length === len ? false : true
}