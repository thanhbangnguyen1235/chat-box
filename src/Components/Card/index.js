import React from "react";
import Message from "../Messages";
export default function Card() {
  var listMessage = [
    {
      id: 1,
      content: "Nguyen thanh bang",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: true,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 2,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: true,
      isText: true,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 3,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: true,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 4,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: false,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 4,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: false,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 4,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: false,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 4,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: false,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
    {
      id: 4,
      content: "sdfsdfs",
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      isOwner: false,
      isText: false,
      video:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
    },
  ];

  return (
    <div className="card" id="chat1">
      <div className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0">
        <i className="fas fa-angle-left"></i>
        <p className="mb-0 fw-bold">Live chat</p>
        <i className="fas fa-times"></i>
      </div>
      <div className="card-body">
        {listMessage.map((element) => {
          return <Message key={element.id} message={element}></Message>;
        })}

        <div className="form-outline">
          <textarea
            className="form-control"
            id="textAreaExample"
            rows="4"
          ></textarea>
          <label className="form-label" htmlFor="textAreaExample">
            Type your message
          </label>
        </div>
      </div>
    </div>
  );
}
