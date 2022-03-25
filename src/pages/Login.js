import "./Login.css";

const Login = () => {
  return (
    <div>
      <form className="form-signin" action="/newItem">
        <img
          className="mb-4"
          src="optimizedsoftechlogo.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit" >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
