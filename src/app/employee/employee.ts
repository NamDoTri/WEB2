export default class Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
  job: string;

  toString(){
    return `Employee's id: ${this.id}, \n
    name: ${this.name}, \n
    lastName: ${this.lastName}, \n
    age: ${this.age}, \n
    job: ${this.job}.`;
  }
}