const Person = ({ data }) => {
  const { name, course } = data;
  return <div>{name}</div>;
};

export default Person;
