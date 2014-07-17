var dataJSON =['{"region":"(not set)","country":"(not set)","hour":"17","sessions":"1"}','{"region":"(not set)","country":"Bangladesh","hour":"03","sessions":"1"}','{"region":"(not set)","country":"Belarus","hour":"16","sessions":"1"}','{"region":"(not set)","country":"Belarus","hour":"18","sessions":"1"}','{"region":"(not set)","country":"Belarus","hour":"19","sessions":"1"}','{"region":"(not set)","country":"Belgium","hour":"12","sessions":"2"}','{"region":"(not set)","country":"Belgium","hour":"13","sessions":"1"}','{"region":"(not set)","country":"Belgium","hour":"16","sessions":"1"}','{"region":"(not set)","country":"Belgium","hour":"17","sessions":"1"}','{"region":"(not set)","country":"Belgium","hour":"18","sessions":"1"}','{"region":"(not set)","country":"Belgium","hour":"19","sessions":"1"}','{"region":"(not set)","country":"Costa Rica","hour":"06","sessions":"1"}','{"region":"(not set)","country":"Costa Rica","hour":"07","sessions":"1"}','{"region":"(not set)","country":"Estonia","hour":"13","sessions":"1"}','{"region":"(not set)","country":"Finland","hour":"14","sessions":"1"}','{"region":"(not set)","country":"Finland","hour":"16","sessions":"1"}','{"region":"(not set)","country":"Georgia","hour":"02","sessions":"1"}','{"region":"(not set)","country":"Hong Kong","hour":"03","sessions":"1"}','{"region":"(not set)","country":"Hong Kong","hour":"08","sessions":"1"}','{"region":"(not set)","country":"Hong Kong","hour":"10","sessions":"1"}','{"region":"(not set)","country":"Hong Kong","hour":"11","sessions":"1"}','{"region":"(not set)","country":"Hong Kong","hour":"12","sessions":"1"}','{"region":"(not set)","country":"Hong Kong","hour":"18","sessions":"1"}','{"region":"(not set)","country":"Ireland","hour":"15","sessions":"1"}','{"region":"(not set)","country":"Jamaica","hour":"02","sessions":"1"}','{"region":"(not set)","country":"Jordan","hour":"03","sessions":"1"}','{"region":"(not set)","country":"Jordan","hour":"15","sessions":"1"}','{"region":"(not set)","country":"Lebanon","hour":"14","sessions":"1"}','{"region":"(not set)","country":"Lithuania","hour":"11","sessions":"1"}','{"region":"(not set)","country":"Malta","hour":"12","sessions":"1"}','{"region":"(not set)","country":"Monaco","hour":"11","sessions":"1"}','{"region":"(not set)","country":"Monaco","hour":"12","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"00","sessions":"3"}','{"region":"(not set)","country":"Pakistan","hour":"05","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"11","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"12","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"13","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"14","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"15","sessions":"1"}','{"region":"(not set)","country":"Pakistan","hour":"20","sessions":"2"}','{"region":"(not set)","country":"Pakistan","hour":"22","sessions":"1"}','{"region":"(not set)","country":"Panama","hour":"20","sessions":"1"}','{"region":"(not set)","country":"Serbia","hour":"07","sessions":"1"}','{"region":"(not set)","country":"Serbia","hour":"15","sessions":"1"}','{"region":"(not set)","country":"Serbia","hour":"20","sessions":"1"}','{"region":"(not set)","country":"Singapore","hour":"08","sessions":"1"}','{"region":"(not set)","country":"Singapore","hour":"09","sessions":"2"}','{"region":"(not set)","country":"Slovakia","hour":"05","sessions":"1"}','{"region":"(not set)","country":"Slovakia","hour":"12","sessions":"2"}','{"region":"(not set)","country":"Slovakia","hour":"14","sessions":"1"}'];

