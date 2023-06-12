import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./login.css?inline";
import { Form, routeAction$, zod$, z } from "@builder.io/qwik-city";

export const useLoginUserAction = routeAction$((data, { cookie, redirect }) => {
  const { email, password } = data;
  const token = "esto_es_mi_token";

  if (email === "test@test.com" && password === "1234567") {
    cookie.set("jwt", token, { secure: true, path: "/", sameSite: "none" });

    redirect(302, "/dashboard");
  }

  console.log(email, password);
  return {
    success: false,
  };
}, zod$({
  email: z.string().email('Formato no valído'),
  password: z.string().min(6, 'Minímo 6 letras')
}));

export default component$(() => {
  useStylesScoped$(styles);

  const action = useLoginUserAction();

  return (
    <Form action={action} class="login-form">
      <div class="relative">
        <input name="email" type="text" placeholder="Email address" />
        <label for="email">Email Address</label>
      </div>
      <div class="relative">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <label for="password">Password</label>
      </div>
      <div class="relative">
        <button type="submit">Ingresar</button>
      </div>
      {/* <p>
        {action.value?.success && (
          <code>Autenticado: Token {action.value?.jwt}</code>
        )}
      </p> */}

      <code>{JSON.stringify(action.value, undefined, 2)}</code>
    </Form>
  );
});
