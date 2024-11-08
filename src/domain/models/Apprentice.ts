import { Person } from "../abstract-classes/Person";
import { Gender } from "../apprentince-enums/Gender";
import { TrainingGoals } from "../apprentince-enums/trainingGoals";
import { FitnessLevel } from "../apprentince-enums/FitnessLevel";

export class Apprentice extends Person {

    constructor(public infoPerson: {
        id: number,
        name: string,
        email: string,
        userName: string,
        password: string,
    }, public properApprenticeInfo: {
        dateBirth: Date,
        gender: Gender,
        trainingGoals: TrainingGoals[],
        fitnessLevel: FitnessLevel,
        coachID: number
    }) {
        super(infoPerson);
    }
}