import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {userMenu} from "./js/userMenu";
import {topbar} from "./js/topbar";
import {supportTicket} from "./js/supportTicket";
import {calendar} from "./js/calendar";
import {activity} from "./js/activity";
import {invoices} from "./js/invoices";
import {reports} from "./js/reports";

import "./js/headerCheckbox";


// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						type: "space",
						rows: [
							topbar,
							{
								margin: 10,
								cols: [
									{
										margin: 10,
										rows: [
											supportTicket,
											{
												height: 288,
												margin: 10,
												cols: [
													invoices,
													reports
												]
											}
										]
									},
									{
										margin: 10,
										rows: [
											calendar,
											activity
										]
									}
								]
							}
						]
					}
				]
			}
		]
	});

	webix.ui(userMenu);
});
