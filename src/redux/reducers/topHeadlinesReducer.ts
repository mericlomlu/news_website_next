const initialState = {
  topHeadlines: [],
  loading: true,
};

const topHeadlinesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "getTopHeadlines":
      return {
        ...state,
        topHeadlinesData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default topHeadlinesReducer;