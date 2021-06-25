import {dataInvoices} from "../data/dataInvoices";

export const invoices = {
	maxWidth: 438,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Invoices"
				},
				{}
			]
		},
		{
			view: "list",
			data: dataInvoices,
			type: {
				height: 122,
				css: "invoices",
				template(obj) {
					const html = `
						<div class="invoicesInner">
							<div class="invoicesRow">
								<span class="strong" style="margin-right: 4px">${obj.unpaid} Unpaid</span>
								<span class="subText">${obj.period}</span>
							</div>
							<div class="invoicesRow flex spaceBetween" style="margin-bottom: 4px">
								<span class="invoicesVal">${obj.statusValue1}</span>
								<span class="invoicesVal">${obj.statusValue2}</span>
							</div>
							<div class="invoicesRow flex spaceBetween" style="margin-bottom: 6px">
								<span class="subText">${obj.statusName1}</span>
								<span class="subText">${obj.statusName2}</span>
							</div>
							<div class="rangeWrapp">
								<div class="rangeInner ${obj.color}" style="width: ${obj.range}%"></div>
							</div>
						</div>
					`;
					return html;
				}
			}
		}
	]
};
