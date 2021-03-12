let status = true;
let statusChat = true;

function openNav() {
    btnNav = document.getElementById("btn-nav");
    navSide = document.getElementById("nav-side");
    if (status === true) {
        status = false;
        navSide.style.left = "-20px";
        btnNav.style.marginLeft = "230px";
        navSide.style.display = "flex";
        navSide.style.zIndex = "2";
        navSide.style.top = "-20px";
    } else {
        status = true;
        navSide.style.left = "-250px";
        btnNav.style.marginLeft = "0px";
        navSide.style.top = "0";
        navSide.style.display = "none";
        navSide.style.zIndex = "1";
    }
}

function openChat() {
    btnChat = document.getElementById("btn-chat");
    chatSide = document.getElementById("chat-side");
    if (statusChat === true) {
        status = false;
        chatSide.style.right = "-20px";
        btnChat.style.marginRight = "230px";
        chatSide.style.display = "flex";
        chatSide.style.zIndex = "2";
        chatSide.style.top = "-20px";
    } else {
        statusChat = true;
        chatSide.style.right = "0";
        btnChat.style.marginRight = "0";
        chatSide.style.top = "0";
        chatSide.style.display = "none";
        chatSide.style.zIndex = "1";
    }
}