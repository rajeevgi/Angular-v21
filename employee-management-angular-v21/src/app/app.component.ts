import { Component } from '@angular/core';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeFormComponent, EmployeeListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedEmployee: Employee | null = null;

  editEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSaved(): void {
    this.selectedEmployee = null;
  }

  onCancelled(): void {
    this.selectedEmployee = null;
  }
}
