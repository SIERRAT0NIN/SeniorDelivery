import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex mx-auto justify-center">
      <form className="p-10 bg-slate-500 rounded-2xl text-black">
        <label className="pr-5" htmlFor="email">
          Email:
        </label>
        <input
          className="rounded-xl"
          id="email"
          name="email"
          type="email"
          required
        />
        <label className="pl-5 pr-5" htmlFor="password">
          Password:
        </label>
        <input
          className="rounded-xl"
          id="password"
          name="password"
          type="password"
          required
        />
        <br />
        <div className="flex justify-between pt-5">
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </div>
      </form>
    </div>
  );
}
