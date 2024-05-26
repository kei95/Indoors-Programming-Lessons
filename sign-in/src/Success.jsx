import { useSearchParams } from "react-router-dom";

export function Success() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  return (
    <>
      <h1>Success:</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </>
  );
}
