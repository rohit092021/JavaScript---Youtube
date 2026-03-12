const tinderUser = new Object() // singleton object
tinderUser.id=12;
tinderUser.name = "Rohit"
tinderUser.email = "rohit@gmail.com"
// console.log(tinderUser)

const regular_user = {
    email:"rohit@gmail.com",
    userFullName : {
        fullName: {
            firstName : "Rohit",
            lastName : "Tarkar"
        }
    }
}
// console.log(regular_user.userFullName.fullName.firstName)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = (...obj1, ...obj2)
// console.log(obj3)

const users = [{
    id : "name",
    email: "rohit@gmail.com"
},
{
    id : "name1",
    email: "tarkar@gmail.com"
}]
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name'))

const course = {
    courseName : "JS Hindi",
    price : "999",
    courseInstructor : "hitesh"
}
console.log(course.courseInstructor)

// another way to find the value
const {courseInstructor} = course
console.log(courseInstructor)

// de-structuring - jab var ke andar hi curly bracket me content lgaye use de-structuring kahte h

//API

// JSON File, jisme key and value string ki format me hoti h
// {
//     "name": "rohit",
//     "courseName": "JS Hindi",
//     "price": "free"

// }

