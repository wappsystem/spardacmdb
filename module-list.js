(function(){
    var modules={
        "panel-main-spardac":    	        {url:"$H/p/panel-main.html",router:1},
        "panel-child-spardac":              {url:"$H/p/panel-child.html"},
        "panel-library-spardac":    			{url:"$H/p/panel-library.html",router:1},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"spardac-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-spardac",
                                                questionnaire_setup:"online-questionnaire-setup-spardac",
                                                online_questionnaire:"online-questionnaire-app-spardac",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"spardac-participant"},

        "online-questionnaire-setup-spardac": {url:"$H/online-questionnaire/m/setup.html",Table:"spardac-participant"},
        "online-questionnaire-app-spardac":   {url:"$H/online-questionnaire/index.html"},

        "notes-data":  	                    {url:"$H/m/notes-data.html",Table:"spardac-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/notes-form.html",Table:"spardac-notes"},

        "randomisation-table-data-spardac":		{url:"$H/m/randomisation-table-data.html",Table:"randomisation-table-spardac",form_module:"randomisation-table-form-spardac"},
        "randomisation-table-form-spardac":		{url:"$H/m/randomisation-table-form.html",Table:"randomisation-table-spardac"},

        "dynamic-text-form-data-spardac":		{url:"$H/m/spardac/dynamic-text-form-data.html",Table:"dynamic-text-form-spardac",form_module:"dynamic-text-form-form-spardac",task_name:"Dynamically generated text inputs from label names"},
        "dynamic-text-form-form-spardac":		{url:"$H/m/spardac/dynamic-text-form-form.html",Table:"dynamic-text-form-spardac"},
        "upload-file-data-spardac":		        {url:"$H/m/spardac/upload-file-data.html",Table:"upload-file-spardac",form_module:"upload-file-form-spardac",task_name:"Upload file"},
        "upload-file-form-spardac":		        {url:"$H/m/spardac/upload-file-form.html",Table:"upload-file-spardac"},
        "read-data-from-file-data-spardac":		{url:"$H/m/spardac/read-data-from-file-data.html",Table:"read-data-from-file-spardac",form_module:"read-data-from-file-form-spardac",task_name:"Read data from file"},
        "read-data-from-file-form-spardac":		{url:"$H/m/spardac/read-data-from-file-form.html",Table:"read-data-from-file-spardac"},
        "one-many-standard-data-spardac":	    {url:"$H/m/spardac/one-many-standard-data.html",Table:"one-many-standard-spardac",form_module:"one-many-standard-form-spardac",task_name:"One of many choice - Standard"},
        "one-many-standard-form-spardac":	    {url:"$H/m/spardac/one-many-standard-form.html",Table:"one-many-standard-spardac",task_name:"One of many choice - Standard"},
        "one-many-special-1-data-spardac":	    {url:"$H/m/spardac/one-many-special-1-data.html",Table:"one-many-special-1-spardac",form_module:"one-many-special-1-form-spardac",task_name:"One of many choice - Special type 1"},
        "one-many-special-1-form-spardac":	    {url:"$H/m/spardac/one-many-special-1-form.html",Table:"one-many-special-1-spardac",task_name:"One of many choice - Special type 1"},
        "one-many-special-2-data-spardac":	    {url:"$H/m/spardac/one-many-special-2-data.html",Table:"one-many-special-2-spardac",form_module:"one-many-special-2-form-spardac",task_name:"One of many choice - Special type 2"},
        "one-many-special-2-form-spardac":	    {url:"$H/m/spardac/one-many-special-2-form.html",Table:"one-many-special-2-spardac",task_name:"One of many choice - Special type 2"},

        "textarea-data-spardac":                {url:"$H/m/spardac/textarea-data.html",Table:"textarea-spardac",form_module:"textarea-form-spardac",task_name:"Multiple lines text inputs"},
        "textarea-form-spardac":                {url:"$H/m/spardac/textarea-form.html",Table:"textarea-spardac",task_name:"Multiple lines text inputs"},
        "many-of-many-data-spardac":            {url:"$H/m/spardac/many-of-many-data.html",Table:"many-of-many-spardac",form_module:"many-of-many-form-spardac",task_name:"Many of many choices"},
        "many-of-many-form-spardac":            {url:"$H/m/spardac/many-of-many-form.html",Table:"many-of-many-spardac",task_name:"Many of many choices - Standard"},

        "calculation-data-spardac":             {url:"$H/m/spardac/calculation-data.html",Table:"calculation-spardac",form_module:"calculation-form-spardac",task_name:"Number input with calculation"},
        "calculation-form-spardac":             {url:"$H/m/spardac/calculation-form.html",Table:"calculation-spardac",task_name:"Number input with calculation"},
        "visual-analogue-scale-data-spardac":   {url:"$H/m/spardac/visual-analogue-scale-data.html",Table:"visual-analogue-scale-spardac",form_module:"visual-analogue-scale-form-spardac",task_name:"Visual analogue scale"},
        "visual-analogue-scale-form-spardac":   {url:"$H/m/spardac/visual-analogue-scale-form.html",Table:"visual-analogue-scale-spardac",task_name:"Visual analogue scale"},
        "digital-scale-data-spardac":           {url:"$H/m/spardac/digital-scale-data.html",Table:"digital-scale-spardac",form_module:"digital-scale-form-spardac",task_name:"Digital scale"},
        "digital-scale-form-spardac":           {url:"$H/m/spardac/digital-scale-form.html",Table:"digital-scale-spardac",task_name:"Digital scale"},
        "star-rating-data-spardac":             {url:"$H/m/spardac/star-rating-data.html",Table:"star-rating-spardac",form_module:"star-rating-form-spardac",task_name:"Star rating"},
        "star-rating-form-spardac":             {url:"$H/m/spardac/star-rating-form.html",Table:"star-rating-spardac",task_name:"Star rating"},
    
        "date-time-data-spardac":   	        {url:"$H/m/spardac/date-time-data.html",Table:"date-time-spardac",form_module:"date-time-form-spardac",task_name:"Date/time inputs"},
        "date-time-form-spardac":   	        {url:"$H/m/spardac/date-time-form.html",Table:"date-time-spardac",task_name:"Date/time inputs"},
        "number-max-min-data-spardac":          {url:"$H/m/spardac/numbers-data.html",Table:"number-max-min-spardac",form_module:"number-max-min-form-spardac",task_name:"Number min/max inputs"},
        "number-max-min-form-spardac":          {url:"$H/m/spardac/numbers-form.html",Table:"number-max-min-spardac",task_name:"Number min/max inputs"},

        "concom-medication-data-spardac":       {url:"$H/m/concom-medication-data.html",Table:"concom-medication-spardac",form_module:"concom-medication-form-spardac",task_name:"Concomitant Medication"},
        "concom-medication-form-spardac":       {url:"$H/m/concom-medication-form.html",Table:"concom-medication-spardac"},
        "adverse-event-data-spardac":           {url:"$H/m/adverse-event-data.html",Table:"adverse-event-spardac",form_module:"adverse-event-form-spardac",task_name:"Adverse Event"},
        "adverse-event-form-spardac":           {url:"$H/m/adverse-event-form.html",Table:"adverse-event-spardac"},
        "serious-adverse-event-data-spardac":   {url:"$H/m/serious-adverse-event-data.html",Table:"serious-adverse-event-spardac",form_module:"serious-adverse-event-form-spardac",task_name:"Serious Adverse EventOne"},
        "serious-adverse-event-form-spardac":   {url:"$H/m/serious-adverse-event-form.html",Table:"serious-adverse-event-spardac"},
        "serious-adverse-event-follow-up-data-spardac":   {url:"$H/m/serious-adverse-event-follow-up-data.html",Table:"serious-adverse-event-follow-up-spardac",form_module:"serious-adverse-event-follow-up-form-spardac",task_name:"Serious Adverse Event Follow-up"},
        "serious-adverse-event-follow-up-form-spardac":   {url:"$H/m/serious-adverse-event-follow-up-form.html",Table:"serious-adverse-event-follow-up-spardac"},

        "dass-data-spardac":                    {url:"$H/m/dass-data.html",Table:"dass-spardac",form_module:"dass-form-spardac"},
        "dass-form-spardac":                    {url:"$H/m/dass-form.html",Table:"dass-spardac"},
        "anthropometry-age-sex-data-spardac":   {url:"$H/m/anthropometry-age-sex-data.html",Table:"anthropometry-age-sex-spardac",form_module:"anthropometry-age-sex-form-spardac"},
        "anthropometry-age-sex-form-spardac":   {url:"$H/m/anthropometry-age-sex-form.html",Table:"anthropometry-age-sex-spardac"},
        "ethnicity-data-spardac":               {url:"$H/m/ethnicity-data.html",Table:"ethnicity-spardac",form_module:"ethnicity-form-spardac"},
        "ethnicity-form-spardac":               {url:"$H/m/ethnicity-form.html",Table:"ethnicity-spardac"},
        "ess-data-spardac":                     {url:"$H/m/ess-data.html",Table:"ess-spardac",form_module:"ess-form-spardac"},
        "ess-form-spardac":                     {url:"$H/m/ess-form.html",Table:"ess-spardac"},
        "gad7-data-spardac":                    {url:"$H/m/gad7-data.html",Table:"gad7-spardac",form_module:"gad7-form-spardac"},
        "gad7-form-spardac":                    {url:"$H/m/gad7-form.html",Table:"gad7-spardac"},
        "fosq-data-spardac":                    {url:"$H/m/fosq-data.html",Table:"fosq-spardac",form_module:"fosq-form-spardac"},
        "fosq-form-spardac":                    {url:"$H/m/fosq-form.html",Table:"fosq-spardac"},
        "fss-data-spardac":                     {url:"$H/m/fss-data.html",Table:"fss-spardac",form_module:"fss-form-spardac"},
        "fss-form-spardac":                     {url:"$H/m/fss-form.html",Table:"fss-spardac"},
        "isi-data-spardac":                     {url:"$H/m/isi-data.html",Table:"isi-spardac",form_module:"isi-form-spardac"},
        "isi-form-spardac":                     {url:"$H/m/isi-form.html",Table:"isi-spardac"},
        "lifestyle-data-spardac":               {url:"$H/m/lifestyle-data.html",Table:"lifestyle-spardac",form_module:"lifestyle-form-spardac"},
        "lifestyle-form-spardac":               {url:"$H/m/lifestyle-form.html",Table:"lifestyle-spardac"},
        "me-data-spardac":                      {url:"$H/m/me-data.html",Table:"me-spardac",form_module:"me-form-spardac"},
        "me-form-spardac":                      {url:"$H/m/me-form.html",Table:"me-spardac"},
        "map-data-spardac":                     {url:"$H/m/map-data.html",Table:"map-spardac",form_module:"map-form-spardac"},
        "map-form-spardac":                     {url:"$H/m/map-form.html",Table:"map-spardac"},
        "medical-history-data-spardac":         {url:"$H/m/medical-history-data.html",Table:"medical-history-spardac",form_module:"medical-history-form-spardac"},
        "medical-history-form-spardac":         {url:"$H/m/medical-history-form.html",Table:"medical-history-spardac"},
        "medications-data-spardac":             {url:"$H/m/medications-data.html",Table:"medications-spardac",form_module:"medications-form-spardac"},
        "medications-form-spardac":             {url:"$H/m/medications-form.html",Table:"medications-spardac"},
        "phq-data-spardac":                     {url:"$H/m/phq-data.html",Table:"phq-spardac",form_module:"phq-form-spardac"},
        "phq-form-spardac":                     {url:"$H/m/phq-form.html",Table:"phq-spardac"},
        "psqi-data-spardac":                    {url:"$H/m/psqi-data.html",Table:"psqi-spardac",form_module:"psqi-form-spardac"},
        "psqi-form-spardac":                    {url:"$H/m/psqi-form.html",Table:"psqi-spardac"},
        "rec-drug-data-spardac":                {url:"$H/m/rec-drug-data.html",Table:"rec-drug-spardac",form_module:"rec-drug-form-spardac"},
        "rec-drug-form-spardac":                {url:"$H/m/rec-drug-form.html",Table:"rec-drug-spardac"},
        "restless-leg-data-spardac":            {url:"$H/m/restless-leg-data.html",Table:"restless-leg-spardac",form_module:"restless-leg-form-spardac"},
        "restless-leg-form-spardac":            {url:"$H/m/restless-leg-form.html",Table:"restless-leg-spardac"},
        "sds-data-spardac":                     {url:"$H/m/sds-data.html",Table:"sds-spardac",form_module:"sds-form-spardac"},
        "sds-form-spardac":                     {url:"$H/m/sds-form.html",Table:"sds-spardac"},
        "sdp-data-spardac":                     {url:"$H/m/sdp-data.html",Table:"sdp-spardac",form_module:"sdp-form-spardac"},
        "sdp-form-spardac":                     {url:"$H/m/sdp-form.html",Table:"sdp-spardac"},
        "shi-data-spardac":                     {url:"$H/m/shi-data.html",Table:"shi-spardac",form_module:"shi-form-spardac"},
        "shi-form-spardac":                     {url:"$H/m/shi-form.html",Table:"shi-spardac"},
        "dsst-data-spardac":                    {url:"$H/m/neurocog/dsst-data.html",Table:"dsst-spardac",form_module:"dsst-form-spardac"},
        "dsst-form-spardac":                    {url:"$H/m/neurocog/dsst-form.html",Table:"dsst-spardac"},
        "finger-tapping-data-spardac":          {url:"$H/m/neurocog/finger-tapping-data.html",Table:"finger-tapping-spardac",form_module:"finger-tapping-form-spardac"},
        "finger-tapping-form-spardac":          {url:"$H/m/neurocog/finger-tapping-form.html",Table:"finger-tapping-spardac"},
        "letter-cancellation-data-spardac":     {url:"$H/m/neurocog/letter-cancellation-data.html",Table:"letter-cancellation-spardac",form_module:"letter-cancellation-form-spardac"},
        "letter-cancellation-form-spardac":     {url:"$H/m/neurocog/letter-cancellation-form.html",Table:"letter-cancellation-spardac"},
        "nback1-data-spardac":                  {url:"$H/m/neurocog/nback1-data.html",Table:"nback1-spardac",form_module:"nback1-form-spardac"},
        "nback1-form-spardac":                  {url:"$H/m/neurocog/nback1-form.html",Table:"nback1-spardac",task_name:"1-Back"},
        "nback2-data-spardac":                  {url:"$H/m/neurocog/nback2-data.html",Table:"nback2-spardac",form_module:"nback2-form-spardac"},
        "nback2-form-spardac":                  {url:"$H/m/neurocog/nback2-form.html",Table:"nback2-spardac",task_name:"2-back"},
        "nback3-data-spardac":                  {url:"$H/m/neurocog/nback3-data.html",Table:"nback3-spardac",form_module:"nback3-form-spardac"},
        "nback3-form-spardac":                  {url:"$H/m/neurocog/nback3-form.html",Table:"nback3-spardac",task_name:"3-Back"},
        "stroop-colour-data-spardac":           {url:"$H/m/neurocog/stroop-colour-data.html",Table:"stroop-colour-spardac",form_module:"stroop-colour-form-spardac"},
        "stroop-colour-form-spardac":           {url:"$H/m/neurocog/stroop-colour-form.html",Table:"stroop-colour-spardac"},
        "stroop-text-data-spardac":             {url:"$H/m/neurocog/stroop-text-data.html",Table:"stroop-text-spardac",form_module:"stroop-text-form-spardac"},
        "stroop-text-form-spardac":             {url:"$H/m/neurocog/stroop-text-form.html",Table:"stroop-text-spardac"},
        "tower-london-data-spardac":            {url:"$H/m/neurocog/tower-london-data.html",Table:"tower-london-spardac",form_module:"tower-london-form-spardac"},
        "tower-london-form-spardac":            {url:"$H/m/neurocog/tower-london-form.html",Table:"tower-london-spardac"},
        "bpns-data-spardac":                    {url:"$H/m/bpns-data.html",Table:"bpns-spardac",form_module:"bpns-form-spardac"},
        "bpns-form-spardac":                    {url:"$H/m/bpns-form.html",Table:"bpns-spardac"},
        "gses-data-spardac":                    {url:"$H/m/gses-data.html",Table:"gses-spardac",form_module:"gses-form-spardac"},
        "gses-form-spardac":                    {url:"$H/m/gses-form.html",Table:"gses-spardac"},
        "hpq-data-spardac":                     {url:"$H/m/hpq-data.html",Table:"hpq-spardac",form_module:"hpq-form-spardac"},
        "hpq-form-spardac":                     {url:"$H/m/hpq-form.html",Table:"hpq-spardac"},
        "poms-data-spardac":                    {url:"$H/m/poms-data.html",Table:"poms-spardac",form_module:"poms-form-spardac"},
        "poms-form-spardac":                    {url:"$H/m/poms-form.html",Table:"poms-spardac"},
        "kss-data-spardac":                     {url:"$H/m/kss-data.html",Table:"kss-spardac",form_module:"kss-form-spardac"},
        "kss-form-spardac":                     {url:"$H/m/kss-form.html",Table:"kss-spardac"},
        "medical-history-short-data-spardac":   {url:"$H/m/medical-history-short-data.html",Table:"medical-history-short-spardac",form_module:"medical-history-short-form-spardac"},
        "medical-history-short-form-spardac":   {url:"$H/m/medical-history-short-form.html",Table:"medical-history-short-spardac"},
        "sleep-history-data-spardac":           {url:"$H/m/sleep-history-data.html",Table:"sleep-history-spardac",form_module:"sleep-history-form-spardac"},
        "sleep-history-form-spardac":           {url:"$H/m/sleep-history-form.html",Table:"sleep-history-spardac"},
        "ffs-data-spardac":                     {url:"$H/m/ffs-data.html",Table:"ffs-spardac",form_module:"ffs-form-spardac"},
        "ffs-form-spardac":                     {url:"$H/m/ffs-form.html",Table:"ffs-spardac"},
        "actiwatch-data-spardac":               {url:"$H/m/actiwatch-data.html",Table:"actiwatch-spardac",form_module:"actiwatch-form-spardac"},
        "actiwatch-form-spardac":               {url:"$H/m/actiwatch-form.html",Table:"actiwatch-spardac"},
        "eq-5d-data-spardac":                   {url:"$H/m/eq-5d-data.html",Table:"eq-5d-spardac",form_module:"eq-5d-form-spardac"},
        "eq-5d-form-spardac":                   {url:"$H/m/eq-5d-form.html",Table:"eq-5d-spardac"},
        "sf36-data-spardac":                    {url:"$H/m/sf36-data.html",Table:"sf36-spardac",form_module:"sf36-form-spardac"},
        "sf36-form-spardac":                    {url:"$H/m/sf36-form.html",Table:"sf36-spardac"},
        "iwqlq-data-spardac":                   {url:"$H/m/iwqlq-data.html",Table:"iwqlq-spardac",form_module:"iwqlq-form-spardac"},
        "iwqlq-form-spardac":                   {url:"$H/m/iwqlq-form.html",Table:"iwqlq-spardac"},
        "brief-illness-perception-questionnaire-data-spardac":   {url:"$H/m/brief-illness-perception-questionnaire-data.html",Table:"brief-illness-perception-questionnaire-spardac",form_module:"brief-illness-perception-questionnaire-form-spardac"},
        "brief-illness-perception-questionnaire-form-spardac":   {url:"$H/m/brief-illness-perception-questionnaire-form.html",Table:"brief-illness-perception-questionnaire-spardac"},
        "breif-sexual-function-inventory-data-spardac":   {url:"$H/m/breif-sexual-function-inventory-data.html",Table:"breif-sexual-function-inventory-spardac",form_module:"breif-sexual-function-inventory-form-spardac"},
        "breif-sexual-function-inventory-form-spardac":   {url:"$H/m/breif-sexual-function-inventory-form.html",Table:"breif-sexual-function-inventory-spardac"},
        "female-sexual-function-index-data-spardac":   {url:"$H/m/female-sexual-function-index-data.html",Table:"female-sexual-function-index-spardac",form_module:"female-sexual-function-index-form-spardac"},
        "female-sexual-function-index-form-spardac":   {url:"$H/m/female-sexual-function-index-form.html",Table:"female-sexual-function-index-spardac"},
        "three-factor-eating-questionnaire-data-spardac":   {url:"$H/m/three-factor-eating-questionnaire-data.html",Table:"three-factor-eating-questionnaire-spardac",form_module:"three-factor-eating-questionnaire-form-spardac"},
        "three-factor-eating-questionnaire-form-spardac":   {url:"$H/m/three-factor-eating-questionnaire-form.html",Table:"three-factor-eating-questionnaire-spardac"},
        "glasgow-content-of-thoughts-inventory-data-spardac":   {url:"$H/m/glasgow-content-of-thoughts-inventory-data.html",Table:"glasgow-content-of-thoughts-inventory-spardac",form_module:"glasgow-content-of-thoughts-inventory-form-spardac"},
        "glasgow-content-of-thoughts-inventory-form-spardac":   {url:"$H/m/glasgow-content-of-thoughts-inventory-form.html",Table:"glasgow-content-of-thoughts-inventory-spardac"},
        "glasgow-sleep-effort-scale-data-spardac":   {url:"$H/m/glasgow-sleep-effort-scale-data.html",Table:"glasgow-sleep-effort-scale-spardac",form_module:"glasgow-sleep-effort-scale-form-spardac"},
        "glasgow-sleep-effort-scale-form-spardac":   {url:"$H/m/glasgow-sleep-effort-scale-form.html",Table:"glasgow-sleep-effort-scale-spardac"},
        "pre-sleep-arousal-scale-data-spardac":   {url:"$H/m/pre-sleep-arousal-scale-data.html",Table:"pre-sleep-arousal-scale-spardac",form_module:"pre-sleep-arousal-scale-form-spardac"},
        "pre-sleep-arousal-scale-form-spardac":   {url:"$H/m/pre-sleep-arousal-scale-form.html",Table:"pre-sleep-arousal-scale-spardac"},
        "stanford-sleepiness-scale-data-spardac":   {url:"$H/m/stanford-sleepiness-scale-data.html",Table:"stanford-sleepiness-scale-spardac",form_module:"stanford-sleepiness-scale-form-spardac"},
        "stanford-sleepiness-scale-form-spardac":   {url:"$H/m/stanford-sleepiness-scale-form.html",Table:"stanford-sleepiness-scale-spardac"},
        "dbas-16-data-spardac":                 {url:"$H/m/dbas-16-data.html",Table:"dbas-16-spardac",form_module:"dbas-16-form-spardac"},
        "dbas-16-form-spardac":                 {url:"$H/m/dbas-16-form.html",Table:"dbas-16-spardac"},
        "multidimensional-fatigue-symptom-inventory-data-spardac":   {url:"$H/m/multidimensional-fatigue-symptom-inventory-data.html",Table:"multidimensional-fatigue-symptom-inventory-spardac",form_module:"multidimensional-fatigue-symptom-inventory-form-spardac"},
        "multidimensional-fatigue-symptom-inventory-form-spardac":   {url:"$H/m/multidimensional-fatigue-symptom-inventory-form.html",Table:"multidimensional-fatigue-symptom-inventory-spardac"},
        "fatigue-symptom-inventory-data-spardac":   {url:"$H/m/fatigue-symptom-inventory-data.html",Table:"fatigue-symptom-inventory-spardac",form_module:"fatigue-symptom-inventory-form-spardac"},
        "fatigue-symptom-inventory-form-spardac":   {url:"$H/m/fatigue-symptom-inventory-form.html",Table:"fatigue-symptom-inventory-spardac"},
        "hads-data-spardac":                    {url:"$H/m/hads-data.html",Table:"hads-spardac",form_module:"hads-form-spardac"},
        "hads-form-spardac":                    {url:"$H/m/hads-form.html",Table:"hads-spardac"},
        "pvt-data-spardac":                     {url:"$H/m/pvt-data.html",Table:"pvt-spardac",form_module:"pvt-form-spardac"},
        "pvt-form-spardac":                     {url:"$H/m/pvt-form.html",Table:"pvt-spardac"},
        "stop-bang-data-spardac":               {url:"$H/m/stop-bang-data.html",Table:"stop-bang-spardac",form_module:"stop-bang-form-spardac"},
        "stop-bang-form-spardac":               {url:"$H/m/stop-bang-form.html",Table:"stop-bang-spardac"},
        "gds-data-spardac":                     {url:"$H/m/gds-data.html",Table:"gds-spardac",form_module:"gds-form-spardac"},
        "gds-form-spardac":                     {url:"$H/m/gds-form.html",Table:"gds-spardac"},
        "ispq-data-spardac":                    {url:"$H/m/ispq-data.html",Table:"ispq-spardac",form_module:"ispq-form-spardac"},
        "ispq-form-spardac":                    {url:"$H/m/ispq-form.html",Table:"ispq-spardac"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();
