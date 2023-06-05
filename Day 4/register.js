// fetch("http://localhost:8080/mydata",{
// method:"GET",
// })
// .then((response) => response.json())
// .then((data) => renderData(data));

// function renderData(data){
//     console.log(data);
// }
// const button = document.getElementById("mybutton");





const Temail=document.getElementById("email");
const Tpassword = document.getElementById("password");
const Tmobile = document.getElementById("mobile");
const Tname = document.getElementById("name");
// const login = document.getElementById("login");



function submitData() {
    if (Temail.value != "" && Tpassword.value != "") {
        const obj = {
            id: Date.now(),
            name: Tname.value,
            email: Temail.value,
            mobile: Tmobile.value,
            password: Tpassword.value
        };
        fetch("http://localhost:8080/mydata", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),

        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Account created");
            })
            .catch((err) => console.log(err));
    }
    else{
        alert("Please enter email and password");
    }
    window.location.href="./login.html";
}
