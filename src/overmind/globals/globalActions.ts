import { Context } from "..";

// these actions are global actions, they are meant to be used across the app, not specific to a particular module.

export const initializarions = async ({ state, effects }: Context) => {
  const isIntroSeen = await effects.initializationEffects.initAsync();
  state.isIntroSeen = isIntroSeen ? true : false;
};

export const globalStartLoadingIndicator = ({ state }: Context) => {
  state.isLoading = true;
};

export const globalStopLoadingIndicator = ({ state }: Context) => {
  state.isLoading = false;
};
