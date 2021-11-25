import { Context } from "../../../overmind";

export const getTickerDetailsAction = async (
  { state, effects }: Context,
  ticker: string,
) => {
  try {
    // forced by overmind not to use optional properties for the state :(
    state.tickerDetails.tickerStatistics = {
      T: "",
      c: null,
      o: null,
      h: null,
      l: null,
      v: null,
    };
    if (state.tickerDetails.previouslyVisitedTickerDetails.length > 0) {
      const selected = state.tickerDetails.previouslyVisitedTickerDetails.find(
        (item) => {
          return item.symbol === ticker;
        },
      );
      if (selected) {
        state.tickerDetails.tickerDetails = { ...selected };
        return { status: 0 };
      }
    }
    state.isLoading = true;
    const tickerDetails =
      await effects.tickerDetails.tickerDetailsEffect.getTickerDetails(ticker);

    state.tickerDetails.tickerDetails = tickerDetails;
    let x;
    if (tickerDetails.status === 404) {
      // forced by overmind not to use optional properties for the state :(
      x = {
        logo: "",
        symbol: ticker,
        name: "",
        url: "",
        industry: "",
        description: "",
        status: null,
      };
    } else {
      x = tickerDetails;
    }
    state.tickerDetails.previouslyVisitedTickerDetails = [
      ...state.tickerDetails.previouslyVisitedTickerDetails,
      x,
    ];
    state.isLoading = false;
    return tickerDetails;
  } catch (e: any) {
    state.isLoading = false;
  }
};

export const getTickerStatisticsAction = async (
  { state, effects }: Context,
  ticker: string,
) => {
  try {
    if (state.tickerDetails.previouslyVisitedTickeStatistics.length > 0) {
      const selected =
        state.tickerDetails.previouslyVisitedTickeStatistics.find((item) => {
          return item.T === ticker;
        });
      if (selected) {
        state.tickerDetails.tickerStatistics = { ...selected };
        return 0;
      }
    }
    state.isLoading = true;
    const tickerStats: any =
      await effects.tickerDetails.tickerDetailsEffect.getTickerStatistics(
        ticker,
      );
    const results = tickerStats[0];
    state.isLoading = false;
    state.tickerDetails.previouslyVisitedTickeStatistics = [
      ...state.tickerDetails.previouslyVisitedTickeStatistics,
      results,
    ];
    state.tickerDetails.tickerStatistics = results;
  } catch (e) {
    state.isLoading = false;
  }
};
