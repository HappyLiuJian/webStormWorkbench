var jsonData = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var jsonTest = JSON.parse(jsonData);

console.log(jsonTest);

var first = jsonTest.employees[0].firstName;

console.log(first);