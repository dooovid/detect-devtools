(function () {
    if(!('mozInnerScreenX' in window)) return;
    let ptrEx = /😹/;
    console.log(ptrEx);
    ptrEx.toString = () => window.location = 'about:blank';
    debugger;
})();

function makeLargeObjectArray() {
    let result = [];
    let obj = {};
    for(let i=0; i<500; i++) obj[i] = i;
    for(let i=0; i<50; i++) result.push(obj);
    
    return result;
}

function getTimeDif(logFunc) {
    let deltaTime = Date.now();
    return logFunc(), Date.now() - deltaTime;
}

let maxPrintTime = 0;
let largeObjectArray = makeLargeObjectArray();

setInterval(() => {
    let tableTime = getTimeDif(() => console.table(largeObjectArray));
    let logTime = getTimeDif(() => console.log(largeObjectArray));

    maxPrintTime = Math.max(maxPrintTime, logTime);
    console.clear()

    if (tableTime === 0 || maxPrintTime === 0) return;

    if(tableTime > 10 * maxPrintTime) location = "about:blank";
}, 200)
