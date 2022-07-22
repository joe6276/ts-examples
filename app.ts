Introduction to TypeScript
// let a :string;
// a='Mildred'
// let b='Amos'

// console.log(a.toLocaleUpperCase());

// let c:boolean;
// c=false


// let e='Ian'


// if(c){
//     console.log("d is true");
    
// }


// let a = null
// let b = undefined

// let person:{name:string,age:number,laptop?:string}={name:'Daniel',age:12,laptop:'Dell'}
// console.log(person.name.toLocaleUpperCase(),person.age.toString());



// let arrayA:(number|string|boolean|Object)[]=['dfdvds','fhgfh','fghds',12,true,{name:'fygdh'}]
// let s=arrayA[1]

// console.log();

// Tuple- Is an array with fixed-length

// let snames:[string,string]=['Evan', "Mwangangi",'Muinde']
// let StudentName:[string,string]=['Mercy', 'Chepngenoh']

// enum 

// enum job{ Designer='Designer',Developer='Developer',QA='QA',PM='PM' }

// let person={
//     name:'Judy Wambui',
//     job:job.Designer
// }

// console.log(person);

// let q:(string | number)[]=['rehf',344]
// let x:string|number
// x='Ann'
// x=34


// function checkGender(value:0|1){
//  value===1?console.log('Pass'):console.log("Fail");
// }
// checkGender(0)

// type custom =string|number|object|boolean

// let x:custom={}
// type gender= 'Male'|'Female'
// function checkGender(value:gender){
//  value==='Male'?console.log('Hello Sir'):console.log("Hello Madam");
// }

// checkGender('Female')

// function add(a:number,b:number,print:(c:number)=>void):void{
//     let res= a+b
//     print(res)
// }

// add(12,14,(res)=>{
//     console.log(res);   
// })

// let y :any
// y='Sihfhjk'
// y=12
// y='fgfdjdhsg'
// y=true

// let z:unknown=y
// z='oihfsc'



// if( typeof y==='string'){
//   console.log(  y.toLocaleUpperCase());
  
// }

// let addNum:(a:number,b:number)=>number
// addNum=add

Classes
 
//  class Person {
//    private hobbies:string[]=['Hiking']
//     constructor(public age:number, private readonly name:string){ }
//     public Walk(){
//         // console.log(`${this.name} is Walking`);      
//         this.name='Mercy' 
//     }
//  }
//  const mil= new Person(12,'Mildred Ochieng')
//  console.log(mil);


// console.log(mil.age);

//  class Employee{
//     private employees:string[]=[]
//     addEmployee(name:string){
//         // Logic and Validation before adding an Employee
//         this.employees.push(name)
//     }
//  }

//  const e = new Employee()
//  e.addEmployee('Hezron')
//  console.log(e);
 
// class Vehicle{
//   protected parts:string[]=['Wheels','side mirrors']
//     constructor(public name:string, public color:string){
//     }
//     fuel(){
//         console.log('Fueling...');   
//     }
//     speed(){
//     console.log('Speeding'); 
//     }
// }

// class Car extends Vehicle {

//    static weight:string='1200kg'

//     print(){
//     console.log(Car.weight);
    
//    }

//     private owner:string='Antony'

//     get getOwner(){
//         return this.owner
//     }
//     set setOwner(val:string){
//         //Checks
//      this.owner=val

//     }
//    constructor(public name:string, public color:string , public seats:number){
//    super(name,color)
// }


// speed(){
//     console.log('Speeding at 120'); 
//     }

//     addParts(part:string){
//         this.parts.push(part)
//     }
// }
// const c = new Car('Mercedes Benz', "Black", 4)
// console.log(c.addParts('Rear Mirror'));


// console.log(Math.PI);
// abstract class Employee{
//   abstract getSalary():void
// }
// class FulltimeEmployee extends Employee{
// getSalary(): void {
//     console.log('12000000');
    
// }
// }

// class PartTimeEmployee extends Employee{
// getSalary(): void {
//     console.log(1230000);
    
// }
// }

// type Persons={
//    firstname:string
//     age:number
//     walk:()=>void
// }
// interface Person{
//      readonly firstname:string
//     age?:number
//     walk:()=>void
// }

// let student:Person;
// student={
//     firstname:'Collins',
//     age:10,
//     walk(){
//         console.log("Walking");
        
//     },
// }

// console.log(student);


// let students :Person[]=[
//     {
//     firstname:'Collins',
//     age:10,
//     walk(){
//         console.log("Walking");
        
