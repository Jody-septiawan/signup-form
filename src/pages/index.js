import TextField from "@/components/TextField";
import { useSignUp } from "@/hooks/useSignUp";

export default function Home() {
  const { checkError, errors, onChange, onSubmit } = useSignUp();

  return (
    <main className="flex justify-center  items-center h-screen  px-10">
      <section className="max-w-[30rem] w-full border-4 p-4 rounded-xl">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <form className="flex flex-col gap-y-5 mt-4">
          <TextField
            type="text"
            label="Username"
            name="username"
            onChange={onChange}
            error={checkError(errors, "username")}
          />
          <TextField
            type="text"
            label="Email"
            name="email"
            onChange={onChange}
            error={checkError(errors, "email")}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            onChange={onChange}
            error={checkError(errors, "password")}
          />
          <button
            type="button"
            onClick={onSubmit}
            className="bg-green-600 text-white rounded-lg py-2"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}
