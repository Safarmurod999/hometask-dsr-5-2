import localStorage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: localStorage,
  blacklist: [],
  whiteList: [],
};

export default rootPersistConfig;
