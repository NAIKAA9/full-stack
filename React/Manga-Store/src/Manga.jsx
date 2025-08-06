const Manga = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.data.photo} alt="error" height="300px" width="300px" />
      <h2>{props.data.name}</h2>
      <p>{props.data.intro}</p>
      <p>
        Price: <span>{props.data.price}</span>
      </p>
    </div>
  );
};

export default Manga;
