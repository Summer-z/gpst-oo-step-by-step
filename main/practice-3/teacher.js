const Person = require('./person');
class Teacher extends Person{
    constructor(name, age, [clazz1, clazz2]) {
        super(name, age);
        this.clazzes = [clazz1, clazz2];
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
}

module.exports = Teacher;