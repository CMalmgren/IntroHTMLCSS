

let el = document.querySelector("main div");  //  css selector format
console.log(el);

el.addEventListener("click", function (event) {
    setTimeout(function () {
        console.log(event)
        let newDiv = document.createElement("div");
        el.appendChild(newDiv);
        newDiv.innerHTML = "<strong>IMPONRTANT</strong>";
    }, 1000);
});

alert('before');

window.alert = function (message) {
    console.log('Alert! ' + message);
};

alert('after');