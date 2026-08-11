import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

const STORAGE_KEY = 'employee-management-employees';

const SEED_EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    department: 'Engineering',
    salary: 85000
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    department: 'Human Resources',
    salary: 72000
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    email: 'rahul.mehta@example.com',
    department: 'Finance',
    salary: 78000
  },
  {
    id: 4,
    name: 'Sneha Iyer',
    email: 'sneha.iyer@example.com',
    department: 'Marketing',
    salary: 68000
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly employeesSubject = new BehaviorSubject<Employee[]>(this.loadEmployees());

  readonly employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: Omit<Employee, 'id'>): void {
    const current = this.employeesSubject.value;
    const nextId = current.length ? Math.max(...current.map((item) => item.id)) + 1 : 1;

    this.setEmployees([
      ...current,
      {
        ...employee,
        id: nextId
      }
    ]);
  }

  updateEmployee(employee: Employee): void {
    const updated = this.employeesSubject.value.map((item) =>
      item.id === employee.id ? { ...employee } : item
    );

    this.setEmployees(updated);
  }

  deleteEmployee(id: number): void {
    this.setEmployees(
      this.employeesSubject.value.filter((employee) => employee.id !== id)
    );
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employeesSubject.value.find((employee) => employee.id === id);
  }

  private setEmployees(employees: Employee[]): void {
    this.employeesSubject.next(employees);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }

  private loadEmployees(): Employee[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return SEED_EMPLOYEES;
      }

      const parsed: unknown = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed as Employee[] : SEED_EMPLOYEES;
    } catch {
      return SEED_EMPLOYEES;
    }
  }
}
