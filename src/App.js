import React from "react";
import { useDispatch } from "react-redux";

import { getShowInfos, getEpisodesList } from "./store/actions/tvShowAction";

import Routes from "./views/Routes";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getShowInfos());
    dispatch(getEpisodesList());
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
