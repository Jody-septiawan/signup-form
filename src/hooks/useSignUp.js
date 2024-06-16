import { useState } from "react";
import { z } from "zod";

export function useSignUp() {
  const [errors, setErrors] = useState([]);
  // Data form
  const [form, setForm] = useState({
    username: null,
    email: null,
    password: null,
  });

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Schema Zod
  const signUpSchema = z.object({
    username: z.string({
      required_error: "Username kamu tidak boleh kosong ya...",
      invalid_type_error: "Type data salah",
    }),
    email: z.string().email("Format Email kamu salah ya..."),
    password: z.string().min(4, "Minimal 4 karakter yaa ...."),
  });

  const checkError = (errors, name) => {
    return errors.find((data) => {
      return data.path[0] == name;
    });
  };

  // Parse Validation
  const onSubmit = () => {
    try {
      signUpSchema.parse(form);

      console.log(form);
    } catch (error) {
      setErrors(error.errors);
    }
  };

  return { onSubmit, checkError, onChange, errors };
}
