import apiClient from './api-client.ts'
import { pageOf } from '~/libs/pages.ts'
import { IGetParams } from '~/hooks/useMarketplaceActions.ts'
import { IProduct } from '~/components/molecules/ProductCard/index.tsx'

const productListService = {
  getProductList: async (params: IGetParams): Promise<IProduct[]> => {
    return await apiClient.get(pageOf("PL-001").href, { params })
  }
}

export default productListService
