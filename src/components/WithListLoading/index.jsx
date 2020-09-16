import React from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div>
        <p>Hold on, fetching data may take some time :)</p>
        <AiOutlineLoading3Quarters />
      </div>
    );
  };
}

export default WithListLoading;
