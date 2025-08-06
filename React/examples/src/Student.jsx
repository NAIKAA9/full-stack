const Student = ({ studentData }) => {
  return (
    <div>
      {studentData.yearOfJoining === 2019 &&
      studentData.yearOfPassout === 2021 ? (
        <h1>{studentData.name} was passed with in time period</h1>
      ) : (
        <h1>{studentData.name} was not passed with in time period</h1>
      )}
    </div>
  );
};

export default Student;
