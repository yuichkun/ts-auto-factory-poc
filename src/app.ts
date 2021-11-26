import { createMock } from 'ts-auto-mock';

interface Person {
    id: string;
    getName(): string;
    details: {
        phone: number
    }
}
const mock = createMock<Person>();
console.log(mock)
mock.getName() // ""
mock.details // "{ phone: 0 }"