import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="items-center flex justify-center flex-col min-h-svh">
      <h1 className="text-yellow-400 text-center font-extrabold text-4xl italic">Oops!</h1>
      <p className="text-center my-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink to='/' class="text-green-500 bg-white rounded-lg px-5 py-2 border border-green-500 font-bold italic m-8">Back Home</NavLink>
    </div>
  );
}