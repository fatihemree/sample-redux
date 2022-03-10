
import { Button, PageHeader } from "antd";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TodoProvider from "./sample-context/ProviderContext";
import SampleContext from "./sample-context/SampleContext";
import ProviderReduxToolkit from "./sample-redux-toolkit/ProviderReduxToolkit";
import SampleReduxToolkit from "./sample-redux-toolkit/SampleReduxToolkit";
import ProviderRedux from "./sample-redux/ProviderRedux";
import SampleRedux from "./sample-redux/SampleRedux";
import SampleState from "./sample-state/SampleState";

function App() {
  const titleArray = useMemo(() => ['state', 'context', 'redux', 'r-toolkit', 'mobx'], []);
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
        <Route  path="redux/*" element={<ProviderRedux><SampleRedux /></ProviderRedux>}/>
        <Route  path="r-toolkit/*" element={<ProviderReduxToolkit><SampleReduxToolkit/></ProviderReduxToolkit>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
