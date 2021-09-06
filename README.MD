README for homework 5



## HTML File

I added to the given html file by adding div sections representing each hour block on the calendar and gave them each a unique id. This is to allow me to reference the ids in the javascript file, as well as separate the sections on the page itself. Everything else in the html file was given. 

## CSS file

Again since the stylesheet was given, not much had to be done here. I did however change to background colors on the hour blocks for past, present, and future hours to personalize the page a bit more. 

## JavaScript file

Here is where the magic happens. The first thing I did was use the moment command to display the current date atop the page. I then run a function to serparate the number from the am/pm labels that display on the page in order to better reference the number value of the current time and not have to worry about parsing out the am/pm label in the later functions. I then used an if else function along with addClass and Remove class to essentially create 3 possible states on the page; past time, current time, and future time. Each of these 3 states is also represented by a distinct color. The moment command again recognizes the current time, and the corresponding colors are automatically displayed on the page. Finally I added the ability to store text input in the local storage for each hour block in order to save input information or "to dos" for a given hour. 
