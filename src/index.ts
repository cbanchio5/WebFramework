import { User } from "./models/User";


const user = new User({name:'Cesar', age:30})
console.log(user.get('name'));
console.log(user.get('age'));



user.set({name:'Nico', age:78});


console.log(user.get('name'));
console.log(user.get('age'));
