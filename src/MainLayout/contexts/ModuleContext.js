import React, { createContext, useEffect, useState } from 'react';
import app from '../functions/axiosConfig';

export const ModuleContext = createContext();

const ModuleContextProvider = (props) => {
	const [modules, setModules] = useState([]);

	useEffect(() => {
		const url = 'https://salty-oasis-24147.herokuapp.com';
		app.get(url + '/modulegroup_management').then((res) => {
			const data = res.data;
			const modulesJson = Object.keys(data).map((key, i) => {
				return { ...data[key] };
			});
			setModules(modulesJson);
		});
	}, []);

	return <ModuleContext.Provider value={{ modules }}>{props.children}</ModuleContext.Provider>;
};

export default ModuleContextProvider;
