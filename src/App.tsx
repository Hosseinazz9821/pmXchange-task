import  { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

export type PageState = "خرید" | "فروش" | "مبادله";

function App() {
  const [page, setPage] = useState<PageState>("خرید");
  return (
    <div className="Pmxchange_content_container">
      <div className="Pmxchange_content">
        <Header page={page} setPage={setPage} />
        {
          page === "خرید" ? (
            <></>
          ) : page === "فروش" ? (
            <></>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  );
}

export default App;
