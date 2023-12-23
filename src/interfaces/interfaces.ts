export interface Person {
    name: string;
    avatarLink: string;
}

export interface State {
    stage: number;
    currentPerson: Person;
    personList: Person[];
}