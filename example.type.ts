// /**
//  * TYPE EXAMPLES
//  *
//  * Key ideas:
//  * 1) Primitive types: string, number, boolean
//  * 2) Union type: value can be one of multiple types
//  * 3) Type alias: reusable custom type
//  */


// type UserRole = "student" | "parent"|null;
// const role: UserRole = null;
// console.log(`Current role: ${role}`); 

// // // // use Object.entries to loop object
// interface TypeUser {
//   name: string;
//   id: number;
//   required?: boolean;
// }


// const typeUserInstance: TypeUser = {
//   name: "Hayes",
//   id: 0,
//   required: true
// };

// Object.entries(typeUserInstance).forEach(
//   ([k, v]) => console.log(`${k} ------> ${v}`)
// )
// console.log("==================")

// for (const [key, value] of Object.entries(typeUserInstance)) {
//   console.log(`${key} ----->${value}`)
// }
// console.log("==================")

// // // // // The for...in loop iterates over all enumerable properties of an object
// for (const key in typeUserInstance) {
//   if (Object.hasOwn(typeUserInstance, key)) {
//     console.log(`${key}: ${typeUserInstance[key as keyof TypeUser]}`)
//   }
// }
