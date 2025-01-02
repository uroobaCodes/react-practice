import NavBar from "./NavBar";
import Hero from "./Hero";
import SideBar from "./SideBar";
import SubMenu from "./SubMenus";
import StripeAppProvider from "./context";
import styles from "./stripe.module.css";

const StripeParent = () => {
  return (
    <StripeAppProvider>
      <div>
        <NavBar />
        <SideBar />
        <Hero />
        <SubMenu />
      </div>
    </StripeAppProvider>
  );
};

export default StripeParent;
