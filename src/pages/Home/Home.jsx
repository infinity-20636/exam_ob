import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { REMOVE_TASK } from "../../api/Slice/cardSlice";

const Home = ({}) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <section className="fon">
       
            <button
              aria-label="Increment value"
              onClick={() => dispatch(ADD_TASK())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(REMOVE_TASK())}
            >
              Decrement
            </button>
      </section>
    </>
  );
};
export default Home;
