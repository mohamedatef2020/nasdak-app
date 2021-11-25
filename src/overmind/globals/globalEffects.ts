import { getData } from "../../utils/helpers";

// these effects are global effects, they are meant to be used across the app, not specific to a particular module.

export const initializationEffects = {
  initAsync: async (): Promise<string | null | undefined> => {
    const isIntroSeen = await getData("@isIntroSeen");
    return isIntroSeen;
  },
};
