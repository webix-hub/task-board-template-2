
export const topbar = {
	margin: 10,
	cols: [
		{
			view: "label",
			label: "Dashboard",
			width: 76
		},
		{
			view: "search",
			placeholder: "Search..",
			width: 150
		},
		{
			view: "richselect",
			value: 1,
			width: 120,
			options: [
				{id: 1, value: "This week"},
				{id: 2, value: "This month"},
				{id: 3, value: "This year"}
			]
		},
		{}
	]
};
