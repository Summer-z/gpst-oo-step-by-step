module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.leader = 1;
        this.members = [];
    }
    appendMember(student) {
        if(this.teacher) {
            this.teacher.notifyStudentAppended( student.name + ' has joined Class ' + student.clazz.number);
        }
        this.members.push(student.id);
    }
    hasStudent(student) {
        return this.members.includes(student.id);
    }
    assignLeader(student) {
        if(this.teacher) {
            this.teacher.notifyLeaderAssigned(student.name + ' become Leader of Class ' +  student.clazz.number);
        }
        if(this.hasStudent(student)) {
            this.leader = student.id;
            return 'Assign team leader successfully.';
        } else {
            return 'It is not one of us.';
        }
    }
};