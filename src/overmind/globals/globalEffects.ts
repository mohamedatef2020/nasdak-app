import { getData } from "../../utils/helpers";

export const initializationEffects = {
  initAsync: async (): Promise<string | null | undefined> => {
    const isIntroSeen = await getData("@isIntroSeen");
    return isIntroSeen;
  },
};
