//------------------------- CLASS, OBJECT -------------------------------

//to call instance method we need to create an Object
//only static method can be called by a Class
//if "this" keyword exists in any function it must be called in an object not on the class.


class Language {

    constructor(name){
        this.name = name;
    }

    fn(){
        console.log(this.name+ ' is international language.') 
    }
    // here fn() is an instance method. Need to create an object to call it.

    static foo(){
        console.log('We speak in English.')
    }
    //here foo() is a static function. Need to call the belonging class to call this function. 
}

let Local = new Language('English')

//OBJECT
Local.fn(); //to call the fn() function here we need to call an object first where it belongs

//CLASS 
Language.foo(); // foo() is a static method so we need to call the class to call it

