# EXERCISE ONE, EXTENSIONS

If you've successfully implemented part 1 basic, have a go at the following extensions:

1. After inserting reply threads, insert dates.

1a. Find all lines that consist only of a single timestamp with AM or PM attached, for instance `9:17 AM` or `00:15 am`.
1b. For each timestamp found, display the first 40 characters of the previous line to the user.
1c. Ask the user whether this timestamp represents a new date (rather than a new timestamp on the same date).
1d. If it's a new date, adk the user to select (using a date picker) the correct date for that timestamp.
1e. Insert the date immediately above the timestamp, with markdown header 2 formatting, and with a new empty line both before and after the date line.
1f. Move to the next timestamp.

2. Better date insertion.

Instead of inserting the dates immediately above the timestamps, check whether there is a user name before the timestamp. If there is, insert the date before the user name (surrounded by empty lines as before).

3. User chooses what order they want to do things in.

They can:
- Insert reply threads, then insert dates
- Insert dates, then insert reply threads
- Only insert reply threads
- Only insert dates