//     }
// },
//  {
//     firstname:'Collins',
//     age:10,
//     walk(){
//         console.log("Walking");
        
//     }
// }

// ]


// interface add{
//     (a:number,b:number):number
// }

// function addNumber(a:number, b:number){
//  return a+b
// }

// let x:add= addNumber

// console.log(x(12,34));

// interface Humans{
// breath?:()=>void
// name:string
// age:number
// }

// interface A extends Humans{
//     weight:string
// }

// interface B  extends A{
//     talk:()=>void
// }

// class Human  implements B{

// talk(){

// }

// weight:string=''
// name:string='Name1'
// age:number=19

// run(){
//     console.log();
    
// }
// }
Advanced SVGUnitTypes// let a= 20
// const b=10

// const add = (a:number=34, b:number)=>{
// return a+b
// }
// console.log(add(23,43));

// let a:string[]=['a','b','c']
// let b:string[]=[...a,'d','e','f']

// const add =(...numbers:number[])=>{
//     return numbers.reduce((current,value)=>{
//         return current+value
//     },0)
// }
// console.log(add(1,2,3,4,55,7,5))


// let trainee:string[]=['Ann','Hezron','Alex', 'Judy', 'Felix']
// let x=trainee.sort()
// let[a, ...rest]=x
// console.log(rest);

// interface Person{
//     firstname:string
//     lastname:string
//     age:number
// }

// let mildred:Person;
// mildred={
//     firstname:'Mildred',
//     lastname:'Ochieng',
//     age:10
// }

// console.log(mildred);

// const{lastname}=mildred

// console.log(lastname);



// let a=['a','b','c','d']

// let [x,,,q]=a

// console.log(x,q);


// type Custom1= string|boolean
// type Combined =Custom & Custom1
// type Combined1 =Custom |Custom1

// type Custom = string|number

// const add=(a:Custom, b:Custom)=>{
//     if(typeof a =='string' || typeof b =="string"){
//         return a.toString() + b.toString()
//     }
//     return a+b
// }

// console.log(add(34, 10));

// IN


// interface Person{
//     firstname:string
//     lastname:string
//     age:number
// }

// let mildred:Person;
// mildred={
//     firstname:'Mildred',
//     lastname:'Ochieng',
//     age:10
// }

// for(let keys in mildred){
// console.log(keys);

// }

// interface Admin{
//     name:string
//     priveleges:string[]
// }
// interface User{
//     name:string
//     privileges:['read']
//     enrolled:Date
// }
// type personX = User | Admin
// let x:User={
//     name:'Ann',
//     privileges:['read'],
//     enrolled:new Date()
// }
// let y:Admin={
//     name:'John',
//     priveleges:['read', 'write','update']
// }


// function CheckPerson(emp:personX){
// console.log(emp.name);
// if('enrolled' in emp){
//    console.log(emp.enrolled);     
// }


// }

// CheckPerson(y)
// CheckPerson(x)


// class Car{
//     speed(){
//         console.log('car Speeding...');
        
//     }
// }

// class Truck{
//     speed(){
//         console.log('Truck Speeding..');
        
//     }
//     cargo(){
//         console.log('Loading Cargo ...');
        
//     }
// }

// type vehicle= Car |Truck

// const checkVehicle=(V:vehicle)=>{
// V.speed()
// // if('cargo'in V){
// //     V.cargo()
// // }

// if(V instanceof Truck){
//     V.cargo()
// }
// }

// const c= new Car()
// const t = new Truck()
// checkVehicle(c)
// checkVehicle(t)

// let x:User={
//     name:'Ann',
//     type:'user',
//     privileges:['read'],
//     enrolled:new Date()
// }
// let y:Admin={
//     type:'admin',
//     name:'John',
//     priveleges:['read', 'write','update']
// }

// interface Admin{
//     type:'admin'
//     name:string
//     priveleges:string[]
// }
// interface User{
//     type:'user'
//     name:string
//     privileges:['read']
//     enrolled:Date
// }
// type PersonX=Admin|User

// function CheckPerson(person:PersonX){
   
//     switch(person.type){
//         case 'admin':
//             console.log(person.priveleges);
//             break;
//         case 'user':
//             console.log(person.enrolled);
//             break
//     }
    
// }


// CheckPerson(x)
// CheckPerson(y)

// let p = document.querySelector('p')!
// console.log(p);

// let input = document.querySelector('#input')! as HTMLInputElement
// input.value='Learning Typescript '
// console.log(input);



// interface Data{
//     [key:string]:number
// }

// interface Error {
//     [x:string]:string
// }

