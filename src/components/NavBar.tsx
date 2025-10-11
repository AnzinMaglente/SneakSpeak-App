function NavBar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-color-primary">
      {/*navbar navbar-expand-lg sticky-top bg-body-tertiary*/}
      <div className="container mx-auto flex justify-between items-center">
        <a className="flex -m-1.5 p-1.5">
          <img
            src="src\assets\react.svg"
            alt="Logo"
            className="h-8 w-auto"
          ></img>
          <h1 className="text-2xl">SneakSpeak</h1>
        </a>
        <button className="btn btn-primary justify-content-end">Sign in</button>
      </div>
    </nav>
  );
}
export default NavBar;
