import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.jsx"
import Card from "./components/card.jsx"

function App() {
  const Array = [

    {
        image: "https://www.fliptwirls.com/wp-content/uploads/2023/05/FT26.jpg",
        title: "Top Mirrorless Camera",
        desc: "Shop Now!",
    },
    {
        image: "https://m.media-amazon.com/images/I/71nplbAMwzL.jpg",
        title: "Monitors",
        desc:"From ₹7949",
    },
    {
        image: "https://m.media-amazon.com/images/I/81yL4BWuwnL._SX679_.jpg",
        title: "Gaming Laptops",
        desc:"Starting ₹49999",
    },
    {
        image: "https://m.media-amazon.com/images/I/61FkEz92juL._SX355_.jpg",
        title: "Printers",
        desc:"From ₹3999",
    },
    {
        image: "https://hocotech.com/wp-content/uploads/2018/08/j29-cool-square-5000-mobile-power-bank-usb.jpg",
        title: "Premium PowerBanks",
        desc:"Shop Now",
    },
   
   
   
];
const newArray = [

    {
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/cycle/h/l/j/xplorer-mtb-29-black-single-speed-29-18-cradiac-120-single-speed-original-imagkzkhmvrv7ghh.jpeg?q=70",
        title: "Geared Cycles",
        desc:"From ₹3999",
    },
    {
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/helmet/x/e/z/off-road-gt-isi-certified-motocross-helmet-for-men-with-inner-original-imaghpwnygmp58cf.jpeg?q=70",
        title: "Rider Helmets",
        desc: "Shop Now!",
    },
    {
        image: "https://rukminim1.flixcart.com/image/612/612/ked56kw0/bar/v/c/b/detachable-push-up-bar-dips-gym-exercise-for-men-women-push-up-original-imafvfq58ucfd32m.jpeg?q=70",
        title: "Gym Essentails",
        desc:"From ₹139",
    },
    {
        image: "https://rukminim1.flixcart.com/image/416/416/kc29n680/headphone/m/p/r/ath-m30x-professional-monitor-headphones-audio-technica-original-imaft9mfjfsyjfgs.jpeg?q=70",
        title: "Studio Headphones",
        desc:"Upto 80% off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/612/612/knrsjgw0/vehicle-tire/w/w/b/205-65-r15-b390-bridgestone-original-imag2dcbvrghhzdz.jpeg?q=70",
        title: "Tyres",
        desc:"Shop Now",
    },
   
   
   
];

  return (


    /* <div className="App">
       
    
         {/* <div>
         <h1>Home</h1>
         <h1>About us</h1>
         </div>
         </div>
         */
<div className='App'>
        <Navbar />
        <div className='container'> 
        <div class="left"><p>Best of Electronics</p></div>
  {Array.map((el)=>{
  return (<Card title={el.title} image={el.image} desc={el.desc}/>);
})}
  </div>
  <div className='new-container'> 
  <div class="left"> <p>Beauty, Food, Toys and more</p></div>
       
  {newArray.map((el)=>{
  return (<Card title={el.title} image={el.image} desc={el.desc}/>);
})}
  </div>
  </div>
/* <div> 
  <Navbar />
  <Card username="Sanskar" image="https://images.unsplash.com/photo-1594003715326-f6030861574e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
  </div> */
   

  );
}

export default App;
