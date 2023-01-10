import { User } from "./models/User";


const user = new User({name:'Cesar', age:30})
console.log(user.get('name'));
console.log(user.get('age'));



user.on('change', ()=> {
  console.log('hi');
})

user.on('change', () => {
  console.log('bye');
} )

user.on('exit', ()=> {})


console.log(user);
