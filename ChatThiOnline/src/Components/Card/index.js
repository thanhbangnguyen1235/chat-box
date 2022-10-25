import React, { useEffect, useRef, useState } from "react";

import HeaderBox from "../Header";
import Message from "../Messages";
import TextArea from "../TextBox";
import { socket } from "../../utils/socket-util";
import { DOMAIN_BACKEND, TEXT_TEXTAREA } from "../../Constants";

export default function Card(props) {
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const listInnerRef = useRef();

  // load more message if scroll to top
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop === 0) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        props.setPage((page) => page + 1);
      }
    }
  };

  const bottom = useRef(null);

  // scroll to bottom
  const scrollToBottomBox = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  // auto scroll to bottom if list message is changed
  useEffect(() => {
    const { scrollTop } = listInnerRef.current;
    if (scrollTop == 0) {
      scrollToBottomBox();
    }
  }, [props.listMessage]);

  const socketClient = socket.initial(DOMAIN_BACKEND);
  socket.listen(socketClient, setMessage, Number(props.params.boxNumber));

  // inital list message
  useEffect(() => {
    if (message) {
      const temp = props.listMessage;
      temp.push(message);
      props.setListMessage(temp);
      setMessage(undefined);
    }
  }, [message]);

  return (
    <div className="card" id="chat1">
      <HeaderBox />
      {isLoading ? <span>Loading...</span> : null}
      <div className="card-body" onScroll={() => onScroll()} ref={listInnerRef}>
        {props.listMessage.map((element) => {
          return (
            <Message
              key={element.uid}
              message={element}
              mssv={props.params.mssv}
              box={props.params.boxNumber}
            />
          );
        })}
        <div ref={bottom}></div>
        <TextArea
          label={TEXT_TEXTAREA}
          mssv={props.params.mssv}
          box={props.params.boxNumber}
          socket={socketClient}
        />
      </div>
    </div>
  );
}
