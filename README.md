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
      @if()
      @else if()
      @else()
    
-input.value is always of type string, so you need to convert it to a number before assigning.
Switch Case --condition more than 6.
@switch(variable)
{
  @case(value){}
  @case(value){}
  @case(value){}
}

For Loop in Template File 
    @for(user of Users ; track user)
    {
      <h2>{{user}}</h2>
    }
  in table
    <tr *ngFor="let user of Users">
      <td>{{user.id}}</td>

**Signals**
  1.what are Signals?
    A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures

    const count = signal(0);

  2.type of Signals?
     Type	Description
        signal()-->   Writable signal (you can read and update)
        computed()--> Read-only derived signal
        effect()-->   Side-effect that runs when signals change
  3.Define Signals
    import { signal } from '@angular/core';

    const counter = signal(0); // creates a signal with initial value 0

  3.update signals value
    counter(); // returns the current value

    update the value  
    counter.set(5);         // sets value to 5
    counter.update(v => v + 1); // increments
    counter.update(v => v - 1); // decrements

  4.Make a counter example of signals --(use set,update method)

**Data Type with Singles**
 data = single(10); ---get the data value use **data();**
  
  computed() signals---don't change onces declared. it constant.it is read only. if it's having dependency it will.

  count :Signal<number>=computed(()=>200);
  data:WritableSingnal<number | string> = signal(10);
 interview question
    can we change computed signals values?

For Loop Contextual Variable
  1. what are the contextual variable
  2.$count,$index,$last,$first,$odd and $even ,empty block with for loop 

  Two Way Binding--[(ngModel)] --import { FormsModule } from '@angular/forms';

 Dynamic Style
  <h1 [style.backgroundColor]="color"
      [style.fontSize.px]="fontsize" >dynamic color</h1>  //pt is %

**Directive in Angular**
  what is Directive  in Angular
    A Directive in Angular is a class that allows you to attach behavior to DOM elements (like changing appearance, structure, or behavior dynamically).
  Type of Directive
      1. Component	Technically a directive with a template (HTML). Most used directive type.
      2. Structural	Changes the structure of the DOM (e.g., adds/removes elements).
      3. Attribute	Changes the appearance or behavior of an element.
  
<tr ngFor="left user of User">
<h2 ngIf="variable">show and hide </h2>
<h2 ngIf="variable; else variable_hide">show and hide </h2>

<div [ngSwitch]="selectedColor" style="margin-top: 20px;">
  <p ngSwitchCase="'red'" style="color: red;">You selected RED</p>
  <p ngSwitchCase="'green'" style="color: green;">You selected GREEN</p>
  <p ngSwitchCase="'blue'" style="color: blue;">You selected BLUE</p>
  <p ngSwitchDefault>Please select a color</p>
  </div>

**Basic Routing in Angular**
  <nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">contact</a>
</nav>
<router-outlet></router-outlet> --without <router-outlet/> you can't navigate things 
RouterOutlet,RouterLink --in import that particular component ts.

# lazy laoding 
  //app.routes.ts
    {path:'admin',loadComponent:()=>import('./admin/admin.component').then((c)=>c.AdminComponent)}

    { 
      path:'',
      redirectTo :'home',
      pathMatch:'full'
    }

npm install bootstrap --bootstrap
    Then, in your angular.json or styles.css (depending on your setup), add:
    /* styles.css or styles.scss */
    import "bootstrap/dist/css/bootstrap.min.css";  mention this in  main.ts

Or if you're using Vite (with standalone setup), include it in main.ts or styles.css

ng add @angular/material ---angular material

**while routing 404 page is need./Page not found.**
  
 1. what is 404 page or Page not found
   user want try access the not exists in application so show 404 page(Page Not found).
 2. Make component for 404 page
    ng g c 404 page.
    {path="**",component:PageNotFount} --  ** this wild card rounting.   (what is wild card routing).
 
**pass Data from one Page to Other**
   //ActiveRouter and Router ---import this.
  1. pass data with router link
      <p [routerLink]="['profile',{name:'vishal kalaskar'}]" routerLinkActive="active">go to profile</p>
      //using QueryParams 
      <a [routerLink]="['/user']" [queryParams]="{ id: 101, name: 'Vishal' }">User Info</a>

  2. pass data with button click---on button click

     {path:'profile',component:ProfileComponent,data:{name:'vishal'}}  ---in route file mention insideOf inline mentioning.

      this.router.navigate(['profile'], { queryParams: { id: 101, name: 'John' } });
      
      this.route.data.subscribe(data=>{
      console.log(data);
   })


**#The ngOnInit() method is used to run any code after the component is fully ready**

