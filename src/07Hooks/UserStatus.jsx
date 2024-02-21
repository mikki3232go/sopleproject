import React, { useState, useEffect } from "react";
function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () =>
      //return 시 언마운트 되는 경우와 같이 실행됨
      {
        ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
      };
  });
  if (isOnline === null) {
    return "wating...";
    return isOnline ? "online" : "offline";
  }
}
