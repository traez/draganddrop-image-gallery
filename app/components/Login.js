/*
The essence of the Login component you provided is to provide a way for users to log in to the application. It does this by rendering a form with fields for the user's email and password. When the user submits the form, the handleSignIn function is called, which attempts to log the user in. If the login is successful, the user is redirected to the home page. Otherwise, an error message is displayed.
*/
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    errorM,
    postEmail,
    setPostEmail,
    responseMessage,
    handleSubmit,
  } = useContext(StateContext);

  return (
    <section className="section-login">
      <div className="container">
        <div className="header">Kindly Login to access App</div>
        <div className="main-section">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="UserName : user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password: 1Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn-login"
                onClick={handleSignIn}
              >
                Login
              </button>
            </div>
            <div className="form-group error-message">{errorM}</div>
          </form>
        </div>
      </div>

      <div className="post-div">
        <h4>Can&#39;t login? HTTP Post Request method to the rescue!</h4>
        <input
          type="text"
          id="emailx"
          className="post-input"
          placeholder="Type in your email address"
          value={postEmail}
          onChange={(e) => setPostEmail(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <div id="results">
          <p>{responseMessage}</p>
        </div>
      </div>
    </section>
  );
}
