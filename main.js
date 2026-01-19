/*
 * Copyright (C) 2026 Ika Elguez. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * This software is proprietary and confidential.
 */

const KEYWORD_COLOR_MAP = {
//puprle is collage related 
"[STUDY]": CalendarApp.EventColor.MAUVE,


//pale red is for any workout
  "[WORKOUT]": CalendarApp.EventColor.PALE_RED,

  
  //  gray is for any comute 
 "[travel]": CalendarApp.EventColor.GRAY,

  //  yellow is for work related 
  "[WORK]": CalendarApp.EventColor.YELLOW,


//red is for any medical appointmet
  "[MEDICAL]": CalendarApp.EventColor.RED,


// blue is for vacations
  "[VACATIONS]": CalendarApp.EventColor.BLUE,


  "[EMPTY]": CalendarApp.EventColor.PALE_GREEN,


//green is social events
  "[SOCIAL]": CalendarApp.EventColor.GREEN,

};

function checkAndColorEvents() {
  const calendar = CalendarApp.getDefaultCalendar();
  const now = new Date();
  const next = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 21); // 3 Weeks ahead
  const events = calendar.getEvents(now, next);

  for (const event of events) {
    // Convert title to lowercase to match English keywords case-insensitively
    const title = event.getTitle().toLowerCase();
    
    for (const keyword in KEYWORD_COLOR_MAP) {
      if (title.includes(keyword.toLowerCase())) {
        const newColor = KEYWORD_COLOR_MAP[keyword];
        
        // Only set color if it's different (saves API quota)
        if (event.getColor() !== newColor) {
          event.setColor(newColor);
        }
        break; // Stop checking keywords once a match is found
      }
    }
  }
}

/**
 * Run this function ONCE to set up the daily triggers.
 * It removes old triggers to prevent duplication.
 */
function setupTriggers() {
  // Delete existing triggers for this function to avoid duplicates
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === "checkAndColorEvents") {
      ScriptApp.deleteTrigger(trigger);
    }
  }

  // Create new triggers (6:00 AM and 6:00 PM)
  ScriptApp.newTrigger("checkAndColorEvents")
    .timeBased()
    .everyDays(1)
    .atHour(6)
    .create();

  ScriptApp.newTrigger("checkAndColorEvents")
    .timeBased()
    .everyDays(1)
    .atHour(18)
    .create();
    
  Logger.log("Triggers setup successfully.");
}
