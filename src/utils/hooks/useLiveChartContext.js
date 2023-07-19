import React, { useContext, useReducer, createContext } from 'react';
import { createRandomEvent } from '../utils';

const LiveChartContext = createContext();

const initialEvents = Array.from(Array(50)).map((_, ix) => createRandomEvent(ix));

const initialData = {
	events: initialEvents,
	isPlaying: true,
};

const liveChartReducer = (state, action) => {
	switch (action.type) {
		case 'new_event':
			if (!state.isPlaying) {
				return state;
			}
			return {
				...state,
				events: [...state.events, action.payload],
			};
		case 'toggle_play_pause':
			return {
				...state,
				isPlaying: !state.isPlaying,
			};
		case 'go_back':
			return {
				...state,
				events: state.events.slice(0, state.events.length - 1),
			};
		case 'go_forward':
			return {
				...state,
				events: [...state.events, createRandomEvent(state.events.length)],
			};
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
				dispatch,
			}}
		>
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
