/*
 * algo.js
 * 
 * Opensource API implementing analytical data indexing ang manipulation algo
 * 
 * Created By : Anant Pushkar
 * Date : 07-09-2012
 * Version : 2.0
 * email : anantpushkar009@gmail.com
 * 
 */

/*
 * Function name : plot
 * 
 * This function plots the graph for the input array passed
 * 
 * input array :
 * 
 * input["data"] : array of data points in the format [a , b] , where a = value to be plotted on x axis , b= value to be plotted on y axis.
 * input["imp_f"] : Improvement factor to be used to calculate expectation values
 * input["target_id"] : id of the div where graph has to be plotted
 * input["n_ticks"] : number of ticks or divisions to be shown on the y axis
 * input["n_x"] : number of divisions to be shown on the x axis
 * input["title"] : title to be displayed on the graph
 * 
 * output array:
 * 
 * output["si"] = success index for the parameter
 * output["sum"] = sum of actual values(usefull while indexing)
 * 
 */
function plot(input)
{
	var exp_arr = new Array();//array to store expectaion values
	
	var sum_actual = 0;//sum of actual values of the data points 
	
	var sum_exp = 0;//sum of expectation values of data points
	
	var max_x=0;//maximum value of x(to determine max range on x axis)
	
	var max_val = 0;//maximum value of data points(to determine maximum range on y axis)
	
		for(j=0;j<input["data"] .length;j++)
		{
			exp_arr[j] = new Array();
			
			if(j==0) sum_actual += input["data"][j][1];
			else 
				sum_actual += input["data"][j-1][1] ;

			if(j==0) exp_arr [j][1] = sum_actual;
			else
				exp_arr [j][1] = sum_actual * input["imp_f"]  / (j+1) ;
				
			exp_arr [j][0] = input["data"] [j][0] ;
				
			sum_exp += exp_arr [j][1];
			
			max_val = input["data"] [j][1]>max_val? input["data"] [j][1] : max_val;
			max_val = exp_arr [j][1]>max_val? exp_arr [j][1] : max_val;
			max_x = input["data"] [j][0]>max_x? input["data"] [j][0] : max_x;
		}
		var output = new Array();
		output["si"]  = sum_actual / sum_exp;

		plots  = $.jqplot(input["target_id"] , [input["data"] , exp_arr ], { 
				  title:input["title"] , 
				  seriesDefaults: {showMarker:false}, 
				  series:[
					  {},
					  {yaxis:'y2axis'}, 
					  {yaxis:'y3axis'}
				  ], 
				  highlighter: {
					show: true,
					sizeAdjust: 7.5
				  },
				  cursor: {
					show: false,
				  }, 
				  axesDefaults:{useSeriesColor: true}, 
				  axes:{
					  xaxis:{min:0, max:max_x, numberTicks:input["n_x"] }, 
					  yaxis:{min:0, max:max_val, numberTicks:input["n_ticks"] },  
					  y2axis:{
						  min:0, 
						  max:max_val, 
						  numberTicks:input["n_ticks"] , 
						  tickOptions:{showGridline:false}
					  }, 
					  y3axis:{}
				  } 
				  
			  });
			  
	output["sum"] = sum_actual;
	
	return output;
}

/*
 * Function name : plot_date
 * 
 * functionality similar to plot() except for the fact that x values here are string containing dates.
 */
function plot_date(input)
{
	var exp_arr = new Array();//array to store expectaion values
	
	var sum_actual = 0;//sum of actual values of the data points 
	
	var sum_exp = 0;//sum of expectation values of data points
	
	var max_val = 0;//maximum value of data points(to determine maximum range on y axis)
	
		for(j=0;j<input["data"] .length;j++)
		{
			exp_arr[j] = new Array();
			
			if(j==0) sum_actual += input["data"][j][1];
			else 
				sum_actual += input["data"][j-1][1] ;

			if(j==0) exp_arr [j][1] = sum_actual;
			else
				exp_arr [j][1] = sum_actual * input["imp_f"]  / (j+1) ;
				
			exp_arr [j][0] = input["data"] [j][0] ;
				
			sum_exp += exp_arr [j][1];
			
			max_val = input["data"] [j][1]>max_val? input["data"] [j][1] : max_val;
			max_val = exp_arr [j][1]>max_val? exp_arr [j][1] : max_val;
		}
		var output = new Array();
		output["si"]  = sum_actual / sum_exp;
		plots  = $.jqplot(input["target_id"] , [input["data"] , exp_arr ], { 
				  title:input["title"] , 
				  seriesDefaults: {showMarker:false}, 
				  series:[
					  {},
					  {yaxis:'y2axis'}, 
					  {yaxis:'y3axis'}
				  ], 
				  highlighter: {
					show: true,
					sizeAdjust: 7.5
				  },
				  cursor: {
					show: false,
				  }, 
				  axesDefaults:{useSeriesColor: true}, 
				  axes:{
					  xaxis:{renderer:$.jqplot.DateAxisRenderer}, 
					  yaxis:{min:0, max:max_val, numberTicks:input["n_ticks"] },  
					  y2axis:{
						  min:0, 
						  max:max_val, 
						  numberTicks:input["n_ticks"] , 
						  tickOptions:{showGridline:false}
					  }, 
					  y3axis:{}
				  } 
				  
			  });
			  
	output["sum"] = sum_actual;
	
	return output;
}