
import { Button, PageHeader } from "antd";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TodoProvider from "./sample-context/ProviderContext";
import SampleContext from "./sample-context/SampleContext";
import SampleState from "./sample-state/SampleState";

function App() {
  const titleArray = useMemo(() => ['state', 'context', 'redux', 'redux-toolkit', 'mobx'], []);
  const [pageIndex, setPageIndex] = useState(0);
  const [title, setTitle] = useState(titleArray[0]);
  useEffect(() => {
    setTitle(titleArray[pageIndex]);
  }, [pageIndex, titleArray])


  return (
    <BrowserRouter >
      <PageHeader
        title={<h1>{title}</h1>}
        extra={titleArray.map((text, i) => <Link to={`/${text}`}><Button onClick={() => setPageIndex(i)} style={window.location.pathname.includes(text)  ? { background: 'blue' } : {}} type='primary' >{text}</Button></Link>)} />
      <Routes >
        <Route path="state" element={<SampleState />}/>
      
        <Route  path="context/*" element={<TodoProvider><SampleContext /></TodoProvider>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
