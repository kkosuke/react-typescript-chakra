import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import React, { FC, memo } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      onClick={() => onClick(id)}
      w="260px"
      h="260px"
      bg="white"
      borderRadius={10}
      shadow="md"
      padding={4}
      _hover={{
        cursor: "pointer",
        opacity: 0.7,
      }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize={160}
          src={imageUrl}
          alt=""
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
