import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import React, { ChangeEvent, FC, memo, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();
  const onClickLogin = () => {
    login(userId);
  };
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" padding={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my="4" />
        <Stack spacing={6} px="10">
          <Input
            placeholder="ユーザーID（1〜10）"
            value={userId}
            onChange={(e) => onChangeUserId(e)}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
