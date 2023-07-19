import React from 'react';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const ToolBar = () => {
	const { dispatch } = useLiveChartContext();

	// We dispatch an action to the reducer, then the reducer will update the state therefore the chart will be updated
	const togglePlayPause = () => {
		dispatch({
			type: 'toggle_play_pause',
		});
	};

	const goBack = () => {
		dispatch({
			type: 'go_back',
		});
	};

	const goForward = () => {
		dispatch({
			type: 'go_forward',
		});
	};

	return (
		<>
			<div className='flex justify-center space-x-4'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => {
						togglePlayPause();
					}}
				>
					Play/Pause
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => {
						goBack();
					}}
				>
					Back
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => {
						goForward();
					}}
				>
					Forward
				</button>
			</div>
		</>
	);
};

export default ToolBar;
