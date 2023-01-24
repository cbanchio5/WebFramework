import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const element = document.getElementById('root');

const user = User.buildUser({name: 'NamE', age:20})
if(element) {
  const userForm = new UserForm(element, user);
  userForm.render();
} else {
  throw new Error("root element not found");

}
