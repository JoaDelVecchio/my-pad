
document.addEventListener("DOMContentLoaded", () => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => element.style.cssText = "margin: 0; padding: 0; box-sizing: border-box;");

    const header = document.createElement("header");
    document.body.prepend(header);

    const main = document.createElement("main");
    document.body.appendChild(main);

    const buttonsContainer = document.createElement("div");
    main.appendChild(buttonsContainer);

    const gridContainer = document.createElement("div");
    main.appendChild(gridContainer);

    const footer = document.createElement("footer");
    document.body.appendChild(footer);

    let currentColor = "black";
    let newSize = 16;

    function enlargeFont(event) {
        event.target.style.fontSize = "18px";
    }

    function decrementFont(event) {
        event.target.style.fontSize = "16px";
    }

    function addButton(container, text, onClickFunction = null, colorPicker = false) {
        let newButton = document.createElement("button");
        newButton.style.cssText =
            "width:140px;height:50px;font-size:16px;font-weight:bold;color:white;border-radius:5px;margin-right:10px;background-color:#000080";
        newButton.textContent = text;

        if (onClickFunction !== null) {
            newButton.addEventListener("click", onClickFunction);
        }

        newButton.addEventListener("mouseover", enlargeFont);
        newButton.addEventListener("mouseout", decrementFont);

        if (colorPicker) {
            let input = document.createElement("input");
            input.type = "color";
            input.style.position = "absolute";
            input.style.left = "-9999px";
            input.style.opacity = 0;
            input.addEventListener("change", () => {
                currentColor = input.value;
            });
            newButton.appendChild(input);
            newButton.addEventListener("click", () => input.click());
        }

        container.appendChild(newButton);
        return newButton;
    }

    function makeGrid() {
        gridContainer.innerHTML = "";
        gridContainer.style.cssText = `flex-direction:column;display:flex;align-items:center`;

        for (let i = 0; i < newSize; i++) {
            let row = document.createElement("div");
            row.style.display = "flex";
            row.style.flexDirection = "row";
            gridContainer.appendChild(row);

            for (let j = 0; j < newSize; j++) {
                let col = document.createElement("div");
                col.style.cssText = `height:${400 / newSize}px;width:${400 / newSize}px;border:black solid 1px;background-color:white;transition:1s`;
                col.addEventListener("mouseover", function () {
                    this.style.backgroundColor =
                        this.style.backgroundColor === "white" ? currentColor : "white";
                });
                row.appendChild(col);
            }
        }
    }

    function wasCancelled(input) {
        return input === null;
    }

    function changeSize() {
        let input = prompt("Change size to:");
        if (wasCancelled(input)) {
            return;
        }

        while (isNaN(parseInt(input)) || parseInt(input) > 100 || parseInt(input) < 1) {
            input = prompt("Incorrect number, try again! Change size to:");
            if (wasCancelled(input)) {
                return;
            }
        }

        newSize = parseInt(input);
        makeGrid();
    }

    header.style.cssText = "width:100%;height:10vh;display:flex;justify-content:center;align-items:center;";
    const headerText = document.createElement("p");
    headerText.textContent = "My Pad";
    headerText.style.cssText = "font-size:50px;";
    header.appendChild(headerText);

    main.style.cssText = "width:100%;height:calc(80vh - 60px);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:40px;padding:30px;";
    buttonsContainer.style.cssText = "display:flex;justify-content:center;gap:20px;";
    addButton(buttonsContainer, "Change Size", changeSize);
    addButton(buttonsContainer, "Clear Pad", () => makeGrid(newSize));
    let changeColorBtn = addButton(buttonsContainer, "Change Color", null, true);
    changeColorBtn.style.width = "150px";

    footer.style.cssText = "width:100%;height:10vh;display:flex;justify-content:center;align-items:center;";
    const footerText = document.createElement("p");
    footerText.textContent = "made by joadelvecchio";
    footerText.style.cssText = "font-size:20px;";
    footer.appendChild(footerText);

    makeGrid();
});