import { act, renderHook, waitFor } from '@testing-library/react';
import productListService from '~/services/index';
import { FormInstance } from 'antd';
import { IProduct } from '~/components/molecules/card/index.tsx';
import useMarketplaceActions from './index.ts';

jest.mock('~/services/index');

describe('useMarketplaceActions', () => {
  let form: FormInstance;
  const mockProductListService = productListService as jest.Mocked<typeof productListService>;
  beforeEach(() => {
    form = {
      getFieldsValue: jest.fn(() => ({
        title: 'Navigation',
        tier: 'delux',
        theme: 'longer',
        priceSortOrder: 'asc',
        price: [22, 165]
      })),
      scrollToField: jest.fn(),
      focusField: jest.fn(),
      getFieldInstance: jest.fn(),
      getFieldValue: jest.fn(),
      getFieldsError: jest.fn(),
      getFieldError: jest.fn(),
      isFieldTouched: jest.fn(),
      isFieldValidating: jest.fn(),
      isFieldsTouched: jest.fn(),
      resetFields: jest.fn(),
      setFields: jest.fn(),
      setFieldsValue: jest.fn(),
      validateFields: jest.fn()
    } as unknown as FormInstance;
    jest.clearAllMocks();
  });

  test('should fetch the list of products on mount', async () => {
    const mockProduct: IProduct = {
      id: 1,
      imageId: 123,
      isFavorite: true,
      title: 'Product 1',
      price: 10,
      background: '',
      imageSrc: '/images/pngwing-01.png',
      createdAt: 2020121212,
      category: 'Upper Body',
      theme: 'Light',
      tier: 'Premium',
      author: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        avatar: '',
        onlineStatus: 'online'
      }
    };
    mockProductListService.getProductList.mockResolvedValue([mockProduct]);
    const { result } = renderHook(() => useMarketplaceActions(form));
    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual([mockProduct]);
      expect(mockProductListService.getProductList).toHaveBeenCalledTimes(1);
    });
  });

  test('should handle load more functionality', async () => {
    const mockProduct: IProduct = {
      id: 1,
      imageId: 123,
      isFavorite: true,
      title: 'Product 1',
      price: 10,
      background: '',
      imageSrc: '/images/pngwing-01.png',
      createdAt: 2020121212,
      category: 'Upper Body',
      theme: 'Light',
      tier: 'Premium',
      author: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        avatar: '',
        onlineStatus: 'online'
      }
    };
    const mockProduct2: IProduct = {
      id: 2,
      imageId: 456,
      isFavorite: false,
      title: 'Product 2',
      price: 20,
      background: '',
      imageSrc: '/images/pngwing-02.png',
      createdAt: 2020121213,
      category: 'Lower Body',
      theme: 'Dark',
      tier: 'Basic',
      author: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        avatar: '',
        onlineStatus: 'offline'
      }
    };
    mockProductListService.getProductList
      .mockResolvedValueOnce([mockProduct])
      .mockResolvedValueOnce([mockProduct2]);
    const { result } = renderHook(() => useMarketplaceActions(form));
    await waitFor(() => {
      expect(result.current.data).toEqual([mockProduct]);
    });
    await act(async () => {
      await result.current.addMoreDataFn();
    });
    expect(result.current.data).toEqual([mockProduct, mockProduct2]);
  });

  test('should call productListService.getProductList after interval', async () => {
    jest.useFakeTimers();
    const mockProduct: IProduct = {
      id: 1,
      imageId: 123,
      isFavorite: true,
      title: 'Product 1',
      price: 10,
      background: '',
      imageSrc: '/images/pngwing-01.png',
      createdAt: 2020121212,
      category: 'Upper Body',
      theme: 'Light',
      tier: 'Premium',
      author: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        avatar: '',
        onlineStatus: 'online'
      }
    };
    mockProductListService.getProductList.mockResolvedValue([mockProduct]);

    const { result } = renderHook(() => useMarketplaceActions(form));
    expect(result.current.data).toEqual([]);

    act(() => {
      jest.advanceTimersByTime(60000);
    });

    await waitFor(() => {
      expect(productListService.getProductList).toHaveBeenCalledTimes(2);
      expect(result.current.data).toEqual([mockProduct]);
    });
    jest.useRealTimers();
  });
});