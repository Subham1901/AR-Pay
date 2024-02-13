import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import moment from "moment";
import { onAuthStateChanged } from "firebase/auth";

const Brand = () => {
  const [lastLoginTime, setLastLoginTime] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLastLoginTime(auth?.currentUser?.metadata?.lastSignInTime);
      }
    });
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <h1>
          AR <span className="paylogo">Pay</span>
        </h1>
      </div>
      {lastLoginTime && (
        <Box sx={{ mr: 4 }}>Last login: {moment(lastLoginTime).fromNow()}</Box>
      )}
    </Box>
  );
};

export default Brand;
