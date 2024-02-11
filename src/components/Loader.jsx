import React from "react";
import { Loader, Placeholder } from "rsuite";
const Loading = () => {
  return (
    <div>
      <Loader backdrop className="load" content="loading..." vertical />
    </div>
  );
};

export default Loading;
