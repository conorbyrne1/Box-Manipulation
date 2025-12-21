const dragElements = document.querySelectorAll('.draggable');

function onMouseDrag(event, element) {
    let leftValue = parseInt(window.getComputedStyle(element).left);
    let topValue = parseInt(window.getComputedStyle(element).top);
    element.style.left = `${leftValue + event.movementX}px`;
    element.style.top = `${topValue + event.movementY}px`;
}

dragElements.forEach((element) => {
    element.addEventListener("mousedown", (e) => {
        const onMove = (event) => onMouseDrag(event, element);

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMove);
        }, {once: true});
    });
});