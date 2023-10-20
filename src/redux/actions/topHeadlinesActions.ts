export const getTopHeadlines = (data: any) => {
  return {
    type: "getTopHeadlines",
    payload: data,
  };
};