export class Department {
  id: number;
  name: string;
  building: string;
  employees: number[];
  
  constructor (id: number, name: string, building: string, employees: number[]) {
    this.id = id;
    this.name = name;
    this.building = building;
    this.employees = employees;
  }
}
