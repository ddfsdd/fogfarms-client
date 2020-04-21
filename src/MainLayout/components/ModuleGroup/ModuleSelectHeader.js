import React, { useContext } from 'react';
import { ModuleDataContext } from '../../contexts/ModuleDataContext';

const ModuleSelectHeader = () => {
	const { datas } = useContext(ModuleDataContext);
	return (
		<div className="ModuleSelectBox">
			<p>Module - Module Group xxx</p>
		</div>
	);
};

export default ModuleSelectHeader;