// // let val:Error={message:'Error'}
// // console.log(val);
// let age:Data={age:23}
// let ages:Data[]=[
//     {age:34},
//     {age:34},
//     {age:34},
//     {dgh:34},
// ]



//  type Custom = string|number
// function add(a:number, b:number):number
// function add(a:string, b:string):string
// function add(a:string, b:number):string
// function add(a:number, b:string):string
// function add(a:Custom, b:Custom){
//     if(typeof a =='string' || typeof b =="string"){
//         return a.toString() + b.toString()
//     }
//     return a+b
// }

// let res=add(12, 10)
// console.log(res);


// let x={
//     firstname:'Jay',
//     job:{field:{description:'Developer'}}
// }

// console.log(x?.job?.field?.description);

// let x = ''
// let y =x ?? "DEFAULT"
// console.log(y);

Generics
// const person:Array<string>=['Joe', 'Pesh']
// console.log(person);

// interface Posts{
// userId: number
// id: number
// title:string
// body:string
// }
// const prom: Promise<Posts[]> = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         // resolve('Hello Typescipt')
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response=>response.json())
//         .then(data=>resolve(data))
//     },2000)    
// })


// prom.then(data=>data.map(item=>{
//     // console.log(item.body.toLocaleUpperCase());
    
// }))


// function merge<T extends object,U extends object>(objA:T, objB:U){
//     return Object.assign(objA,objB)
// }


// const merged=merge({name:'Joe'},{age:30});

// console.log(merged);


// function countandPrint<T extends{length:number}>( value :T):[T,string]{
//     let text = 'The count is 0'

    
//      if(value.length ==1){
//         text='You have one element'
//     }
//     if(value.length>1){
//         text =`you have ${value.length} elements`
//     }

//     return [value, text]

// }

// console.log(countandPrint([1,2,3,4,5,6,7,8]));


// function checkProp<T extends object,U extends keyof T>(ObjC:T,key:U){
//     return ObjC[key]
// }


// console.log(checkProp({name:'Jason'},'name'));




// class DataStore<T>{
//     private data:T[]=[]


//     addItem(item:T){
//        return  this.data.push(item)
//     }

//     removeItem(item:T){
//        return this.data.splice(this.data.indexOf(item), 1)
//     }

//     getItems(){
//         return [...this.data]
//     }
// }

// const ds= new DataStore<string>()
// ds.addItem('Jonathan')
// ds.addItem('Ebvans')
// ds.addItem('Amos')

// ds.removeItem('Jonathan')
// console.log(ds.getItems());


// const dsnum= new DataStore<number>()
// dsnum.addItem(23)
// dsnum.addItem(34)
// dsnum.addItem(56)

// dsnum.removeItem(34)
// console.log(dsnum.getItems());



// const dsobj= new DataStore()
// dsobj.addItem({name:'Joe'})
// dsobj.addItem({name:'joy'})
// dsobj.addItem({name:'Jay'})

// dsobj.removeItem({name:'Joy'})
// console.log(dsobj.getItems());


// interface Person{
//     firstname:string
//     lastname:string
//     age:number
// }

// function addItems(firstname:string ,lastname:string ,age:number){
//     let person :Partial<Person>={}
//     person.firstname='as'+firstname
//     person.lastname=lastname
//     person.age=age
//     return person as Person
// }


// const people:Readonly<string[]>=['Madj', 'nnbf']



// function makeState<T extends string|number =number>(){

//     let state:T[]=[]

//     function getState(){
//         return state
//     }

//     function setState(x:T){
//         return state.push(x)
//     }

//     return{getState,setState}
// }


// // const {setState,getState}= makeState()

// // setState(12)
// // console.log(getState());


// // // strings
// // setState<string>('s')
// // console.log(getState());

// const numberState=makeState()
// numberState.setState(12)
// console.log(numberState.getState());

// const stringState=makeState<string>()
// numberState.setState(12)
// console.log(numberState.getState());

Decorators
// function Log(){
//    return  function(Constructor:Function){
//     console.log('Class Decorator');
    
// }}

// function Component(parentroot:string, child:string){
//     return function <T extends{new(...arg:any[]):{name:string}}>(ParentConstructor:T){
//       return class extends ParentConstructor{
//         constructor(...arg:any[]){
//             super()
//             const element= document.getElementById(parentroot)
//          if(element){
//             element.innerHTML=child + this.name
//          }
//         }
//       }  
//     }
// }

// function Log1(){
//     return function(target:any, propertyName:string){
//         console.log('Property Decorator');
        
//         console.log(target);
//         console.log(propertyName);  
//     }
// }


