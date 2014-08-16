ga-normalize-timezone
=====================

Normalize Timezones takes Google Analytics Country, Region, Hour and Sessions data and normalizes the time to visitors home country.

It useful for understanding behavior of sites with visitors from alot of different timezones by allowing you to estimate behavior based on time of day of the originating visitors home country.

### Usage
1- Open this [Google Analytics Query Explorer Url](http://ga-dev-tools.appspot.com/explorer/?dimensions=ga%253Acountry%252Cga%253Aregion%252Cga%253Ahour&metrics=ga%253Asessions&start-date=31daysAgo&end-date=yesterday&max-results=10000)

2- Authorize your google analytics account

3- Select the account and property you'd like to use.

4- Scroll down change `start-date` and `end-date` if you'd like. (Its set to show last 30 days of data by default).

5- Click `Get Data` button.

6- Either copy the entire result table OR click `Excel TSV` button to download a sheet and copy data from there.

7- Paste the data in the text field on http://marketlytics.github.io/ga-normalize-timezone and process the data.

8- On next screen see a list of countries and normalized session based on your accounts timezone. (You can toggle your Google Analytics views timezone at the top).


### Todo
1- Use oauth to get data directly from GA core reporting api (removing step 1, 5, 6, 7 from the usage).
2- Improve views timezone detection
3- Think of an interesting name


Pull Requests welcome!

### Credits
Prototype built by [Albur](https://github.com/alburhassan) while interning at marketlytics.


### License
The MIT License (MIT)

Copyright (c) 2014 marketlytics.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


