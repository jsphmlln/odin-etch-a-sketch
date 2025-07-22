function makeGrid(){
    container.innerHTML = ''

    for (let i = 0; i < gridSize; i++){
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid')
        gridRow.style.height = `${100 / gridSize}%`

        for (let i1 = 0; i1 <gridSize; i1++){
            const gridCol = document.createElement('div')
            gridCol.classList.add('grid1')
            gridCol.style.width = `${100 / gridSize}%`
            gridRow.append(gridCol)
        }
        container.append(gridRow)
        container.style.borderLeft = '0';
        container.style.borderBottom = '0';
    }
}

let gridSize = parseInt(prompt('Define Grid Size: '));
const container = document.querySelector('#container')

makeGrid()

const gridBox = document.querySelectorAll('.grid1')

gridBox.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black'
    })
    
    // box.onclick = () => {
    //     box.style.backgroundColor = 'black'
    //}
})