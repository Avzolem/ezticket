import "@/styles/globals.css";
import AuthContextProvider from "@/components/AuthProvider";

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}
