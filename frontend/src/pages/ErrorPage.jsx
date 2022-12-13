import { useRouteError } from "react-router-dom";

import ContentCSS from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={ContentCSS.hero}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}