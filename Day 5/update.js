const show = document.getElementById("showmenu");

fetch("http://localhost:8080/food", {
    method: "GET"
})

    .then((res) => res.json())
    .then((data) => getData(data));
function getData(data) {
    data.map((el) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = el.image;
        const item = document.createElement("h1");
        item.innerText = el.item;
        const updatebutton = document.createElement("button");
        updatebutton.innerText = "Update";
        updatebutton.addEventListener("click", () => {
            const updatedTitle = prompt("");
            const newObj = {
                image: el.image,
                title: updatedTitle,
                ingredients: el.ingredients,

                // Price: el.price,
            };
            fetch(`http://localhost:8080/food/$(el.id)`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newObj),
            })
                .then((res) => {
                    alert("Updated Title Successfully");
                })
                .catch((err) => {
                    alert("Error occured while updating" + err);
                });
        });
        const deletebutton = document.createElement("button");
        deletebutton.innerText = "Delete";
        deletebutton.addEventListener("click", () => {
            fetch(`http://localhost:8080/food/$(el.id)`, {
                method: "DELETE",
            })
                .then((res) => {
                    alert("Deleted the item");
                })
                .catch((err) => {
                    alert("Error occured while deleting");
                });
        });
        const showDetails=document.createElement("button");
        showDetails.innerText="Show Details";
        showDetails.addEventListener("click",()=>{
            localStorage.setItem("id",JSON.stringify(el.id));
            // window.location.href="details.html";
        });
        div.append(item, img, updatebutton, deletebutton);
        show.append(div);
    });
}
