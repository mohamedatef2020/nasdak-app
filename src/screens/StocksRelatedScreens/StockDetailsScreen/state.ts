export type TickerPreviousDayStatistics = {
  T: string | null;
  c: number | null;
  o: number | null;
  h: number | null;
  l: number | null;
  v: number | null;
};

export type TickerDetails = {
  logo: string;
  symbol: string;
  name: string;
  url: string;
  industry: string;
  description: string;
  status: number | null;
};

export type State = {
  tickerDetails: TickerDetails;
  tickerStatistics: TickerPreviousDayStatistics;
  previouslyVisitedTickeStatistics: TickerPreviousDayStatistics[];
  previouslyVisitedTickerDetails: TickerDetails[];
};

export const state: State = {
  tickerDetails: {
    logo: "",
    symbol: "",
    name: "",
    url: "",
    industry: "",
    description: "",
    status: null,
  },
  previouslyVisitedTickerDetails: [],
  tickerStatistics: { T: "", c: null, o: null, h: null, l: null, v: null }, // forced by overmind not to use optional properties for the state :(
  previouslyVisitedTickeStatistics: [],
};
