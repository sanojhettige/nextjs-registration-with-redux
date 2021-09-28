import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import { securityMiddleware } from '../lib/security';
import rootReducer from "./rootReducer"

// configure store
const middleware = [thunk, securityMiddleware]
const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
const store = createWrapper(makeStore)

export default store;
