import { wrapper } from "@/redux/store";
import { loadUserData } from "@/redux/user/userActions";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useStore } from "react-redux";

function App({ Component, pageProps }) {
  const store = useStore();

  useEffect(() => {
    loadUserData(store);
  }, []);

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
