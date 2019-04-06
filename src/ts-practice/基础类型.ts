//最简单的数据单元：数字，字符串，结构体，布尔值，Symbol
//Typescript 独有类型： 枚举类型

//基础类型
let bool:boolean = false

//字符串
let str:string = 'this is string'

//number
let num:number = 123

//数组 形式一
let arr1:number[] = [1,2,3]
//数组 形式二  第二种方式是使用数组泛型，Array<元素类型>
let arr2:Array<number> = [1,2,3]

//元组 Tuple 
let mixTypeArr:[string, number, boolean, number[]]
mixTypeArr = ['string', 123, true, [1,2]]
//TODO 这里和文档介绍有出入，越界元素并未使用联合类型，而是产生报错
// mixTypeArr[4] = 1 //报错 Type '1' is not assignable to type 'undefined'