Dynamic Routing
  1. what is dynamic routing   --at router use params and queryparams
     making dynamic url that accept new data but in single page.
     { path: 'user/:id', component: UserComponent }
     {path:'user/:id/:name', component:UserComponent}
 
  ** Forms in Angular **
    1. Reactive  Form 
      Great for complex forms, dynamic fields, or when you need more control and unit testing.
       
       import { ReactiveFormsModule } from '@angular/forms';

       Key Features:
      Programmatic form creation

      Full control via FormGroup, FormControl, and FormBuilder

      Reactive validations

      Better for large-scale apps

      #TS file
        form: FormGroup;

        constructor(private fb: FormBuilder) {
          this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
          });
        }

        submitForm() {
          console.log(this.form.value);
        }
     
      #html
       
    <form [formGroup]="form" (ngSubmit)="submitForm()">
      <input formControlName="username" placeholder="Username">
      <input formControlName="email" placeholder="Email">
      <button type="submit">Submit</button>
    </form>

    2. Template Form
       Best for simple forms, small projects, or when you want to use Angular directly in HTML templates.
      
      import { FormsModule } from '@angular/forms';

      ✅ Key Features:
      Uses [(ngModel)] for two-way binding

      Less code in .ts file

      Validation via directives (required, minlength, etc.)

      Automatically tracks form state
      
      implementation 
        <form #form(same)="ngForm" (ngSubmit)="onSubmit(form(same))">
        <input name="username" ngModel required>
        <input name="email" ngModel email>
        <button type="submit">Submit</button>
      </form>

      onSubmit(form(same): NgForm) {
  console.log(form.value);
}

**Pass Data parent to child or via versa**
parent to child -- @Input -- is directive
child to parent --@Output --is directive   
 @Output() childevent: EventEmitter<string> = new EventEmitter<string>();
 @Output() childevent : new EventEmitter();


 **Pipes**
  1. what are pipes in Angular

    Pipes are used to transform data in templates.
    They work like filters and formatting tools directly inside HTML.
    Syntax: {{ value | pipeName }}
       
  2. Example of pipe
     
    1. lowercase
    2. titlecase
    3. date
    4. currency
    5. percent
    6. slice
    7. json

  3. Pipe with Params
     <p>{{ today | date:'shortDate' | uppercase }}</p> <!-- Output: 4/12/25 -->

  4. Apply Multiple pips

     ng generate pipe reverse

   //revers.pips.ts --file name

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

//html
 <p>{{ 'Angular' | reverse }}</p> <!-- Output: ralugnA -->

 **Component Lif Cycle Methods**
   1. what is life cycle methods

     Lifecycle methods (or hooks) are special functions in Angular that get called automatically at specific stages of a component's life — from creation to destruction.

     They help you control logic like:

      Data fetching
      DOM updates
      Cleanup tasks
      Debuggin

   2. life cycle methods list
            Hook Name	                           Purpose
      ngOnChanges()	                Called when input properties change
      ngOnInit()	                  Called once when component initializes
      ngDoCheck()                 	Custom change detection logic
      ngAfterContentInit()    	    Called once after <ng-content> is projected
      ngAfterContentChecked()     	Called after content is checked
      ngAfterViewInit()           	Called after component’s views (child views too)
      ngAfterViewChecked()         	Called after the views are checked
      ngOnDestroy()	                Cleanup just before component is removed
  
   3. interview question
      Q1: What is the first and last lifecycle hook to run?
          First: constructor → then ngOnChanges → then ngOnInit
          Last: ngOnDestroy

      Q2: When is ngOnChanges() called?
          When an @Input() property is changed by the parent component.

      Q3: Difference between ngOnInit() and constructor()?
          constructor() is TypeScript's native class constructor — used for dependency injection.

          ngOnInit() is Angular-specific, used for initialization logic after inputs are set.

      Q4: When to use ngDoCheck()?
         When you need custom change detection (rare, use carefully).

      Q5: Which hook is used to handle cleanup (unsubscribe, clearInterval)?
          ngOnDestroy()

      Q6: How to run logic after child components load?
          Use ngAfterViewInit()

**Services in Angular**
  1. what are services -- (working with APIS MUST USE SERVICES)
    A service in Angular is a reusable class that provides logic, data, or functionality — shared across components.

    Common use cases:
    Business logic
    Fetching data from APIs
    State management
    Utility functions
    Logging or authentication
    Services are injected into components using Dependency Injection (DI).

  2. Make service
     ng g s services/user  for services(folder)-->user.services
     ng g s user  --in app directly userservices will creates

  3. Get and use data from service file 
  4. interview questions.
      Question	                                           Answer
      What is a service in Angular?	                          A reusable class used for sharing logic or data across components.
      How are services injected?	                            Using Angular's Dependency Injection system.
      What is @Injectable() used for?	                        Marks a class as available to be injected as a dependency.
      What does providedIn: 'root' do?	                      Registers the service globally at the root level (Singleton).
      Can you share data between components 
      using a service?	                                       Yes, via service properties and methods.
      When is ngOnInit used in relation to services?	         To call service methods when the component initializes.
      How to make service available to only one module?	       Use the providers array in that module's metadata.
      Difference between Singleton service and Scoped service?	Singleton is shared app-wide. Scoped is created
                                                                 per module or component.
                                      
 Why use Observable and subscribe() when calling an API?
