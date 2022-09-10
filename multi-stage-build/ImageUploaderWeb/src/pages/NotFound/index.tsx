import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const NotFound: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    toast.info('Hey duddy, what are You looking for? 🤔');

    history.push('/');
  }, [history]);

  return <div />;
};

export default NotFound;
