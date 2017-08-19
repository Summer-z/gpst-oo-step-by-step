const Person = require('./person');
class Teacher extends Person{
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.clazzes.forEach(clazz => {
            clazz.teacher = this;
        })
    }
    introduce() {
        let arr =this.clazzes.filter(ele => ele !== undefined);
        if(arr.length === 0) {
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        } else {
            return super.introduce() + ' I am a Teacher. I teach Class ' + this.clazzes[0].number + ',' + this.clazzes[1].number + '.';
        }
    }
    isTeaching(student) {
        return this.clazzes.some(clazz => {
            return clazz.hasStudent(student);
        });
    }
    notifyStudentAppended() {}
    notifyLeaderAssigned() {}
}

module.exports = Teacher;