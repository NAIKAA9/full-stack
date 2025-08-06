import Manga from "./Manga";
const data1 = {
  name: "One Piece",
  intro:
    "Monkey D. Luffy sets sail to find the legendary treasure. Pirates, adventure, and loyalty shape his wild journey.",
  price: 299,
  photo: "manga/one.png",
  soldOut: false,
};
const data2 = {
  name: "Attack on Titan",
  intro:
    "In a world under siege by Titans, Eren vows revenge. Humanity's survival rests on the truth beyond the walls.",
  price: 279,
  photo: "manga/aot.jpg",
  soldOut: true,
};
const App = () => {
  return (
    <div>
      {/* calling component */}
      <Manga data={data1} />
      <Manga data={data2} />
    </div>
  );
};

export default App;
