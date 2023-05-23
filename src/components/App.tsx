import { Header } from "./Header";
import { FormData } from "./FormData";
import { FormAccess } from "./FormAccess";

export function App() {
  return (
    <>
      <Header>
        <FormData></FormData>
      </Header>
      <FormAccess></FormAccess>
    </>
  );
}
