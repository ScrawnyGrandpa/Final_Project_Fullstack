import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";

export default function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}
