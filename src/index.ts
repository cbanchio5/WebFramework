import { UserForm } from "./views/UserForm";
import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const element = document.getElementById('root');

const user = User.buildUser({name: 'NamE', age:20})
if(element) {
  const userEdit = new UserEdit(element, user);
  userEdit.render();
  console.log(userEdit)
} else {
  throw new Error("root element not found");

}
