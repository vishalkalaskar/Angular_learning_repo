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
  
  method with parameter --->  handleWithpar(val:string)
  
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
   
    
api call using angular --my-app3
   creating services -ng g service services/uservices
   app.config.ts ---> provideHttpClient()  --becoz fo app.module.ts file is not thier.

   Event--> when click on ui part it called Event. click,onchange,blur,focus,input change. (this are events).
     
    input field value --event.target as HTMLInputEvent;

    template refrences variable--> <input type="email" placeholder="enter mail" #emailfiled>
    
Style Option  ---app-style-css
  component style
    particular component file apply it self css file not other component file.
    same style are using multiple component  --app-->style.css(change in this file)


  Global style/ Make new file for global style
     
    when want custome css file go to angular.json in "styles":["src/styles.css","src/theme.css"]  --if multiple file having in css last file css will apply.
  internal style
    inline style apply for div or tag.
  style in components.ts file
    styles:['h1{color: black;  background-color:white;}']
  Load multiple css files in component
    styleUrls:['./profile.component.css','./button.bnt.css']

Control flow Statements 
     If else |Hide-show| Toggle

     define property and html for if else 
      use directive 

       @if(dispaly){<div></div>}

     //if else block
       @if(x>10){<div></div>}
       @else(){}

   Else if Condition
       --
   