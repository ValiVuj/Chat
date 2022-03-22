import React, { useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

import { app } from "../firebase/firebase";
import LogIn from "../LogIn/LogIn";
import { useAuth } from "../contexts/AuthContext";


const Chat = () => {
  const { user } = useAuth();
  const handleLogOut = () => {
    app.signOut();
    return <LogIn />;
  };
  const catchFile = async (url) => {
    const response = await fetch(url);
    const data_response = await response.blob();

    return new File([data_response], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user || user === null) {
      return <LogIn />;
    }
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "d64735b1-468f-4cac-a263-307d526788ff",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .catch(() => {
        let dataform = new FormData();
        dataform.append("email", user.email);
        dataform.append("username", user.email);
        dataform.append("secret", user.uid);

        catchFile(user.photoURL).then((image) => {
          dataform.append("image", image, image.name);
          axios
            .post("https://api.chatengine.io/users/", dataform, {
              headers: {
                "private-key": "58d7ebc7-83e3-4f6b-a58e-aa98c1c89e66",
              },
            })
            .catch((error) => console.log("Try again, you failed"));
        });
      });
  }, [user]);

  return (
    <div>
      <ChatEngine
        projectID="d64735b1-468f-4cac-a263-307d526788ff"
        userName={user.email}
        userSecret={user.uid}
      />
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Chat;
