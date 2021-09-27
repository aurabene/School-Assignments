class Wage {
    constructor(day, startTime, endTime, hourlySalary) {
        this.day = day
        this.startTime = startTime
        this.endTime = endTime
        this.hourlySalary = hourlySalary

        this.maximumHours = 12
        this.extraHoursCountFrom = 8

        this.normalSalary = 0
        this.extraSalary = 0
        this.weekendSalary = 0
    }
    getTotalHours() {
        return this.endTime - this.startTime
    }
    getExtraTimeHours() {
        if(this.getTotalHours() > this.extraHoursCountFrom) {
            return this.getTotalHours() - this.extraHoursCountFrom
        } else {
            return 0
        }
    }
    isWeekend() {
        return this.day === "Saturday" || this.day === "Sunday"
    }
    calculateWeekDayWage() {
        this.normalSalary = this.getTotalHours() * this.hourlySalary
        this.extraSalary = this.getExtraTimeHours() * this.hourlySalary * 0.5
    }
    calculateWeekendWage() {
        this.normalSalary = this.getTotalHours() * this.hourlySalary
        this.weekendSalary = this.normalSalary
    }
    calculateWage() {
        if(this.isWeekend()) {
            this.calculateWeekendWage()
        } else {
            this.calculateWeekDayWage()
        }
        return this.normalSalary + this.extraSalary + this.weekendSalary
    }
    getMessage() {
        if(this.getTotalHours() > this.maximumHours) {
            return `You may not work for more than ${this.maximumHours} hours. You have worked ${this.getTotalHours()} hours.`
        }
        return `Your total salary is: ${this.calculateWage()}`
    }
}

const wage1 = new Wage("Monday", 8, 17, 200)
console.log(wage1.getMessage())

const wage2 = new Wage("Sunday", 10, 13, 200)
console.log(wage2.getMessage())

const wage3 = new Wage("Tuesday", 8, 22, 200)
console.log(wage3.getMessage())