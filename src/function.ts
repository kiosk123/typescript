function add(x: number, y: number): number {
    return x + y
}

const result: number = add(1, 2)

// ?는 있어도 그만 없어도 그만인 옵셔널 파라미터
function buildUserInfo(name = "-", email?: string): {name:string, email:string} {
    return {name, email}
}

const user = buildUserInfo("hello", "@naver.com");

const add2 = (a: number, b: number): number => a + b
const result2 = add2(1, 2)

interface Storage {
    a: string
}

interface ColdStorage {
    b: string
}

// 함수 시그니처 정의 
// 통조림을 값으로 넘기면 Storage 반환
// 아이스크림을 값으로 넘기면 ColdStorage 반환
function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage

function store(type: "통조림" | "아이스크림") {
    if (type == "통조림") {
        return { a: "통조림"}
    } else if (type == "아이스크림") {
        return { b: "아이스크림"}
    } else {
        throw new Error("Unsupported Type")
    }
}


const s = store("통조림");
console.log(s.a)
