class Employee {
    constructor({ id, firstName, lastName, birthday, salary, position, department }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.salary = salary;
        this.position = position;
        this.department = department;
        Employee._EMPLOYEES.push(this);
    }
    static _EMPLOYEES = [];
    static get EMPLOYEES() {
        return Employee._EMPLOYEES;
    };

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        let today = new Date();
        let birthDate = new Date(this.birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        console.log(Employee.HELLO);
        return age;
    }

    _getIndexEmployeeInLog() {
        for(let i = 0; i < Employee.EMPLOYEES.length; i++) {
            if(Employee.EMPLOYEES[i].id === this.id) {
                return i;
            }
        }
    }

    quit() {
        if(this._getIndexEmployeeInLog() !== undefined) {
            Employee.EMPLOYEES.splice(this._getIndexEmployeeInLog(), 1);
        }
    }

    retire() {
        if(this._getIndexEmployeeInLog() !== undefined) {
            Employee.EMPLOYEES.splice(this._getIndexEmployeeInLog(), 1);
            console.log('It was such a pleasure to work with you!');
        }
    }

    getFired() {
        if(this._getIndexEmployeeInLog() !== undefined) {
            Employee.EMPLOYEES.splice(this._getIndexEmployeeInLog(), 1);
            console.log('Not a big deal!');
        }
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }

    changePosition(newPosition) {
        this.position = newPosition;
    }

    changeSalary(newSalary) {
        this.salary = newSalary;
    }

    getPromoted({ position, salary, department }) {
        if(position) this.changePosition(position);
        if(salary) this.changeSalary(salary);
        if(department) this.changeDepartment(department);

        if(position || salary || department) {
            console.log('Yoohooo!');
        }
    }

    getDemoted({ punishment }) {
        if(punishment) {
            this.punishment = punishment;
            console.log('Damn!');
        }
    }
}

class Manager extends Employee{
    constructor({id, firstName, lastName, birthday, salary, department}) {
        super({id, firstName, lastName, birthday, salary, position: 'manager', department});
    }

    get managedEmployees() {
        let managedEmployees = [];
        for(let i of Employee.EMPLOYEES) {
            if(i.department === this.department && i.position !== 'manager') {
                managedEmployees.push(i);
            }
        }
        return managedEmployees;
    }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor({ id, firstName, lastName, birthday, salary }) {
        super({id, firstName, lastName, birthday, salary, department: 'hr'});
    }
}

class SalesManager extends Manager {
    constructor({ id, firstName, lastName, birthday, salary }) {
        super({id, firstName, lastName, birthday, salary, department: 'sales'});
    }
}

let promoter = () => ({            
    promote(idOfEmployee, salary) {
        for(let employee of this.managedEmployees) {
            if(idOfEmployee === employee.id) {
                employee.getPromoted({salary});
            }
        }
    }
});

function ManagerPro(manager, promoter) {
    Object.assign(manager, promoter());
    return manager;
}

const salesManager = new SalesManager({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000
});

console.log(salesManager);

const hrManager = new HRManager({
    id: 2,
    firstName: 'Bob',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000
})

console.log(hrManager);

const blueCollarWorkerOne = new BlueCollarWorker({
    id: 3,
    firstName: 'Mary',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000,
    position: 'office worker',
    department: 'sales'
});

console.log(blueCollarWorkerOne);

const blueCollarWorkerTwo = new BlueCollarWorker({
    id: 4,
    firstName: 'Jane',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000,
    position: 'office worker',
    department: 'hr'
});

console.log(blueCollarWorkerTwo);
console.log(Employee.EMPLOYEES);

salesManager.getPromoted({salary: 7500});
console.log(blueCollarWorkerOne.birthday);
console.log(blueCollarWorkerTwo.fullName);
console.log(blueCollarWorkerTwo.age);

const managerPro = ManagerPro(salesManager, promoter);
managerPro.promote(3, 6000);

console.log(blueCollarWorkerTwo);
console.log(blueCollarWorkerOne);

blueCollarWorkerTwo.getFired();

console.log(Employee.EMPLOYEES);
