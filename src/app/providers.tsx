'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { activeChain, factoryAddress } from '@config/constants';
import {
  ThirdwebProvider,
  smartWallet,
  embeddedWallet,
  coinbaseWallet,
  metamaskWallet,
  phantomWallet,
  trustWallet,
  walletConnect,s
} from '@thirdweb-dev/react';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ThirdwebProvider
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
          activeChain={activeChain}
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            trustWallet(),
            phantomWallet(),
            smartWallet(embeddedWallet(), {
              factoryAddress,
              gasless: true,
            }),
          ]}
        >
          {children}
        </ThirdwebProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
