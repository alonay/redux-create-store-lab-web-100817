export default function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render()
  }

  function getState(){
    return state;
  }

  dispatch({type: "@@INIT"});

  return {
    dispatch,
    getState
  };
};

function changeCount(state = {
  count:0}, action){
    switch (action.type) {
      case "INCREASE_COUNT":
        return { count: state.count + 1};
        default:
          return state;
    }
  }

function render() {
  const container = document.getElementById('container');
}
