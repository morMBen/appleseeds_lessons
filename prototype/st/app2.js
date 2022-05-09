const state = { isRunning: false, isLoading: false };
const state2 = { isRunning: false, isLoading: false, arr: [2] };

const func = ({ isLoading, isRunning, arr: [firstIs] }) => {
  return firstIs;
};

const func2 = () => {
  return state.isLoading;
};

func(state);
func(state2);

const isRunning = false;
const isLoading = false;
const user = {};
