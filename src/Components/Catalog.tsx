import React, { useCallback, useEffect, useState } from 'react';
import { IProduct } from '../Store/Modules/Cart/Types';
import api from '../Services/api';

import CatalogItem from './CatalogItem';

const Components: React.FC = () => {

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  });

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product}/>
      ))}
    </main>
  );
}

export default Components;
