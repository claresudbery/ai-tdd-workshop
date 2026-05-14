# EXERCISE ONE, EXTENSIONS

If you've successfully implemented part 1 basic, have a go at the following extensions:

1. After inserting reply threads, insert dates.

1a. Find all lines that consist only of a single timestamp with AM or PM attached, for instance `9:17 AM` or `00:15 am`.
1b. For each timestamp found, display the first 40 characters of the previous line to the user.
1c. Ask the user whether this timestamp represents a new date (rather than a new timestamp on the same date).
1d. If it's a new date, ask the user to select (using a date picker) the correct date for that timestamp.
1e. Insert the date immediately above the timestamp, with markdown header 2 formatting, and with a new empty line both before and after the date line.
1f. Move to the next timestamp.
Remember at all stages to check the results! Date insertion points should be identified and acted on correctly.

2. Better date insertion.

Instead of inserting the dates immediately above the timestamps, check whether there is a user name before the timestamp. If there is, insert the date before the user name (surrounded by empty lines as before).

3. User chooses what order they want to do things in.

They can:
- Insert reply threads, then insert dates
- Insert dates, then insert reply threads
- Only insert reply threads
- Only insert dates

4. Image processing. 

!You'll only be able to do this part if you have a Slack account and access to a Slack thread containing images! Move to Step 5 if that's not you!

Currently `sample-input.md` contains text such as `image.png` and `IMG_4359`. If you look at `sample-input-image-urls.md` you'll see those are replaced by things like `![IMG_4359](https://files.slack.com/files-tmb/U2CXNMY49-909KKGG0R7W-96aa9539s6/img_4359_720.jpg)`.

Note that `sample-input-image-urls.md` is only an example. To get this working, you'll need a Slack thread containing images you can access using your own Slack account.

Create a utility as part of this tool that will scan the source markdown for markdown image links like `![IMG_4359](https://files.slack.com/files-tmb/U2CXNMY49-909KKGG0R7W-96aa9539s6/img_4359_720.jpg)` which represent images hosted on `files.slack.com`. It will then ask the user to log into the relevant Slack account (which is the only way to access the images), and then it will download each image and create a final markdown file that can be opened with all the images correctly inserted and visible.

5. Improve the output and UI in whatever way makes sense to you.

Remember at all stages to check the results!
