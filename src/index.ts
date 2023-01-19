import { User } from "./models/User";
import { Collection } from "./models/Colletion";

const collection = new Collection('http://localhost:3000/users')

collection.on('change', () => {
  console.log(collection)
})

collection.fetch();
