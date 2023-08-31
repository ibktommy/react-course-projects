import {
	FaCreditCard,
	FaTerminal,
	FaBook,
	FaLayerGroup,
	FaBookReader,
	FaMoneyBill,
	FaHandsHelping,
	FaInfo,
	FaUsers,
} from "react-icons/fa";
import React from "react";
const sublinks = [
	{
		page: "products",
		url: '/products',
		links: [
			{ label: "payment", icon: <FaCreditCard />, url: "/products" },
			{ label: "terminal", icon: <FaTerminal />, url: "/products" },
			{ label: "connect", icon: <FaLayerGroup />, url: "/products" },
		],
	},
	{
		page: "developers",
		url: '/developers',
		links: [
			{ label: "plugins", icon: <FaBook />, url: "/products" },
			{ label: "libraries", icon: <FaBookReader />, url: "/products" },
			{ label: "help", icon: <FaHandsHelping />, url: "/products" },
			{ label: "billing", icon: <FaMoneyBill />, url: "/products" },
		],
	},
	{
		page: "company",
		url: '/company',
		links: [
			{ label: "about", icon: <FaInfo />, url: "/products" },
			{ label: "customers", icon: <FaUsers />, url: "/products" },
		],
	},
];

export default sublinks;
