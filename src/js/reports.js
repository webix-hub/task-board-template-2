import {dataReports, dataReportsBars} from "../data/dataReports";

export const reports = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Reports"
				},
				{}
			]
		},
		{
			type: "clean",
			cols: [
				{
					view: "chart",
					minWidth: 200,
					type: "spline",
					value: "#value#",
					offset: 0,
					padding: {top: 15, right: 30},
					item: {
						borderColor: "#A6CEE3",
						color: "#A6CEE3",
						radius: 2
					},
					line: {
						color: "#A6CEE3"
					},
					xAxis: {
						template: "#week#",
						lines(obj) {
							return !!(obj.week === "" || obj.week === "Week 4");
						}
					},
					yAxis: {
						start: 0,
						end: 100,
						step: 20
					},
					data: dataReports
				},
				{
					view: "chart",
					width: 120,
					padding: {left: 10, top: 20},
					type: "bar",
					label: "#value#",
					color: "#color#",
					barWidth: 22,
					radius: 4,
					xAxis: {
						color: "#FFFFFF",
						template: "#title#",
						lines: false
					},
					yAxis: {
						color: "#FFFFFF",
						start: 0,
						end: 400,
						lines: false,
						template: false
					},
					data: dataReportsBars
				}
			]
		}
	]
};
