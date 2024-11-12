import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Layout from "./components/layout/Layout";
import PageUIProvider from "./providers/PageUIProvider";
import AuthenticationProvider from "./providers/AuthenticationProvider";

export default function App() {

  return (
    <BrowserRouter>
      <PageUIProvider>
        <AuthenticationProvider>
          <Layout>
            <Router />
          </Layout>
        </AuthenticationProvider>
      </PageUIProvider>
    </BrowserRouter>
  )
}
