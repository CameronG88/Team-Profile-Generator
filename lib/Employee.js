// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName();
    getId();
    getEmail();
    getRole()
}

class Manager extends Employee {
    constructor(officeNumber){
    this.officeNumber = officeNumber;
    
}
getOfficeNumber();
    getRole();
}

class Engineer extends Employee {
    constructor(github){
    this.github = github;
    
}
getGithub();
    getRole();
}

class Intern extends Employee {
    constructor(school){
    this.school = school;
    
}
getSchool();
    getRole();
}