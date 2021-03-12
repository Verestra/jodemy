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
        navSide.style.zIndex = "4";
        navSide.style.top = "-20px";
    } else {
        status = true;
        navSide.style.left = null;
        btnNav.style.marginLeft = null;
        navSide.style.top = null;
        navSide.style.display = null;
        navSide.style.zIndex = null;
    }
}

function openChat() {
    btnChat = document.getElementById("btn-chat");
    chatSide = document.getElementById("chat-side");
    if (statusChat === true) {
        statusChat = false;
        chatSide.style.right = "-20px";
        btnChat.style.left = "0";
        chatSide.style.display = "flex";
        chatSide.style.zIndex = "5";
        btnSide.style.zIndex = "5";
        chatSide.style.top = "-20px";
        chatSide.style.width = "calc(100vw - 60px)";
    } else {
        statusChat = true;
        chatSide.style.right = null;
        btnChat.style.left = null;
        btnSide.style.zIndex = null;
        chatSide.style.display = null;
        chatSide.style.zIndex = null;
        chatSide.style.top = null;
        chatSide.style.width = null;
    }
}