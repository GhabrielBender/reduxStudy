import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sum } from "../store/Calculator/Calculator.actions";

function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);
  // const [a, setA] = useState(0);
  // const [b, setB] = useState(0);

  return (
    <>
      <input type="text" placeholder="a" />
      <input type="text" placeholder="b" />

      <button
        onClick={() => {
          dispatch(sum(6, 5));
        }}
      >
        somar
      </button>
      <button>subtrair</button>

      <div>{result}</div>
    </>
  );
}

export default Calculator;
