var x = document.querySelectorAll(".x")
var h = document.querySelector("h1")
var b = document.querySelector("button")
counter = 0

for(let i of x ){
    i.addEventListener("click", function z(){
        counter++
        if(i.innerText == ""){
        if(counter%2==0){
            i.innerText ="o"          
        }
        else{
            i.innerText ="x"
        }
           
        if(
            x[0].innerText=="x" && x[1].innerText=="x" && x[2].innerText=="x" || x[3].innerText=="x" && x[4].innerText=="x" && x[5].innerText=="x" || 
            x[6].innerText=="x" && x[7].innerText=="x" && x[8].innerText=="x" || x[0].innerText=="x" && x[3].innerText=="x" && x[6].innerText=="x" ||
            x[1].innerText=="x" && x[4].innerText=="x" && x[7].innerText=="x" || x[2].innerText=="x" && x[5].innerText=="x" && x[8].innerText=="x" ||
            x[0].innerText=="x" && x[4].innerText=="x" && x[8].innerText=="x" || x[2].innerText=="x" && x[4].innerText=="x" && x[6].innerText=="x"
        ){
            h.innerText = "X is winner"
            h.style.color = "green"
            stopgame()
        }
        else if(
            x[0].innerText=="o" && x[1].innerText=="o" && x[2].innerText=="o" || x[3].innerText=="o" && x[4].innerText=="o" && x[5].innerText=="o" || 
            x[6].innerText=="o" && x[7].innerText=="o" && x[8].innerText=="o" || x[0].innerText=="o" && x[3].innerText=="o" && x[6].innerText=="o" ||
            x[1].innerText=="o" && x[4].innerText=="o" && x[7].innerText=="o" || x[2].innerText=="o" && x[5].innerText=="o" && x[8].innerText=="o" ||
            x[0].innerText=="o" && x[4].innerText=="o" && x[8].innerText=="o" || x[2].innerText=="o" && x[4].innerText=="o" && x[6].innerText=="o"
        ){
            h.innerText = "O is winner"
            h.style.color = "green"
            stopgame()
        }}
    })
}

function stopgame(){
    for(var i of x){
        i.style.pointerEvents = "none";
    }
}

function restart(){
    for(var i of x){
        i.style.pointerEvents = "auto";
        i.innerText = "";
        counter = 0
        h.innerText = ""
    }
}

// უნდა შევქმნათ იქსი და ნოლის თამაში. 
