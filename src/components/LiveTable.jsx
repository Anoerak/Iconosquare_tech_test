import React from 'react';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const LiveTable = (props) => {
	const { data } = useLiveChartContext();
	const nbTotalEvents = data?.events?.length;
	const eventsFiltered = data.events.slice(nbTotalEvents - 20, nbTotalEvents);
	const { dispatch } = useLiveChartContext();

	const handleInputModification = (event, dataValue, KeyboardEvent) => {
		// If the eventKey is not the Enter key, we return
		if (KeyboardEvent.key && KeyboardEvent.key !== 'Enter') return;

		// We select the input based on event.index and value
		const input = document.querySelector(`[data-index="${event.index}"][data-value-index="${dataValue}"]`);

		/*
        |----------------------------------------------
        | We create a div
        | We give it the correct data-index and data-value-index
        | We give it back its original classes
		| We add an event listener on the div
        | We give it the value typed in the input or the value displayed when we clicked on the cell if we didn't type anything
        |----------------------------------------------
        */
		const div = document.createElement('div');
		div.dataset.index = input.dataset.index;
		div.dataset.valueIndex = input.dataset.valueIndex;
		div.classList.add('p-2', 'border-t', 'border-gray-300');
		div.addEventListener('click', () => handleClickEditCell(event, dataValue));
		input.value === '' ? (div.textContent = event[dataValue]) : (div.textContent = input.value);

		// We replace the input with the div
		input.replaceWith(div);

		// We use the 'update_event' of the reducer to update the value of the event
		dispatch({
			type: 'update_event',
			payload: {
				index: event.index,
				event: {
					...event,
					[dataValue]: input.value,
				},
			},
		});
	};

	const handleClickEditCell = (event, dataValue) => {
		// We select the cell based on event.index and value
		const cell = document.querySelector(`[data-index="${event.index}"][data-value-index="${dataValue}"]`);

		/*
        |----------------------------------------------
        |We create an input
        |We give it the value displayed when we clicked on the cell
        |We give it the correct data-index and data-value-index
        |We add a light blue background
        |----------------------------------------------
        */
		const input = document.createElement('input');
		input.value = cell.textContent;
		input.dataset.index = cell.dataset.index;
		input.dataset.valueIndex = cell.dataset.valueIndex;
		input.classList.add('bg-blue-100');

		/*
        |----------------------------------------------
        | We create an input
        | We focus the input
        | We add an event listener on the input to handle the modification triggered by the blur event or the Enter key
        |----------------------------------------------
        */
		cell.replaceWith(input);
		input.focus();

		input.addEventListener('blur', (eventKey) => handleInputModification(event, dataValue, eventKey === null));
		input.addEventListener('keydown', (eventKey) => handleInputModification(event, dataValue, eventKey));
	};

	return (
		<div className='flex border border-gray-300 rounded'>
			<div>
				<div className='p-2'>Index</div>
				<div className='p-2 border-t border-gray-300'>Value 1</div>
				<div className='p-2 border-t border-gray-300'>Value 2</div>
			</div>
			{eventsFiltered.map((event) => (
				<div key={event.index} className='border-l border-gray-300 flex-1'>
					<div className='p-2'>{event.index}</div>
					<div
						data-index={event.index}
						data-value-index='value1'
						className='p-2 border-t border-gray-300'
						onClick={() => handleClickEditCell(event, 'value1')}
					>
						{event.value1}
					</div>
					<div
						data-index={event.index}
						data-value-index='value2'
						className='p-2 border-t border-gray-300'
						onClick={() => handleClickEditCell(event, 'value2')}
					>
						{event.value2}
					</div>
				</div>
			))}
		</div>
	);
};

LiveTable.propTypes = {};

export default LiveTable;
