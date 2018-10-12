/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: true,
				showPeriod: true,
				secondsColor: "#FFFFFF",

			}
		},
		{
			module: "calendar",
			disabled: true,
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
	 	{
			module: "compliments",
			disabled: false,
			position: "lower_third",
			config: {
				updateInterval: 3600000, //1 hour
				//updateInterval: 30000,   //30 seconds
				//updateInterval: 60000,   //60 seconds
				remoteFile: "compliments.json",
			}
		},
		{
			module: "currentweather",
			disabled: false,
			position: "top_right",
			config: {
				location: "Utica, US",
				locationID: "5142056",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "c8da36c0e417cfd15c374e232d108458",
				showFeelsLike: false,
			}
		},
		{
			module: "weatherforecast",
			disabled: false,
			position: "top_right",
			//header: "Weather Forecast",
			config: {
				location: "Utica, US",
				locationID: "5142056",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "c8da36c0e417cfd15c374e232d108458",
				colored: true,
				fade: false,
			}
		},
		{
			module: "newsfeed",
			disabled: false,
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'MMM-Button',
			disabled: true,
			config: {

			}
		},
		{
			module: 'MMM-PIR-Sensor',
			disabled: false,
			config: {
			// See 'Configuration options' for more information.https://github.com/paviro/MMM-PIR-Sensor
				sensorPIN: "4", //BCM Number
				powerSavingDelay: "60", //Delay in seconds
			}
		}

	]

};




/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
