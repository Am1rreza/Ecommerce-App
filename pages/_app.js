import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}

export default wrapper.withRedux(App);
