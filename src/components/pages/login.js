export default function Login() {
  return (
    <>
      <form className="login">
        <label>
          Email
          <input className="inputContact" type="email" name="email" required />
        </label>
        <label>
          Password
          <input
            className="inputContact"
            type="password"
            name="password"
            required
          />
        </label>
        <button className="buttonAdd" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
