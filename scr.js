var holder ;
var holder_column = [];//document.createElement("div");
var holder_row = [];
var create = document.querySelector("#create");
var input_s = document.querySelector("#size_inp");

var grid_size = 32;

//Create main outer element
holder = document.createElement("div");
holder.id = "holder";
document.querySelector("#page").appendChild(holder);



// for(var i = 0 ; i < grid_size ; i++){
//     holder_column.push(document.createElement("div"));
//     holder_column[i].classList.add("pixelC");    
//     holder.appendChild(holder_column[i]);

//     holder_row.push([]);

//     for(var j = 0 ; j < grid_size ; j++){
//         holder_row[i].push(document.createElement("div"));
//         holder_row[i][j].classList.add("pixelR");

//         holder_column[i].appendChild(holder_row[i][j]);
//     }
// }


//Creates Grid
function createGrid(size){
    for(var i = 0 ; i < size ; i++){
        holder.appendChild(document.createElement("div"));
        holder.childNodes[i].classList.add("pixelC");

        for(var j = 0 ; j < size ; j++){
            holder.childNodes[i].appendChild(document.createElement("div"));
            holder.childNodes[i].childNodes[j].classList.add("pixelR");
        }

    }
}

createGrid(grid_size);

//Changes color
holder.addEventListener('mouseover' , changeColor);
function changeColor(e){
    e.target.style.backgroundColor = "black";
}


create.addEventListener("click" , inpSize);
function inpSize(){
    empty_grid();
    var grid_size = parseInt(input_s.value);
    console.log(grid_size);
    if(grid_size > 64 || isNaN(grid_size)){
        grid_size = 64;
    }
    createGrid(grid_size);
    
}

function empty_grid(){
    while(holder.hasChildNodes()){
        holder.removeChild(holder.firstChild);
    }
}

