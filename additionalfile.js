let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));


// Step 2: Adding functionality to buttons for console methods
document.getElementById('logBtn').addEventListener('click', () => {
    console.log("Console Log Demo");
});

document.getElementById('errorBtn').addEventListener('click', () => {
    console.error("Console Error Demo");
});

let tally = 0;
document.getElementById('tally').addEventListener('click', () => {
    tally = tally + 1;
    console.log("Count Button" + tally);
});

document.getElementById('warner').addEventListener('click', () => {
    console.warn("Console warn button");
});

document.getElementById('asserter').addEventListener('click', () => {
    console.assert(5 == tally,"You may have clicked the console count button wrong amount of times");
});

document.getElementById('eraser').addEventListener('click', () => {
    console.clear();
});


document.getElementById('dirBtn').addEventListener('click', () => {
    console.dir(document.getElementById('dirBtn'));
});

document.getElementById('dirxmlBtn').addEventListener('click', () => {
    console.dirxml(document.getElementById('dirxmlBtn'));
});

document.getElementById('startConsoleGroup').addEventListener('click', () => {
    console.group("Group Demo");
    
});

document.getElementById('endConsoleGroup').addEventListener('click', () => {
    console.groupEnd();
});

document.getElementById('startTimer').addEventListener('click', () => {
    console.time("Start Timer");
});

document.getElementById('endTimer').addEventListener('click', () => {
    console.timeEnd("Start Timer");
});

document.getElementById('table').addEventListener('click', () => {
    let Array = [1,2,3];
    console.table(Array);
});

document.getElementById('traceBtn').addEventListener('click', () => {
    console.trace("Trace demo");
});

// Step 3: Trying try/catch/finally
document.getElementById('globalErrorBtn').addEventListener('click', () => {
    try {
        nonExistentFunction();
    } catch (error) {
        console.error("Caught an error: ", error);
    } finally {
        console.log("This will run regardless of error occurrence.");
    }
});

function nonExistentFunction()
{
    let something = 3;
    let result = "something";
    if(typeof result == "string"){
        throw new Error("You can't give strings");
    }
}

// Step 4: Throw and Custom Errors
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function triggerCustomError() {
    try {
        throw new CustomError("This is a custom error!");
    } catch (error) {
        console.error(error.name + ": " + error.message);
    }
}

document.getElementById('customErrorBtn').addEventListener('click', () => {
    triggerCustomError();
});

// Step 5: Global Error Handler and 3rd Party Tracking
window.onerror = function(message, source, lineno, colno, error) {
    console.log("Global error caught: ", message);
    return true; // Prevents the firing of the default event handler
};

// Trigger global error to test the handler
document.getElementById('3globalErrorBtn').addEventListener('click', () => {
    alert('Good code running when suddenly...');
    abooM('bad code!');
    if (window.onerror) // then one exists
      {
       var oldError = window.onerror;
       var newErrorHandler = function (errorMessage,url,lineNumber) { AjaxTCRExamples.reportJSError(errorMessage,url,lineNumber); oldError(errorMessage,url,lineNumber); }
       window.onerror = newErrorHandler;
      }
});

TrackJS.track('Testing TrackJS!');
                        