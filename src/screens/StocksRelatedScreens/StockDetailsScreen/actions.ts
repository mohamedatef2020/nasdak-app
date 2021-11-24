import { TickerDetails } from "./state";
import { Alert } from "react-native";
import { Context } from "../../../overmind";

export const getTickerDetailsAction = async (
  { state, effects }: Context,
  ticker: string,
) => {
  try {
    state.isLoading = true;
    const tickerDetails =
      await effects.tickerDetails.tickerDetailsEffect.getTickerDetails(ticker);

    state.tickerDetails.tickerDetails = tickerDetails;
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
    state.isLoading = true;
    const tickerStats: any =
      await effects.tickerDetails.tickerDetailsEffect.getTickerStatistics(
        ticker,
      );
    const results = tickerStats[0];
    console.log("resultsresultsresultsresults", results);
    state.isLoading = false;
    state.tickerDetails.tickerStatistics = results;
  } catch (e) {
    state.isLoading = false;
  }
};
