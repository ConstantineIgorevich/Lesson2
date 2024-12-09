export type NewComponentPropsType = {
  students: StudentType[];
};

export type StudentType = {
  id: number;
  name: string;
  age: number;
};

export function NewComponent(props: NewComponentPropsType) {
  const students = props.students.map((student) => {
    return (
      <li key={student.id}>
        <div>Name: {student.name}</div>
        <div>Age: {student.age}</div>
      </li>
    );
  });

  const topCars = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];

  return (
    <>
      <ul>{students}</ul>
      <table>
        <tbody>
          {topCars.map((car, index) => {
            return (
              <tr key={index}>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
