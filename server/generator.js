var faker = require('faker');

var database = { students: []};

for (var i = 1; i<= 500; i++) {
  database.students.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    class: faker.internet.email(),
    mobile: faker.phone.phoneNumber()
  });
}

console.log(JSON.stringify(database));