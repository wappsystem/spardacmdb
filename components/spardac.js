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
        "serious-adverse-event-data-spardac":   {url:"$B/mdb/s/serious-adverse-event-data.html",Table:"serious-adverse-event-spardac",form_module:"serious-adverse-event-form-spardac"},
        "serious-adverse-event-form-spardac":   {url:"$B/mdb/s/serious-adverse-event-form.html",Table:"serious-adverse-event-spardac"},
        "serious-adverse-event-follow-up-data-spardac":   {url:"$B/mdb/s/serious-adverse-event-follow-up-data.html",Table:"serious-adverse-event-follow-up-spardac",form_module:"serious-adverse-event-follow-up-form-spardac"},
        "serious-adverse-event-follow-up-form-spardac":   {url:"$B/mdb/s/serious-adverse-event-follow-up-form.html",Table:"serious-adverse-event-follow-up-spardac"},

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
        "me-data-spardac":   {url:"$B/mdb/m/me-data.html",Table:"me-spardac",form_module:"me-form-spardac"},
        "me-form-spardac":   {url:"$B/mdb/m/me-form.html",Table:"me-spardac"},
        "map-data-spardac":   {url:"$B/mdb/m/map-data.html",Table:"map-spardac",form_module:"map-form-spardac"},
        "map-form-spardac":   {url:"$B/mdb/m/map-form.html",Table:"map-spardac"},
        "medical-history-data-spardac":   {url:"$B/mdb/m/medical-history-data.html",Table:"medical-history-spardac",form_module:"medical-history-form-spardac"},
        "medical-history-form-spardac":   {url:"$B/mdb/m/medical-history-form.html",Table:"medical-history-spardac"},
        "medications-data-spardac":   {url:"$B/mdb/m/medications-data.html",Table:"medications-spardac",form_module:"medications-form-spardac"},
        "medications-form-spardac":   {url:"$B/mdb/m/medications-form.html",Table:"medications-spardac"},
        "phq-data-spardac":   {url:"$B/mdb/p/phq-data.html",Table:"phq-spardac",form_module:"phq-form-spardac"},
        "phq-form-spardac":   {url:"$B/mdb/p/phq-form.html",Table:"phq-spardac"},
        "psqi-data-spardac":   {url:"$B/mdb/p/psqi-data.html",Table:"psqi-spardac",form_module:"psqi-form-spardac"},
        "psqi-form-spardac":   {url:"$B/mdb/p/psqi-form.html",Table:"psqi-spardac"},
        "rec-drug-data-spardac":   {url:"$B/mdb/r/rec-drug-data.html",Table:"rec-drug-spardac",form_module:"rec-drug-form-spardac"},
        "rec-drug-form-spardac":   {url:"$B/mdb/r/rec-drug-form.html",Table:"rec-drug-spardac"},
        "restless-leg-data-spardac":   {url:"$B/mdb/r/restless-leg-data.html",Table:"restless-leg-spardac",form_module:"restless-leg-form-spardac"},
        "restless-leg-form-spardac":   {url:"$B/mdb/r/restless-leg-form.html",Table:"restless-leg-spardac"},
        "sds-data-spardac":   {url:"$B/mdb/s/sds-data.html",Table:"sds-spardac",form_module:"sds-form-spardac"},
        "sds-form-spardac":   {url:"$B/mdb/s/sds-form.html",Table:"sds-spardac"},
        "sdp-data-spardac":   {url:"$B/mdb/s/sdp-data.html",Table:"sdp-spardac",form_module:"sdp-form-spardac"},
        "sdp-form-spardac":   {url:"$B/mdb/s/sdp-form.html",Table:"sdp-spardac"},
        "shi-data-spardac":   {url:"$B/mdb/s/shi-data.html",Table:"shi-spardac",form_module:"shi-form-spardac"},
        "shi-form-spardac":   {url:"$B/mdb/s/shi-form.html",Table:"shi-spardac"},
        "dsst-data-spardac":   {url:"$B/mdb/neurocog/dsst-data.html",Table:"dsst-spardac",form_module:"dsst-form-spardac"},
        "dsst-form-spardac":   {url:"$B/mdb/neurocog/dsst-form.html",Table:"dsst-spardac"},
        "finger-tapping-data-spardac":   {url:"$B/mdb/neurocog/finger-tapping-data.html",Table:"finger-tapping-spardac",form_module:"finger-tapping-form-spardac"},
        "finger-tapping-form-spardac":   {url:"$B/mdb/neurocog/finger-tapping-form.html",Table:"finger-tapping-spardac"},
        "letter-cancellation-data-spardac":   {url:"$B/mdb/neurocog/letter-cancellation-data.html",Table:"letter-cancellation-spardac",form_module:"letter-cancellation-form-spardac"},
        "letter-cancellation-form-spardac":   {url:"$B/mdb/neurocog/letter-cancellation-form.html",Table:"letter-cancellation-spardac"},
        "nback1-data-spardac":   {url:"$B/mdb/neurocog/nback1-data.html",Table:"nback1-spardac",form_module:"nback1-form-spardac"},
        "nback1-form-spardac":   {url:"$B/mdb/neurocog/nback1-form.html",Table:"nback1-spardac"},
        "nback2-data-spardac":   {url:"$B/mdb/neurocog/nback2-data.html",Table:"nback2-spardac",form_module:"nback2-form-spardac"},
        "nback2-form-spardac":   {url:"$B/mdb/neurocog/nback2-form.html",Table:"nback2-spardac"},
        "nback3-data-spardac":   {url:"$B/mdb/neurocog/nback3-data.html",Table:"nback3-spardac",form_module:"nback3-form-spardac"},
        "nback3-form-spardac":   {url:"$B/mdb/neurocog/nback3-form.html",Table:"nback3-spardac"},
        "stroop-colour-data-spardac":   {url:"$B/mdb/neurocog/stroop-colour-data.html",Table:"stroop-colour-spardac",form_module:"stroop-colour-form-spardac"},
        "stroop-colour-form-spardac":   {url:"$B/mdb/neurocog/stroop-colour-form.html",Table:"stroop-colour-spardac"},
        "stroop-text-data-spardac":   {url:"$B/mdb/neurocog/stroop-text-data.html",Table:"stroop-text-spardac",form_module:"stroop-text-form-spardac"},
        "stroop-text-form-spardac":   {url:"$B/mdb/neurocog/stroop-text-form.html",Table:"stroop-text-spardac"},
        "tower-london-data-spardac":   {url:"$B/mdb/neurocog/tower-london-data.html",Table:"tower-london-spardac",form_module:"tower-london-form-spardac"},
        "tower-london-form-spardac":   {url:"$B/mdb/neurocog/tower-london-form.html",Table:"tower-london-spardac"},
        "bpns-data-spardac":   {url:"$B/mdb/b/bpns-data.html",Table:"bpns-spardac",form_module:"bpns-form-spardac"},
        "bpns-form-spardac":   {url:"$B/mdb/b/bpns-form.html",Table:"bpns-spardac"},
        "gses-data-spardac":   {url:"$B/mdb/g/gses-data.html",Table:"gses-spardac",form_module:"gses-form-spardac"},
        "gses-form-spardac":   {url:"$B/mdb/g/gses-form.html",Table:"gses-spardac"},
        "hpq-data-spardac":   {url:"$B/mdb/h/hpq-data.html",Table:"hpq-spardac",form_module:"hpq-form-spardac"},
        "hpq-form-spardac":   {url:"$B/mdb/h/hpq-form.html",Table:"hpq-spardac"},
        "poms-data-spardac":   {url:"$B/mdb/p/poms-data.html",Table:"poms-spardac",form_module:"poms-form-spardac"},
        "poms-form-spardac":   {url:"$B/mdb/p/poms-form.html",Table:"poms-spardac"},
        "kss-data-spardac":   {url:"$B/mdb/k/kss-data.html",Table:"kss-spardac",form_module:"kss-form-spardac"},
        "kss-form-spardac":   {url:"$B/mdb/k/kss-form.html",Table:"kss-spardac"},
        "medical-history-short-data-spardac":   {url:"$B/mdb/m/medical-history-short-data.html",Table:"medical-history-short-spardac",form_module:"medical-history-short-form-spardac"},
        "medical-history-short-form-spardac":   {url:"$B/mdb/m/medical-history-short-form.html",Table:"medical-history-short-spardac"},
        "sleep-history-data-spardac":   {url:"$B/mdb/s/sleep-history-data.html",Table:"sleep-history-spardac",form_module:"sleep-history-form-spardac"},
        "sleep-history-form-spardac":   {url:"$B/mdb/s/sleep-history-form.html",Table:"sleep-history-spardac"},
        "ffs-data-spardac":   {url:"$B/mdb/f/ffs-data.html",Table:"ffs-spardac",form_module:"ffs-form-spardac"},
        "ffs-form-spardac":   {url:"$B/mdb/f/ffs-form.html",Table:"ffs-spardac"},
        "actiwatch-data-spardac":   {url:"$B/mdb/a/actiwatch-data.html",Table:"actiwatch-spardac",form_module:"actiwatch-form-spardac"},
        "actiwatch-form-spardac":   {url:"$B/mdb/a/actiwatch-form.html",Table:"actiwatch-spardac"},
        "eq-5d-data-spardac":   {url:"$B/mdb/e/eq-5d-data.html",Table:"eq-5d-spardac",form_module:"eq-5d-form-spardac"},
        "eq-5d-form-spardac":   {url:"$B/mdb/e/eq-5d-form.html",Table:"eq-5d-spardac"},
        "sf36-data-spardac":   {url:"$B/mdb/s/sf36-data.html",Table:"sf36-spardac",form_module:"sf36-form-spardac"},
        "sf36-form-spardac":   {url:"$B/mdb/s/sf36-form.html",Table:"sf36-spardac"},
        "iwqlq-data-spardac":   {url:"$B/mdb/i/iwqlq-data.html",Table:"iwqlq-spardac",form_module:"iwqlq-form-spardac"},
        "iwqlq-form-spardac":   {url:"$B/mdb/i/iwqlq-form.html",Table:"iwqlq-spardac"},
        "brief-illness-perception-questionnaire-data-spardac":   {url:"$B/mdb/b/brief-illness-perception-questionnaire-data.html",Table:"brief-illness-perception-questionnaire-spardac",form_module:"brief-illness-perception-questionnaire-form-spardac"},
        "brief-illness-perception-questionnaire-form-spardac":   {url:"$B/mdb/b/brief-illness-perception-questionnaire-form.html",Table:"brief-illness-perception-questionnaire-spardac"},
        "breif-sexual-function-inventory-data-spardac":   {url:"$B/mdb/b/breif-sexual-function-inventory-data.html",Table:"breif-sexual-function-inventory-spardac",form_module:"breif-sexual-function-inventory-form-spardac"},
        "breif-sexual-function-inventory-form-spardac":   {url:"$B/mdb/b/breif-sexual-function-inventory-form.html",Table:"breif-sexual-function-inventory-spardac"},
        "female-sexual-function-index-data-spardac":   {url:"$B/mdb/f/female-sexual-function-index-data.html",Table:"female-sexual-function-index-spardac",form_module:"female-sexual-function-index-form-spardac"},
        "female-sexual-function-index-form-spardac":   {url:"$B/mdb/f/female-sexual-function-index-form.html",Table:"female-sexual-function-index-spardac"},
        "three-factor-eating-questionnaire-data-spardac":   {url:"$B/mdb/t/three-factor-eating-questionnaire-data.html",Table:"three-factor-eating-questionnaire-spardac",form_module:"three-factor-eating-questionnaire-form-spardac"},
        "three-factor-eating-questionnaire-form-spardac":   {url:"$B/mdb/t/three-factor-eating-questionnaire-form.html",Table:"three-factor-eating-questionnaire-spardac"},
        "glasgow-content-of-thoughts-inventory-data-spardac":   {url:"$B/mdb/g/glasgow-content-of-thoughts-inventory-data.html",Table:"glasgow-content-of-thoughts-inventory-spardac",form_module:"glasgow-content-of-thoughts-inventory-form-spardac"},
        "glasgow-content-of-thoughts-inventory-form-spardac":   {url:"$B/mdb/g/glasgow-content-of-thoughts-inventory-form.html",Table:"glasgow-content-of-thoughts-inventory-spardac"},
        "glasgow-sleep-effort-scale-data-spardac":   {url:"$B/mdb/g/glasgow-sleep-effort-scale-data.html",Table:"glasgow-sleep-effort-scale-spardac",form_module:"glasgow-sleep-effort-scale-form-spardac"},
        "glasgow-sleep-effort-scale-form-spardac":   {url:"$B/mdb/g/glasgow-sleep-effort-scale-form.html",Table:"glasgow-sleep-effort-scale-spardac"},
        "pre-sleep-arousal-scale-data-spardac":   {url:"$B/mdb/p/pre-sleep-arousal-scale-data.html",Table:"pre-sleep-arousal-scale-spardac",form_module:"pre-sleep-arousal-scale-form-spardac"},
        "pre-sleep-arousal-scale-form-spardac":   {url:"$B/mdb/p/pre-sleep-arousal-scale-form.html",Table:"pre-sleep-arousal-scale-spardac"},
        "stanford-sleepiness-scale-data-spardac":   {url:"$B/mdb/s/stanford-sleepiness-scale-data.html",Table:"stanford-sleepiness-scale-spardac",form_module:"stanford-sleepiness-scale-form-spardac"},
        "stanford-sleepiness-scale-form-spardac":   {url:"$B/mdb/s/stanford-sleepiness-scale-form.html",Table:"stanford-sleepiness-scale-spardac"},
        "dbas-16-data-spardac":   {url:"$B/mdb/d/dbas-16-data.html",Table:"dbas-16-spardac",form_module:"dbas-16-form-spardac"},
        "dbas-16-form-spardac":   {url:"$B/mdb/d/dbas-16-form.html",Table:"dbas-16-spardac"},
        "multidimensional-fatigue-symptom-inventory-data-spardac":   {url:"$B/mdb/m/multidimensional-fatigue-symptom-inventory-data.html",Table:"multidimensional-fatigue-symptom-inventory-spardac",form_module:"multidimensional-fatigue-symptom-inventory-form-spardac"},
        "multidimensional-fatigue-symptom-inventory-form-spardac":   {url:"$B/mdb/m/multidimensional-fatigue-symptom-inventory-form.html",Table:"multidimensional-fatigue-symptom-inventory-spardac"},
        "fatigue-symptom-inventory-data-spardac":   {url:"$B/mdb/f/fatigue-symptom-inventory-data.html",Table:"fatigue-symptom-inventory-spardac",form_module:"fatigue-symptom-inventory-form-spardac"},
        "fatigue-symptom-inventory-form-spardac":   {url:"$B/mdb/f/fatigue-symptom-inventory-form.html",Table:"fatigue-symptom-inventory-spardac"},
        "hads-data-spardac":   {url:"$B/mdb/h/hads-data.html",Table:"hads-spardac",form_module:"hads-form-spardac"},
        "hads-form-spardac":   {url:"$B/mdb/h/hads-form.html",Table:"hads-spardac"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
