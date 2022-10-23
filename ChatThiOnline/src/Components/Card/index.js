import { prettyDOM } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import { TEXT_TEXTAREA } from "../../Constants";

import HeaderBox from "../Header";
import Message from "../Messages";
import TextArea from "../TextBox";

export default function Card(props) {
  const [page, setPage] = useState(1);
  const [listMessage, setListMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isActive = false;

    // my api just has 4 pages 1->4
    if (page < 5) {
      console.log("vo");
      axios
        .get(`http://localhost:5000/${props.params.boxNumber}`)
        .then((data) => {
          console.log(data);
          if (!isActive) {
            //if in the fisrt load message
            if (page == 1) {
              setListMessage(data.data.message);
            }
            // if not so add the list messages into list
            else {
              data.data.message.map((element) => {
                setListMessage((listMessage) => [element, ...listMessage]);
              });
            }
          }
        });
    }
    return () => {
      isActive = true;
    };
  }, [page]);

  const listInnerRef = useRef();
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop === 0) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        setPage((page) => page + 1);
      }
    }
  };

  const bottom = useRef(null);
  const scrollToBottomBox = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const { scrollTop } = listInnerRef.current;
    if (scrollTop == 0) {
      scrollToBottomBox();
    }
  }, [listMessage]);

  console.log(listMessage);

  return (
    <div className="card" id="chat1">
      <HeaderBox />
      {isLoading ? <span>Loading...</span> : null}
      <div className="card-body" onScroll={() => onScroll()} ref={listInnerRef}>
        {listMessage.map((element) => {
          return <Message key={element.uid} message={element}></Message>;
        })}
        <div ref={bottom}></div>
        <TextArea label={TEXT_TEXTAREA} />
      </div>
    </div>
  );
}
