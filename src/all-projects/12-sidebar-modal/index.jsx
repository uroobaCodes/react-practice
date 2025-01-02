import styles from "./sidebar.module.css";
import Modal from "./Modal";
import SideBar from "./SideBar";
import Home from "./Home";
import AppProvider from "./context";

const SidebarParent = () => {
  return (
    <AppProvider>
      <div>
        <Home />
        <Modal />
        <SideBar />
      </div>
    </AppProvider>
  );
};

export default SidebarParent;
