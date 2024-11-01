// JavaScript source code
document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expand-price__title-bar");
    const expandable = ev.target.closest(".expand-price");


    if (!isExpandableTitle) {
        return;
    }

    expandable.classList.toggle("expand-price--open");
});