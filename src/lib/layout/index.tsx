'use client';

import { Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex margin="0 auto" maxWidth={800} transition="0.5s ease-out" w="full">
      <Flex p={8} flexDirection="column" w="full">
        <Header />
        <Flex as="main" marginY={22} w="full" minHeight="calc(100vh - 180px)">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
