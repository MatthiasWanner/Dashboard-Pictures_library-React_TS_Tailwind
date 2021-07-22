import React from 'react';
import Card from '../Layout/Card';

import Content from '../Layout/Content';
import AllCategories from './AllCategories';

function Categories() {
  return (
    <Content>
      <Card title="Catégories">
        <AllCategories />
      </Card>
    </Content>
  );
}

export default Categories;
