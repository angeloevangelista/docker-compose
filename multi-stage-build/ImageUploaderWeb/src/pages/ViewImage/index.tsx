import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as SC from './styles';

import Input from '../../components/Input';
import ContentBox from '../../components/ContentBox';
import { useHistory, useRouteMatch } from 'react-router';
import Button, { EButtonTheme } from '../../components/Button';

const ViewImage: React.FC = () => {
  const { params } = useRouteMatch<{ image_id: string }>();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState('');
  const linkInputRef = useRef<HTMLInputElement | null>(null);

  const handleCopyImageLink = useCallback(() => {
    linkInputRef.current?.select();

    document.execCommand('copy');
  }, [linkInputRef]);

  useEffect(() => {
    const { image_id } = params;

    setImageUrl(
      `${String(process.env.REACT_APP_API_HOST)}/files/${image_id}`,
    );
  }, [history, params]);

  return (
    <SC.Container>
      <Link to="/">
        <Button theme={EButtonTheme.secondary}>Voltar</Button>
      </Link>

      <ContentBox>
        <SC.Header>
          <MdCheckCircle size={32} />
          <strong>Uploaded Successfully!</strong>
        </SC.Header>

        <SC.ImageContainer>
          <img src={imageUrl} alt="Uploaded" />
        </SC.ImageContainer>

        <Input
          ref={linkInputRef}
          value={imageUrl}
          readOnly
          useButton
          buttonProps={{
            children: 'Copy Link',
            theme: EButtonTheme.primary,
            onClick: handleCopyImageLink,
          }}
        ></Input>
      </ContentBox>
    </SC.Container>
  );
};

export default ViewImage;
