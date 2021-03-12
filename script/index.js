let status = true;

function openNav() {
    btnNav = document.getElementById("btn-nav");
    navSide = document.getElementById("nav-side");
    if (status === true) {
        status = false;
        navSide.style.left = "0";
        btnNav.style.marginLeft = "230px";
        navSide.style.display = "flex";
        navSide.style.zIndex = "2";
        navSide.style.top = "0";
    } else {
        status = true;
        navSide.style.left = "-250px";
        btnNav.style.marginLeft = "0px";
    }
}