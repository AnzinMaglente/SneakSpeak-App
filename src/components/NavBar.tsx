function NavBar() {
  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/*navbar navbar-expand-lg sticky-top bg-body-tertiary*/}
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5">
            <img
              src="src\assets\react.svg"
              alt="Logo"
              className="h-8 w-auto"
            ></img>
            <span className="sr-only">SneakSpeak</span>
          </a>
          <button className="btn btn-primary justify-content-end">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
