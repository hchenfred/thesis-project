import * as CounterActions from './counter';
import * as UserActions from './user';
import * as EventActions from './event';
import * as ActiveEventActions from './activeEvent';
import * as SuggestionActions from './suggestion';

export const ActionCreators = Object.assign({}, CounterActions, UserActions, EventActions,
SuggestionActions, ActiveEventActions);
