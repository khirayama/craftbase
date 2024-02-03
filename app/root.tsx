import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { init as initI18n } from "~/libs/Provider";
import { Provider } from "~/libs/Provider";
import stylesheet from "~/tailwind.css";

initI18n();

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
      <Provider>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Provider>
      </body>
    </html>
  );
}
