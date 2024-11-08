

import { Person } from "../abstract-classes/Person";
import { specialities } from "../coach-enums/specialities";
specialities

export class Coach extends Person {

    constructor(public infoPerson: {
        id: number,
        name: string,
        email: string,
        userName: string,
        password: string,
    }, public properCoachInfo: {
        speciality: specialities[],
        experience: number,
        certification: string[]
    }) {

        super(infoPerson);

    }
}