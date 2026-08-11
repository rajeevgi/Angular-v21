# Employee Management System — Angular 21

A beginner/intermediate Angular CRUD assignment implemented with standalone components, Reactive Forms, RxJS, and a `BehaviorSubject`-based `EmployeeService`.

## Requirements covered

- Angular 21 standalone components
- Reactive Forms only
- `FormGroup`, `FormControl`, and Angular validators
- `EmployeeService` as the single source of truth
- `BehaviorSubject<Employee[]>` + public `employees$`
- Add employee
- Edit/Update employee
- Delete with `window.confirm()`
- Search by employee name
- `async` pipe for employee data
- Inline validation messages
- Sorting by name, department, or salary
- Total employees and average salary
- `localStorage` persistence

## Project structure

```text
src/
  app/
    components/
      employee-form/
        employee-form.component.ts
        employee-form.component.html
      employee-list/
        employee-list.component.ts
        employee-list.component.html
    models/
      employee.model.ts
    services/
      employee.service.ts
    app.component.ts
    app.component.html
    app.config.ts
  main.ts
  styles.css
```

## Run the project

Make sure Node.js and npm are installed.

```bash
npm install
npm start
```

Then open the URL printed by Angular CLI, normally:

```text
http://localhost:4200
```

## Build

```bash
npm run build
```

## Notes

There is no backend/API. Employee records are held in memory by the service and persisted to `localStorage` so that they survive a browser refresh.

Delete uses the assignment-approved `window.confirm()` approach rather than a custom modal.

No `node_modules` folder is included in the project archive.
