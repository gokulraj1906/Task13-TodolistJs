let todolist=[];
function push(){
    let str=document.getElementById("task").value ;
    todolist.push(str);
    document.getElementById("todoitems").innerHTML=str;
}

    
function removeinput(){
     let str=document.getElementById("task").value ;
     let ind=todolist.indexOf(str);
     let remov=todolist.splice(ind,1);
    document.getElementById("todoitems").innerHTML=todolist;
}
