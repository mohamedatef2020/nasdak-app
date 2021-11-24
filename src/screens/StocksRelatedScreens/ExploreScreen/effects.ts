import axiosInstance from "../../../utils/axiosInstance";
import { Tickers } from "./state";

export const tickersDataEffects = {
  getTickers: async (url: string): Promise<Tickers> => {
    const response = await axiosInstance.get(url);
    return response.data;
  },
};

export const searchTickerEffect = {
  getTickers: async (searchQuery: string): Promise<Tickers> => {
    const response = await axiosInstance.get(
      `v3/reference/tickers?market=stocks&search=${searchQuery}&limit=20`,
    );
    return response.data;
  },
};
