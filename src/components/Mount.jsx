import React from "react";
import { useMount, useUnmount, useToggle } from "../hooks";

const Mount = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <UnMount />}
    </div>
  );
};

const UnMount = () => {
  useMount(() => {
    console.log("Mounted");
  });
  useUnmount(() => {
    console.log("Unmounted");
  });
  return <div>UnMount Me</div>;
};

export default Mount;
