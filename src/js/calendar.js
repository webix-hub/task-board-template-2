export const calendar = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Calendar"
				},
				{}
			]
		},
		{
			height: 222,
			type: "clean",
			cols: [
				{
					view: "calendar",
					dayTemplate(date) {
						const marks = {
							2: "holidays",
							6: "meeting",
							7: "personal",
							12: "birthday",
							22: "public"
						};
						const classname = marks[date.getDate()];
						let html = `<div class='day'>${date.getDate()}</div>`;
						if (classname) {
							html += `<div class='dayMarker ${classname}'></div>`;
						}
						return html;
					}
				},
				{
					view: "form",
					css: "calendarCheckboxes",
					width: 114,
					scroll: false,
					margin: 0,
					padding: {top: 42, left: 0, right: 0, bottom: 0},
					elements: [
						{
							view: "checkbox",
							css: "personalCh",
							labelRight: "Personal"
						},
						{
							view: "checkbox",
							css: "publicCh",
							labelRight: "Public"
						},
						{
							view: "checkbox",
							css: "birthdayCh",
							labelRight: "Birthday"
						},
						{
							view: "checkbox",
							css: "holidaysCh",
							labelRight: "Holidays"
						},
						{
							view: "checkbox",
							css: "meetingCh",
							labelRight: "Meeting"
						}
					],
					elementsConfig: {
						labelWidth: 0,
						height: 32,
						value: 1
					}
				}
			]
		}
	]
};
