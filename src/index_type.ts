/**
 * 속성의 이름이 정해지지 않고 동적으로 처리할 때 사용
 */

interface Props {
    // index 시그니처는 string | number 만 가능 -> 여기서는 key는 string, value는 string
    name: string
    [key: string]: string
}

const p: Props = {
    name: 'hello',
    a: 'd',
    b: 'e',
    c: '3',
}

let keys: keyof Props

interface User {
    name: string
    age: number
    hello(msg: string): void
}

let keysOfUser: keyof User // User의 키의 이름들이 union 타입으로 온다
keysOfUser = "age" // age, name, hello만 할당가능3

let helloMethod: User["hello"]
helloMethod = (msg: string): void => {
    console.log("hello")
}
