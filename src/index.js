import PropTypes from 'prop-types';
import Thunk from 'redux-thunk';
import { composeWithDevTools as ComposeWithDevTools } from 'redux-devtools-extension';
import {
    createStore as CreateStore,
    combineReducers as CombineReducers,
    applyMiddleware as ApplyMiddleware,
} from 'redux';

export { Provider, connect as Connect } from 'react-redux';

/**
 * Store creator.
 * Shorthand for Redux's CreateStore.
 *
 * @param {Object|Function} reducers - Either a reducer or an object containing reducers.
 * @param {Object} initStore - The initial value of the store.
 * @param {Array}  middleware - An array of middlewares to register.
 * @returns {ReduxStore} - The store to pass to the provider.
 */
export function Store(reducers, initStore, middleware = []) {

    const reduxmiddleware = ApplyMiddleware(...middleware.concat(Thunk));

    const root = typeof reducers === 'function' ? reducers : CombineReducers(reducers);

    return CreateStore(
        root,
        initStore,
        ComposeWithDevTools({})(reduxmiddleware),
    );
}

/**
 * Actions and Reducers factory.
 * Shorthand for reducing boilerplate needed to cerate reducers and actions.
 *
 * @param {Object} initState - The initial state for the reducer.
 * @param {Object} declarations - An object contaning an action and a reducer.
 * @param {string} prefix - An optional prefix for the actions/reducers.
 * @returns {Object} - A { Actions, Reducers } object.
 */
export function Factory(initState, declarations, prefix) {

    PropTypes.checkPropTypes(
        {
            initState: PropTypes.any.isRequired,
            declarations: PropTypes.objectOf(PropTypes.shape({
                action: PropTypes.func.isRequired,
                reducer: PropTypes.func.isRequired,
            })),
            prefix: PropTypes.string,
        },
        { initState, declarations, prefix },
        'arguments',
        'FactoryRedux',
    );
    const keys = Object.keys(declarations);
    const prefixer = value => prefix ? `${prefix}/${value}` : value;
    return {

        Actions: keys.reduce((acc, key) => {
            const type = prefixer(key);
            const fabricatedAction = declarations[key].action.bind(null, type);
            return { ...acc, [key]: fabricatedAction };
        }, {}),

        Reducers: function fabricatedReducers(prevState = initState, { type, payload }) {
            const match = keys
                .map(key => ({ key: prefixer(key), reducer: declarations[key].reducer }))
                .filter(({ key }) => key === type);
            // No matching declaration found, this is most likely @@INIT, return state.
            if (!match.length) return prevState;
            return match[0].reducer(prevState, payload);
        },
    };
}
