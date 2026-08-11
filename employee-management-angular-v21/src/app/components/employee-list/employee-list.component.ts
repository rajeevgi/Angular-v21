import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith, debounceTime, distinctUntilChanged } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

type SortField = 'name' | 'department' | 'salary';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  private readonly employeeService = inject(EmployeeService);

  @Output() editRequested = new EventEmitter<Employee>();

  readonly searchControl = new FormControl('', { nonNullable: true });

  readonly sortFieldControl = new FormControl<SortField>('name', { nonNullable: true });
  readonly sortDirectionControl = new FormControl<'asc' | 'desc'>('asc', { nonNullable: true });

  readonly employees$ = combineLatest([
    this.employeeService.employees$,
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(250),
      distinctUntilChanged()
    ),
    this.sortFieldControl.valueChanges.pipe(startWith('name')),
    this.sortDirectionControl.valueChanges.pipe(startWith('asc'))
  ]).pipe(
    map(([employees, search, sortField, sortDirection]) => {
      const term = search.trim().toLowerCase();

      return employees
        .filter((employee) => employee.name.toLowerCase().includes(term))
        .sort((a, b) => {
          const left = sortField === 'salary' ? a.salary : (a[sortField as keyof Employee] as string).toLowerCase();
          const right = sortField === 'salary' ? b.salary : (b[sortField as keyof Employee] as string).toLowerCase();

          const comparison = left < right ? -1 : left > right ? 1 : 0;
          return sortDirection === 'asc' ? comparison : -comparison;
        });
    })
  );

  readonly totalEmployees$ = this.employeeService.employees$.pipe(
    map((employees) => employees.length)
  );

  readonly averageSalary$ = this.employeeService.employees$.pipe(
    map((employees) => {
      if (!employees.length) return 0;
      return employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;
    })
  );

  edit(employee: Employee): void {
    this.editRequested.emit(employee);
  }

  delete(employee: Employee): void {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (confirmed) {
      this.employeeService.deleteEmployee(employee.id);
    }
  }

  toggleSortDirection(): void {
    const current = this.sortDirectionControl.value;
    this.sortDirectionControl.setValue(current === 'asc' ? 'desc' : 'asc');
  }
}
