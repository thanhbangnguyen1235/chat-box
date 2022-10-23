import React from "react";

export default function OwnerMessage({ message }) {
  return (
    <>
      {message.noidung ? (
        <div className="d-flex flex-row justify-content-end mb-4">
          <div className="p-3 me-3 border">
            <p className="small mb-0">{message.noidung}</p>
          </div>
          <img src={message.noidung} alt="avatar 1" />
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-end mb-4">
          <div className="me-3" style={{ borderRadius: "15px" }}>
            <div className="bg-image">
              <img src={message.noidung} style={{ borderRadius: "15px" }} />
            </div>
          </div>
          <img
            src={message.noidung}
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
        </div>
      )}
    </>
  );
}
