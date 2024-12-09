function toggleDropdown(id) {
    const element = document.getElementById(id);
    if (element.classList.contains("hidden")) {
        element.classList.add("flex");
        element.classList.remove("hidden");
    }
    else {
        element.classList.add("hidden");
        element.classList.remove("flex");
    }
}
