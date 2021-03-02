interface User {
    name: string
}

interface Action {
    do(): void
}

type UserAction = User & Action //-- intersection type으로 재정의

function createUserAction(): UserAction {
    return {
        name: '',
        do() {}
    }
}

type StringOrNumber = string | number
type arr<T> = T[]
type P<T> = Promise<T>


type User2 = {
    name: string
    login(): boolean
}

class UserImpl implements User2 {
    name: string
    login(): boolean {
        throw new Error("Method not implemented.")
    }
}

// --- string 값에 대한 union 타입
type UserState = "PENDING" | "APPROVED" | "REJECTED"

function checkUser(user: User2) {
    if (user.login()) {
        return "APPROVED"
    } else {
        return "REJECTED"
    }
}