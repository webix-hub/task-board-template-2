import {dataSidebar} from "../data/dataSidebar";

export const sidebar = {
	view: "sidebar",
	width: 314,
	css: "webix_dark leftSidebar",
	select: true,
	data: dataSidebar,
	ready() {
		this.select(1);
	}
};
