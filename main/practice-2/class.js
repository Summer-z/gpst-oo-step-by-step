
module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.leader = 1;
    }
    assignLeader(student) {
        this.leader = student.id;
    }
};