import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
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
