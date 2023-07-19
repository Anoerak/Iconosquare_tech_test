import React, { useEffect, useRef } from 'react';
import { LiveChartProvider, useLiveChartContext } from '../utils/hooks/useLiveChartContext';
import { createRandomEvent } from '../utils/utils';
import Content from './Content'

const ContainerContent = () => {
    const currentIndex = useRef(50);
    const { dispatch } = useLiveChartContext()

    useEffect(() => {
		const intervalId = setInterval(() => {
			dispatch({
				type: 'new_event',
				payload: createRandomEvent(++currentIndex.current),
			})
		}, 2000)
		return () => clearInterval(intervalId)
	    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    return <Content />
} 

const Container = () => {
    return (
        <LiveChartProvider>
            <ContainerContent />
        </LiveChartProvider>
    );
};

export default Container;