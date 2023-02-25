import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";

import { useDisclosure } from "@chakra-ui/react";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  useEffect(() => getUsers(), [getUsers]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [onOpen, onSelectUser, users]
  );
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap
          p={{
            base: 4,
            md: 10,
          }}
        >
          {users.map((user) => (
            <WrapItem
              key={user.id}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <UserCard
                onClick={onClickUser}
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
