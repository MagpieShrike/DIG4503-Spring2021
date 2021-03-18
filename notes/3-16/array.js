// Create an array
let arrayExample = [1, 2, 3, 4];

// Read each entry
arrayExample.forEach((value) => {
    console.log(value);
});

const searchValue = 3;

const newArray = arrayExample.filter((value) => {
    return value != 3;
});

// Update / Delete
console.log(newArray);