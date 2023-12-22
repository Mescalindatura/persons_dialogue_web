export interface Person {
    name: string;
    avatarLink: string;
}

export interface PersonsList {
    personList: Person[];
    isVisible: boolean;
}

export interface State {
    stage: number;
    currentPerson: Person;
    personList: PersonsList;
}