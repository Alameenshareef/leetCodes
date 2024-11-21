/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return args = "Hello World"
        
    }
};

let f = createHelloWorld()
 console.log(f([1,2]));

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */