let status = true;

function openNav() {
    btnNav = document.getElementById("btn-nav");
    navSide = document.getElementById("nav-side");
    if (status === true) {
        status = false;
        navSide.style.left = "20px";
        btnNav.style.marginLeft = "250px";
    } else {
        status = true;
        navSide.style.left = "-250px";
        btnNav.style.marginLeft = "0px";
        navSide.style.display = "flex";
    }
}