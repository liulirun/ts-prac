// 2 ways to define a func
// function prac_p1(name: string):void{
//   console.log(`the name is ${name}`);
// }
// prac_p1("emma");



// const prac_p2 = (name:string):void =>{
//   console.log(name);
// }
// prac_p2("emma2");

// Array funcs
// const prac_nums: number[] = [1, 2, 4.5, 12];
// const prac_num_result:number = prac_nums.filter(n=>n<10).map(n=>n*2).reduce((acc:number, n:number)=>acc+n, 0);
// console.log(prac_num_result);

// // Interface 1: 2 ways for readonly
// interface IPracUser{
//   readonly name: string,
//   readonly id: number
// }

// let pracUser1 :IPracUser = {name: "emma", id: 101};
// let pracUser2 = {name: "emma", id: 101} as const;
// pracUser1.name = "changed";//wrong
// pracUser2.name = "changed";//wrong
// console.log(pracUser1);


// Class:
// class PracClass1 {
//   private readonly name: string;
//   private static age : number = 20;

//   constructor(name: string){
//     this.name = name;
//   }
//   public getName():string {
//     return this.name;
//   }
//   public getAge():number{
//     return PracClass1.age;
//   }
// }

// let pracClass1 = new PracClass1("emma");
// console.log(pracClass1.getName());
// console.log(pracClass1.getAge());
