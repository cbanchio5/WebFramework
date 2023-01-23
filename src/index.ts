import { UserForm } from "./views/UserForm";

const element = document.getElementById('root');
if(element) {
  const userForm = new UserForm(element);
  userForm.render();
}
