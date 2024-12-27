import { useCallback, useEffect, useReducer, useRef } from "react";
import { FormInstance } from "antd";

import { IProduct } from "~/components/molecules/card/index.tsx";
import { IState, initialState, reducer } from "./reducer.ts";
import { AUTO_REFRESH_AFTER_ONE_MINUTE, PAGE, PAGINATION_PLUS_1 } from "~/libs/constants.ts";
import productListService from "~/services/index.ts";

export type SortOrder = "asc" | "desc";

export interface Pagination {
  _page?: number;
  _limit?: number;
}

export interface IGetParams extends Pagination {
  q?: string;
  title_like?: string;
  _sort?: string;
  _order?: SortOrder;
  category?: string;
  tier?: string;
  theme?: string;
  price?: number;
  price_gte?: number;
  price_lte?: number;
}

const useMarketplaceActions = (form: FormInstance) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentState = useRef<IState>(state);
  const { data, loading, isLoading, pagination } = state;

  const dispatchData = (data: IProduct[]) =>
    dispatch({ type: "UPDATE_DATA", payload: data });

  const dispatchLoading = (loading: boolean) =>
    dispatch({ type: "UPDATE_LOADING", payload: loading });

  const dispatchLoadMore = (loading: boolean) =>
    dispatch({ type: "UPDATE_LOAD_MORE", payload: loading });

  const dispatchState = (payload: Pick<IState, "pagination" | "data">) =>
    dispatch({ type: "UPDATE", payload });

  const generateParams = (): IGetParams => {
    const formData = form.getFieldsValue();
    const sortableFields = ["price", "createdAt"];

    const paramFields = {
      q: formData.title,
      _sort: sortableFields[0],
      _order: formData.priceSortOrder,
      tier: formData.tier,
      theme: formData.theme,
      price_gte: formData.price[0],
      price_lte: formData.price[1],
    };
    return paramFields;
  };

  const addMoreDataFn = useCallback(async () => {
    try {
      dispatchLoadMore(true);

      const productListData = await productListService.getProductList({
        ...generateParams(),
        _page: pagination._page! + PAGINATION_PLUS_1,
        ...pagination,
      });

      dispatchState({
        data: [...data, ...productListData],
        pagination: { ...pagination, _page: pagination._page! + PAGINATION_PLUS_1 },
      });
    } catch (error) {
      console.error("GET-LOADING-MORE-ERROR", error);
    } finally {
      dispatchLoadMore(false);
    }
  }, [pagination, data]);

  const getProductList = useCallback(
    async (category?: string) => {
      try {
        dispatchLoading(true);

        const productListData = await productListService.getProductList({
          ...generateParams(),
          ...initialState.pagination,
          category,
        });
        dispatchState({ data: productListData, pagination: initialState.pagination });
      } catch (error) {
        console.error("GET-PRODUCT-LIST-ERROR", error);
      } finally {
        dispatchLoading(false);
      }
    },
    [pagination]
  );

  useEffect(() => {
    currentState.current = state;
  }, [state]);

  useEffect(() => {
    const result = setInterval(async () => {
      const currentProduct = currentState.current.pagination._page! * currentState.current.pagination._limit!;

      const productListData = await productListService.getProductList({
        ...generateParams(),
        _page: PAGE,
        _limit: currentProduct,
      });
      dispatchData(productListData);
    }, AUTO_REFRESH_AFTER_ONE_MINUTE);

    return () => clearInterval(result);
  }, []);

  useEffect(() => {
    getProductList();
  }, []);

  return { addMoreDataFn, getProductList, data, loading, form, isLoading };
};

export default useMarketplaceActions;
