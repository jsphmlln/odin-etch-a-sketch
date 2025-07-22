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
    }

    const gridBox = document.querySelectorAll('.grid1')

    gridBox.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black'
        })
    })
}

let gridSize = 16;
const container = document.querySelector('#container')
const controls = document.querySelector('#controls')

makeGrid()

const changeGrid = document.createElement('button')
changeGrid.classList.add('button')
changeGrid.textContent = 'Change grid Size'
controls.append(changeGrid)

changeGrid.onclick = () => {
    gridSize = parseInt(prompt('Define Grid Size (10-100): '))
    if (10 <= gridSize && 100 >= gridSize){
        makeGrid()
    } else{
        alert('Grid size too small or too large.')
    }
}