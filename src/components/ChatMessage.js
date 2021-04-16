import React from "react";

const ChatMessage = ({ message, userUid }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === userUid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt=""
      />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
