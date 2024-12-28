import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div className='card'>{children}</div>;
};
