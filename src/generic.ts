function createPromise<T>(x: T, timeout: number) {
    return new Promise((resolve: (v: T) => void, reject) => {
        setTimeout(() => {
            resolve(x)
        }, timeout)
    })
}

// function createPromise<T>(x: T, timeout: number) {
//     return new Promise<T>(resolve, reject) => {
//         setTimeout(() => {
//             resolve(x)
//         }, timeout)
//     })
// }

createPromise("1", 100).then(v => console.log(v.toUpperCase()))

function createTuple<T, U>(v: T, u: U): [T, U] {
    return [v, u]
}

const t1 = createTuple("user1", 23)
console.log(t1[0].toUpperCase() + " : " + t1[1])

//-------------------------------------------------------------------------------
interface DB<T> {
    add(v: T): void
    get(): T
}

class LocalDB<T> implements DB<T> {
    constructor(private localStorageKey: string) {

    }

    add(v: T) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v))
    }

    get(): T {
        const v = localStorage.getItem(this.localStorageKey)
        return (v) ? JSON.parse(v) : null
    }
}

interface User {name: string}

const userdb = new LocalDB<User>('user')
userdb.add({name: 'jay'})

const userA = userdb.get()
userA.name


class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.")
    }
    get(): T {
        throw new Error("Method not implemented.")
    } 
}

interface JSONSerializer {
    serialize(): string
}

//----- 타입 범위 고정
class JsonDB<T extends JSONSerializer> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.")
    }
    get(): T {
        throw new Error("Method not implemented.")
    }
}

interface Vegitable {
    v: string
}

interface Meat {
    m: string
}

interface Cart2<T> {
    getItem(): T extends Vegitable ? Vegitable : Meat 
}

const cart1: Cart2<Meat> = {
    getItem() {
        return {m: ''}
    }
}

cart1.getItem()