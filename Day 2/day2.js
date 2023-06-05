const insert_table=document.getElementById("insert_table");
const remove_table=document.getElementById("remove_table");
const textarea=document.getElementById("content");
const button_view=document.getElementById("view_pic");
const button_remove=document.getElementById("remove_pic");
const table=document.querySelector("table");

const view_para=document.getElementById("view_para");
const remove_para=document.getElementById("remove_para");
const p=document.getElementById("para");

button_view.addEventListener("click",()=>{
    const div=document.getElementById("show_pic");
    const image=document.createElement("img");
   
    image.src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg?w=400&dpr=2.6";
    div.append(image);
    image.style.width="84%";
    image.style.marginLeft="3rem";
    image.style.marginTop="1rem";
});

button_remove.addEventListener("click",()=>{
    window.location.reload();
});

view_para.addEventListener("click",()=>{
    p.innerText="Hello Everyone !!\nWelcome to my website\nHope you have a nice day.";
    p.style.backgroundColor="rgb(255,255,255,0.4)";
    p.style.padding="2rem";
    p.style.margin="6rem 6rem 2rem 9.5rem ";
    p.style.height="5rem";
    p.style.width="20rem";
    p.style.borderRadius="1rem";
    p.style.boxShadow="black 2px 2px 6px";
});
remove_para.addEventListener("click",()=>{
    p.innerText="";
     p.style.backgroundColor="rgb(255,255,255,0)";
    p.style.boxShadow="rgb(255,255,255,0) 2px 2px 6px";

});


insert_table.addEventListener("click",()=>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="1";
    const td2=document.createElement("td");
    td2.innerText="Ram";
    const td3=document.createElement("td");
    td3.innerText="Male";
    tr.append(td1,td2,td3);
    table.append(tr);
});
remove_table.addEventListener("click",()=>{
   window.location.reload();
});
    
    