# Google Calendar Auto-Colorizer

A simple Google Apps Script that automatically color-codes your Google Calendar events based on keywords in the event title.

## 🚀 Features

* **Automatic Coloring:** Scans your calendar daily and applies colors to events based on a predefined list.
* **Case Insensitive:** Works regardless of whether you type in uppercase or lowercase (e.g., "Gym" and "GYM" work the same).
* **Efficient:** Checks if the color is already correct before applying changes to save API quota.

## ⚙️ Configuration (Important!)

The script uses a map of keywords to decide which color to apply. **You must customize this list to match your own schedule.**

1.  Open the `main.js` file.
2.  Locate the `KEYWORD_COLOR_MAP` object.
3.  **Replace the placeholders:** The default code contains placeholders in brackets like `"[STUDY]"`. You must replace these with the actual words you use in your calendar.

**Example:**
If you want to colorize events named "Math Homework", change:
`"[STUDY]": CalendarApp.EventColor.MAUVE,`
To:
`"homework": CalendarApp.EventColor.MAUVE,`

> **Note:** You can remove the brackets `[]` and simply use the words (e.g., "gym", "meeting", "doctor").

## 🛠️ Installation

1.  Go to [Google Calendar](https://calendar.google.com).
2.  Click the gear icon (**Settings**) > **Settings**.
3.  Select your calendar, scroll down, and usually, you can find **Apps Script** (or go directly to [script.google.com](https://script.google.com)).
4.  Create a new project and paste the code from `main.js`.
5.  Save the project.
6.  Run the `setupTriggers` function **once** to enable the automatic daily updates.
    * You will be asked to grant permissions. Click **Review Permissions** > Choose Account > **Advanced** > **Go to (Project Name) (unsafe)** > **Allow**.

## 📄 License

**Personal Use Only**

Copyright (C) 2026 Ika Elguez.

This project is free to use for **private, non-commercial purposes**.
* ✅ You may use this script to colorize your own personal Google Calendar.
* ✅ You may modify the code to suit your personal needs.
* ❌ You may **not** use this script for commercial purposes.
* ❌ You may **not** sell, redistribute, or bundle this script with paid services.
