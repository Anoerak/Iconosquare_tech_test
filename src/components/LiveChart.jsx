import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useLiveChartContext } from '../utils/hooks/useLiveChartContext';

const LiveChart = () => {
	const { data, dispatch } = useLiveChartContext();
	const nbTotalEvents = data?.events?.length;
	const eventsFiltered = data.events.slice(nbTotalEvents - 20, nbTotalEvents);

	const handleClickEditValue1 = (e) => {
		const index = e.activePayload[0].payload.index;
		const value1 = e.activePayload[0].payload.value1;
		const newValue1 = prompt(`Edit value1 of index ${index}`, value1);
		if (newValue1) {
			dispatch({
				type: 'update_event',
				payload: {
					index: index,
					event: {
						...data.events[index],
						value1: newValue1,
					},
				},
			});
		}
	};

	return (
		<div className='mb-8'>
			<ResponsiveContainer height={250}>
				<AreaChart
					// onclick, we console.log the index and the value of the tooltip
					// onClick={(e) => console.log(e.activePayload[0].payload.index, e.activePayload[0].payload.value1)}
					onClick={handleClickEditValue1}
					data={eventsFiltered}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
						</linearGradient>
						<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey='index' />
					<YAxis />
					<CartesianGrid strokeDasharray='3 3' />
					<Tooltip />
					<Area
						isAnimationActive={false}
						type='monotone'
						dataKey='value1'
						stroke='#8884d8'
						fillOpacity={1}
						fill='url(#colorUv)'
					/>
					<Area
						isAnimationActive={false}
						type='monotone'
						dataKey='value2'
						stroke='#82ca9d'
						fillOpacity={1}
						fill='url(#colorPv)'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

LiveChart.propTypes = {
	index: Number,
	value: Number,
};

export default LiveChart;
