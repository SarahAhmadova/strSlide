let texts = ["Typed.js is a JavaScript library.",
    "It typos out",
    "It types out sentences.",
    "And then deletes them.",
    "Try it out!"
];
let textbox = document.querySelector(".box .text");
let text = "";
let p = 0,    // process num
    i = 1;
let del;      // call delete func

function strChar(txt, ind = 0, del) {

    delChar(txt, ind, del);

    addChar(txt, ind)

    stop(txt,ind)

}

function addChar(txt, ind) {
    if (i < txt.length) {
        text = txt.substr(ind, i);
        i++;
    }
    else if(i==txt.length){
        text = txt.substr(ind, i);
        setTimeout(() => {
            i++;
        }, 1000);
    }
}

function delChar(txt, ind, del) {
    if (i > txt.length) {
        if (del == true) {
            text = text.substr(ind, text.length - 3);
            i += 3;
        } else p++;
    }
}

function stop(txt,ind) {
    let innerText = txt.substr(0, ind) + text;
    textbox.innerHTML = innerText;
    if (text.length == 0) {
        clearInterval();
        p++;
        i = 1;
    }
}


let pi = setInterval(() => {
    switch (p) {
        case 0:
            strChar(texts[0], 0, true);
            break;
        case 1:
            strChar(texts[1], 5, true);
            break;
        case 2:
            strChar(texts[2], 5, true);
            break;
        case 3:
            strChar(texts[3], 0, true);
            break;
        case 4:
            strChar(texts[4], 0, false);
            break;
        default:
            clearInterval(pi);
            break;
    }
}, 100);