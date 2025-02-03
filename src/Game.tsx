import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "urql";
import { useCallback, useEffect, useState } from "react";
import { isGameOver, removeZeros } from "./utils";
import { useInterval } from "usehooks-ts";
import {
  Container,
  Grid,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Button } from "./components/Button";
import { useAccount, useNetwork } from "@starknet-react/core";
import useToast from "./hooks/toast";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import { HomeIcon } from "./components/icons/Home";
import Play from "./components/Play";
import Slot from "./components/Slot";
import NextNumber from "./components/NextNumber";
import { graphql } from "./graphql/appchain";

const REFRESH_INTERVAL = 1000;
const MAX_SLOTS = 20;

const GameQuery = graphql(`
  query GameQuery($gameId: u32) {
    numsGameModels(where: { game_id: $gameId }) {
      edges {
        node {
          player
          min_number
          max_number
          max_slots
          remaining_slots
          next_number
          reward
          claimed
        }
      }
    }
    numsSlotModels(
      where: { game_id: $gameId }
      order: { direction: ASC, field: NUMBER }
      limit: 20
    ) {
      edges {
        node {
          index
          number
        }
      }
    }
  }
`);

const Game = () => {
  const [slots, setSlots] = useState<number[]>(
    Array.from({ length: MAX_SLOTS }, () => 0),
  );
  const [nextNumber, setNextNumber] = useState<number | null>();
  const [isOver, setIsOver] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(0);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reward, setReward] = useState<number>(0);
  const [claimError, setClaimError] = useState<Error>();
  const { chain } = useNetwork();
  const { open, onOpen, onClose } = useDisclosure();
  const { account } = useAccount();
  const { gameId } = useParams();
  const navigate = useNavigate();

  const { showTxn, showError } = useToast();
  if (!gameId) {
    return <></>;
  }

  const [queryResult, reexecuteQuery] = useQuery({
    query: GameQuery,
    variables: { gameId: parseInt(gameId) },
    requestPolicy: isOwner ? "network-only" : "cache-and-network",
  });

  useInterval(() => {
    isLoading && reexecuteQuery();
  }, REFRESH_INTERVAL);

  const claimReward = useCallback(async () => {
    if (!account) return;
    account
      .execute([
        {
          contractAddress: import.meta.env.VITE_CLAIM_CONTRACT,
          entrypoint: "claim_reward",
          calldata: [gameId],
        },
      ])
      .catch((e) => {
        setClaimError(e);
      });
  }, [account, gameId, setClaimError]);

  useEffect(() => {
    const gamesModel = queryResult.data?.numsGameModels?.edges?.[0]?.node;
    const slotsEdges = queryResult.data?.numsSlotModels?.edges;
    if (!gamesModel || !slotsEdges) {
      return;
    }

    const isOwner =
      (account && gamesModel.player === removeZeros(account.address)) || false;
    setIsOwner(isOwner);

    // update if game progressed
    if (slotsEdges.length === gamesModel.max_slots! - remaining) {
      return;
    }

    setRemaining(gamesModel.remaining_slots || 0);
    setNextNumber(gamesModel.next_number);
    setReward(gamesModel.reward as number);
    const newSlots: number[] = Array.from({ length: MAX_SLOTS }, () => 0);
    slotsEdges.forEach((edge: any) => {
      newSlots[edge.node.index] = edge.node.number;
    });

    setSlots(newSlots);

    const isOver = isGameOver(newSlots, gamesModel.next_number!);
    setIsOver(isOver);

    if (isOwner && isOver) {
      if (!gamesModel.claimed) {
        claimReward();
      }
      onOpen();
    }

    setIsLoading(false);
  }, [queryResult, account, onOpen, claimReward]);

  const setSlot = async (slot: number): Promise<boolean> => {
    if (!account) return false;

    if (isOver) {
      onOpen();
      return false;
    }
    try {
      setIsLoading(true);
      const { transaction_hash } = await account.execute([
        // {
        //   contractAddress: import.meta.env.VITE_VRF_CONTRACT,
        //   entrypoint: 'request_random',
        //   calldata: CallData.compile({
        //     caller: import.meta.env.VITE_GAME_CONTRACT,
        //     source: {source_type: 0, address: account.address}
        //   })
        // },
        {
          contractAddress: import.meta.env.VITE_GAME_CONTRACT,
          entrypoint: "set_slot",
          calldata: [gameId, slot.toString()],
        },
      ]);

      showTxn(transaction_hash, chain?.name);

      try {
        // catch any txn errors (nonce err, etc) and reset state
        await account.waitForTransaction(transaction_hash);
      } catch (e) {
        showError(transaction_hash);
        throw new Error("transaction error");
      }
    } catch (e) {
      console.log({ e });
      setIsLoading(false);
      return false;
    }

    return true;
  };

  const resetGame = () => {
    onClose();
    setSlots([]);
    setIsOver(false);
    reexecuteQuery();
  };

  return (
    <>
      <Container h="100vh" maxW="100vw">
        <Header showHome hideChain />
        <Overlay open={open} onClose={onClose}>
          <Text fontFamily="Ekamai" fontSize="64px" fontWeight="400">
            Game Over
          </Text>
          <HStack w={["300px", "300px", "400px"]}>
            <VStack layerStyle="transparent" flex="1" align="flex-start">
              <Text color="purple.50">Score</Text>
              <Text>{MAX_SLOTS - remaining}</Text>
            </VStack>
            <VStack layerStyle="transparent" flex="1" align="flex-start">
              <Text color="purple.50">Nums Rewarded</Text>
              <Text>{reward}</Text>
            </VStack>
          </HStack>
          <HStack pt="32px">
            <Button visual="transparent" onClick={() => navigate("/")}>
              <HomeIcon /> Home
            </Button>
            <Play
              isAgain
              onReady={(gameId) => {
                navigate(`/${gameId}`);
                resetGame();
              }}
            />
          </HStack>
          {claimError && (
            <VStack mt="20px">
              <Text>There was an error claiming on appchain:</Text>
              <Text color="red">{claimError?.message}</Text>
            </VStack>
          )}
        </Overlay>
        <VStack
          h={["auto", "auto", "100%"]}
          justify={["none", "none", "center"]}
        >
          <Text>The next number is...</Text>
          <Text
            textStyle="h-lg"
            textShadow="2px 2px 0 rgba(0, 0, 0, 0.25)"
            lineHeight="100px"
          >
            {isOver || !isOwner ? (
              nextNumber
            ) : (
              <NextNumber number={nextNumber!} />
            )}
          </Text>
          <VStack gap="40px">
            <Grid
              templateRows="repeat(5, 1fr)"
              autoFlow="column"
              gapX="60px"
              gapY="20px"
            >
              {slots.map((number, index) => {
                return (
                  <Slot
                    key={index}
                    index={index}
                    number={number}
                    nextNumber={nextNumber}
                    isOwner={isOwner}
                    disable={isLoading}
                    onClick={(slot) => setSlot(slot)}
                  />
                );
              })}
            </Grid>
            <HStack w="full">
              <VStack layerStyle="transparent" flex="1" align="flex-start">
                <Text color="purple.50">Remaining Slots</Text>
                <Text>{remaining}</Text>
              </VStack>
              <VStack layerStyle="transparent" flex="1" align="flex-start">
                <Text color="purple.50">Rewards Earned</Text>
                <Text>{reward}</Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </>
  );
};

export default Game;
