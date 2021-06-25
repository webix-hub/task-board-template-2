import {dataSupportTicket} from "../data/dataSupportTicket";

export const supportTicket = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Support Ticket"
				},
				{}
			]
		},
		{
			view: "datatable",
			css: "supportTicket webix_data_border webix_header_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				},
				customerTemplate(obj) {
					return `<div class="flex customer">
						<div class="customerAvatar"><img src="./users/${obj.avatar}" /></div>
						<span class="strong">${obj.customer}</span>
					</div>`;
				},
				priorityTemplate(obj) {
					let html = [];
					for (let star = 0; star < obj.priority; star++) {
						html.push('<span class="webix_icon mdi mdi-star starColor"></span>');
					}
					return html.join("");
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 41},
				{id: "customer", header: "Customer", width: 175, template: "{common.customerTemplate()}"},
				{id: "assigned", header: "Assigned", width: 120},
				{id: "info", header: "Info", width: 182},
				{id: "id", header: "ID", width: 60},
				{id: "subject", header: "Subject", minWidth: 160, fillspace: true, template: "<span class='ellipsis'>#subject#</span>"},
				{id: "create", header: "Created", width: 110},
				{id: "status", header: {text: "Status", css: "flexCol"}, width: 76, css: "flexCol", template: "<span class='status #status#'>#status#</span>"},
				{id: "priority", header: "Priority", width: 94, template: "{common.priorityTemplate()}"}
			],
			data: dataSupportTicket
		}
	]
};
