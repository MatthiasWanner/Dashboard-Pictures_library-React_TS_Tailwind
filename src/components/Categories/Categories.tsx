import React from 'react';
import Card from '../Layout/Card';

import Content from '../Layout/Content';
import AddCategory from './AddCategory';
import AllCategories from './AllCategories';

function Categories() {
  return (
    <Content>
      <Card title="Catégories" className="w-1/2 h-full">
        <AllCategories className="h-5/6" />

        <AddCategory className="flex justify-around h-1/6 items-center border-t border-white bg-customPurple" />
      </Card>
    </Content>
  );
}

export default Categories;
