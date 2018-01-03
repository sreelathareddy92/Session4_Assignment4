/**
 * MethodDecorator 
 * @param {Object}                       target      
 * @param {string}                       propertyKey 
 * @param {TypedPropertyDescriptor<any>} descriptor  
 */

function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class DemoMethodDecorator {
    @MethodDecorator
    method() {
    }
}