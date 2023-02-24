import { Flex, Heading, Link, Box } from "@chakra-ui/layout";
import React, { FC, memo, useCallback } from "react";

import { useDisclosure } from "@chakra-ui/hooks";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    onClose();
    navigate("/home");
  }, [onClose, navigate]);
  const onClickUserManagement = useCallback(() => {
    onClose();
    navigate("/home/user_management");
  }, [onClose, navigate]);
  const onClickSetting = useCallback(() => {
    onClose();
    navigate("/home/setting");
  }, [onClose, navigate]);
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" justify="space-between">
        <Flex
          as="a"
          align="center"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Heading
            onClick={onClickHome}
            as="h1"
            fontSize={{
              base: "md",
              md: "lg",
            }}
            padding={{
              base: 3,
              md: 5,
            }}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
