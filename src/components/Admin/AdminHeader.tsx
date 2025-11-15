import { Link } from "react-router-dom";

import { InfoOutline, Notifications, AccountCircle } from "@mui/icons-material";

function AdminHeader() {
  return (
    <nav className="mx-30 flex items-center justify-between p-6 lg:px-8 bg-color-primary test">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin">
          <div className="flex -m-1.5 p-1.5">
            <img
              src="src\assets\Sample Logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            ></img>
            <h1 className="text-2xl ml-5">SneakSpeak</h1>
          </div>
        </Link>
        <div>
          <button className="w-10 h-10 mx-5">
            <InfoOutline fontSize="large" />
          </button>
          <button className="w-10 h-10 mx-5">
            <Notifications fontSize="large" />
          </button>
          <Link to={"/profile"}>
            <button className="w-10 h-10 mx-5">
              <AccountCircle fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
