import React from 'react';
import Card from '../Layout/Card';

import Content from '../Layout/Content';
import AddCategory from './AddCategory';
import AllCategories from './AllCategories';

function Categories() {
  return (
    <Content>
      <Card title="Catégories" className="w-1/2 h-full">
        <AllCategories />
        <AddCategory />
      </Card>
    </Content>
  );
}

export default Categories;
