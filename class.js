function data_object()
{
	this.y_type;
	this.data = new Array();
	this.imp_factor = 1.2;
	this.target_id = "";
	this.x_ticks = 5;
	this.y_ticks = 5;
	this.title = "";
	this.success_index = 0;
	this.data_sum = 1;
	this.input_arr = new Array();
	this.output_arr = new Array();
	this.local = 0;
	this.global = 0;
	this.scale = 1;
	this.global_count = this.data_sum;

	
	
	this.plot_data = function()
	{
		this.input_arr["imp_f"] = this.imp_factor ;
		this.input_arr["target_id"] = this.target_id ;
		this.input_arr["n_ticks"] = this.y_ticks ;
		this.input_arr["n_x"] = this.x_ticks;
		this.input_arr["title"] = this.title;
		this.input_arr["data"] = this.data;
		
		if(this.y_type == "date")
			this.output_arr = plot_date(this.input_arr);
		else
			this.output_arr = plot(this.input_arr);
		
		this.success_index = this.output_arr["si"];
		this.data_sum = this.output_arr["sum"];
	}
	
}

function index_object()
{
	this.data_arr = new Array();
	this.index = new data_object(); 
	
	this.add = function(data_instance)
	{
		this.data_arr.push(data_instance);
	}
	
	this.make = function()
	{
		this.index.data = new Array();
		for(j=0;j<this.data_arr[0].data.length;j++)
		{
			this.index.data[j] = new Array();
			this.index.data[j][0] = this.data_arr[0].data[j][0];
			this.index.data[j][1] = 0;
			for(i=0;i<this.data_arr.length;i++)
			{
				this.data_arr[i].global_count = this.data_arr[i].global_count >0 ? this.data_arr[i].global_count : this.data_arr[i].data_sum ;
				this.index.data[j][1] += (this.data_arr[i].data[j][1]/this.data_arr[i].data_sum + this.data_arr[i].local) * (this.data_arr[i].data[j][1]/this.data_arr[i].global_count + this.data_arr[i].global);
			}
		}
	}
	
	this.plot = function()
	{
		this.index.plot_data();
	}
}




