import { Context } from "..";

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
