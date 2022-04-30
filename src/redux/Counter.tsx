import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { RootState } from "./store";


const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState('2');

    console.log('rendering ... ', count)

    return <>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </>
}

export default Counter;