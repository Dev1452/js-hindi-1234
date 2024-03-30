// const user = {
//     username: "Devender jain",
//     price: 999,

//     welcomemessage:function () {
//         console.log(`${this.username}, Welcome to the Website`);
//         // console.log(this);
//     }
// }

// user.welcomemessage()
// user.username= "Ravi";
// user.welcomemessage()

// console.log(this);


// const chai = function () {
//     let username = "Devender"
//     console.log(this.username);
// } 

// chai()



// const chai = () => {
//     let username = "Devender"
//     console.log(this);
// } 

// chai()

// const addTwo = (num1, num2 )=>{
//     return num1+num2
// }

const addTwo = (num1,num2)=> (num1+num2)

console.log(addTwo(7,3));