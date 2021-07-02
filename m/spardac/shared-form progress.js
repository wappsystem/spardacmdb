//-------------------------------------
var participant_name=function(record){ if(record.Data.Subject_Initials!=undefined) return record.Data.Subject_ID+' '+record.Data.Subject_Initials; else return record.UID;}
//-------------------------------------

var progress_table=$vm.module_list['progress-reshaped-data'].Table2;
//-------------------------------------
console.log('progress_table: '+progress_table)

//auto select particpant
var part_id1=$vm.module_list['participant-data'].participant_id.field1;
var part_id2=$vm.module_list['participant-data'].participant_id.field2;
var part_id3=$vm.module_list['participant-data'].participant_id.field3;
var autocomplete_req_p={cmd:"find",table:$vm.module_list['participant-data'].Table,options:{},skip:0,limit:10}
var autocomplete_callback_p=function(items){ $("#F__ID input[name=Participant_uid]").val(items["UID"]);}
var autocomplete_list_p=function(records){
    var items=[];
    for(var i=0;i<records.length;i++){
        var obj={};
        if(records[i].Data[part_id1]!= undefined ) obj.label=records[i].Data[part_id1];
        else obj.label=records[i].UID;
        if(records[i].Data[part_id2]!= undefined ) obj.label+=' '+records[i].Data[part_id2];
        if(records[i].Data[part_id3]!= undefined ) obj.label+=' '+records[i].Data[part_id3];
        obj['UID']=records[i].UID;
        items.push(obj);
    }
    return items;
}
var wait1=function(){
    $vm.autocomplete($('#Participant__ID'),autocomplete_req_p,autocomplete_list_p,autocomplete_callback_p);
}
var I=0; var loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed."); }
},100);
//-------------------------------------
//auto fill participant
var load=m.load;
m.load=function(){
    load();
    $('#title__ID').text($vm.module_list[$vm.vm['__ID'].name].task_name);
    if($vm.online_questionnaire==1) {
        $('#pdf__ID').hide();
        $('#participant_div__ID').hide();
    }
//--------------------------
    if(m.input!=undefined && m.input.participant_record!=undefined){
        //new from child panel
        $("#F__ID input[name=Participant]").val(participant_name(m.input.participant_record));
        $("#F__ID input[name=Participant_uid]").val(m.input.participant_record.UID);
    }
    else if(m.input!=undefined && m.input.record!=undefined){
        //modify
    }
    else{
        //new with no parent
    }
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
    if(m.load_2!=undefined) m.load_2();
}
//-------------------------------------
m.before_submit=function(data){
    if ($("#F__ID input[name=Participant]").val()=='' || $("#F__ID input[name=Participant_uid]").val()==''){
        $vm.alert("Please select a participant. Make sure Participant ID has a number.") 
        return false;    
    }
   data.sysStatus=$vm.status_of_data(data);
};
//-------------------------------------
m.after_insert=function(data0,res){
    if($vm.online_questionnaire!=1) {
        console.log("Go back")
        $vm.refresh=1;
        window.history.go(-1);       
        return;
    }
    var Participant_uid=data0.Participant_uid;
    var data={}
    var index={}
    var nd=new Date();
    var date_time=nd.getFullYear()+"-"+$vm.pad(nd.getMonth()+1,2)+"-"+$vm.pad(nd.getDate(),2)+' '+$vm.pad(nd.getHours(),2)+':' +$vm.pad(nd.getMinutes(),2)+':'+$vm.pad(nd.getSeconds(),2);
    var q_table=(m.Table).replace(/-/g,'_');

    $vm.request({api:m.api,cmd:"find-s",table:progress_table,options:m.options},function(res){
        if(res.result.length==1){
            data=res.result[0].Data;
            data[q_table]=date_time;
            var rid=res.result[0]._id;
            $vm.request({api:m.api,cmd:"update",id:rid,table:progress_table,data:data,index:index,options:m.options},function(res){
                console.log(res);
                $vm.refresh=1;
                window.history.go(-1);       
            })
        }
        else{
            data.Participant_uid=Participant_uid;
            data[q_table]=date_time;
            $vm.request({api:m.api,cmd:"insert",table:progress_table,data:data,index:index,options:m.options},function(res){
                console.log(res);
                $vm.refresh=1;
                window.history.go(-1);       
            })
        }
    })
}
//-------------------------------------
