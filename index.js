let count = 0

function increment(){
    document.getElementById("count-el").innerText = count+=1
}

function dicrement(){
    document.getElementById("count-el").innerText = count-=1
}

function save(){
    document.getElementById("save-el").textContent += count + ', '
}