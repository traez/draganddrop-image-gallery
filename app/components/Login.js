/*
the 
*/
export default function Login() {
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password: 1Password"
              />
            </div>
            <div className="form-group">
              <button type="button" className="btn-login">
                Login
              </button>
            </div>
            <div className="form-group error-message">
              kindly use given username and password
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
