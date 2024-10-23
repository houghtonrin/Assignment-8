document.getElementById("write").onclick = function(){
    let numRows = document.getElementById("num").value;
    let setence = document.getElementById("sentence").value;
    const list = document.createElement("ol")
    for(let i = 1 ;i <=numRows ; i++){
        let ol = document.createElement("ol");
        let li = document.createElement("li");
        li.textContent = setence;
        list.appendChild(li);
    }
    document.getElementById("results").appendChild(list);
}