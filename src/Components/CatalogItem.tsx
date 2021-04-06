import React, { useCallback } from 'react';
import { IProduct } from '../Store/Modules/Cart/Types';
import { addProductToCart } from '../Store/Modules/Cart/Actions';
import { useDispatch } from 'react-redux';

interface CatalogItemPRops {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemPRops> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product]);

  return(
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <strong>{product.price}</strong> {" - "}

      <button type="button" onClick={handleAddProductToCart}>Comprar</button>
    </article>
  )
}

export default CatalogItem;
