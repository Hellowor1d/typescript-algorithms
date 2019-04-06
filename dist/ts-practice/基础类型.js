"use strict";
//最简单的数据单元：数字，字符串，结构体，布尔值，Symbol
//Typescript 独有类型： 枚举类型
//基础类型
let bool = false;
//字符串
let str = 'this is string';
//number
let num = 123;
//数组 形式一
let arr1 = [1, 2, 3];
//数组 形式二  第二种方式是使用数组泛型，Array<元素类型>
let arr2 = [1, 2, 3];
//元组 Tuple 
let mixTypeArr;
mixTypeArr = ['string', 123, true, [1, 2]];
//TODO 这里和文档介绍有出入，越界元素并未使用联合类型，而是产生报错
// mixTypeArr[4] = 1 //报错 Type '1' is not assignable to type 'undefined'
//枚举类型 默认情况下，从0开始为元素编号
//很方便可以用来做类型-编码对应表
var Role;
(function (Role) {
    Role[Role["teacher"] = 0] = "teacher";
    Role[Role["student"] = 1] = "student";
    Role[Role["monitor"] = 4] = "monitor";
})(Role || (Role = {}));
let man1 = Role[1];
let man3 = Role[4];
console.log(Role); //{0: "teacher", 1: "student", 4: "monitor", teacher: 0, student: 1, monitor: 4}
console.log(man1); // student
console.log(man3); // monitor
//# sourceMappingURL=基础类型.js.map