import AuthProvider from "@/context/AuthContext";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </AuthProvider>
  );
}

export default wrapper.withRedux(App);
