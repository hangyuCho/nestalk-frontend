import React from 'react';
import Header from '../Header';
import Layout from './styled';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => (
  <>
    <Layout>
      <Header />
      {children}
    </Layout>
  </>
);

export default AppLayout;
