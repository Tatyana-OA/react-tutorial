import React, { useMemo } from "react";
import { ExampleProps } from "../interfaces/ExampleProps";

const Example = ({ data }: ExampleProps) => {
  //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   //   let newarr = arr.filter((el) => el % 2 === 0);

  //   let filterArr = () => {
  //     return arr.filter((el) => el % 2 === 0);
  //   };

  //   let newarr = useMemo(filterArr, [arr]);

  //   console.log(typeof useMemo(filterArr, [arr]));

  //   console.log(newarr);
  //   let sum = useHello(5, 6);

  //   console.log(sum);

  return (
    <div className="flex flex-col gap-4">
      {data.map((i) => {
        return (
          <div key={i.name} className="border-b-2 border-solid border-black">
            <h1>Hello {i.name}</h1>
            <p>You are {i.age} years old</p>
            <p>And {i.neshto} si</p>
            {i.oshteneshto ? <p>Ima {i.oshteneshto}</p> : <p>Nyama nishto</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Example;
