(function(){
    var modules={
        "panel-main-spardac":    			{url:"$A/components/panel/panel-main.html",router:1},
        "panel-library-spardac":    			{url:"$A/components/panel/panel-library.html",router:1},
        "panel-child-spardac":    			{url:"$A/components/panel/panel-child.html"},
        
        "participant-data":   		{url:"$A/components/participant/participant-data.html",Table:"spardac-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-spardac",
                                            questionnaire_setup:"online-questionnaire-setup-spardac",
                                            online_questionnaire:"online-questionnaire-app-spardac",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$A/components/participant/participant-form.html",Table:"spardac-participant"},

        "online-questionnaire-setup-spardac": 	{url:"$A/online-questionnaire/components/online-questionnaire-setup.html",Table:"spardac-participant"},
        "online-questionnaire-app-spardac":    {url:"$A/online-questionnaire/index.html"},

        "notes":  		  	  			{url:"$B/mdb/n/notes.html"},

        "randomisation-table-data-spardac":		{url:"$B/mdb/r/randomisation-table-data.html",Table:"randomisation-table-spardac",form_module:"randomisation-table-form-spardac"},
        "randomisation-table-form-spardac":		{url:"$B/mdb/r/randomisation-table-form.html",Table:"randomisation-table-spardac"},

        "dynamic-text-form-data-spardac":		{url:"$B/mdb/d/dynamic-text-form-data.html",Table:"dynamic-text-form-spardac",form_module:"dynamic-text-form-form-spardac"},
        "dynamic-text-form-form-spardac":		{url:"$B/mdb/d/dynamic-text-form-form.html",Table:"dynamic-text-form-spardac"},
        "upload-file-data-spardac":		        {url:"$B/mdb/u/upload-file-data.html",Table:"upload-file-spardac",form_module:"upload-file-form-spardac"},
        "upload-file-form-spardac":		        {url:"$B/mdb/u/upload-file-form.html",Table:"upload-file-spardac"},
        "read-data-from-file-data-spardac":		{url:"$B/mdb/r/read-data-from-file-data.html",Table:"read-data-from-file-spardac",form_module:"read-data-from-file-form-spardac"},
        "read-data-from-file-form-spardac":		{url:"$B/mdb/r/read-data-from-file-form.html",Table:"read-data-from-file-spardac"},
        "one-many-standard-data-spardac":	    {url:"$B/mdb/o/one-many-standard-data.html",Table:"one-many-standard-spardac",form_module:"one-many-standard-form-spardac"},
        "one-many-standard-form-spardac":	    {url:"$B/mdb/o/one-many-standard-form.html",Table:"one-many-standard-spardac",task_name:"One of many choice - Standard"},
        "one-many-special-1-data-spardac":	    {url:"$B/mdb/o/one-many-special-1-data.html",Table:"one-many-special-1-spardac",form_module:"one-many-special-1-form-spardac"},
        "one-many-special-1-form-spardac":	    {url:"$B/mdb/o/one-many-special-1-form.html",Table:"one-many-special-1-spardac",task_name:"One of many choice - Special type 1"},
        "one-many-special-2-data-spardac":	    {url:"$B/mdb/o/one-many-special-2-data.html",Table:"one-many-special-2-spardac",form_module:"one-many-special-2-form-spardac"},
        "one-many-special-2-form-spardac":	    {url:"$B/mdb/o/one-many-special-2-form.html",Table:"one-many-special-2-spardac",task_name:"One of many choice - Special type 2"},

        "textarea-data-spardac":                {url:"$B/mdb/t/textarea-data.html",Table:"textarea-spardac",form_module:"textarea-form-spardac"},
        "textarea-form-spardac":                {url:"$B/mdb/t/textarea-form.html",Table:"textarea-spardac",task_name:"Multiple lines text inputs"},
        "many-of-many-data-spardac":            {url:"$B/mdb/m/many-of-many-data.html",Table:"many-of-many-spardac",form_module:"many-of-many-form-spardac"},
        "many-of-many-form-spardac":            {url:"$B/mdb/m/many-of-many-form.html",Table:"many-of-many-spardac",task_name:"Many of many choices - Standard"},

        "calculation-data-spardac":             {url:"$B/mdb/c/calculation-data.html",Table:"calculation-spardac",form_module:"calculation-form-spardac"},
        "calculation-form-spardac":             {url:"$B/mdb/c/calculation-form.html",Table:"calculation-spardac",task_name:"Number input with calculation"},
        "visual-analogue-scale-data-spardac":   {url:"$B/mdb/v/visual-analogue-scale-data.html",Table:"visual-analogue-scale-spardac",form_module:"visual-analogue-scale-form-spardac"},
        "visual-analogue-scale-form-spardac":   {url:"$B/mdb/v/visual-analogue-scale-form.html",Table:"visual-analogue-scale-spardac",task_name:"Visual analogue scale"},
        "digital-scale-data-spardac":           {url:"$B/mdb/d/digital-scale-data.html",Table:"digital-scale-spardac",form_module:"digital-scale-form-spardac"},
        "digital-scale-form-spardac":           {url:"$B/mdb/d/digital-scale-form.html",Table:"digital-scale-spardac",task_name:"Digital scale"},
        "star-rating-data-spardac":             {url:"$B/mdb/s/star-rating-data.html",Table:"star-rating-spardac",form_module:"star-rating-form-spardac"},
        "star-rating-form-spardac":             {url:"$B/mdb/s/star-rating-form.html",Table:"star-rating-spardac",task_name:"Star rating"},
    
        "date-time-data-spardac":   	{url:"$B/mdb/d/date-time-data.html",Table:"date-time-spardac",form_module:"date-time-form-spardac"},
        "date-time-form-spardac":   	{url:"$B/mdb/d/date-time-form.html",Table:"date-time-spardac",task_name:"Date/time inputs"},
        "number-max-min-data-spardac":   {url:"$B/mdb/n/numbers-data.html",Table:"number-max-min-spardac",form_module:"number-max-min-form-spardac"},
        "number-max-min-form-spardac":   {url:"$B/mdb/n/numbers-form.html",Table:"number-max-min-spardac",task_name:"Number min/max inputs"},

        "concom-medication-data-spardac":   {url:"$B/mdb/c/concom-medication-data.html",Table:"concom-medication-spardac",form_module:"concom-medication-form-spardac"},
        "concom-medication-form-spardac":   {url:"$B/mdb/c/concom-medication-form.html",Table:"concom-medication-spardac"},
        "adverse-event-data-spardac":   {url:"$B/mdb/a/adverse-event-data.html",Table:"adverse-event-spardac",form_module:"adverse-event-form-spardac"},
        "adverse-event-form-spardac":   {url:"$B/mdb/a/adverse-event-form.html",Table:"adverse-event-spardac"},

        "dass-data-spardac":   {url:"$B/mdb/d/dass-data.html",Table:"dass-spardac",form_module:"dass-form-spardac"},
        "dass-form-spardac":   {url:"$B/mdb/d/dass-form.html",Table:"dass-spardac"},
        "anthropometry-age-sex-data-spardac":   {url:"$B/mdb/a/anthropometry-age-sex-data.html",Table:"anthropometry-age-sex-spardac",form_module:"anthropometry-age-sex-form-spardac"},
        "anthropometry-age-sex-form-spardac":   {url:"$B/mdb/a/anthropometry-age-sex-form.html",Table:"anthropometry-age-sex-spardac"},
        "ethnicity-data-spardac":   {url:"$B/mdb/e/ethnicity-data.html",Table:"ethnicity-spardac",form_module:"ethnicity-form-spardac"},
        "ethnicity-form-spardac":   {url:"$B/mdb/e/ethnicity-form.html",Table:"ethnicity-spardac"},
        "ess-data-spardac":   {url:"$B/mdb/e/ess-data.html",Table:"ess-spardac",form_module:"ess-form-spardac"},
        "ess-form-spardac":   {url:"$B/mdb/e/ess-form.html",Table:"ess-spardac"},
        "gad7-data-spardac":   {url:"$B/mdb/g/gad7-data.html",Table:"gad7-spardac",form_module:"gad7-form-spardac"},
        "gad7-form-spardac":   {url:"$B/mdb/g/gad7-form.html",Table:"gad7-spardac"},
        "fosq-data-spardac":   {url:"$B/mdb/f/fosq-data.html",Table:"fosq-spardac",form_module:"fosq-form-spardac"},
        "fosq-form-spardac":   {url:"$B/mdb/f/fosq-form.html",Table:"fosq-spardac"},
        "fss-data-spardac":   {url:"$B/mdb/f/fss-data.html",Table:"fss-spardac",form_module:"fss-form-spardac"},
        "fss-form-spardac":   {url:"$B/mdb/f/fss-form.html",Table:"fss-spardac"},
        "isi-data-spardac":   {url:"$B/mdb/i/isi-data.html",Table:"isi-spardac",form_module:"isi-form-spardac"},
        "isi-form-spardac":   {url:"$B/mdb/i/isi-form.html",Table:"isi-spardac"},
        "lifestyle-data-spardac":   {url:"$B/mdb/l/lifestyle-data.html",Table:"lifestyle-spardac",form_module:"lifestyle-form-spardac"},
        "lifestyle-form-spardac":   {url:"$B/mdb/l/lifestyle-form.html",Table:"lifestyle-spardac"},
        "me-data-spardac":   {url:"$B/mdb/l/me-data.html",Table:"me-spardac",form_module:"me-form-spardac"},
        "me-form-spardac":   {url:"$B/mdb/l/me-form.html",Table:"me-spardac"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
