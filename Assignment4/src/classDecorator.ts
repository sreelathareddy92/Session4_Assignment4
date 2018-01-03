/**
 * ClassDecorator 
 * @param {number}                       param1      
 * @param {string}                       param2 
 * @param {Function}                     target
 */

function ClassDecoratorWithParam(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorWithParam(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@ClassDecoratorWithParam(1, "a")
@ClassDecoratorWithParam(2, "b")
class DemoClassDecorator {
}