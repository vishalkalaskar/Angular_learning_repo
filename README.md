# Angular_learning_repo

Component 
 selector and  import---important.
1.how to create component 
     ng g c component_name
2.how many file has component 
     component has four file
        .css
        .html
        .spec.ts
        .ts
3.how many type of component 
  normal component and inline component

Make custom component
custom component --(profile)
  while importing custom component export name of class should be match.**

In-line component inline style and template.
   ng g c user-list --inline-style  files are .ts,spec.ts. and .html
   ng g c student-list --inline-template files are .ts, .spec.ts and .css
   ng g c country --inline-style --inline-template file are .ts and .spec.ts

Funtion call on Button click
  <button (click)="funtion_Name()"></button>

 when one function calling other function 
  use this.Function_Name()  -->this.indicate the current state of class or beloning of class
  variable define only in function.

Define Data Type in Angular
    name:string;
    name:string="peter";
    data:string|number ="hello"; data will accept string and number both.
    data:any=true; //accept any type.

    // Basic types
    let name: string = 'John';
    let age: number = 30;
    let isActive: boolean = true;

    // Arrays
    let names: string[] = ['John', 'Jane'];
    let users: Array<{id: number, name: string}> = [];

    // Function types
    let calculate: (x: number, y: number) => number;

    
