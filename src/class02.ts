interface Person {
    name: string
    say(message: string): void
}

interface Programmer {
    writeCode(requirement: string): string
}

// class KoreanProgrammer implements Person, Programmer {
//     constructor(public name: string) {
        
//     }
//     writeCode(requirement: string): string {
//         console.log(requirement)
//         return requirement + '.........'
//     }

//     say(message: string): void {
//         console.log(message)
//     } 

//     loveKimchi() {
//         console.log('love~ kimchi')
//     }
// }

// const jay = new KoreanProgrammer('jay')

abstract class Korean implements Person {
    public abstract jumin: number
    constructor(public name: string) {

    }

    say(message: string): void {
        console.log(message)
    }

    abstract loveKimchi(): void
}

class KoreanProgrammer extends Korean {
    constructor(public name: string, public jumin: number) {
        super(name)        
    }
    writeCode(requirement: string): string {
        console.log(requirement)
        return requirement + '.........'
    }

    say(message: string): void {
        console.log(message)
    } 

    loveKimchi(): void {
        console.log('love~ kimchi')
    }
}

const jay = new KoreanProgrammer('jay', 2222)