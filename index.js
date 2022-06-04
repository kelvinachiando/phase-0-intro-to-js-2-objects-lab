// Write your solution in this file!
const employee ={
    name:"Sam", 
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue (obj,Key, value){
    const newEmployee ={...obj};
    newEmployee[Key] =value
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj [key]=value;
    return obj;
}

function deleteFromEmployeeByKey (obj, key){
    const newEmployee={...obj};
    delete newEmployee [key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (obj,key){
    delete obj [key];
    return employee;
}