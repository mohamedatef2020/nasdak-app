import axiosInstance from "../../../utils/axiosInstance";
import { TickerDetails, TickerPreviousDayStatistics } from "./state";

export const tickerDetailsEffect = {
  getTickerDetails: async (ticker: string): Promise<TickerDetails> => {
    try {
      const tickerDetails = await axiosInstance.get(
        `v1/meta/symbols/${ticker}/company`,
      );
      return { ...tickerDetails.data };
    } catch (e: any) {
      return e?.response;
    }
  },
  getTickerStatistics: async (
    ticker: string,
  ): Promise<TickerPreviousDayStatistics> => {
    const tickerPrevStats = await axiosInstance.get(
      `v2/aggs/ticker/${ticker}/prev`,
    );
    return tickerPrevStats.data.results;
  },
};
