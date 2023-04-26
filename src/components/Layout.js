import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { ConnectButton } from '@suiet/wallet-kit';
import '../App.css';

const Layout = () => {
	return (
		<>
			<header>
				<NavLink to='/'>Homepage</NavLink>
				<NavLink to='/profile'>Profile</NavLink>
				<NavLink to='/subscribe'></NavLink>
				<ConnectButton />
			</header>

			<main>
				<Outlet />
			</main>

			<footer>12</footer>
		</>
	);
}

export default Layout;
