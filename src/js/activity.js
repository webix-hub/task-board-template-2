import {dataActivity} from "../data/dataActivity";

export const activity = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Latest Activity"
				},
				{}
			]
		},
		{
			view: "list",
			css: "activity",
			data: dataActivity,
			type: {
				height: 64,
				template(obj) {
					const html = `
						<div class="activityInner">
							<div class="activityAvatar">
								<img src="./users/${obj.avatar}">
							</div>
							<div class="activityContent">
								<div class="flex spaceBetween activityRow">
									<span class="strong">${obj.customer}</span>
									<span class="subText">${obj.time}</span>
								</div>
								<span>${obj.activity}</span>    
							</div>
						</div>
					`;
					return html;
				}
			}
		}
	]
};
