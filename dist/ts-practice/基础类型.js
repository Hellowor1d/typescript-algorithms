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
//any  它允许你在编译时可选择地包含或移除类型检查
let x, y;
x = 1;
x = 'string';
x = [1, 2, 'string', mixTypeArr];
y = [1, 'string', mixTypeArr];
//Void 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let useless;
// Type 'null' is not assignable to type 'void'
// useless = undefined || null 
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
let nev;
//所以，never 基本不能被赋值，只代表一个永远不可达到的位置
// 返回never的函数必须存在无法达到的终点
//# sourceMappingURL=基础类型.js.map