import React from 'react';
import Card from '../Layout/Card';

import Content from '../Layout/Content';
import DisplaysAllPhotos from './DisplaysAllPhotos';
import PhotosPageHeader from './PhotosPageHeader';

function Photos(): JSX.Element {
  return (
    <Content>
      <PhotosPageHeader />
      <Card title="Médiathèque" className="w-full h-nine">
        <DisplaysAllPhotos />
      </Card>
    </Content>
  );
}

export default Photos;
