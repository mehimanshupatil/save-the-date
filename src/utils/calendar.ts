export const generateCalendarEvent = () => {
	const event = {
		title: "Wedding of Shremal & Himanshu",
		description: "Join us in celebrating our special day!",
		startDate: "20260206T000000",
		endDate: "20260207T000000",
		location: "Location to be announced",
	};

	const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
DTSTART:${event.startDate}
DTEND:${event.endDate}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

	const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
	const link = document.createElement("a");
	link.href = window.URL.createObjectURL(blob);
	link.download = "wedding-save-the-date.ics";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
