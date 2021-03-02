interface User {
    name: string
}

interface Action {
    do(): void
}

//---intersection type return - 두 타입을 합친다
function createUserAction(u: User, a: Action): User & Action {
    return { ...u, ...a }
}

const u = createUserAction({name: 'jay'}, {do() { }})

//--- |를 이용한 타입 표현
function compare(x: string, y: string) // function signiture
function compare(x: number, y: number)
function compare(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1
    }

    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y)
    }

    throw Error('not supported parameter type : (' + typeof x +", " + typeof y + ")")
}

const v = compare(3, 1);

function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined
}

function process(v: User | Action) {
    // if ( (<Action>v).do ) { //do가 있는지 여부로 Action 타입 여부 판별
    //     (<Action>v).do()  // 매번 타입 캐스팅을 위해 감싸야됨
    // }
    if (isAction(v)) { //타입가드
        v.do()
    } else {
        v.name
    }
}

