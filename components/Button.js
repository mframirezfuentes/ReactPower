import React from "react";

export const MyButton = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="">{name}</button>
    </div>
  );
};
