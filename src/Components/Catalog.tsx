import React, { useEffect, useState } from 'react';
import { IProduct } from '../Store/Modules/Cart/Types';
import api from '../Services/api';

const Components: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
      api.get('products').then(response => {
        setCatalog(response.data);
      })
    })

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <strong>{product.price}</strong> {" - "}

          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
}

export default Components;
