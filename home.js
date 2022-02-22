function SubmitEvent(form) {
    if (/[0-9]/.test(document.getElementById("name").value) || document.getElementById("name").value === ''){
        return false;
    }
    else if (/[0-9]/.test(document.getElementById("surname").value) || document.getElementById("surname").value === '') {
        return false;
    }
    else if (document.getElementById("number").value === '') {
        return false;
    }
    else if (document.getElementById("email").value === '') {
        return false;
    }
    else {
        alert("Имя: " + document.getElementById("name").value +
            "\nФамилия: " + document.getElementById("surname").value +
            "\nМобильный номер: " + document.getElementById("number").value +
            "\nEmail: " + document.getElementById("email").value);
    }

}

function CheckAge(age) {
    if (age < 18)
        return "18";
    else
        return age;
}

function onStartup(name) {
    var name = new String(prompt("What is your name?"));
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    alert(`Hello ${name}`);
    return name;
}

function newColor(x) {
    x.style.color = "#0F4C75";
}

function oldColor(x) {
    x.style.color = "#1B262C";
}

function playSound() {
    document.getElementById('sound').play();
}
function bigImg(x){
    x.style.height="189px";
    x.style.width="195px";
  //  x.style.left="200px";
}
function normalImg(x){
    x.style.height="98px";
    x.style.width="100px";
   // x.style.left="250px";
}

function canPlay(){
    document.getElementById("foot").innerHTML = "<div class='modal-footer d-flex justify-content-center'>" +
        "<button type='button' class='btn btn-success btn-lg' data-bs-dismiss='modal'>" +
        "OKAY!</button></div>";
    document.getElementById("head").innerHTML = "<div class='modal-header d-flex justify-content-center'>" +
        "<h5 class='modal-title display-6'>You can play!</h5> </div>";
}
function bounce(x){
    x.style.animation = 'bounce 1.2s';
    setTimeout(() => {x.style.animation = '';}, 1200);
}
var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 20);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}