let num1: number = 5;
console.log(num1);

let flag: boolean = false;
console.log(flag);

let colour: string = 'Red';
console.log(colour);

let list: string[] = ["Hi", "Hello", "Hey"];
for(let i=0; i<list.length;i++)
{
console.log("Array is " +list[i] +".");
}

let notsure: any = 5;
console.log(notsure);

let listany: any[] = [2, true, "Test"];
for(let i=0; i<listany.length;i++)
{
    console.log("Array is " +listany[i] + ".");
}