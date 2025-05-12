import ThemeSwitcher from "./ThemeSwitcher";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const AdminNavbar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className={`admin-navbar ${toggleSidebar ? "navbar-toggle" : ""}`}>
      <div
        className="cursor-pointer admin-toggle"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        {
          !toggleSidebar ? <FaArrowLeft /> : <FaArrowRight />
        }
      </div>
      <div className="admin-navbar--right">
        <div className="admin-navbar--theme">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
