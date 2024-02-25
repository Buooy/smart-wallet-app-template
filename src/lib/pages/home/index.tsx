'use client';

import { Flex } from '@chakra-ui/react';
import styles from '@lib/styles/Home.module.css';
import { useAddress } from '@thirdweb-dev/react';

import LoginButton from '~/lib/components/auth/LoginButton';

import ExampleClaim from './ExampleClaim';

const Home = () => {
  const address = useAddress();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      {!address && (
        <Flex
          className={styles.connect}
          flexDirection="column"
          w="full"
          justifyContent="center"
        >
          <LoginButton />
        </Flex>
      )}

      <ExampleClaim />
    </Flex>
  );
};

export default Home;
