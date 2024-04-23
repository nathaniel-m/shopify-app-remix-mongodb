import { redirect } from "@remix-run/node";

import Tailwind from "../tailwind.css?url";
import Navbar from "../components/navbar";
import AuthForm from "../components/authForm";
import { login } from "../lib/shopify.server";

import { loginErrorMessage } from "../error.server";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }
  return null;
};

export const action = async ({ request }) => {
  const errors = loginErrorMessage(await login(request));
  console.log("errors", errors);
};

export function links() {
  return [{ rel: "stylesheet", href: Tailwind }];
}

export const meta = () => {
  return [
    { title: "Remix - Mongo" },
    { name: "description", content: "Remix - Mongo!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-50 dark:bg-black min-h-screen lg:bg-hero-lt bg-no-repeat bg-cover lg:dark:bg-hero-dk">
      <Navbar />
      <div className="">
        <div className="text-700 dark:text-800 mt-36 text-5xl font-bold flex justify-center ">
          Increase Sales and Confidence
        </div>
        <div className="text-950 dark:text-50 mt-4 text-4xl font-bold flex justify-center ">
          with Secure Payment Badges
        </div>
      </div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <AuthForm />
      </div>
    </div>
  );
}
