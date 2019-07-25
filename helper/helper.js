const converter = {
	// convert list of object to an array
    O2A: function(data){
		 const converted = []
	 	//LOOPING EACH CHILD AND PUSHING TO ARRAY
         for (const [key, value] of Object.entries(data.val())) {
                   value['object_key'] = key;
                   converted.push(value);
          } 
		  return converted;
    },

	// Reverse array supplied
    ReverseO2A: function(data){
			  return data.reverse();
    },

    // Return the first Item in the array
   FirstO2A : function(data){
         return data[0];
     },

   // Return the last Item in the array
   LastO2A : function(data){
         return data.slice(-1)[0];
     },

     // Return N number of items in array
  	GetNO2A: function(data, number){
         return data.slice(0, number);
     },

    // get total count of data in array
     CountO2A:function(data){
       return  data.length
     }

}

export default converter;