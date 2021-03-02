interface User {
    name: string
}

interface Product {
    id: string
    price: number
}

// ES6와 다르게 TS에서는 참조할 멤버 property가 미리 정의되어야함
class Cart {
    // private user: User // private, protected, public => default는 public
    // private store: object

    // 생성자 파라미터에 접근제한자 변수명으로 선언하면 변수명으로 멤버변수가 생성되고 동시에 값이 할당된다
    constructor(private user: User, private store: object = {}) {
        // this.user = user
        // this.store = {}
    }

    put(id: string, product: Product): void {
        this.user
        this.store[id] = product 
    }

    get(id: string): Product {
        return this.store[id]
    }
}

const cart = new Cart({name: "John"})

