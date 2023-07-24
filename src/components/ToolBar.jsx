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
				let element = document.querySelector('.go__back__button');
				if (data.events.length - 21 >= 0) {
					dispatch({
						type: 'go_back',
					});
				} else {
					element.classList.add('bg-gray-300');
					element.classList.remove('bg-green-500');
					element.classList.remove('hover:bg-green-700');
				}
				break;
			case 'go_forward':
				if (data.events.length - 18 > 1) {
					let element = document.querySelector('.go__back__button');
					if (element.classList.contains('bg-gray-300')) {
						element.classList.remove('bg-gray-300');
						element.classList.add('bg-green-500');
						element.classList.add('hover:bg-green-700');
					}
				}
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
						data.isPlaying ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
					} text-white font-bold py-2 px-4 rounded go__back__button`}
					disabled={data.isPlaying}
					onClick={() => {
						streamAction('go_back');
					}}
				>
					Back
				</button>
				<button
					className={`${
						data.isPlaying ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
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
