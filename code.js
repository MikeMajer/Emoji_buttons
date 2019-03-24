
const btn = document.querySelectorAll("button");
const icon = document.querySelectorAll("i");


function change() {

    const index = this.id;
    console.log(index)

    const emojiClass = icon[index].className;

    if (emojiClass === "fas fa-smile") {
        icon[0].classList.replace("fa-smile", "fa-grin-squint");
    }
    else if (emojiClass === "fas fa-grin-squint") {
        icon[0].classList.replace("fa-grin-squint", "fa-smile");
    }
    else if (emojiClass === "fas fa-smile-wink") {
        icon[1].classList.replace("fa-smile-wink", "fa-grin-squint-tears");
    }
    else if (emojiClass === "fas fa-grin-squint-tears") {
        icon[1].classList.replace("fa-grin-squint-tears", "fa-smile-wink");
    }
    else if (emojiClass === "fas fa-grin-alt") {
        icon[2].classList.replace("fa-grin-alt", "fa-grin-tongue-squint");
    }
    else if (emojiClass === "fas fa-grin-tongue-squint") {
        icon[2].classList.replace("fa-grin-tongue-squint", "fa-grin-alt");
    }
    else if (emojiClass === "fas fa-kiss-beam") {
        icon[3].classList.replace("fa-kiss-beam", "fa-kiss-wink-heart");
    }
    else if (emojiClass === "fas fa-kiss-wink-heart") {
        icon[3].classList.replace("fa-kiss-wink-heart", "fa-kiss-beam");
    }
}

btn[0].addEventListener("click", change);
btn[1].addEventListener("click", change);
btn[2].addEventListener("click", change);
btn[3].addEventListener("click", change);
