// JavaScript source code
document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".cont");
    const expandable = ev.target.closest(".hidden_row");

    console.log(isExpandableTitle);

    if (!isExpandableTitle) {
        return;
    }

    expandable.classList.toggle("hidden_row--open");
});