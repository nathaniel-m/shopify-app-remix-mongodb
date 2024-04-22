import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { login } from "../lib/shopify.server";
import tailwind from "../tailwind.css?url"

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return json({ showForm: Boolean(login) });
};

export function links() {
  return [{ rel: 'stylesheet', href: tailwind }]
}

export const meta = () => {
  return [
    { title: "Remix - Mongo" },
    { name: "description", content: "Remix - Mongo!" },
  ];
};

export default function Index() {
  return (
    <div className="">
    <div className="">
      <h1 className="">A short heading about [your app]</h1>
      <p className="">
        A tagline about [your app] that describes your value proposition.
      </p>
      
        <Form className="" method="post" action="/auth/login">
          <label className="">
            <span>Shop domain</span>
            <input className="" type="text" name="shop" />
            <span>e.g: my-shop-domain.myshopify.com</span>
          </label>
          <button className="" type="submit">
            Log in
          </button>
        </Form>
      
      <ul className="">
        <li>
          <strong>Product feature</strong>. Some detail about your feature and
          its benefit to your customer.
        </li>
        <li>
          <strong>Product feature</strong>. Some detail about your feature and
          its benefit to your customer.
        </li>
        <li>
          <strong>Product feature</strong>. Some detail about your feature and
          its benefit to your customer.
        </li>
      </ul>
    </div>
  </div>
  );
}