var adjustTime = function(data,timezone){
	var map = {"Afghanistan": -0.5,"Albania": -3,"Algeria": -4,"Andorra": -3,"Angola": -4,"Antigua and Barbuda": -9,"Argentina": -8,"Armenia": -1,"Australia":5,"Austria": -3,"Bahamas": -9,"Bahrain": -2,"Bangladesh":1,"Barbados": -9,"Belarus": -2,"Belgium": -3,"Belize": -11,"Benin": -4,"Bermuda": -8,"Bhutan":1,"Bolivia": -9,"Bosnia Herzegovina": -3,"Botswana": -3,"Brazil": -8,"Brunei":3,"Bulgaria": -2,"Burkina Faso": -5,"Burundi": -3,"Cambodia":2,"Cameroon": -4,"Canada": -9,"Cape Verde": -6,"Cayman Islands": -10,"Central African Republic": -4,"Chad": -4,"Chile": -9,"China":3,"Colombia": -10,"Comoros": -2,"Congo": -4,"Congo Dem. Rep.": -4,"Cook Islands": -15,"Costa Rica": -11,"Cote dIvoire": -5,"Croatia": -3,"Cuba": -9,"Curacao": -9,"Cyprus": -3,"Czech Republic": -3,"Denmark": -3,"Djibouti": -2,"Dominica": -9,"Dominican Republic": -9,"Ecuador": -10,"Egypt": -2,"El Salvador": -11,"Equatorial Guinea": -4,"Eritrea": -2,"Estonia": -2,"Ethiopia": -2,"Falkland Islands": -8,"Faroe Islands": -4,"Fiji":7,"Finland": -2,"France": -3,"Gabon": -4,"Gambia": -5,"Gaza Strip": -2,"Georgia": -1,"Germany": -3,"Ghana": -5,"Greece": -2,"Greenland": -7,"Grenada": -9,"Guadeloupe": -9,"Guatemala": -11,"Guinea": -5,"Guinea Bissau": -5,"Guyana": -9,"Haiti": -9,"Honduras": -11,"Hong Kong":3,"Hungary": -3,"Iceland": -5,"India":0.5,"Indonesia":2,"Iran": -0.5,"Iraq": -2,"Ireland": -4,"Israel": -2,"Italy": -3,"Jamaica": -10,"Japan":4,"Jordan": -2,"Kazakhstan":1,"Kenya": -2,"Kiribati":7,"Kosovo": -3,"Kuwait": -2,"Kyrgyzstan":1,"Laos":2,"Latvia": -2,"Lebanon": -2,"Lesotho": -3,"Liberia": -5,"Libya": -3,"Liechtenstein": -3,"Lithuania": -2,"Luxembourg": -3,"Macedonia": -3,"Madagascar": -2,"Malawi": -3,"Malaysia":3,"Mali": -5,"Malta": -3,"Marshall Islands":7,"Mauritania": -5,"Mauritius": -1,"Mexico": -10,"Micronesia":6,"Moldova": -2,"Monaco": -3,"Mongolia":3,"Montenegro": -3,"Morocco": -5,"Mozambique": -3,"Myanmar":1.5,"Namibia": -4,"Nauru":7,"Nepal":1,"Netherlands": -3,"New Zealand":7,"Nicaragua": -11,"Niger": -4,"Nigeria": -4,"Niue": -16,"Norfolk Island":6.5,"North Korea":4,"Norway": -3,"Oman": -1,"Palau":4,"Panama": -10,"Papua New Guinea":5,"Paraguay": -9,"Peru": -10,"Philippines":3,"Poland": -3,"Portugal": -4,"Puerto Rico": -9,"Qatar": -2,"Reunion (French)": -1,"Romania": -2,"Russia": -1,"Rwanda": -3,"Saint Kitts and Nevis": -9,"Saint Lucia": -9,"Saint Pierre and Miquelon": -7,"Saint Vincent Grenadines": -9,"Samoa":8,"San Marino": -3,"Sao Tome and Principe": -5,"Saudi Arabia": -2,"Senegal": -5,"Serbia": -3,"Seychelles": -1,"Sierra Leone": -5,"Singapore":3,"Slovakia": -3,"Slovenia": -3,"Solomon Islands":6,"Somalia": -2,"South Africa": -3,"South Korea":4,"South Sudan": -2,"Spain": -3,"Sri Lanka":0.5,"Sudan": -2,"Suriname": -8,"Swaziland": -3,"Sweden": -3,"Switzerland": -3,"Syria": -2,"Taiwan":3,"Tanzania": -2,"Thailand":2,"Timor Leste":4,"Togo": -5,"Tokelau":9,"Tonga":8,"Trinidad and Tobago": -9,"Tunisia": -4,"Turkey": -2,"Tuvalu":7,"UAE": -1,"Uganda": -2,"United Kingdom": -4,"Ukraine": -2,"Uruguay": -8,"United States": -9,"Vanuatu":6,"Vatican City State": -3,"Venezuela": -9.5,"Vietnam":2,"West Bank": -2,"Western Sahara": -5,"Yemen": -2,"Zambia": -3,"Zimbabwe": -3};
	var mapRelativeto = 5;
	var regionMap={
		'United States':{
			"Alabama": -6,"Alaska": -9,"Alaska (Aleutian Islands)": -10,"Arizona ": -7,"Arkansas": -6,"California": -8,"Colorado": -7,"CT  Connecticut": -5,"District of Columbia": -5,"Delaware": -5,"FL  Florida": -5,"FL  Florida (W)": -6,"GA  Georgia": -5,"Hawaii": -10,"ID  Idaho (N)": -8,"ID  Idaho (S)": -7,"Illinois": -6,"IN  Indiana": -5,"Indiana (NW)": -6,"Iowa": -6,"Kansas": -6,"Kansas (W)": -7,"Kentucky (E)": -5,"Kentucky (W)": -6,"LA  Louisiana": -6,"ME  Maine": -5,"Maryland": -5,"MA  Massachusetts": -5,"Michigan": -5,"Michigan (W)": -6,"MN  Minnesota": -6,"MS  Mississippi": -6,"Missouri": -6,"MT  Montana": -7,"Nebraska": -6,"Nebraska (W)": -7,"Nevada": -8,"NH  New Hampshire": -5,"New Jersey": -5,"New Mexico": -7,"New York": -5,"North Carolina": -5,"North Dakota": -6,"North Dakota (W)": -7,"Ohio": -5,"Oklahoma": -6,"Oregon": -8,"Oregon (E)": -7,"Pennsylvania": -5,"Rhode Island": -5,"South Carolina": -5,"South Dakota (E)": -6,"South Dakota (W)": -7,"Tennessee (E)": -5,"Tennessee (W)": -6,"Texas": -6,"Texas (W)": -7,"Utah": -7,"Vermont": -5,"Virginia": -5,"Washington": -8,"West Virginia": -5,"Wisconsin": -6,"Wyoming": -7
		}
	};
	if ((typeof map[data.country] != 'undefined' && typeof regionMap[data.country] == 'undefined') || (typeof regionMap[data.country] != 'undefined' && typeof regionMap[data.country][data.region] == 'undefined')){
		data.hour = data.hour + map[data.country];
	}else if(typeof regionMap[data.country] != 'undefined' && typeof regionMap[data.country][data.region] != 'undefined'){
		data.hour = data.hour + regionMap[data.country][data.region] - mapRelativeto;
	}
	data.hour =data.hour + timezone- mapRelativeto;
	if(data.hour < 0){
		data.hour += 24;
	}
	if(data.hour > 23.5){
		data.hour -= 24;
	}
	return data;
}

