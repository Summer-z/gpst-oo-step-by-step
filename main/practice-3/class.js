module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.leader = 1;
        this.members = [];
    }
    appendMember(student) {
        this.members.push(student.id);
    }
    hasStudent(student) {
        return this.members.includes(student.id);
    }
    assignLeader(student) {
        if(this.hasStudent(student)) {
            this.leader = student.id;
            return 'Assign team leader successfully.';
        } else {
            return 'It is not one of us.';
        }
    }
};