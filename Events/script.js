"use strict";
let input_data = document.querySelectorAll("inputdata");
input_data.addEventlistener(function () {});

let keys = Object.keys(input_data);
console.log(keys);

const addNewEvent = () => {
  const event = {
    EventTitle: form.EventTitle.value,
    categories: form.categories.value,
    startDateTime: form.startDateTime.value,
    endDateTime: form.endDateTime.value,
    eventLocation: form.eventLocation.value,
    speakers: form.speakers.value,
    description: form.description.value,
  };
  const creat_button = document.getElementById("creat");
  const view_mange=document.getElementById("view")
  const view = (event, id) => {
	const {EventTitle, categories, startDateTime,endDateTime,speakers, description} = event
  

  script
    .collection("events")
    .add(event)
    .then(() => {
      // Reset the form values
      (form.EventTitle.value = ""),
        (form.categories.value = ""),
        (form.startDateTime.value = ""),
        (form.endDateTime.value = ""),
        (form.eventLocation.value = ""),
        (form.speakers.value = ""),
        (form.description.value = ""),
        creat_button.addEventlistener("click", frameElement);
      alert("Your event has been successfully saved");
    })
    .catch((err) => console.log(err));
};

let events = [];

//calender//
const locale = eventCalendar.en;
locale.calendar.weekStart = 1;

const calendar = new eventCalendar.EventCalendar("#root", {
  events,
  mode: "month",
  date: new Date("2023-02-12T00:00:00"),
});
calendar.setLocale(locale);

function updateDatepicker(mode) {
  const sidebar = document.querySelector(".wx-event-calendar-show");
  if (!sidebar) {
    return;
  }

  if (mode === "month") {
    sidebar.classList.add("no-calendar");
  } else {
    sidebar.classList.remove("no-calendar");
  }
}

updateDatepicker(calendar.getState().mode);
calendar.api.on("set-mode", (obj) => {
  updateDatepicker(obj.value);
});

/* select all toggle */

const toggle = document.querySelector("#select-all-container");
function fixToggle() {
  document
    .querySelector("#root .wx-event-calendar-calendars_wrapper")
    .appendChild(toggle);
}

fixToggle();

toggle.querySelector("inputdata").addEventListener("change", (e) => {
  console.log(calendar.getState());
  const list = calendar.getState().calendars;
  list.forEach((cal) => (cal.active = e.target.checked));
  calendar.setConfig({ calendars: list });
  fixToggle();
  updateDatepicker(calendar.getState().mode);
  // !!! need manually update lefthand calendar visibility
  const leftCalendar = document.getElementById("left-calendar");
  leftCalendar.style.display = "block";
})
