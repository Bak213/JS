function validate(mass, acceleration, force) {
if (mass*acceleration === force){
return document.write("True")
}
else{
return document.write("False")
}
}
mass = 110
acceleration = 10
force = 1000
validate(mass,acceleration,force)