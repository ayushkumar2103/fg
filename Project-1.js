const squares=document.querySelectorAll('.colorSquare')
const timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach(square =>{
    square.onclick =() =>{
        timesClicked[square.value]+=1
        square.innerText=timesClicked[square.value]
    //console.log(square.value)
    }
})
function clearscore(){
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
    squares.forEach(square =>square.innerText= ' ')
}
const clearGamebtn=document.getElementById("clear")
clearGamebtn.onclick = () => clearscore()

// let redDiv=document.getElementById('red')
// let yellowDiv=document.getElementById('yellow')
// let greenDiv=document.getElementById('green')
// redDiv.onclick= () =>  console.log('red is clicked') 
// yellowDiv.onclick= () =>console.log('yellow is clicked')
// greenDiv.onclick= () => console.log('green is clicked')