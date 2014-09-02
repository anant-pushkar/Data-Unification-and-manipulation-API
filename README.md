Data-Unification-and-manipulation-API
=====================================

Plugin to help developers make better analytical tools
<blockquote>
			<div class="well">
				<h3>
					What does this API do?
				</h3>
				This is a simple and easy to learn plugin to help developers make better analytical tools by :
				<ul>
					<li>
						Dynamically extrapolating the expectation values based on the past trends in parameter count.
					</li>
					<li>
						Unification of data points into one value that can be controled using constants , and hence give the user full control over the graphical representation of the data points.
					</li>
				</ul>
				<br>
				<br>
				<h3>
					Who is this API for?
				</h3>
				This API is for developers who are building analytical tools based on web technologies. This may be for a social networking site , some online event , or some educational site.
				The scope for appilcation is vast .
				<br>
				<br>
				<hr>
			</div>
			<div class="page-header">
				<h1>
					Class Reference
					<small>Doing it in the OOP way</small>
				</h1>
				
			</div>
		<div class="row">
				
			<div class="span5 well">
				
				<h3>The "data_object" class</h3>
				Like any other javascript class "index_object" class is innitialized as :
				<br><br>
				<div class="well">
					  var test_data1 = new data_object();
				</div>
				Next you need to pass the data points in the form of an array as shown:
</blockquote>
```code
					 var input_1 = [[0.0,85.0],
					 		[10.0,187.4],
					 		[20.0,190.0],
					 		[30.0,191.3],
					 		[40.1,193.5],
					 		[50.0,194.1],
					 		[60.0,195.4]
					 		 ];
					 
					 test_data1.data = input_1;
```
<blockquote>				
				Next specify the target id where you wish the graph to be shown : 
</blockquote>
```code
					test_data1.target_id = "chart1";
```
<blockquote>
				Next call plot_data function on onload event of the body :
</blockquote>
```code
					test_data1.plot_data();
```
<blockquote>
				Now place the canvas inside the div with the target id as innitialised in the object where ever you want the graph in the page. You can specify whatever height and width you want the graph to have here , 
				otherwise simply copy and paste the codes : 
</blockquote>
```code
					<div class="jqplot-target" id="chart1" style="height: 300px; width: 600px; position: relative;>;
						<canvas class="jqplot-base-canvas" style="position: absolute;</div> <div style="text-indent: 5em;">left: 0px; top: 0px;" height="300" width="600" >
						</canvas>
					</div>;
```
<blockquote>
				And that is it. You can now plot any data on the graph with expectation values.
			</div>
			
			<div class="span5 well">
				<h3>The "index_object" class</h3>
				This class is used to unify the data from other data_objects into one index. It can be unnitialised as :
				<br><br>
</blockquote>
```code
					  var test= new index_object();
```
<blockquote>
				Next you need to add data to this object. This class accepts the data from other data_objects only and does not take a raw array as input. This can be easily done using add function as below :
</blockquote>
```code
					test.add(test_data1);<br>
	  				test.add(test_data2);
```
<blockquote>
				Now , like the data_object you need to specify the id where the graph must be printed :
</blockquote>
```code
					test.index.target_id = "chart3";
```
<blockquote>
					<i>Also, it is worth noting that test.index is another instance of data_object class. So , all methods and variables of data_object class apply to test.index object as well.</i>
				</div> 
				Now, you need to calculate the unified values and plot the graph . This is done by make and plot functions respectively.
</blockquote>
```code
					test.make();<br>
	 				test.plot();<br>
```
<blockquote>
	 				<i>
	 					We could have alternatively called test.index.plot_data(); here to plot the graph. However, the class has its own function to do this task.
	 				</i>
				</div>
				Now very much like data_object class , you need to make a div and a canvas to print the graph . This is done in a similar way as in data_object class.
				<br><br>
			</div>
		</div>
		<div class="well span10">
			Apart from the methods mentioned above , the data_object class has its own set of variables that you can set on your own to have a better controle over the graphs that you print.These
			are tabulated below:<br>
			<div align="center">
				<table allign="center" border="2px;">
					<tbody><tr>
						<th>Property name</th>
						<th>Input type</th>
						<th>Accepted inputs</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>y_type</td>
						<td>text</td>	
						<td>
							<ul>
								<li>"date"</li>
								<li>"num"</li>
							</ul>
						</td>
						<td>
							Used to specify what kind of data will be represented on the y-axis of the graph. You need to set this to "date" in order to plot dates on the y-axis. 
						</td>			
					</tr>
					<tr>
						<td>data</td>	
						<td>Array</td>			
						<td>Array of data points each having one value for both the axes each.</td>	
						<td>Used to pass the data points to the object</td>
					</tr>
					<tr>
						<td>target_id</td>
						<td>text</td>
						<td>id of a div present in the HTML</td>
						<td>Used to specify the location where the graph must be printed</td>
					</tr>
					<tr>
						<td>x_ticks</td>
						<td>unsigned integer</td>
						<td>-</td>
						<td>Number of divisions that should appear on the x-axis.Its default value is 5.</td>
					</tr>
					<tr>
						<td>y_ticks</td>
						<td>unsigned integer</td>
						<td>-</td>
						<td>Number of divisions that should appear on the y-axis.Its default value is 5.</td>
					</tr>
					<tr>
						<td>title</td>
						<td>text</td>
						<td>-</td>
						<td>Title of the graph.</td>
					</tr>
					<tr>
						<td>success_index</td>
						<td>not an input parameter</td>
						<td>not an input parameter</td>
						<td>It is a number between 0 and 1 which tell to what extentthe expected growth was acheived. It is innitialised only after plot_data function is called.</td>
					</tr>
					<tr>
						<td>local</td>
						<td>float</td>
						<td>positive non-zero values</td>
						<td>This is the local constant used to  unify the data. Its default value is set to zero. </td>
					</tr>
					<tr>
						<td>global</td>
						<td>float</td>
						<td>positive non-zero values</td>
						<td>This is the global constant used to  unify the data. Its default value is set to zero. </td>
					</tr>
					<tr>
						<td>scale</td>
						<td>float</td>
						<td>positive non-zero values</td>
						<td>This is the scaling constant used to  unify the data.Its default value is set to one. </td>
					</tr>
					<tr>
						<td>global_count</td>
						<td>float</td>
						<td>positive non-zero values</td>
						<td>This is the total parameter count till now. By default, it is innitialised to the total sum of the counts in the array of concern. you can set it to the value you desire the function to unify the data with respect to . </td>
					</tr>
				</tbody></table>
			</div>
		</div>
		
	</div>
	
	</div></body>
</blockquote>
