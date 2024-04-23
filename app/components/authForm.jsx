import { Form } from "@remix-run/react";
import tailwind from "../tailwind.css?url";

export function links() {
  return [{ rel: "stylesheet", href: tailwind }];
}

export default function AuthForm() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form className="space-y-6" method="post" id="auth-form">
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-100"
          >
            Shop domain
          </label>
          <div className="mt-2">
            <input
              id="shop"
              name="shop"
              type="text"
              placeholder="my-shop-domain.myshopify.com"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-600"
          >
            Sign in
          </button>
        </div>
      </Form>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-900 dark:text-gray-400">
          or get the app
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div>
        <a
          href="https://apps.shopify.com/search?q=badges"
          className="flex w-full justify-center rounded-md px-3 py-1.5 bg-transparent outline outline-2 outline-600 shadow-sm text-950 dark:text-white hover:bg-500 focus:ring-4 font-medium text-sm dark:hover:bg-500 focus:outline-none "
        >
          Shopify
        </a>
      </div>
    </div>
  );
}
