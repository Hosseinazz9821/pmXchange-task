import  { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sell from "./Components/Sell";
import Buy from "./Components/Buy";
import Exchange from "./Components/Exchange";

export type PageState = "خرید" | "فروش" | "مبادله";

function App() {
  const [page, setPage] = useState<PageState>("خرید");
  return (
    <div className="Pmxchange_content_container">
      <div className="Pmxchange_content">
        <Header page={page} setPage={setPage} />
        {
          page === "خرید" ? (
            <Buy/>
          ) : page === "فروش" ? (
            <Sell/>
          ) : (
            <Exchange></Exchange>
          )
        }
      </div>
    </div>
  );
}

export default App;
