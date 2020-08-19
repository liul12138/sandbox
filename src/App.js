import React, { useState } from "react";
import "./styles.css";
import store from "./redux/reducer";
import { increseNum, decreseNum } from "./redux/actioncreater";
import { connect } from "react-redux";
// const countIncrease = () => {
//   store.dispatch(increseNum());
// };
// const countDecrease = () => {
//   store.dispatch(decreseNum());
// };
function _App(props) {
  // const [count, setCount] = useState(store.getState().count);
  const { count, countIncrease, countDecrease } = props;
  // store.subscribe(() => {
  //   console.log(store.getState());
  //   setCount(store.getState().count);
  // });
  return (
    <div className="App">
      <button onClick={countDecrease}>-</button>
      {count}
      <button onClick={countIncrease}>+</button>
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    count: state.count
  };
};
const MapDisPatchToProps = (dispatch) => ({
  countDecrease: dispatch(decreseNum),
  countIncrease: dispatch(increseNum)
});
export default connect(MapStateToProps, MapDisPatchToProps)(_App);
