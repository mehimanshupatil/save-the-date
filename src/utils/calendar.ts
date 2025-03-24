export const saveToCalendar = () => {
	const event = {
		title: "Wedding of Shremal & Himanshu",
		description: "Join us in celebrating our special day!",
		startDate: "20260206T000000Z",
		endDate: "20260207T000000Z",
		location: "Location to be announced",
		uid: "wedding-shre-himanshu-2026",
		dtstamp: new Date().toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z",
	};

	const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:${event.uid}
DTSTAMP:${event.dtstamp}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/,/g, "\\,").replace(/;/g, "\\;")}
DTSTART:${event.startDate}
DTEND:${event.endDate}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

	// Create and download ICS file
	const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "wedding-save-the-date.ics";

	// Try webcal:// for direct calendar open
	const webcalLink = `webcal://example.com/wedding-save-the-date.ics`;

	// Google Calendar link (alternative)
	const googleLink = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

	// Check platform and decide behavior
	if (
		navigator.userAgent.includes("Android") ||
		navigator.userAgent.includes("iPhone")
	) {
		// Mobile - Try webcal or Google Calendar
		if (navigator.userAgent.includes("iPhone")) {
			window.location.href = webcalLink; // Webcal for iOS
		} else {
			window.open(googleLink, "_blank"); // Google Calendar for Android
		}
	} else {
		// Desktop - Download ICS file
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
};
