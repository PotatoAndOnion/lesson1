let a = prompt("What is your score?");

if(a >= 8){
    console.log("U eating dinner")
}else if(a >= 6){
    console.log("U hardly get to eat dinner")
}else{
    console.log("U are starving tonight")
}
const obj ={
    name: "Kevin",
    age: 69,
    arr : [1,2,3,4,5]
}
console.log(obj.age)
console.log(obj.arr[2])
const arr =[1,2,{name: "Kevin", age: 69,},3,4]
console.log(arr[2].age)


deez = () => {
    const pi = 3.14
    return pi
}
deez()

console.log(pi)

for (let i = 0 ; i < 100; i++){
    console.log(i)
}