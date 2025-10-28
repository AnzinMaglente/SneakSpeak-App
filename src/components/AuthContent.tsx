import { Link } from "react-router-dom";

function AuthContent() {
  return (
    <main className="relative h-180 flex-column justify-items-center bg-gradient-to-b from-white-2 from-1% via-secondary">
      <div className="absolute inset-0 m-auto h-90 w-180">
        <h2 className="text-center text-2xl my-5">Sign up for SneakSpeak</h2>
        <div className="grid grid-cols-[336px_30px_336px] grid-flow-col gap-2">
          <div className="flex flex-col justify-center">
            <label className="flex py-2 px-2">Email Address</label>
            <input
              className="flex p-2 mb-4"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
            />
            <label className="flex py-2">Password</label>
            <input
              className="flex p-2 mb-4"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter your password here"
            />
            <button className="flex py-2 mx-10 text-center justify-center items-center bg-grey-1 text-white-text">
              <Link to="/admin">Login</Link>
            </button>
          </div>

          <div className="place-self-center">
            <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-grey-1" />
          </div>

          <div className="flex flex-col justify-center">
            <button className="flex px-4 py-2 my-4 items-center bg-grey-2 w-60">
              <img
                src="src\assets\google icon.svg"
                alt="Google Logo"
                className="h-5 w-auto pe-5"
              ></img>
              Sign in with Google
            </button>
            <button className="flex px-4 py-2 my-4 items-center bg-grey-2 w-60">
              <img
                src="src\assets\apple icon.svg"
                alt="Google Logo"
                className="h-5 w-auto pe-5"
              ></img>
              Sign in with Apple
            </button>
            <button className="flex px-4 py-2 my-4 items-center bg-grey-2 w-60">
              <img
                src="src\assets\facebook icon.svg"
                alt="Google Logo"
                className="h-5 w-auto pe-5"
              ></img>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthContent;
