import { Context } from "../../../overmind";

export const getTickersDataAction = async (
  { state, effects }: Context,
  url: string,
) => {
  try {
    state.isLoading = true;
    const tickers = await effects.explore.tickersDataEffects.getTickers(url);

    state.explore.tickers.results = [
      ...state.explore.tickers.results,
      ...tickers.results,
    ];
    state.explore.tickers.next_url = tickers?.next_url?.replace(
      "https://api.polygon.io/",
      "",
    );
    state.isLoading = false;
  } catch (e) {
    state.isLoading = false;
  }
};

export const searchTickerAction = async (
  { state, effects }: Context,
  searchQuery: string,
) => {
  const tickers = await effects.explore.searchTickerEffect.getTickers(
    searchQuery,
  );

  state.explore.tickers.results = tickers.results;

  state.explore.tickers.next_url = tickers?.next_url?.replace(
    "https://api.polygon.io/",
    "",
  );
};
