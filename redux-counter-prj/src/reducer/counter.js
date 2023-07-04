//액션 생성
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수 -> type를 리턴해줌
export const increaseNum = () => {
  return { type: INCREASE };
};

export const decreaseNum = () => {
  return { type: DECREASE };
};

const initialState = {
  num: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, num: state.num + 1 };
    case DECREASE:
      return { ...state, num: state.num - 1 };
    default:
      return { ...state };
  }
}
