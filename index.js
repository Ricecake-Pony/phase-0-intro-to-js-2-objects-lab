// Write your solution in this file!
const employee = {
    name: "Cowboy Randy",
    streetAddress: "502 Westminster Ave, Fulton, MO 65101"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
     const newObj = {...employee};
     newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
const deleteFromEmployee = {...employee}
    delete deleteFromEmployee[key];
    return deleteFromEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}