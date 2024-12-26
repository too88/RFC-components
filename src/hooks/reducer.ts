import { IProduct } from "~/components/molecules/ProductCard/index.tsx";
import { Pagination } from "./useMarketplaceActions.ts";
import { LIMIT, PAGE } from "~/libs/constants.ts";

export const initialState = {
    data: [] as IProduct[],
    loading: false,
    isLoadMore: false,
    pagination: {
        _page: PAGE,
        _limit: LIMIT,
    } as Pagination,
};

export type IState = typeof initialState;

type ReducerAction =
    | { type: "UPDATE_DATA"; payload: IProduct[] }
    | { type: "UPDATE_LOADING"; payload: boolean }
    | { type: "UPDATE_LOAD_MORE"; payload: boolean }
    | { type: "UPDATE_PAGINATION"; payload: Pagination }
    | { type: "UPDATE"; payload: Pick<IState, "pagination" | "data"> };

export const reducer = (state: IState, action: ReducerAction) => {
    switch (action.type) {
        case "UPDATE_DATA":
            return {
                ...state,
                data: action.payload,
            };
        case "UPDATE_LOADING":
            return { ...state, loading: action.payload };
        case "UPDATE_LOAD_MORE":
            return { ...state, isLoadMore: action.payload };
        case "UPDATE_PAGINATION":
            return {
                ...state,
                pagination: action.payload,
            };
        case "UPDATE":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};