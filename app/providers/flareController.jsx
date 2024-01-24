import { MouseProvider } from "./mouseContext";

function FlareController({ children }) {
  return (
    <>
      <MouseProvider>{children}</MouseProvider>
    </>
  );
}

export default FlareController;
