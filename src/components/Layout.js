import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { ConnectButton } from '@suiet/wallet-kit';

const Layout = () => {
	return (
		<>
			<header>
				<NavLink to='/'>Main</NavLink>
				<NavLink to='/profile'>Go to not found page</NavLink>
				<NavLink to='/homepage'>Homepage</NavLink>
				<ConnectButton>Connect</ConnectButton>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>footer</footer>
		</>
	);
}

export default Layout;
