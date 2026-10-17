//  null and undefined
//falcy truthy

// define null type
// type NullType = string|null|undefined 
// let null_name1: NullType = "yay"
// null_name1 = null
// console.log(null_name1 === null)
// console.log(null_name1 === undefined)

// Nullish
// const null_count:number|null = 0;
// const null_result1 = null_count || 10;
// console.log(null_result1)
// const null_result2 = null_count ?? 10;
// console.log(null_result2) 

function printLength(text: string | null) {
  // Tells TS to treat text as 'string' instead of 'string | null'
  // 告诉 TS 把 text 当成 'string' 处理，忽略 null 的可能性
  console.log(text!.length); 
}

printLength("")
printLength("1")
printLength(null)

class DatabaseConnection {
  connectionString!: string; // ✅ No error about missing initialization in constructor !:means will do it later

  initialize() {
    this.connectionString = "mongodb://localhost:27017";
  }
}