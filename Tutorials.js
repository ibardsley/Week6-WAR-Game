/*
Dev Tools

Device Toggle
allows you see what the program looks like or a mobile device as well as a computer or tablet

Console
see errors that are printed to help you figure what may be missing in your code

Elements
You can see the DOM, everything displayed on your page

Sources
Shows what is loaded on your current page
Can help troubleshoot 
If you forgot to include your index.js file you can see it is missing and got and link it

Network
Show requests that are being sent
Can see the files being requested
XHR and Fetch will be used later in class to what the front end program is sending and the data we are getting back

Application
local storage is shown if you are caching anything
can see values using the key value  
store variables in the browsers memory for use later if the user closes the browser



Debugging
Errors will happen so we need to know how to identify those errors to see
where something is going wrong using the dev tools

can go to sources and add a break point in your code to see what is happening
On the right you can use step over or step into a function to walk through the code in the 
dev tools box to see where your code is off alowing you to fix it.



Unit Tests
The process of writing code to test our application code
safety net for our codes logic 
without this the developer may never know something is broken

Mocha and Chai are very common

*/

function doSomething(x, y){
    if(typeof x != 'string'){
        throw new Error('x must be a string');
    }
    return x + y;
}

/*

TDD Test Driven Development

A more modern methodolgy of unit testing

write the unit test fist so you can write your code to be sure it
is passing the test as you continue

*/