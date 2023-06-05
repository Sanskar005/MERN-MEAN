const data = [

    {
        image: "https://pbs.twimg.com/media/FvYLAURaEAIwqq0?format=jpg&name=medium",
        title: "Oppenheimer",
        rating: 9.1,
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYd3qWb7UlM_UBeis23ZV3SHzJpNy9-aBeScMnEzLHO1zc0wD",
        title: "WALL·E",
        rating: 8.4,
    },
    {
        image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/mv5bmdk4mtdhyzetodk3os00zdbjlwfhntqtmdi2oddjnzqzzta3xkeyxkfqcgdeqxvymjmxote0oda-_v1_.jpg?q=50&fit=crop&h=720&dpr=1.5",
        title: "Megan",
        rating: 6.4,
    },
    {
        image: "https://lh3.googleusercontent.com/B4cnobWyvdonq4TQ-ijq0tVNnKWo3ZwhPpEOQu2llSxuXLKyhTtSg9gmPhFrZC6MaLV03rD5aFm8_Kl2WDdcbP7P8TwimH8ZucRY34IB=w500-rw",
        title: "Aquaman",
        rating: 6.8,
    },
    {
        image: "https://images-cdn.ubuy.co.in/639c88534d20d83575030186-the-batman-movie-poster-profile-blue.jpg",
        title: "The Batman",
        rating: 7.8,
    },
    {
        image: "http://m.gettywallpapers.com/wp-content/uploads/2022/05/Avatar-2-Wallpaper-New-.jpg",
        title: "Avatar : The Way of Water",
        rating: 7.7,
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg",
        title: "Morbius",
        rating: 5.2,
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/19/469/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg",
        title: "The Lost City",
        rating: 6.1,
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/236/875/desktop-wallpaper-new-giclee-art-print-2021-promo-for-snake-eyes-g-i-joe-hollywood-2022-movies-poster.jpg",
        title: "G.I. Joe : Snake Eyes",
        rating: 5.4,
    },
    {
        image: "https://e0.pxfuel.com/wallpapers/947/677/desktop-wallpaper-avengers-infinity-war-superheroes-marvel-movie-poster-2018.jpg",
        title: "Avengers : Infinity war",
        rating: 8.4,
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
        title: "Spiderman : Across the Spiderverse",
        rating: 9.4,
    },
    {
        image: " https://images.justwatch.com/poster/60682266/s718/transformers-age-of-extinction.%7Bformat%7D",
        title: "Transformers : Age of Extinction",
        rating: 5.6,
    },
   
];

const movieBox = document.getElementById("showmovie");


data.map((el)=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src=el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("h3");
    rating.innerText = "Rating : " + el.rating;
    const button =document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click",()=>{
        alert(`You clicked on ${el.title}`);
    }),
    div.append(img, movieTitle, rating,button);
    movieBox.append(div);
}
);

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
