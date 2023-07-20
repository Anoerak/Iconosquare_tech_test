import React from 'react';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const ToolBar = () => {
	const { dispatch } = useLiveChartContext();

	// A switch case could use here instead of the following single action functions. 

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

	const reset = () => {
		dispatch({
			type: 'reset',
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
				{/* We add a reset button */}
				<button
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => {
						reset();
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default ToolBar;
