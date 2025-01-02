import sublinks from "./data";
import { useState, useContext, createContext } from "react";

const StripeAppContext = createContext();

const useStripeAppContext = () => {
  return useContext(StripeAppContext);
};

const StripeAppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubmenu = (page, coordinates) => {
    const pageInSublinks = sublinks.find((link) => {
      return link.page === page;
    });
    // console.log(pageInSublinks);

    setPage(pageInSublinks);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <StripeAppContext.Provider
      value={{
        isSubmenuOpen,
        isSideBarOpen,
        openSubmenu,
        openSideBar,
        closeSubmenu,
        closeSideBar,
        location,
        page,
      }}
    >
      {children}
    </StripeAppContext.Provider>
  );
};

export { useStripeAppContext };
export default StripeAppProvider;
