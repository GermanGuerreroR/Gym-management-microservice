export abstract class Person {
    constructor(public infoPerson: {
        id: number,
        name: string,
        email: string,
        userName: string,
        password: string
    }) {

    }
}