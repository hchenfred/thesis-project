import * as CounterActions from './counter';
import * as UserActions from './user';
import * as EventActions from './event';

export const ActionCreators = Object.assign({}, CounterActions, UserActions, EventActions);
