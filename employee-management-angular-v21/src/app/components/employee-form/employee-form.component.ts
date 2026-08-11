import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly employeeService = inject(EmployeeService);

  @Input() set employeeToEdit(employee: Employee | null) {
    this.editingEmployee = employee;

    if (employee) {
      this.form.reset({
        name: employee.name,
        email: employee.email,
        department: employee.department,
        salary: employee.salary
      });
    } else {
      this.form.reset(this.emptyFormValue);
    }
  }

  @Output() saved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  editingEmployee: Employee | null = null;

  readonly emptyFormValue = {
    name: '',
    email: '',
    department: '',
    salary: null as number | null
  };

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    department: ['', [Validators.required, Validators.minLength(2)]],
    salary: [null as number | null, [Validators.required, Validators.min(0.01)]]
  });

  get title(): string {
    return this.editingEmployee ? 'Edit Employee' : 'Add Employee';
  }

  get submitLabel(): string {
    return this.editingEmployee ? 'Update Employee' : 'Add Employee';
  }

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const employeeData = {
      name: value.name.trim(),
      email: value.email.trim(),
      department: value.department.trim(),
      salary: Number(value.salary)
    };

    if (this.editingEmployee) {
      this.employeeService.updateEmployee({
        id: this.editingEmployee.id,
        ...employeeData
      });
    } else {
      this.employeeService.addEmployee(employeeData);
    }

    this.form.reset(this.emptyFormValue);
    this.editingEmployee = null;
    this.saved.emit();
  }

  cancel(): void {
    this.form.reset(this.emptyFormValue);
    this.editingEmployee = null;
    this.cancelled.emit();
  }
}
