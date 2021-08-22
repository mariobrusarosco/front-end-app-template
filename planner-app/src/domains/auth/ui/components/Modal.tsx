import React from 'react';

interface Props {
  lorem: string
}

const Modal: React.FunctionComponent<Props> = ({
  lorem
}) => {
  return <div>{lorem}</div>;
};

export default Modal;
