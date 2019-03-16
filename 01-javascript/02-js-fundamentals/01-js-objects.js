// 30 minutes max

/*
  Challenge 1
  Write a function that accepts an array of
  student objects, as shown below. Print all of the students' names and their cohorts.
*/

let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function first_assignment(arr) {
  for(var val = 0; val < arr.length; val++) {
      console.log("Name: " + arr[val].name + ", Cohort: " +  arr[val].cohort)
  }
}

first_assignment(students)

/*
    Challenge 2
    Write a function that accepts an object of users 
    divided into employees and managers, and display the number of 
    characters per employee/manager's name, as shown below, and logs the information to the console.
*/

let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
     {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
     {'first_name' : 'Gordon', 'last_name' : 'Poe'}
  ]
};

function second_assignment(obj){

  employees = obj.employees
  managers = obj.managers

  console.log("EMPLOYEES")
  for(var i = 0; i < employees.length; i++) {
    first_name_len = employees[i].first_name.length
    last_name_len = employees[i].last_name.length
    length = first_name_len + last_name_len
    console.log(i+1 + " - " + employees[i].last_name + ", " + employees[i].first_name + " - " + length)
  }

  console.log("MANAGERS")
  for(var i = 0; i < managers.length; i++) {
    first_name_len = managers[i].first_name.length
    last_name_len = managers[i].last_name.length
    length = first_name_len + last_name_len
    console.log(i+1 + " - " +  managers[i].last_name + ", " + managers[i].first_name + " - " + length)
  }
}

second_assignment(users)