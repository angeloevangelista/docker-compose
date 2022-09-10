import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import React, { useCallback, useRef, useState } from 'react';

import ContentBox from '../../components/ContentBox';
import DragAndDrop from '../../components/DragAndDrop';
import Button, { EButtonTheme } from '../../components/Button';

import * as SC from './styles';

import Loading from '../../components/Loading';

interface IImage {
  id: string;
}

const UploadImage: React.FC = () => {
  const history = useHistory();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputReference = useRef<HTMLInputElement | null>(null);

  const handleUploadFile = useCallback(
    async (files: FileList) => {
      if (files.length > 1) {
        return toast.warning('Please, choose only one file 😗');
      }

      const [file] = Array.from(files).filter((f) => {
        const [category] = f.type.split('/');

        return category.toUpperCase() === 'IMAGE';
      });

      if (!file) {
        return toast.error('I am not sure about this picture 🧐');
      }

      setIsUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post<IImage>(
          `${String(process.env.REACT_APP_API_HOST)}/files/upload`,
          formData,
        );

        history.push(`/view/${response.data.id}`);
      } catch (error) {
        toast.error(
          "Ooops, something happened and we couldn't save your picture 🤕",
        );

        setIsUploading(false);
      }
    },
    [history],
  );

  const handleInputFileChange = useCallback(() => {
    if (!fileInputReference || !fileInputReference.current) return;

    const files = fileInputReference.current.files;

    files && handleUploadFile(files);
  }, [fileInputReference, handleUploadFile]);

  const handleFileDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const files = event.dataTransfer.files;

      handleUploadFile(files);
    },
    [handleUploadFile],
  );

  const handleChooseFileClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      if (!fileInputReference) return;

      fileInputReference.current?.click();
    },
    [fileInputReference],
  );

  return (
    <SC.Container>
      <ContentBox>
        {isUploading ? (
          <Loading text="Uploading..." />
        ) : (
          <>
            <SC.Header>
              <strong>Upload your image</strong>
              <span>File should be Jpeg, Png...</span>
            </SC.Header>

            <SC.UploadContainer>
              <DragAndDrop onDrop={handleFileDrop} />

              <span>Or</span>

              <Button
                onClick={handleChooseFileClick}
                theme={EButtonTheme.primary}
              >
                Choose a file
              </Button>
            </SC.UploadContainer>
          </>
        )}
      </ContentBox>

      <input
        ref={fileInputReference}
        type="file"
        style={{ display: 'none' }}
        onChange={handleInputFileChange}
      />
    </SC.Container>
  );
};

export default UploadImage;
