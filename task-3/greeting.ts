// Add add enum Gender, type Person
// Add function parameter person
// Check if the person is male or female
// If person is male console.log('Hello mr ${name}')
// If person is female console.log('Hello ms ${name}')
///////////////////////////////////////////////////////////////////////////

import { Person } from './types/person';
import { Gender } from './enum/gender';

const checkMale = ({name, gender}) => 
    gender === Gender.male 
        ? `Hello mr ${name}`
        : checkFemale({name, gender});

const checkFemale = ({name, gender}) =>  
gender === Gender.female
    ? `Hello ms ${name}`
    : `I don't know who you are`;

export const sayGreeting = (person: Person) => 
    console.log(checkMale(person));