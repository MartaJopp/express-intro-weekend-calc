//client.js sourced
console.log('JS Sourced');

$(document).ready(readyNow);

//once html loaded - run this
function readyNow() {
    $('button').on('click', submitButtonSalary);
    $('.content').on('click', '.delete', deleteEmployeesWithin);
    //$('button').on('click', addTheInputs);
    //$('#delete').on('click', '.employeeData', deleteEmployees);

    //$('button').on('click', hopeThisWorks);
}//end readyNow function

//variable to store the Monthly Costs of Employees
var totalMonthlyCosts = 0;
//function to add append salary to field and add total of monthly costs
function submitButtonSalary() {
    //check to make sure button connected
    console.log('button clicked');
    console.log($('#salary').val());
    var empSalary = parseInt($('#salary').val());
    var empMonthlySalary = Math.round(empSalary / 12);
    totalMonthlyCosts = (totalMonthlyCosts + empMonthlySalary);
    $('#Money').text(totalMonthlyCosts);
    console.log(totalMonthlyCosts);
    //check to make sure button connected
    console.log('button for addTheInputs');
    //change firstName input to variable for ease
    var firstName = ($('#firstName').val());
    var lastName = ($('#lastName').val());
    var idNumber = ($('#idNumber').val());
    var jobTitle = ($('#jobTitle').val());
    var array = [];
    console.log($('#firstName').val());
    //console.log input info
    console.log('first Name: ' + firstName);
    console.log('salary: ' + newEmployee);
    //appending to table, adding delete button
    $('#theTable').append('<tr id = "employeeData"><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td id = "Salary">' + empSalary + '</td><td>' + '<button class = "delete">Remove</button>' + '</td></tr>');
    //clearing the input fields
    $('.employee').val('');



}//end submitButton function

function deleteEmployeesWithin() {
    //button connected
    console.log('Delete Clicked');
    $(this).closest('tr').remove();
}//end deleteEmployeesWithin function
/*function addTheInputs(){
//check to make sure button connected
console.log ('button for addTheInputs');
//change firstName input to variable for ease
var firstName = ($('#firstName').val());
var lastName = ($('#lastName').val());
var idNumber = ($('#idNumber').val());
var jobTitle = ($('#jobTitle').val());
var annualSalary = ($('#salary').val());
var array = [];
console.log ($('#firstName').val());
//console.log input info
console.log('first Name: ' + firstName);
console.log('salary: ' + newEmployee);
//appending to table, adding delete button
$('#theTable').append('<tr id = "employeeData"><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><td>' + annualSalary + '</td><td>' + '<button class = "delete">Remove</button>' + '</td></tr>');
//clearing the input fields
$('.employee').val('');
$('.delete').on('click', deleteEmployeesWithin);
function deleteEmployeesWithin(){
$(this).closest('tr').remove();
console.log('Delete Clicked');
}
}
//end addTheInputs function


/*function deleteEmployees(){
console.log('deleteEmployees');
$(this).remove();
}
//end deleteEmployees function
/*
function hopeThisWorks() {
console.log('insert works');
empFirstName[i].push( $inputFirstName.value );
$('.content').append(empFirstName);

clearAndShow();//
}//end function insert
$(this).text();
var color = $(this).text(); // NOTE: The button text is 'red' & 'yellow'
// Get the current block count from the HTML and convert to an Integer
var currentBlockCount = parseInt($('#' + color + 'BlockCount').text());
// Add one
currentBlockCount += 1;
// Set the block count to be the new number
$('#' + color + 'BlockCount').text(currentBlockCount);

*/
var firstNameIn = ($('#firstName').val());
var newEmployee = ($('.employee').val());

var EmployeeInformation = function (firstNameIn, newEmployee) {
    this.firstname = firstNameIn;
    this.salary = newEmployee;
};
console.log(EmployeeInformation);
