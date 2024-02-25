import { Flex } from '@chakra-ui/react';
import { editionDropAddress } from '@config/constants';
import styles from '@lib/styles/Home.module.css';
import {
  Web3Button,
  useOwnedNFTs,
  useAddress,
  useContract,
  ThirdwebNftMedia,
  useClaimNFT,
} from '@thirdweb-dev/react';

const ExampleClaim = () => {
  const address = useAddress();
  const { contract } = useContract(editionDropAddress);

  const { data, isLoading } = useOwnedNFTs(contract, address);
  const { mutateAsync: claim, isLoading: isClaiming } = useClaimNFT(contract);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      {address && (
        <Flex>
          <Web3Button
            contractAddress={editionDropAddress}
            action={() =>
              claim({
                tokenId: 0,
                quantity: 1,
              })
            }
          >
            Claim Edition NFT
          </Web3Button>
        </Flex>
      )}

      {address && isLoading ? <p>Loading Owned NFTs...</p> : null}

      {address && !isLoading && data && data.length === 0 ? (
        <p>
          {isClaiming
            ? 'Deploying your account and claiming...'
            : 'No NFTs, claim one now!'}
        </p>
      ) : null}
      {data &&
        data?.map((nft) => (
          <Flex
            className={styles.container}
            key={nft.metadata.id}
            justifyContent="center"
            alignItems="center"
          >
            <ThirdwebNftMedia metadata={nft.metadata} />
            <p>
              You own {nft.quantityOwned} {nft.metadata.name}
            </p>
          </Flex>
        ))}
    </Flex>
  );
};

export default ExampleClaim;
