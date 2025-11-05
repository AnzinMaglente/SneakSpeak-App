import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="mx-30 flex items-center justify-between p-6 lg:px-8 bg-color-primary test">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex -m-1.5 p-1.5">
            <img
              src="src\assets\react.svg"
              alt="Logo"
              className="h-8 w-auto"
            ></img>
            <h1 className="text-2xl ml-5">SneakSpeak</h1>
          </div>
        </Link>
        <Link to="/auth">
          <button>Sign in</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
