$('body').css('background','black');
var timeouts = [];
var intervals = [];
var relax_duration=50;
var count_down_duration=5;
var repeats=1;
var instructions="";
var numtrials = 53; //This is the normal number of trials.
var count=true;
//------------------------------------
var repeat_count=0;
var counter = 0;
//------------------------------------
var this_module=$vm.module_list[$vm.vm['__ID'].name];
var block=$vm.module_list['__MODULE__'].form_block_module
var spec_table=$vm.module_list[block].Table
//------------------------------------
$vm.request({cmd:'find',table:spec_table,limit:1},function(res){
    if(res.result.length>0){
        //console.log(JSON.stringify(res.result[0].Data))
        relax_duration=res.result[0].Data.relax_duration;
        count_down_duration=res.result[0].Data.count_down_duration;
        numtrials=res.result[0].Data.number_presentation;
        repeats=res.result[0].Data.number_repeats;
        instructions=res.result[0].Data.instructions;
        if(res.result[0].Data.count_down_type=='0') count=true;
        else count=false;
        $('#instructions__ID').html(instructions)
    }
    else{
        $vm.alert("Block specs not defined")
    }
})
//------------------------------------
$('#D__ID').on('load',function(){
    $('#header').hide();
    $('#footer').hide();
    $('#participant_div__ID').hide()
    //$('#content').css('padding-top','0');
/*    $('#thirdparty_container__ID').css('padding-top','100px');*/
    $('#thirdparty_container__ID').css('height',$vm.min_height);
    third_party("thirdparty_container__ID",data_process);
    data={};
})
//------------------------------------
var ClearIntervals = function()
{
    for (var i=0; i<intervals.length; i++)
    {
        clearInterval(intervals[i]);
    }
    intervals = [];
    for (var i=0; i<timeouts.length; i++)
    {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
}
//------------------------------------
$('#D__ID').on('unload',function(){
    //$('#content').css('padding-top','100px');
    ClearIntervals();
})
//------------------------------------
var calc=function(datax){
/*
    var no="PRE,1,2,3,4,5,6,7,8,9,10,11,12,13"
    var nno=no.split(",")
    var rt="0,779,1011,1093,2998,3001,1812,1040,1110,954,621,771,961,1262"
    var nrt=rt.split(",")
    var ac="-,CN,CN,CN,CN,CN,CM,CM,CN,CM,CM,CM,FN,CM"
    var nac=ac.split(",")
*/	
    var nno=datax.NNO.split(",");
    var nrt=datax.NRT.split(",");
    var nac=datax.NAC.split(",");
    var ngta=0;
    var nrgt=0;
    var ntcr=0;
    var ntcrm=0;
    var ntcrn=0;
    var ntic=0;
    var ntmr=0;
    var nmis=0;
    var ntwr=0;
    var nmrt=0;
    var nmrtm=0;
    var nmrtn=0;
    var nmrta=[];
    var nmrtma=[];
    var nmrtna=[];
    var mrtcm=0;
    var ntfrm=0;
    var ntfrn=0;
    for (var i=0;i<nno.length;i++){
        if(nno[i]!='PRE'){
            if( nac[i]=='CM')   {ntcr++;ntcrm++;nmrt+=parseInt(nrt[i]);nmrtm+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtma.push(nrt[i]);}
            if( nac[i]=='CN')   {ntcr++;ntcrn++;nmrt+=parseInt(nrt[i]);nmrtn+=parseInt(nrt[i]);nmrta.push(nrt[i]);nmrtna.push(nrt[i]);}
            if( nac[i]=='O')    nmis++;
            if( nac[i]=='FM')   {ntic++;ntfrm++;}
            if( nac[i]=='FN')   {ntic++;ntfrn++;}
            if( nac[i]=='W')    ntwr++;
            nrgt=nrgt+parseInt(nrt[i]);
        }
    }
    if( ntcr+ntic > 0){
        ngta=(100*ntcr/(ntcr+ntic)).toFixed(1)
        datax.NGTA=ngta;
        datax.GMRT=(nrgt/(nno.length-nback)).toFixed(0);
    }
    else  datax.NGTA='0';
    datax.NBACK=nback;
    datax.NTCR=ntcr;
    datax.NMIS=nmis;
    datax.NTIC=ntic;
    datax.NGRT=nrgt;
    if(ntcr>0) datax.NMRT=(nmrt/ntcr).toFixed(0);
    else datax.NMRT='0';
    if(ntcrm>0) datax.MRTCM=(nmrtm/ntcrm).toFixed(0);
    else datax.MRTCM='0';
    if(ntcrn>0) datax.MRTCN=(nmrtn/ntcrn).toFixed(0);
    else datax.MRTCN='0';
    if(nmrta.length>1){
        var sdcr=standardDeviation(nmrta);
        datax.SDCR=sdcr.toFixed(0);
    }
    else datax.SDCR=0;
    if(nmrtma.length>1){
        var sdcm=standardDeviation(nmrtma);
        datax.SDCM=sdcm.toFixed(0);
    }
    else datax.SDCM=0;
    if(nmrtna.length>1){
        var sdcn=standardDeviation(nmrtna);
        datax.SDCN=sdcn.toFixed(0);
    }
    else datax.SDCN=0;

    if(nmrta.length>1){
        var mdrtcr=median(nmrta);
        datax.MdRTCR=mdrtcr.toFixed(0);
    }
    else datax.MdRTCR=0;
    if(nmrtma.length>1){
        var mdrtcm=median(nmrtma);
        datax.MdRTCM=mdrtcm.toFixed(0);
    }
    else datax.MdRTCM=0;
    if(nmrtna.length>1){
        var mdrtcn=median(nmrtna);
        datax.MdRTCN=mdrtcn.toFixed(0);
    }
    else datax.MdRTCN=0;
    if(nmrta.length>0){
        var mnrtcr=getmin(nmrta);
        datax.MnRTCR=mnrtcr;
        var mxrtcr=getmax(nmrta);
        datax.MxRTCR=mxrtcr;
        var mf10cra=top10pc(nmrta);
        var mf10cr=average(mf10cra);
        datax.MF10CR=mf10cr;
        var ms10cra=bottom10pc(nmrta);
        var ms10cr=average(ms10cra);
        datax.MS10CR=ms10cr;
    }
    else {
        datax.MnRTCR='0';
        datax.MxRTCR='0';
        datax.MF10CR='0';
        datax.MS10CR='0';
    }
    if(mf10cra!=undefined && mf10cra.length > 1){
        var sdf10cr=standardDeviation(mf10cra);
        datax.SDF10CR=sdf10cr.toFixed(0);
    }
    else datax.SDF10CR='0';
    if(ms10cra!=undefined && ms10cra.length > 1){
        var sds10cr=standardDeviation(ms10cra);
        datax.SDS10CR=sds10cr.toFixed(0);
    }
    else datax.SDS10CR='0';
    datax.NTCM=ntcrm;
    datax.NTCN=ntcrn;
    datax.NTFM=ntfrm;
    datax.NTFN=ntfrn;
    datax.NTWR=ntwr;
    combine(data,datax)
    //console.log(JSON.stringify(datax))
    //console.log(JSON.stringify(data))
}
//-------------------------------------
var combine=function(dest, src) {
    data_extension=repeat_count.toString();
    for(var key in src) { 
        dest[key+data_extension] = src[key]; 
    } 
    return dest; 
} 
//-------------------------------------
var Relax_end=function(){
    counter=0;
    $('#main_canvas__ID').hide();
    $('#dot_div__ID').show();
    var i = setInterval(function(){
        counter++;
        //console.log(counter+' - '+ relax_duration+' - '+ count_down_duration)
        if(counter >= relax_duration-count_down_duration) {
            if(count){
                $('#dot_div__ID').hide();
                $('#counter_div__ID').show();
                $('#counter__ID').html(relax_duration-counter)
            }
            else beep();
        }
        if(counter >= relax_duration) {
            $('#counter_div__ID').hide();
            $('#main_canvas__ID').show();
            clearInterval(i);
            $('.start-button').click();
        }
    }, 1000);
}
//-------------------------------------
var data_process=function(datax){
    //alert(JSON.stringify(data));
    repeat_count++
    calc(datax);
    if(repeat_count>=repeats){
        counter=0;
        $('#main_canvas__ID').hide();
        $('#dot_div__ID').show();
        var i = setInterval(function(){
            counter++;
            //console.log(counter+' - '+ relax_duration+' - '+ count_down_duration)
            if(counter >= relax_duration-count_down_duration) {
                if(count){
                    $('#dot_div__ID').hide();
                    $('#counter_div__ID').show();
                    $('#counter__ID').html(relax_duration-counter)
                }
                else beep();
            }
            if(counter >= relax_duration) {
                clearInterval(i);
                data.Participant=$('#Participant__ID').val();
                data.Participant_uid=$("input[name='Participant_uid']").val();
                data.sysStatus='#00FF00';
                $vm.request({cmd:"insert",table:m.Table,data:data},function(res){
                    if(res.status=="np"){
                        alert("No permission to insert a new record in to the database.");
                        if(m.input.goback!=undefined){
                            $('#header').show();
                            $('#footer').show();
                            $vm.refresh=1;
                            window.history.go(-1);       //from grid
                        }
                        return;
                    }
                    else { 
                        $('#header').show();
                        $('#footer').show();
                        $vm.refresh=1;
                        window.history.go(-1);
                    }
                });
            }
        }, 1000);    
    }
    else{
        $('.start-button').click();
    } 
    //--------------------------------------------------------
}
//------------------------------------
var third_party=function(containerID,callback)
{
    $('.start-button').hide();
    ClearIntervals();
    $('#'+containerID).css('background-color','#000000');
    var canvas = document.getElementById('main_canvas__ID');
    var ctx = canvas.getContext('2d');
    var scale = 4;
    var angle = 60;
    var radius1 = 10;
    var radius2 = 35;
    var numpretrials = nback;
    var cuestarttostimulusstarttime = 1500;
    var interstimulustime = 4500;
    var cuevisibletime = 200;
    var stimulusvisibletime = 250;
    var practice = false;
    var instructions = [
                        "#instructions__ID",
                        ];
    var letters = ['B', 'C', 'F', 'H', 'L', 'M', 'P', 'T', 'W', 'X', 'Y', 'Z'];
    var first = null;
    var trials = [];
    var responded = true;
    var current = 0;
    var startTime;
    var width = canvas.width;
    var height = canvas.height;
    var midX = width / 2;
    var midY = height / 2;
    var separation = 140;
    var finished = false;
    function PointOnCircle(a, r)
    {
        var rad = a / 180 * Math.PI;
        var ret = { x : -Math.cos(rad) * r * scale + midX, y : -Math.sin(rad) * r * scale + midY };
        return ret;
    }
    var positions = [
                        PointOnCircle(-angle, radius1),
                        PointOnCircle(0, radius1),
                        PointOnCircle(angle, radius1),
                        PointOnCircle(180 - angle, radius1),
                        PointOnCircle(180, radius1),
                        PointOnCircle(180 + angle, radius1),
                        PointOnCircle(-angle, radius2),
                        PointOnCircle(0, radius2),
                        PointOnCircle(angle, radius2),
                        PointOnCircle(180 - angle, radius2),
                        PointOnCircle(180, radius2),
                        PointOnCircle(180 + angle, radius2),
                    ];
    var correct = 0;
    var missed = 0;
    var wrong = 0;
    var results = {
        Time : [],
        Number : [],
        KeyResponse : [],
    };
    var responce = {};
    instructions.forEach(function(i) { $(i).hide(); });
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '32px arial';
    //---------------------------    
    function beep() {
        var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
        snd.play();
    }    
    //---------------------------    
    function Relax_start(){
        counter=0;
        $('.start-button').hide();
        $('#participant_div__ID').css("visibility", "hidden");
        $(instructions[current]).hide();
        $('#main_canvas__ID').hide();
        $('#dot_div__ID').show();
        var i = setInterval(function(){
            counter++;
            //console.log(counter+' - '+ relax_duration+' - '+ count_down_duration)
            if(counter >= relax_duration-count_down_duration) {
                if(count){
                    $('#dot_div__ID').hide();
                    $('#counter_div__ID').show();
                    $('#counter__ID').html(relax_duration-counter)
                }
                else beep();
            }
            if(counter >= relax_duration) {
                $('#counter_div__ID').hide();
                clearInterval(i);
                Start();
            }
        }, 1000);
    }
    //---------------------------    
    function Instructions()
    {
        $('#main_canvas__ID').hide();
        $('.start-button').show();
        $(instructions[current]).show();
    }
    function RandomExcept(maxExcl, exception)
    {
        var ret = 0;
        do
        {
            ret = Math.floor(Math.random() * maxExcl);
        } while (ret == exception);
        return ret;
    }
    function ReferenceTrial(cur)
    {
        if (nback == 1)
            return Math.max(0, cur - 1);
        else if (nback == 2)
            return Math.max(0, cur - 2);
        else if (nback == 3)
            return Math.max(0, cur - 3);
    }
    function Start()
    {
        results = {
            Time : [],
            Number : [],
            KeyResponse : [],
        };    
        finished=false;
        $('#main_canvas__ID').show();
        var start_time= new Date();
        var hh = start_time.getHours()
        var mn = start_time.getMinutes()
        var ss = start_time.getSeconds()
        if(mn<10){mn='0'+mn;}
        if(hh<10){hh='0'+hh;}
        if(ss<10){ss='0'+ss;}
        responce.Start_Time=hh+':'+mn+':'+ss;
        marks = [];
        trials=[];
        Clear();
        for (var i=0; i<numpretrials; i++)
        {
            var t = {
                        l: Math.floor(Math.random() * letters.length),
                        p: Math.floor(Math.random() * positions.length),
                        pre: true,
                    }
            trials.push(t);
        }
        var p1=0,p2=0,pv;
        for (var i=0; i<numtrials-numpretrials; i++)
        {
            var ref = ReferenceTrial(trials.length);
            if(p1==parseInt((numtrials-3)/2) || p2==parseInt((numtrials-3)/2) ) {
                if(p2==parseInt((numtrials-3)/2)) {pv=trials[ref].p;}
                else pv=RandomExcept(positions.length, trials[ref].p);
            }
            else { if(Math.random() < 0.5 ){
                        pv=trials[ref].p;
                        if(i>2) p1++;
                    }
                    else{
                        pv=RandomExcept(positions.length, trials[ref].p);
                        if(i>2) p2++;
                    }
            }
            var t = {
                        id: i+1,
                        l: Math.floor(Math.random() * letters.length),
                        p: pv,
                        pre: false,
                    }
            trials.push(t);
        }
        for (var i=0; i<trials.length; i++)
        {
            var t = trials[i];
            //console.log(i + ' ' + t.l + ' ' + t.p) ;
        }
        current = -1;
        Next();
        intervals.push(setInterval(Next, interstimulustime));
    }
    function Next()
    {
        if (!responded)
        {
            SaveResults('O');
        }
        current++;

        if (current >= trials.length)
        {
            ClearIntervals();
            Finish();
        }
        else
        {
            Clear();
            Cue();
            setTimeout(Clear, cuevisibletime);
            setTimeout(Stimulus, cuestarttostimulusstarttime);
            setTimeout(Clear, cuestarttostimulusstarttime+stimulusvisibletime);
        }
    }

    function Stimulus()
    {
        ctx.fillStyle = 'white';
        var t = trials[current];
        var l = letters[t.l];
        var pt = positions[t.p];
        ctx.fillText(l, pt.x, pt.y);
        responded = false;
        startTime = Date.now();
        /*for (var i=0; i<positions.length; i++)
        {
            var l = letters[Math.floor(Math.random() * letters.length)];
            var pt = positions[i];
            ctx.fillText(l, pt.x, pt.y);
        }*/
    }
    function Cue()
    {
        ctx.beginPath();
        ctx.fillStyle = '#00ff00';
        ctx.arc(midX, midY, 20, 0, 2 * Math.PI);
        ctx.fill();
    }
    function Clear()
    {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(midX, midY, 5, 0, 2 * Math.PI);
        ctx.fill();
        //ctx.fillText(correct + ' ' + missed + ' ' + wrong, 100, 550);
    }
    function SaveResults(resp)
    {
        responded = true;
        var endTime = Date.now();
        var t = trials[current];
        if (t.pre)
        {
            results.Number.push('PRE');
            results.Time.push(0);
            results.KeyResponse.push('-');
        }
        else
        {
            results.Number.push(t.id);
            results.Time.push(endTime - startTime);
            results.KeyResponse.push(resp);
        }
        console.log(current + ' ' + resp) ;
    }
    var Finish = function()
    {
        if ($("#main_canvas__ID").is(':hidden')) //hacky and ugly way :(
            return;
            if (!finished)
        {
            finished = true;
            responce.NNO = results.Number.join(",");
            responce.NRT = results.Time.join(",");
            responce.NAC = results.KeyResponse.join(",");
            callback(responce);
        }
    }
    $(document).keypress(function(e){
        if ($("#main_canvas__ID").is(':hidden')) //hacky and ugly way :(
            return;
        if (!responded)
        {
            var t = trials[current];
            var rt = trials[ReferenceTrial(current)];
            var key = e.key.toLowerCase();
            console.log(key)
            if (key == 'm')
            {
                if (rt.p == t.p)
                    SaveResults('CM');
                else
                    SaveResults('FN');
            }
            if (key == 'n')
            {
                if (rt.p == t.p)
                    SaveResults('FM');
                else
                    SaveResults('CN');
            }
            if (key != 'n' && key != 'm') SaveResults('W');
        }
        e.preventDefault();
    });
    Instructions();
    $('.start-button').on('click',function(){
        Relax_start();
    });
    //------------------------------------
}
//-------------------------------------
function standardDeviation(values){
    var avg = average(values); 
    var squareDiffs = values.map(function(value){
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
    });
    var avgSquareDiff = average(squareDiffs)*values.length/(values.length-1);
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}
//-------------------------------------
function median(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
        return a-b;
    });
    var half = Math.floor(values.length / 2);
    if (values.length % 2){
        return values[half]/1.0;
    }
    return ((values[half - 1])/1.0 + (values[half])/1.0) / 2.0;
}            
//-------------------------------------
function average(data){
    var sum = data.reduce(function(sum, value){
        return sum + Math.abs(value);
    }, 0);
    var avg = sum / data.length;
    return avg;
}
//-------------------------------------
function getmin(values){
    values.sort(function(a, b){return b - a})
    return values[values.length-1];
}
//-------------------------------------
function getmax(values){
    values.sort(function(a, b){return b - a})
    return values[0];
}
//-------------------------------------
function top10pc(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
        return a-b;
    });
    var tenpc = Math.round(values.length / 10);
    return values.slice(0,tenpc);
}            
//-------------------------------------
function bottom10pc(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
        return a-b;
    });
    var tenpc = Math.round(values.length / 10);
    return values.slice(values.length-tenpc-1,values.length);
}            
//------------------------------------
