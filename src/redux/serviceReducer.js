export const serviceReducer = (
  state = { invoices: null, summary: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case "LOADING_TRUE":
      return { ...state, loading: true };
    case "LOADING_FALSE":
      return { ...state, loading: false };
    case "GET_ALL_AR_ITEMS":
      return { ...state, invoices: action.payload };
    case "GET_SUMMARY":
      return { ...state, summary: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return { ...state };
  }
};
