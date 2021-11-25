import { IContext } from "overmind";
import { namespaced, merge } from "overmind/config";
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react";

import { state } from "./globals/globalState";
import * as actions from "./globals/globalActions";
import * as effects from "./globals/globalEffects";

// the overmind config from other modules 
import * as explore from "../screens/StocksRelatedScreens/ExploreScreen/overmindIndex";
import * as tickerDetails from "../screens/StocksRelatedScreens/StockDetailsScreen/overmindIndex";


// combine everything together
export const config = merge(
  {
    state,
    actions,
    effects,
  },
  namespaced({
    explore,
    tickerDetails,
  }),
);

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
