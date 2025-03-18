import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import Work from '../pages/Work/Work';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/work' element={<Work />} />
			</Route>
		</Routes>
	);
};

export default Router;
