import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

// read notes on naming conventions

// const AppUseContext = () => {
//   return useContext(AppContext);
// };

const useAppContext = () => {
  return useContext(AppContext);
};

// value uses object shorthand syntax, that is why we are using two curlies, the inside one
// is for an object and the outside one indicates we are going to use javascript in JSX
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export { AppUseContext };
export { useAppContext };
export default AppProvider;
