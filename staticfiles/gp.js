window.addEventListener('gamepadconnected', (event) => {
    console.log('Connected');
    console.log(event.gamepad);
    window.requestAnimationFrame(quizzLoop);
})


var form_answer1 = document.getElementById("answer1");
var form_answer2 = document.getElementById("answer2");
var form_answer3 = document.getElementById("answer3");
var form_answer4 = document.getElementById("answer4");
var answer_1_pk = document.getElementById("answer_1_pk");
var answer_2_pk = document.getElementById("answer_2_pk");
var answer_3_pk = document.getElementById("answer_3_pk");
var answer_4_pk = document.getElementById("answer_4_pk");
var form = document.getElementById("form");



function quizzLoop() {
    var gp = navigator.getGamepads()[0];
    if (gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
        console.log('1')
        form_answer1.value = answer_4_pk.innerHTML
        console.log(form_answer1.innerText)
    }
    else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
        console.log('2')
        form_answer1.value = answer_3_pk.innerHTML
        console.log(form_answer1.innerText)
    }
    else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
        console.log('3')
        form_answer1.value = answer_2_pk.innerHTML
        console.log(form_answer1.innerText)
    }
    else if (gp.buttons[4].value > 0 || gp.buttons[4].pressed == true) {
        console.log('4')
        form_answer1.value = answer_1_pk.innerHTML
        console.log(form_answer1.value > 0)
    }
    else if (gp.buttons[6].value > 0 || gp.buttons[6].pressed == true) {
        console.log('6')
        form_answer2.value = answer_4_pk.innerHTML

    }
    else if (gp.buttons[7].value > 0 || gp.buttons[7].pressed == true) {
        console.log('7')
        form_answer2.value = answer_3_pk.innerHTML

    }
    else if (gp.buttons[8].value > 0 || gp.buttons[8].pressed == true) {
        console.log('8')
        form_answer2.value = answer_2_pk.innerHTML

    }
    else if (gp.buttons[9].value > 0 || gp.buttons[9].pressed == true) {
        console.log('9')
        form_answer2.value = answer_1_pk.innerHTML

    }
    else if (gp.buttons[11].value > 0 || gp.buttons[11].pressed == true) {
        console.log('11')
        form_answer3.value = answer_4_pk.innerHTML

    }
    else if (gp.buttons[12].value > 0 || gp.buttons[12].pressed == true) {
        console.log('12')
        form_answer3.value = answer_3_pk.innerHTML

    }
    else if (gp.buttons[13].value > 0 || gp.buttons[13].pressed == true) {
        console.log('13')
        form_answer3.value = answer_2_pk.innerHTML

    }
    else if (gp.buttons[14].value > 0 || gp.buttons[14].pressed == true) {
        console.log('14')
        form_answer3.value = answer_1_pk.innerHTML

    }
    else if (gp.buttons[16].value > 0 || gp.buttons[16].pressed == true) {
        console.log('16')
        form_answer4.value = answer_4_pk.innerHTML
    }
    else if (gp.buttons[17].value > 0 || gp.buttons[17].pressed == true) {
        console.log('17')
        form_answer4.value = answer_3_pk.innerHTML
    }
    else if (gp.buttons[18].value > 0 || gp.buttons[18].pressed == true) {
        console.log('18')
        form_answer4.value = answer_2_pk.innerHTML
    }
    else if (gp.buttons[19].value > 0 || gp.buttons[19].pressed == true) {
        console.log('19')
        form_answer4.value = answer_1_pk.innerHTML
    }

    window.requestAnimationFrame(quizzLoop);
}



setInterval(allanswer, 250);
function allanswer() {
    if (form_answer1.value > 0) {
        if (form_answer2.value > 0) {
            if (form_answer3.value > 0) {
                if (form_answer4.value > 0) {
                    form.submit()
                }
            }
        }
    }
}

var timeleft = 20000;
var quizzTimer = setInterval(function () {
    timeleft -= 100;
    document.getElementById("countdowntimer").textContent = timeleft / 1000;
    if (timeleft <= 0) {
        clearInterval(quizzTimer);
        if (form_answer1.value == "") {
            form_answer1.value = 0
        }
        if (form_answer2.value == "") {
            form_answer2.value = 0
        }
        if (form_answer3.value == "") {
            form_answer3.value = 0
        }
        if (form_answer4.value == "") {
            form_answer4.value = 0
        }
        form.submit();
        return;
    }
}, 100);