🔹 1. Asynchronous Nature of HTTP Calls
    API calls are asynchronous, meaning:

    You don’t get the response instantly.

    The app shouldn’t freeze while waiting for the API.

    So, we use Observables to handle data that comes in the future.

🔹 2. Observable is like a Stream
    Think of it like a stream of data. It will emit the response once it's ready.

    ts
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>('https://api.example.com/users');
    }
    It doesn't fetch the data immediately — it just sets up the stream. To actually receive the data, you need to subscribe to it.

🔹 3. subscribe() is used to consume the Observable
      ts
      this.myService.getUsers().subscribe(data => {
        console.log(data); // You get the API response here
      });
      It starts listening to the Observable.

      It gets called when the data arrives.

      You can also handle errors and completion:

      ts
      this.myService.getUsers().subscribe({
        next: data => console.log(data),
        error: err => console.error('Error', err),
        complete: () => console.log('Done loading users')
      });
      
🔹 4. Angular's HttpClient returns an Observable
    Angular's HttpClient is built to return Observables because:

    They're cancelable.

    They support operators (like .map(), .filter()).

    They're more powerful than Promises.


    Install json server and make API
       https://github.com/typicode/json-server

**Define Data Type for API result**
    src 
     --- interface  --folder
            ---User.ts 
                export interface
                {
                  id: number;
                  name: string;
                  email: string;
                }

   1. what is data type
      A data type defines the kind of value a variable can hold. In TypeScript (used in Angular), examples include:
        string, number, boolean, any, unknown, array, object, etc.

   2. what is interface
      An interface in TypeScript allows you to define a structure (or blueprint) of an object — like a contract for the shape of data.
      
        {
          "id": 1,
          "name": "Vishal",
          "email": "vishal@example.com"
        }


      ✏️ Syntax:
      interface User {
        id: number;
        name: string;
        email: string;
      }

🔸 It doesn’t generate any JavaScript code — it’s just for TypeScript type checking.

   3. define data type with interface

        user:User[]=[];

       #service
         getUsers():Observable<User[]>
         {
           const url = "http://localhost:3000/users";
           return this.http.get<User[]>(url);
         }

        ngOnInit()
        {
            this.UserService.getUser().subscribe((data:User[])=>{
              this.users=data;
              console.log(this.users);
            })
        }
   4. Apply data type to result
   5. interview question.
       Question	                                                            Good Answer
What is an interface in Angular?     	An interface is a TypeScript structure to define a contract for the shape of an object.
Why use interfaces with API responses?   	To make the data type-safe, easier to debug, and get IntelliSense support.
Can we use any instead of interface?	    Yes, but it defeats the purpose of TypeScript. You lose type safety.
How to apply an interface to an HTTP result?  	By specifying it in the generic of HttpClient.get<T>() method.

Observable<User> vs Observable<User[]>
getUser(): Observable<User> {
  return this.http.get<User>('https://api.example.com/user/1');
}
Use this when your API returns a single user object, like:

{
  "id": 1,
  "name": "Vishal",
  "email": "vishal@example.com"
}
✔️ Best For:
**Viewing or editing a specific user**
**Login, profile, or detail view**

✅ When to Use Observable<User[]>

getUsers(): Observable<User[]> {
  return this.http.get<User[]>('https://api.example.com/users');
}
Use this when the API returns an array/list of users, like:

[
  { "id": 1, "name": "Vishal" },
  { "id": 2, "name": "Ankit" }
]
✔️ Best For:
Listing users in a table
Admin dashboards
Pagination/search features

**curd-app learning points**
   //cloning object to modify the user data
   this.selectedUser = { ...user }; // clone to avoid two-way binding

   [(ngModel)]="selectedUser.username" name="username" [disabled]="isPatchMode ? true : false">

   //dynamic button switching 
    <button type="submit">{{ isPatchMode ? 'Patch' : 'Update' }}</button>

      UpdateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, user);
   
  PatchUser(id: number, partialUser: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.url}/${id}`, partialUser);

     # make interface for your api response to handle instead of any
    --user.ts   -->take references from this.
  
  #convert json to ts
   transform.tools
  #event api
  https://freeapi.miniprojectideas.com/index.html