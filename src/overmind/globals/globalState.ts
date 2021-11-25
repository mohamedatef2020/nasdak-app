// this state are global state, it's meant to be used across the app, not specific to a particular module.

export type State = {
  isLoading: boolean;
  isIntroSeen: boolean;
};

export const state: State = {
  isLoading: false,
  isIntroSeen: false,
};
