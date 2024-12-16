import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Layout from "./components/layout/Layout";
import PageUIProvider from "./providers/PageUIProvider";
import AuthenticationProvider from "./providers/AuthenticationProvider";
import { ModelProvider } from "../../backups/ModelProvider";

export default function App() {

  return (
    <BrowserRouter>
      <PageUIProvider>
        <AuthenticationProvider>
          <ModelProvider>
            <Layout>
              <Router />
            </Layout>
          </ModelProvider>
        </AuthenticationProvider>
      </PageUIProvider>
    </BrowserRouter>
  )
}
