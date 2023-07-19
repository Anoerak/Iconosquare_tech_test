import React from 'react';
import LiveTable from './LiveTable';
import LiveChart from './LiveChart';
import ToolBar from './ToolBar';

const Content = () => {
	return (
		<div className='mx-auto max-w-7xl px-8'>
			<ToolBar />
			<LiveChart />
			<LiveTable />
		</div>
	);
};

export default Content;
