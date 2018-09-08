import { applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from './logger';

export default applyMiddleware(reduxImmutableStateInvariant(), logger);