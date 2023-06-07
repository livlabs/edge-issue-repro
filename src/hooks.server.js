import Iron from "@hapi/iron";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve, cookie }) {
  //Get Cookie

  const password = "some_not_random_password_that_is_at_least_32_characters";

  const obj = {
    username: "JohnDoe",
    role: "admin",
  };

  const sealed = await Iron.seal(obj, password, Iron.defaults);

  //Decrypt Cookie
  const unsealed = await Iron.unseal(
    decodeURIComponent(encodeURIComponent(sealed)),
    password,
    Iron.defaults
  );
  console.log(`Decrypted cookie: ${JSON.stringify(unsealed)}`);

  const response = await resolve(event);
  return response;
}
