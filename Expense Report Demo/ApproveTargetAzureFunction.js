module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request from an actionable message.');

	context.res = {
		headers: { 'CARD-UPDATE-IN-BODY': 'true' },
		isRaw: true,
		body: {
			"@type": "MessageCard",
			"@context": "http://schema.org/extensions",
			"summary": "Expense Report (ER-321377) for 249.25 USD is available ",
			"themeColor": "188D18",
			"sections": [
				{
					"heroImage": {
						"image": "https://filedepot.blob.core.windows.net/blob/expense-logo.png"
					}
				},
				{
					"startGroup": true,
					"activityImage": "https://filedepot.blob.core.windows.net/blob/check.png",
					"activityImageStyle": "normal",
					"activityTitle": "Expense Report (ER-321377) has been approved",
					"activitySubtitle": "Processing payment",
					"facts": [
						{
							"name": "Status:",
							"value": "Approved"
						},
						{
							"name": "Total amount:",
							"value": "249.25 USD"
						},
						{
							"name": "For:",
							"value": "Miguel Garcia"
						}
					],
					"potentialAction": [
						{
							"@type": "OpenUri",
							"name": "View in Expense",
							"targets": [
								{ "os": "default", "uri": "https://..." }
							]
						}
					]
				}
			]
		}
	};

    context.done();
};