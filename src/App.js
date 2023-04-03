import './App.css';
import Card from './components/Card'
import image from "./images/image-equilibrium.jpg"
import imageOne from "./images/image-puffer.webp"
import imageTwo from "./images/image-cubes.webp"
import imageThree from "./images/image-goop.webp"
import authorImage from "./images/image-avatar.png"

const data = [
  {
    cardImage: image, 
    cardName: "Equilibrium #32", 
    cardDesc: "Our Equilibrium collection promotes balance and calm.", 
    cardPrice: "0.041ETH",
    cardTimeRemaining: "3 days left",
    cardAuthorImage: authorImage,
    cardAuthorName: "Jules Wyvern",
    id: 1,
  },
  {
    cardImage: imageOne, 
    cardName: "Unicode #1", 
    cardDesc: "A collection of 3D glyphs, with a contemporary twist.", 
    cardPrice: "0.120ETH",
    cardTimeRemaining: "1 week left",
    cardAuthorImage: authorImage,
    cardAuthorName: "Jules Wyvern",
    id: 2,
  },
  {
    cardImage: imageTwo, 
    cardName: "Rotations #162", 
    cardDesc: "Exploring particulate new and unique representations of 3D worldspaces.", 
    cardPrice: "0.455ETH",
    cardTimeRemaining: "42 hours left",
    cardAuthorImage: authorImage,
    cardAuthorName: "Jules Wyvern",
    id: 3,
  },
  {
    cardImage: imageThree, 
    cardName: "Flow #83", 
    cardDesc: "Otherworldly materials collide in this reinterpretation of urban landscapes", 
    cardPrice: "0.008ETH",
    cardTimeRemaining: "6 hours left",
    cardAuthorImage: authorImage,
    cardAuthorName: "Jules Wyvern",
    id: 4,
  },

]

function App() {
  return (
    <div className="App">
      <Card data={data} title="hello"/>
    </div>
  );
}

export default App;
