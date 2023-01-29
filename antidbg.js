(function () {
    if(!('mozInnerScreenX' in window)) return;
    let ptrEx = /./;
    console.log(ptrEx);
    ptrEx.toString = () => window.location = 'about:blank';
    debugger;
})();

navigator.serviceWorker.register("./sw.js").then(() => {
    if(!navigator.serviceWorker.controller) location.reload();
})

let deltaTime = Date.now();
document.addEventListener("visibilitychange", () => deltaTime = Date.now());
navigator.serviceWorker.addEventListener("message", (e) => deltaTime = e.data);

setInterval(() => {
    /*document.querySelectorAll("script").forEach(elem => {
        if(elem.src.includes("eruda") || elem.src.includes("vconsole")) location = "about:blank";
    })*/

    navigator.serviceWorker.controller.postMessage("ping");
    if(document.visibilityState == "visible" && Date.now() - deltaTime > 300) location = "about:blank";
}, 100)