var getCountries = function(output){
	var list =[];
	var i = 0;
	for (var index in output){
		var currRecord = output[index].split(',');
		var countryExists = false;
		for (var no in list){
			if (currRecord[0] == list[no]){
				countryExists = true;
			}
		}
		if(!countryExists){
			list[i] = currRecord[0];
			i++;
		}
	}
	return list;
}


var getData = function(output,countries){
	var data = [];
	var dataIndex = 0;
		for (var currTime = 0;currTime < 24; currTime+= 0.5){
			var dataRow = [];
			for(var i=0; i<countries.length ;i++){
				if (dataRow[i] == null){
					dataRow[i] = 0;
				}
			}
			for (var index in output){
				var currRecord = output[index].split(',');
				if (currRecord[1] == currTime){
					for (var index in countries){
						if(currRecord[0] == countries[index]){
							dataRow[index] += parseInt(currRecord[2]);
						}
					}
				}
			}
			if (currTime*10%10 == 5){
				dataRow[0] = ((currTime-0.5) +":30:00") ;
			}else{
				dataRow[0] = (currTime +":00:00") ;
			}
			data[dataIndex] = dataRow;
			dataIndex++;
		}
	return(data);
}

var init = function(country,timezone){

    if(timezone == undefined){
    	timezone =5;
    }
    timezone = parseFloat(timezone);
	var output = getOutput(timezone);
    if (country == null || typeof country !== 'string'){
        country = getCountries(output);
        country = country[0];
    }
	var columns = ['time',country];
	var data = getData(output,columns);
	data.splice(0,0,columns);
	return data; 
}

var getOutput = function(timezone){
	var output =[];
	var i =0;
	for (var index in dataJSON ){
		var data = JSON.parse(dataJSON[index]);
		data.sessions = parseInt(data.sessions);
		data.hour = parseFloat(data.hour);
		data = adjustTime(data,timezone);
		output[i]= data.country +"," +data.hour + "," + data.sessions + "," + data.region;
		i++
	}
	return output;
}


$(function(ready){
	$('#DropDownTimezone').val('5');
	$('select').change(function(){
		drawChart($('#dropdownoptions').val(),$('#DropDownTimezone').val());
	});
    $('#submit').click(function(){
    	var inputData = $('#input').val();
		var rows = inputData.split('\n');
		var headings = formatHeadings(rows);
		var output =[];
		for(var i =1; i < rows.length; i++){
			var cells = rows[i].split('\t');
			var outputRow= [];
	    	for(var x = 0; x < cells.length; x++){
				outputRow[x] = ('"' + headings[x] + '"'  + ":"+ '"' + cells[x]+ '"');
	    	}
	    	output[i-1] ="{" + outputRow +"}";
    	}
    	dataJSON=output;
    	console.log(dataJSON);
    	$('#chartContainer').css('display','inline-block');
    	drawChart();
    	$('#dropdownView').css('display','inline');
    	$('#inputView').css('display','none');
    	filldropbox();
    });
});

var filldropbox = function(){
	outputData= getOutput(5);
	countries = getCountries(outputData);
	for(i=0;i < countries.length;i++){
		$('#dropdownoptions').append("<option class='options' value='"+ countries[i]+"'>"+countries[i]+"</option>");
	}
	$('#dropdownoptions').val(countries[0]);
}

    var formatHeadings = function(rows){
    	var cells = rows[0].split('\t');
    	for(var i = 0; i < cells.length; i++){
    		cells[i] =cells[i].substring(3,cells[i].length-1);
    	}
    	return cells;
    }




