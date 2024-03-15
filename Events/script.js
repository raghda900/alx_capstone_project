const locale = eventCalendar.en;
locale.calendar.weekStart = 1;

const calendar = new eventCalendar.EventCalendar("#root", {
	events, 
  	mode: "month",
	date: new Date("2023-02-12T00:00:00") 
});
calendar.setLocale(locale);

function updateDatepicker(mode){
	const sidebar = document.querySelector(".wx-event-calendar-show");
	if(!sidebar){
		return;
	}

    if(mode === "month") {
		sidebar.classList.add("no-calendar");
	}else {
		sidebar.classList.remove("no-calendar");
	}
}

updateDatepicker(calendar.getState().mode);
calendar.api.on("set-mode", (obj) => {
	updateDatepicker(obj.value);
});


/* select all toggle */

const toggle = document.querySelector("#select-all-container");
function fixToggle(){
    document.querySelector("#root .wx-event-calendar-calendars_wrapper").appendChild(toggle);
}

fixToggle();


toggle.querySelector("input").addEventListener("change", (e) => {
    console.log(calendar.getState());
    const list = calendar.getState().calendars;
    list.forEach(cal => cal.active = e.target.checked);
    calendar.setConfig({calendars: list})
    fixToggle();
    updateDatepicker(calendar.getState().mode); 
    // !!! need manually update lefthand calendar visibility
    const leftCalendar = document.getElementById('left-calendar');
leftCalendar.style.display = 'block';
});




  