import React from "react";

export default function OwnerMessage({ message }) {
  return (
    <>
      <div className="d-flex flex-row justify-content-end mb-4">
        <div className="p-3 me-3 border">
          <div dangerouslySetInnerHTML={{ __html: message.noidung }} />
        </div>
        <img src={message.noidung} alt="avatar 1" />
      </div>
    </>
  );
}
