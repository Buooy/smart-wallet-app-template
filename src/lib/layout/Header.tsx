import { Flex, Heading } from '@chakra-ui/react';

import LoginButton from '~/lib/components/auth/LoginButton';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Flex>
        <Heading as="h1" size="lg" letterSpacing="tight" fontWeight="bold">
          Placeholder Logo
        </Heading>
      </Flex>
      <Flex marginLeft="auto" alignItems="center">
        <LoginButton />
        <Flex ml={4}>
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
