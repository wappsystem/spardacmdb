(function(){
    var modules={
        "panel-main-spardac":    			{url:"$A/spardacmdb/components/panel/panel-main.html",router:1},
        "panel-child-spardac":    			{url:"$A/spardacmdb/components/panel/panel-child.html"},
        
        "participant-data":   		{url:"$A/spardacmdb/components/participant/participant-data.html",Table:"spardac-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-spardac",
                                            questionnaire_setup:"online-questionnaire-setup-spardac",
                                            online_questionnaire:"online-questionnaire-app-spardac",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$A/spardacmdb/components/participant/participant-form.html",Table:"spardac-participant"},

        "online-questionnaire-setup-spardac": 	{url:"$A/spardacmdb/online-questionnaire/components/online-questionnaire-setup.html",Table:"spardac-participant"},
        "online-questionnaire-app-spardac":    {url:"$A/spardacmdb/online-questionnaire/index.html"},

        "notes":  		  	  			{url:"$A/modules/mdb/n/notes.html"},

        "randomisation-table-data-spardac":		{url:"$A/modules/mdb/r/randomisation-table-data.html",Table:"randomisation-table-spardac",form_module:"randomisation-table-form-spardac"},
        "randomisation-table-form-spardac":		{url:"$A/modules/mdb/r/randomisation-table-form.html",Table:"randomisation-table-spardac"},

        "dynamic-text-form-data-spardac":		{url:"$A/modules/mdb/d/dynamic-text-form-data.html",Table:"dynamic-text-form-spardac",form_module:"dynamic-text-form-form-spardac"},
        "dynamic-text-form-form-spardac":		{url:"$A/modules/mdb/d/dynamic-text-form-form.html",Table:"dynamic-text-form-spardac"},
        "upload-file-data-spardac":		        {url:"$A/modules/mdb/u/upload-file-data.html",Table:"upload-file-spardac",form_module:"upload-file-form-spardac"},
        "upload-file-form-spardac":		        {url:"$A/modules/mdb/u/upload-file-form.html",Table:"upload-file-spardac"},
        "read-data-from-file-data-spardac":		{url:"$A/modules/mdb/r/read-data-from-file-data.html",Table:"read-data-from-file-spardac",form_module:"read-data-from-file-form-spardac"},
        "read-data-from-file-form-spardac":		{url:"$A/modules/mdb/r/read-data-from-file-form.html",Table:"read-data-from-file-spardac"},
        "one-many-standard-data-spardac":	    {url:"$A/modules/mdb/o/one-many-standard-data.html",Table:"one-many-standard-spardac",form_module:"one-many-standard-form-spardac"},
        "one-many-standard-form-spardac":	    {url:"$A/modules/mdb/o/one-many-standard-form.html",Table:"one-many-standard-spardac",task_name:"One of many choice - Standard"},
        "one-many-special-1-data-spardac":	    {url:"$A/modules/mdb/o/one-many-special-1-data.html",Table:"one-many-special-1-spardac",form_module:"one-many-special-1-form-spardac"},
        "one-many-special-1-form-spardac":	    {url:"$A/modules/mdb/o/one-many-special-1-form.html",Table:"one-many-special-1-spardac",task_name:"One of many choice - Special type 1"},
        "one-many-special-2-data-spardac":	    {url:"$A/modules/mdb/o/one-many-special-2-data.html",Table:"one-many-special-2-spardac",form_module:"one-many-special-2-form-spardac"},
        "one-many-special-2-form-spardac":	    {url:"$A/modules/mdb/o/one-many-special-2-form.html",Table:"one-many-special-2-spardac",task_name:"One of many choice - Special type 2"},

        "textarea-data-spardac":                {url:"$A/modules/mdb/t/textarea-data.html",Table:"textarea-spardac",form_module:"textarea-form-spardac"},
        "textarea-form-spardac":                {url:"$A/modules/mdb/t/textarea-form.html",Table:"textarea-spardac",task_name:"Multiple lines text inputs"},
        "many-of-many-data-spardac":            {url:"$A/modules/mdb/m/many-of-many-data.html",Table:"many-of-many-spardac",form_module:"many-of-many-form-spardac"},
        "many-of-many-form-spardac":            {url:"$A/modules/mdb/m/many-of-many-form.html",Table:"many-of-many-spardac",task_name:"Many of many choices - Standard"},

        "calculation-data-spardac":             {url:"$A/modules/mdb/c/calculation-data.html",Table:"calculation-spardac",form_module:"calculation-form-spardac"},
        "calculation-form-spardac":             {url:"$A/modules/mdb/c/calculation-form.html",Table:"calculation-spardac",task_name:"Number input with calculation"},
        "visual-analogue-scale-data-spardac":   {url:"$A/modules/mdb/v/visual-analogue-scale-data.html",Table:"visual-analogue-scale-spardac",form_module:"visual-analogue-scale-form-spardac"},
        "visual-analogue-scale-form-spardac":   {url:"$A/modules/mdb/v/visual-analogue-scale-form.html",Table:"visual-analogue-scale-spardac",task_name:"Visual analogue scale"},
        "digital-scale-data-spardac":           {url:"$A/modules/mdb/d/digital-scale-data.html",Table:"digital-scale-spardac",form_module:"digital-scale-form-spardac"},
        "digital-scale-form-spardac":           {url:"$A/modules/mdb/d/digital-scale-form.html",Table:"digital-scale-spardac",task_name:"Digital scale"},
        "star-rating-data-spardac":             {url:"$A/modules/mdb/s/star-rating-data.html",Table:"star-rating-spardac",form_module:"star-rating-form-spardac"},
        "star-rating-form-spardac":             {url:"$A/modules/mdb/s/star-rating-form.html",Table:"star-rating-spardac",task_name:"Star rating"},
    
        "date-time-data-spardac":   	{url:"$A/modules/mdb/d/date-time-data.html",Table:"date-time-spardac",form_module:"date-time-form-spardac"},
        "date-time-form-spardac":   	{url:"$A/modules/mdb/d/date-time-form.html",Table:"date-time-spardac",task_name:"Date/time inputs"},
        "number-max-min-data-spardac":   {url:"$A/modules/mdb/n/numbers-data.html",Table:"number-max-min-spardac",form_module:"number-max-min-form-spardac"},
        "number-max-min-form-spardac":   {url:"$A/modules/mdb/n/numbers-form.html",Table:"number-max-min-spardac",task_name:"Number min/max inputs"},

        "concom-medication-data-spardac":   {url:"$A/modules/mdb/c/concom-medication-data.html",Table:"concom-medication-spardac",form_module:"concom-medication-form-spardac"},
        "concom-medication-form-spardac":   {url:"$A/modules/mdb/c/concom-medication-form.html",Table:"concom-medication-spardac"},
        "adverse-event-data-spardac":   {url:"$A/modules/mdb/a/adverse-event-data.html",Table:"adverse-event-spardac",form_module:"adverse-event-form-spardac"},
        "adverse-event-form-spardac":   {url:"$A/modules/mdb/a/adverse-event-form.html",Table:"adverse-event-spardac"}
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
