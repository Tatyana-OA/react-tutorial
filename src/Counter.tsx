import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [sth, setSth] = useState("hi");

  // UNSAFE_componentWillMount() -> called before mounting and render as a way to initialize state => use constructor instead ;)
  useEffect(() => {
    console.log("ComponentDidMount, We fetch data here ;) ");
  }, []);

  useEffect(() => {
    setCalculation(() => count * 2);
    setSth("hi" + count.toString());
    console.log("I render on every change of count => ComponentDidUpdate");
    console.log(sth);

    return () => {
      console.log("unmounted => ComponentWillUnmount");
    };
  }, [count, sth]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default Counter;
