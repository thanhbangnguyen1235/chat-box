import React from "react";

export default function UserMessage({ message }) {
  return (
    <>
      {message.noidung ? (
        <div className="d-flex flex-row justify-content-start mb-4">
          <img src={message.noidung} alt="avatar 1" />
          <div className="p-3 ms-3 border">
            <p className="small mb-0">{message.noidung}</p>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src={message.noidung}
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div className="ms-3" style={{ borderRadius: "15px" }}>
            <div className="bg-image">
              <img src={message.noidung} style={{ borderRadius: "15px" }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
