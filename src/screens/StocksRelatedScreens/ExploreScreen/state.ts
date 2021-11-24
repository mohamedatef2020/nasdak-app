type Ticker = {
  ticker: string;
  name: string;
};

export type Tickers = {
  results: Ticker[];
  next_url: string;
};

export type State = {
  tickers: Tickers;
};

export const state: State = {
  tickers: { results: [], next_url: "" },
};
