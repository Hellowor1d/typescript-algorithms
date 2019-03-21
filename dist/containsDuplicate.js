"use strict";
function containsDuplicate(arr) {
    const removeDuplicateResult = [...new Set(arr)];
    const len = arr.length;
    return removeDuplicateResult.length === len ? false : true;
}
console.log(containsDuplicate([1, 2, 3, 4]));
//# sourceMappingURL=containsDuplicate.js.map