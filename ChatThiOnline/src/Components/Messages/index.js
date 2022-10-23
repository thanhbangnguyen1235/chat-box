import React from "react";
import OwnerMessage from "./OwnerMessage";
import UserMessage from "./UserMessage";

export default function Message(props) {
  const { message, mssv } = props;
  console.log(props);
  return (
    <>
      {message.nguoidung === Number(mssv) ? (
        <OwnerMessage message={message} />
      ) : (
        <UserMessage message={message} />
      )}
    </>
  );
}
