import { IconContext } from "react-icons";

const IconContexts = ({ className, children }) => {
  return (
    <IconContext.Provider value={{ className }}>
      {children}
    </IconContext.Provider>
  );
};

export default IconContexts;
