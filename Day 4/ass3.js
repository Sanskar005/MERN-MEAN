// const data = [

//     {
//         image: "https://p1.pxfuel.com/preview/1020/750/558/tandoori-chicken-curry-cooking-food-taste.jpg",
//         title: "Tandoori chicken",
//         ingredients:"1. Chicken\n2. Yogurt\n3. Lemon juice\n4. Ginger-garlic paste\n5. Tandoori Masala\n6. Red chili powder",
//     },
//     {
//         image: "https://e1.pxfuel.com/desktop-wallpaper/816/583/desktop-wallpaper-tasty-pizza-from-the-oven-good-oven.jpg",
//         title: "Pizza",
//         ingredients:"1. Pizza dough\n2. Pizza sauce\n3. Mozzarella cheese\n4. Toppings\n5. Seasonings\n6. Olive oil",
//     },
//     {
//         image: "https://e0.pxfuel.com/wallpapers/656/834/desktop-wallpaper-craving-biryani-head-over-to-these-delectable-spots-in-mumbai-biriyani.jpg",
//         title: "Biriyani",
//         ingredients:"",
//     },


//     {
//         image: "https://e0.pxfuel.com/wallpapers/519/824/desktop-wallpaper-burger-steak-fire-fast-food-pepper-food-junk-food.jpg",
//         title: "Burger",
//         ingredients:"",
//     },
//     {
//         image: "https://static.vecteezy.com/system/resources/previews/022/012/618/large_2x/delicious-tacos-fast-food-on-a-dark-background-generative-ai-free-photo.jpg",
//         title: "Tacos",
//         ingredients: "1. Tortillas\n2. Chicken, or pork\n3. Chopped lettuce\n4. Diced tomatoes\n5. Chopped onions\n6. Shredded cheese",
//     },
//     {
//         image: "https://p1.pxfuel.com/preview/264/829/147/chongqing-small-surface-china-chongqing-chongqing-noodles.jpg",
//         title: "Noodles",
//         ingredients:"",
//     },
//     {
//         image: "https://ontheflame.com/wp-content/uploads/2022/12/DSC_0206-768x1024.jpg",
//         title: "Fried momos",
//         ingredients:"",
//     },
//     {
//         image: "https://e1.pxfuel.com/desktop-wallpaper/550/389/desktop-wallpaper-best-grilled-cheese-sandwiches-in-atlanta-eater-grilled-cheese-sandwich-thumbnail.jpg",
//         title: "Grilled sandwich",
//         ingredients:"",
//     },
//     {
//         image: "https://kitchenmai.com/wp-content/uploads/2020/07/chicken_roll_blog.jpg",
//         title: "Chicken roll",
//         ingredients:"",
//     },
//     {
//         image: "https://www.thecookierookie.com/wp-content/uploads/2018/12/featured-baked-chicken-wings-reshoot.jpg",
//         title: "Chicken wings",
//         ingredients:"",
//     },

// ];


display();
function display() {
    fetch("http://localhost:8080/food", {
        method: "GET",

    })
        .then((res) => res.json())
        .then((data) => {
            const movieBox = document.getElementById("showmenu");

            data.map((el) => {
                const div = document.createElement("div");
                div.classList.add("container");
                const img = document.createElement("img");
                img.src = el.image;
                const movieTitle = document.createElement("h3");
                movieTitle.innerText = el.title;
                const p = document.createElement("p");
                p.innerText = "";
                const button = document.createElement("button");
                button.innerText = "Show recipe";
                const button1 = document.createElement("button");
                button1.innerText = "Remove recipe";
                button1.style.marginLeft = "1rem";

                button.addEventListener("click", () => {

                    p.innerText = el.ingredients;
                });
                button1.addEventListener("click", () => {
                    p.innerText = "";

                });
                div.append(img, movieTitle, p, button, button1);
                movieBox.append(div);
            }
            );
        })
    }
// for (let i = 0; i < data.length; i++) {
//     const div = document.createElement("div");
//     const img = document.createElement("img");
//     img.src = data[i].image;
//     const movieTitle = document.createElement("h3");
//     movieTitle.innerText = data[i].title;
//     const rating = document.createElement("h3");
//     rating.innerText = "Rating : " + data[i].rating;
//     div.append(img, movieTitle, rating);
//     movieBox.append(div);
// }
