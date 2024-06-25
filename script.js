
// FUNCTIONS
function makeGrid()
{
    gridContainer.innerHTML = "";
    gridContainer.style.cssText =`flex-direction:column;display:flex;align-items:center`;
    // FILAS
    for(let i=0;i<newSize;i++)
        {
            
            let row = document.createElement("div");
            row.style.display = "flex";
            row.style.flexDirection="row";
            gridContainer.appendChild(row);
            
            // COLUMNAS
            for(let j=0;j<newSize;j++)
                {
                    let col = gridContainer.appendChild(document.createElement("div"));
                    col.style.cssText = `height:${400/newSize}px;width:${400/newSize}px;border:black solid 1px;background-color:white`;
                    col.addEventListener("mouseover", function() {
                        if (this.style.backgroundColor === "white") {
                            this.style.backgroundColor = "black";
                        } else {
                            this.style.backgroundColor = "white";
                        }
                    });
                    row.appendChild(col);
                }
            }
        }

function changeSize()
    {
        newSize = parseInt(prompt("Change size to:"));
        while((isNaN(newSize) || newSize > 100)){
            newSize = parseInt(prompt("Incorret number, try again!, Change size to:"));
        }
        makeGrid(newSize);
    }

        
// VARIABLES

let newSize = 4; //4X4
const gridContainer = document.querySelector("main").appendChild(document.createElement("div"));
const allElements = document.querySelectorAll("*");

// HEADER
header = document.querySelector("header");
header.style.cssText = "height:50px;padding:10px;display:flex"

sizeBtn = document.createElement("button");
sizeBtn.textContent = "Change Size"
sizeBtn.style.cssText = "width:120px;font-size:16px;font-weight:bold;color:white;border-radius:5px"
sizeBtn.addEventListener("click", ()=>changeSize());
header.appendChild(sizeBtn)

// MAIN

allElements.forEach(element=>element.style.cssText = "box-sizing:border-box;margin: 0;padding: 0")
makeGrid(newSize);



