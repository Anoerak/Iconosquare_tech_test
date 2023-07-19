import React, { useContext, useReducer, createContext } from 'react';
import { createRandomEvent } from '../utils';

const LiveChartContext = createContext();

const initialEvents = Array.from(Array(50)).map((_, ix) => createRandomEvent(ix));

const initialData = {
    events: initialEvents
}

const liveChartReducer = (state, action) => {
    switch (action.type) {
        case 'new_event':
			return {
				events: [...state.events, action.payload]
			}
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const LiveChartProvider = ({ children }) => {
    const [data, dispatch] = useReducer(liveChartReducer, initialData);
    return (
        <LiveChartContext.Provider
            value={{
                data,
                dispatch
            }}>
            {children}
        </LiveChartContext.Provider>
    );
};

const useLiveChartContext = () => {
    const context = useContext(LiveChartContext);
    if (!context) {
        throw new Error('useLiveChartContext should be used within an LiveChartProvider');
    }

    return context;
};

export { LiveChartProvider, useLiveChartContext };