// function Log2(){
//     return function(target:any, propertyName:string, desciptor:PropertyDescriptor){
//         console.log('Method Decorator');
        
//         console.log(target);
//         console.log(propertyName);  
//         console.log(desciptor);
        
//          return Object.defineProperty(target,propertyName,{
            
//             enumerable:true,
//             writable:false
//         })
//     }
// }


// function Log3(){
//     return function(target:any, propertyName:string, desciptor:PropertyDescriptor){
//         console.log('Accessor Decorator');
        
//         console.log(target);
//         console.log(propertyName);  
//         console.log(desciptor);

//         return Object.defineProperty(target,propertyName,{
//             enumerable:true,
//             writable:false
//         })
        
//     }
// }


// function Log4(){
//     return function(target:any, parameterName:string,position:number){
//         console.log('Parameter Decorator');
        
//         console.log(target);
//         console.log(parameterName);  
//         console.log(position);
        
//     }
// }


// @Log()
// @Component('root', `
// <h1>Using Decorators</>
// <p> Hello </>
// `)
// class Vehicle{
//     @Log1()
//     name:string='Mercedes'
//         private _price:number=122344

//         @Log3()
//         get price(){
//             return this._price
//         }

//     constructor(){

//     }
// @Log2()
// buy(){
//     console.log('Buying');  
// }

// speed( value:number, @Log4()cartype:string){
//     return value  
// }
// }
Type Manipulation


//  type Point={ x:number, y:number}
//  type Example = keyof Point

//  let a:Example='x'
//  let b:Example='y'

// //  Condition Type


// interface Animal{
//     name?:string
// }

// interface Dog{
//     weight:string
//     bark:()=>string
// }
//  type A= Dog & Animal


//  let pet:A={
//     name:'Pet A',
//     weight:'25kg',
//     bark:()=>'Hello'
//  }
// type check=Dog extends Animal ? 'Dog':'Unknown'

// type User='User'

// type ElevatedUser=`Elevated${User}`


// type Gender='Male'|'Female'
// interface Project{status: 'Started'|'OnGoing'}
// let projectstatus:Project={status:'Started'}

// interface Todo{
//     title?:string,
//     description:string
//     enddate:Date
// }

// type TodoReadonly=Readonly<Todo>

// const todo3:TodoReadonly={
//     description:'Description',
//     enddate:new Date()
// }


// type TitleDesc= Omit<Todo, 'description'|'title'>

// let d:TitleDesc={
//   enddate:new Date()
// }

// type excluded= Exclude<'a'|'b'|'c'|'d','a'|'b'>

// type person ='Ian'|'Evans'|'Judy'

// type exc=Extract<'a'|'b'|'c','a'|'b'>

// type non =NonNullable<string|number|boolean|null|undefined>

// const TodoAssign:Record<person,Todo>={
//     'Evans':  {title:'Todo1',description:'Description',enddate:new Date()},
//     'Ian'  :  {title:'Todo1',description:'Description',enddate:new Date()},
//     'Judy' :  {title:'Todo1',description:'Description',enddate:new Date()}
// }
// console.log(TodoAssign);

// type str=ReturnType< ()=> number>



// const todo1:TodoRequired={
//     enddate:new Date(),
//       title:'Todo1',
//     description:'Description',
// }
// const todo3:TodoReadonly={
//     title:'Todo1',
//     description:'Description',
//     enddate:new Date()
// }

// todo3.description='hgfvhv'



// function UpdateTodo(todo:Todo,updateTodo:Partial<Todo>):Todo{
//     return{...todo, ...updateTodo}
// }



// const s = UpdateTodo(todo3, {description:'Updated'})



// let todo2:Partial<Todo>={}
// todo2.title='cvh;'
// todo2.description='jhvbn'
// todo2.enddate=new Date()

// console.log(todo2);





// class Example{
//     name?:string='gfdh'

//     test(){
//         console.log('Testing');
        
//     }

//     test1?(){
//         console.log('this is test one');
        
//     }
// }

// const e= new Example()

// type Example1= InstanceType <typeof Example>

// let xs:Example1={
// name:'gfhn',
// test:()=> 'Tst',

// }


// interface Suppliers{
//     product_id:string
//     product_name:string
//     price:string
// }

// interface Product extends Suppliers{
//     productid:string
//     product:string
//     selling_price:string
// }


// let somedata:Product={
//     product_id:'string',
//     product:'string',
//     price:'string',
//     productid:'jhfgv',
//     product_name:'string',
//     selling_price:'string',
// }

// console.log(somedata);


