var square = (x) => {
    var result = x * x;
    return result;
};

var square2 = (x) => x * x;

console.log(square2(9));

var user = {
    name: 'Shane',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1,2,3);