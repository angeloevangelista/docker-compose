import React, { DragEventHandler, HTMLAttributes, useCallback } from 'react';

import uploadBgImg from '../../assets/upload-bg.svg';

import * as SC from './styles';

interface IDragAndDropProps extends HTMLAttributes<HTMLDivElement> {
  onDrop: DragEventHandler;
}

const DragAndDrop: React.FC<IDragAndDropProps> = ({ ...restProps }) => {
  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => event.preventDefault(),
    [],
  );

  const handleDragEnter = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => event.preventDefault(),
    [],
  );

  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => event.preventDefault(),
    [],
  );

  return (
    <SC.Container
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      {...restProps}
    >
      <img src={uploadBgImg} alt="Example" />

      <span>Drag &#38; Drop your image here</span>
    </SC.Container>
  );
};

export default DragAndDrop;
