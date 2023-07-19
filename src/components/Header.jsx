import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center space-x-4"><Logo size="40" /> <span>Iconosquare - React technical test</span></h1>
                    <div className="text-gray-600 text-lg leading-8">
                        <p className="my-6 ">
                            The following graph is a simulation of a live stream of events that refreshes every 2s. 
                            The events are stored in a context. We want to be able to edit some events.
                        </p>
                        <h2 className="underline">Please add the following features:</h2>
                        <ul className="list-decimal list-inside mb-3">
                            <li>Add a button to pause/play.</li>
                            <li>Clicking on a cell makes it editable and allows editing its value.</li>
                            <li>The correct value should be displayed.</li>
                            <li>Clicking on the chart may open the cell `value1` of the corresponding event.</li>
                        </ul>
                        <h2 className="underline">Bonus:</h2>
                        <ul className="list-decimal list-inside mb-3">
                            <li>A button may be added to reset all the updated values.</li>
                            <li>Add some components in the UI that allow navigating in time.</li>
                            <li>Migrate the project to Typescript.</li>
                        </ul>
                        <h2 className="underline">Additional information:</h2>
                        <ul className="list-disc list-inside">
                            <li>The `Container` file must not be edited. Consider that this is the only constraint.</li>
                            <li>Use the UI/UX you consider working well for the use case.</li>
                            <li>You may use any library you find useful for this use case.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;