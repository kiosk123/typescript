let numValue: number
let stringValue: string
let booleanValue: boolean
let undefinedValue: undefined
let nullValue: null
let objValue: object
let symbolValue: symbol // es6 부터

symbolValue = Symbol() // 주로 객체의 프로퍼티로 쓰임

{
    symbolValue: 'hello'
}

let nameList: string[] //string type 배열
nameList = ['a', 'b', 'c']

let user1: { name: string, score: number } // 객체 타입 및 객체의 프로퍼티 타입 선언
user1 = {
    name: 'jay',
    score: 30
}

let tuple: [number, string] //tuple 타입
tuple = [1, 'hello']

let tuple2:[number, number, number]
tuple2 = [1, 2, 3]

