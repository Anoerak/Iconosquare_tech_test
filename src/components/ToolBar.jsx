import React from 'react';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const ToolBar = () => {
	const { dispatch, data } = useLiveChartContext();

	// A switch case could use here instead of the following single action functions.
	const streamAction = (action) => {
		switch (action) {
			case 'toggle_play_pause':
				dispatch({
					type: 'toggle_play_pause',
				});
				break;
			case 'go_back':
				dispatch({
					type: 'go_back',
				});
				break;
			case 'go_forward':
				dispatch({
					type: 'go_forward',
				});
				break;
			case 'reset':
				dispatch({
					type: 'reset',
				});
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className='flex justify-center space-x-4'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => {
						streamAction('toggle_play_pause');
					}}
				>
					Play/Pause
				</button>
				<button
					className={`${
						data.isPlaying ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-700'
					} text-white font-bold py-2 px-4 rounded`}
					disabled={data.isPlaying}
					onClick={() => {
						streamAction('go_back');
					}}
				>
					Back
				</button>
				<button
					className={`${
						data.isPlaying ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-700'
					} text-white font-bold py-2 px-4 rounded`}
					disabled={data.isPlaying}
					onClick={() => {
						streamAction('go_forward');
					}}
				>
					Forward
				</button>
				<button
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => {
						streamAction('reset');
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default ToolBar;
