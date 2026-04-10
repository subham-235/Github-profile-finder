import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
// https://api.github.com/users?since=${ran}&per_page=${count}

function GithubProfile() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile />);
