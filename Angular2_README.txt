Angular 2 application  is collection of components
components is class+view
components generates view(html) + business logic(typescript classes)
Every application has an appcomponent/rootcomponent which acts as a starting point
on installation of angular 2 appcomponent is obtained default


angular2/quickstart is the vanilla code for angular2
package.json:all the dependencies are spcified
	scripts{
	build-run tsc on src files
	build:watch - compile implicitly
	start-concurrently build wtch run serve(lite server) too
	
	}

app/app.component.ts=> 
	@component : specify view attached to component
		template: the html associated
		selector: the tag tht to be used to invoke this component(this tag name should be unique across application)
		
e2e: end to end testing

tsconfig.json=> tsc configuration 
	target => convert ts to es5 
	
systemjs.config.js=> wwhich all modules we want to load and all the libraries required
	defualtextension=>if no extension specfied then keep js as default

styling can be done in angular 2  in 2 levels:
	global(styles.css): applicable to entire application
	local(ts file):specify the css file that needs to b used for tht specific component ie styleUrl: [css file name]
	style attr in @component  ie styles:['h2{color:red},...']

** COllection of components is module
	
app/main.ts=>
	bootstrapModUle('')=>take apmodule from app.module as root component

app/module.ts
	bootstrap[AppComponent] which is imported from app.component.ts
	declaration : any new component develped has to b added here
	
create a folder under app/components for every component

import class `Component` for creating any component from @angular/core which is mentioned in systemjs.config
@Component--> decorator (specifying metadata for component, selector and template or templateUrl)
if we need to add bootstrap to our templateurl pages we need to add link  to bootstrap library in index.html
for rendering a template add the selector tag in app.component.ts
we need to register  the new component for rendering it in html
	for this the class of component has to be imported in app.module.ts and put it in declaration

	******Folder-component.ts-component.html-register in app.module and call then call component from app.component***

dynamic content can b added uby declaring var in class and use tht var in html as {{var}}---> one way data binding
dynamic values can b given to tag attribute  so we declare the value in class and in html : <tag [attribute]="value"> ---> property binding

to get the value  from html in class we put a variable in tag with # ie< tag #varname>-->references
for evenhandling we put event in () ie <tag (eventname)="functionname(parameters to be passsed)"> --> event binding 
	**  event name should be used with `on` ex submit,mouseover,etc
angular 2 references point to entire tag so while accessing references  we  use referencesname.value

conditional css binding 
	done using class or style -->predefined  keywords 
	

v2.angular.io


Two way databinding 
-> two way data binding is acheived using ngModel instead of value . need to  import formsmodule in app.module.ts  and also put it in imports

Directives
	Component(@component),structual(NgFor), attribute(NgStyle)
Custom directive 
	classes to be considered are Directive, ElementRef,rendered

taking attr from other components


Pipes
	9 builtin types
	currency
	date
	decimal/number
	json
	lowercase nd uppercase
	percent and slice
Custom pipes

Building UI Form
		Template Driven forms -- html itself
			<form  tag is accompanied by ngForm
			ngModel with every form elements as #referencename="ngModdel" and add attribute ngModel
			certain classes are implictly added by ngForm for validation
			referencename.`className` gives the class attached to that reference
			referencename.error.particular error can be used to accordingly print error msg
		Model driven forms(MDF)-inside component class
			every html element will be an instanceof FormControl Class
			every html form is valid instance og Form Group
			[formGroup]=formgrp name
			formControlName=formctrlname from component		
		mdf is used when onesubgrup is used by many other components 
		MDF using FormBuilder
		
	import components according to type from @angular/forms 

SERVICES
	Injectable from core
	@Injectable
	in component import it  and register using providers:[service name]
	if a service is registered in parent component its child components get the access to its service
	pass the service in constructor as dependency injection