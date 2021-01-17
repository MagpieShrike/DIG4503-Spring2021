import chalk from 'chalk';

class Person {
    name = "test";
    favoriteColor = "blue";

    constructor(name, color) {
        this.name = name;
        this.favoriteColor = color;
    }
    speak() {
        console.log(chalk.blue(name));
    } 
};

const p = new Person();

p.speak();