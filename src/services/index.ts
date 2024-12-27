import apiClient from "./api-client.ts";
import { pageOf } from "~/libs/pages.ts";
import { IProduct } from "~/components/molecules/card/index.tsx";
import { IGetParams } from "~/hooks/index.ts";

const productListService = {
  getProductList: async (params: IGetParams): Promise<IProduct[]> => {
    return await apiClient.get(pageOf("PL-001").href, { params });
  },
};

export default productListService;

