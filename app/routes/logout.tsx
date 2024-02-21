import { LoaderFunction, redirect } from "@remix-run/node";

import { session } from "~/libs/auth";

export const loader: LoaderFunction = async () => {
  return redirect("/", {
    headers: {
      "Set-Cookie": await session().serialize("", {
        expires: new Date(0),
      }),
    },
  });
};
