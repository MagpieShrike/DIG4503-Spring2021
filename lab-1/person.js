import chalk from 'chalk';

class Person {

    constructor(name, color) {
        this.name = name;
        this.favoriteColor = color;
    }
    speak() {
        console.log(chalk.blue(this.name));
    } 
};

export default Person;