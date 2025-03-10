<%-- 
    Document   : reports
    Created on : Feb 3, 2012, 4:34:29 PM
    Author     : Vamsee Achanta
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">        

        <link rel="stylesheet" type="text/css" href="res/css/salarySheet.css"/>
        <link rel="stylesheet" type="text/css" href="res/css/PMSStyle.css"/>
        <link rel="stylesheet" type="text/css" href="res/css/calendar.css"/>
        <link rel="stylesheet" type="text/css" href="res/css/timesheet.css"/>

        <script type="text/javascript" src="https://www.google.com/jsapi"></script>
        <script type="text/javascript" src="res/js/Calendar.js"></script>
        <script type="text/javascript" src="res/js/Core.js"></script>
        <script type="text/javascript" src="res/js/ModalDialog.js"></script>
        <script type="text/javascript" src="res/js/PMS.js"></script>
        <script type="text/javascript" src="res/js/PMSReports.js"></script>
        <script type="text/javascript" src="res/js/TimeSheet.js"></script>
        <script type="text/javascript" src="res/js/date.js"></script>
        <script type="text/javascript" src="res/js/jquery-1.6.2.min.js"></script>
        <script type="text/javascript" src="res/js/jquery.animate-shadow-min.js"></script>
        <script type="text/javascript" src="res/js/jquery.easing.1.3.js"></script>
        <script type="text/javascript" src="res/js/jquery.json-2.3.min.js"></script>
        <script type="text/javascript" src="res/js/jquery.validate.js"></script>
        <script type="text/javascript" src="res/js/jquery.jscrollpane.min.js"></script>
        <script type="text/javascript" src="res/js/jquery.mousewheel.js"></script>
        <script type="text/javascript" src="res/js/ReportMaker.js"></script>


        <!--        <script type="text/javascript" src="res/js/jquery-1.6.2.min.js"></script>
                <script type="text/javascript" src="res/js/jquery.json-2.3.min.js"></script>-->

        <script type="text/javascript">
            // laoding Google Libray
            google.load("visualization", "1", {packages:["corechart"]});
            /**
             * This Class is used to AutoFill the Given Data Field
             * Like TextBoxes
             */
            function AutoFill(eles,dataUrl,options){
                this.fields = eles;
                this.url = dataUrl;
                this.div = document.createElement('div');
                /** This Object Holds the Current Selected Field */
                this.selectedField = null;
                this.selectedRow = null;
                this.cache = [];
                
                this.init(options);
                return this;
            }
            
            AutoFill.prototype.init = function(options)
            {             
                $(this.div).addClass(options.css).
                    css({'position':'absolute','display':'none'});
                
                this.registerFields(this.fields);
            }
            
            AutoFill.prototype.registerFields = function(fields)
            {
                if(!fields || fields==null)
                    return;
                //alert(fields);
                
                var ME = this;
                $(fields).each(function(){
                    var prevKey;
                    var currKey;
                    var keyCode;
                    $(this).keyup(function(evt)
                    {
                        ME.selectedField = this;
                        keyCode = evt.keyCode;
                        
                        switch(keyCode){
                            case 38:
                            case 40:                                
                                evt.preventDefault();
                                break;
                        }
                        
                        var key = encodeURI($(this).val());
                        ME.selectedRow = null;
                        $.get(ME.url+"&query="+key, null, function(data){
                            ME.onDataLoad(eval("("+data+")"));
                        });
                    });
                    
                    $(this).blur(function(evt){
                        ME.hide();
                        ME.onDataSelect(ME.selectedField,ME.selectedRow);
                    });
                });                
            }
            
            
            AutoFill.prototype.onDataLoad = function(data)
            {
                alert('Data Loaded\nThis Method Should be Override by The Programmer');
            }
            
            /**
             * This Method Shold Be hadnled by the Programmer
             * to Get The Selected Row element from the Sugget
             * Table
             */
            AutoFill.prototype.onDataSelect = function(selectedRow)
            {
                alert('Data Loaded\nThis Method Should be Override by The Programmer');
            }
            
            /**
             * This Method parse the Givn row and
             * filters the Data
             * This method should be implemented by The Programmer
             * this Method Should Retunrs the Filtered data in String Format
             */
            AutoFill.prototype.filterData = function(row)
            {}
            
            
            AutoFill.prototype.show = function(content)
            {
                var ME = this;
                if(content)
                {
                    this.div.innerHTML = content;
                    this.registerTable($(this.div).find('table'));
                }                
                var f = this.selectedField;                
                
                $(f).parent().append(ME.div);                
                
                var pos = $(f).position();
                $(this.div).css({'left':pos.left,'top':pos.top});
                $(this.div).show().animate({'margin-top':$(f).outerHeight()+5,'opacity':'1.0'},400,null);                
            }
            
            AutoFill.prototype.hide = function()
            {
                var ME = this;
                $(this.div).show().animate({'margin-top':'-20px','opacity':'0px'},10,function(){
                    $(ME.div).remove();
                });
            }            
            
            AutoFill.prototype.registerTable = function(tableObj)
            {                
                var ME = this;
                $(tableObj).find('tr').hover(function(){
                    ME.selectedRow = this;
                    //$(ME.selectedField).val(ME.filterData(ME.selectedRow));
                    $(this).addClass('hover');
                },function(){
                    $(this).removeClass('hover');
                });
                
                $(tableObj).find('tr').click(function(){
                    ME.onDataSelect(this);
                });
            }
        </script>


        <script type="text/javascript">
            var calendar;
            
            
            var nameAutoFill = new AutoFill(null, "employeeHandler.do?mode=0", {css:'autoFillDivCss'});
            
            nameAutoFill.onDataLoad = function(data)
            {
                var cnt = "<table style='max-width:300px;background:#53c1fd' cellspacing='0px' cellpadding='5px'>";
                for(var i=0;i<data.length;i++)
                {
                    cnt += "<tr><td>"+data[i].empId+"</td><td>"+data[i].firstName+"</td></tr>";
                }
                if(data.length<1)
                {
                    cnt += "No Records Found";
                }
                cnt += "<table>";
                nameAutoFill.show(cnt);
            }
                
            nameAutoFill.onDataSelect = function(field,row)
            {
                if(row != null)
                {
                    $(field).val($(row).find('td:eq(1)').html());
                    $(field).attr('empId',$(row).find('td:eq(0)').html()).trigger("change", null);
                }                        
            }
                
            nameAutoFill.filterData = function(row){
                return $(row).find('td:eq(0)').html();
            }
            
            
            var projAutoFill = new AutoFill(null, "projectHandler.do?mode=2", {css:'autoFillDivCss'});
            
            projAutoFill.onDataLoad = function(data)
            {
                var cnt = "<table style='max-width:300px;background:#53c1fd' cellspacing='0px' cellpadding='5px'>";
                for(var i=0;i<data.length;i++)
                {
                    cnt += "<tr><td>"+data[i].PID+"</td><td>"+data[i].title+"</td></tr>";
                }
                cnt += "<table>";
                projAutoFill.show(cnt);
            }
                
            projAutoFill.onDataSelect = function(field,row)
            {
                if(row != null)
                {
                    $(field).val($(row).find('td:eq(1)').html());
                    $(field).attr('projId',$(row).find('td:eq(0)').html()).trigger("change", null);
                }                        
            }
                
            projAutoFill.filterData = function(row){
                return $(row).find('td:eq(0)').html();
            }            
            
            var timeSheet = new TimeSheet(null, {
                dataRetriveURL:'timeSheetHandler.do',
                dataStoreURL:'timeSheetHandler.do'
            });
            
            
            
            $(function()
            {
                //alert("Reports DOM Loaded");
                try
                {
                    calendar = new Calendar($('.date'), 2000,2500);
                    
                    registerWPR();
                    registerEmployeeStatus();
                    registerTabbedPane();
                    registerProjectStatus();
                    registerSalaryReport();                    
                }catch(e){alert(e);}
            });
            
            
            function registerTabbedPane()
            {                
                // Initializing Tabs
                $('.TabsPanel').each(function()
                {
                    var tabs = $(this).find('.tabs').find('span');                    
                    var blocks = $(this).find('.tabContent');                    
                    // Hiding All The Tabs by Default
                    $(blocks).hide();
                    $(blocks).eq(0).show();
                    $(tabs).eq(0).addClass('active');
                    
                    $(tabs).each(function(ind){
                        $(this).click(function()
                        {
                            $(tabs).removeClass('active');
                            $(this).addClass('active');
                            $(blocks).hide(200);
                            $(blocks).eq(ind).show(200);
                        });
                    });                    
                });
            }
            
            /**
             * This Object Register the WPR Chart Elements
             */
            function registerWPR(div)
            {
                var sD = new Date();
                var eD = new Date();
                
                $('#wprSDate').val(sD.toString('yyyy-MM-dd'));
                $('#wprEDate').val(eD.toString('yyyy-MM-dd'));
                
                // Registering the Week Navigation Buttons
                $('#wprChartDiv').find('.weekNavigator').each(function(ind){
                    $(this).click(function(evt)
                    {
                        switch(ind)
                        {
                            case 0: // this is for Back Navigation
                                sD = sD.addDays(-7);
                                eD = sD.clone().addDays(7);
                                break;
                            case 1: // this is for Next Navigation
                                sD = sD.addDays(7);
                                eD = sD.clone().addDays(7);
                                break;
                        }
                        $('#wprSDate').val(sD.toString('yyyy-MM-dd'));
                        $('#wprEDate').val(eD.toString('yyyy-MM-dd'));
                        draw(sD,eD);
                    });
                   
                });
                
                $('#wprChartDiv').find('#wprSDate').change(function(){
                    sD = Date.parse($(this).val());
                    draw(sD,eD);
                });
                
                $('#wprChartDiv').find('#wprEDate').change(function(){
                    eD = Date.parse($(this).val());                
                    draw(sD,eD);
                });                
                
                function draw(s,e)
                {
                    var div = document.getElementById('wprChart');
                    if(s > e)
                    {
                        $(div).html("<h4 class='errorInfo'>Unable to Draw chart please select proper dates</h4>");
                        return;
                    }
                    timeSheet.reports.generateWPR(div, {
                        //projs : [this.innerHTML],
                        //emps : ['EMP_0005','EMP_0006'],
                        sDate:s,
                        eDate:e
                    });
                }                
                //draw(sD,eD);
                // drawing with ther default Month
            }
            
            
            /**
             * This Object Register the Employee Status Chart Elements
             */
            function registerEmployeeStatus()
            {
                var empId = "";
                var sd = new Date().clone().moveToFirstDayOfMonth();
                var ed = new Date();
                
                $('#ESstartDate').val(sd.toString('yyyy-MM-dd'));
                $('#ESendDate').val(ed.toString('yyyy-MM-dd'));
                
                var field = $('#empStatusDiv').find('#ESempId');
                
                $(field).change(function()
                {
                    //alert('hi');
                    empId = $(this).attr('empId').length<1?$(this).val():$(this).attr('empId');
                    draw();
                });
                nameAutoFill.registerFields(field);
                
                $('#empStatusDiv').find('#ESstartDate').change(function(){
                    sd = Date.parse($(this).val());
                    draw();
                });
                $('#empStatusDiv').find('#ESendDate').change(function(){
                    ed = Date.parse($(this).val());
                    draw();
                });
                
                function draw()
                {
                    
                    var div = document.getElementById('ESempChart');
                    $(div).html("No data found in the Given Range");
                    if(sd > ed)
                    {
                        $(div).html("<h4 class='errorInfo'>Unable to Draw chart please select proper dates</h4>");
                        return;
                    }
                    //timeSheet.reports.
                    timeSheet.reports.generateEmployeeReport(div,
                    {
                        emps: [empId],
                        //projs : [$('#PSprojId').val()],
                        sDate : sd,
                        eDate : ed
                    }); 
                }
            }
            
            /**
             * This Handler Register the Salary Report Tab
             */
            function registerSalaryReport()
            {
                var salOpt = {};
                var date = new Date();
                var empId = null;
                var month;
                var year;
                var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                for(var i=0;i<months.length;i++)
                {
                    $('#SSmonth').append("<option value='"+(i)+"'>arun"+months[i]+"</option>");
                }
                var sY = new Date().getFullYear()-50;
                var eY = new Date().getFullYear()+50;
                for(i=sY;i<=eY;i++)
                {
                    $('#SSyear').append("<option value='"+(i)+"'>"+i+"</option>");
                }

                // making the Current Year and Month to Be Selected
                $('#SSyear').val(''+(sY+50));                
                $('#SSmonth').val(new Date().getMonth()+1);
                
                
                nameAutoFill.registerFields($('#SSempId'));
                
                $('#SSempId').change(function(){
                    empId = $(this).val();
                    empId = $(this).attr('empId').length<1?$(this).val():$(this).attr('empId');
                    var ids = [empId];
                    var query = "mode=4";
                    for(var i=0;i<ids.length;i++)
                    {
                        query += "&empIds="+ids[i];
                    }                    
                    $.get("employeeHandler.do?"+encodeURI(query), null, function(data){
                        alert(salOpt)
                        salOpt = eval("("+data+")");
                        
                        for(i=0;i<salOpt.length;i++)
                            generateSalaryReport(salOpt[i]);
                    });
                });
                
                // When Changinf the Year
                $('#SSyear').change(function(){
                    date.setYear($(this).val());
                    if(empId == null)
                    {
                        alert('First Choose Employee');
                        return;
                    }
                    //alert(empId);
                    generateSalaryReport(salOpt[0]);
                });
                
                $('#SSmonth').change(function(){
                    date.setMonth($(this).val());
                    if(empId == null)
                    {
                        alert('First Choose Employee');
                        return;
                    }
                    //alert(empId);
                    generateSalaryReport(salOpt[0]);
                });
                
                
                function generateSalaryReport(options)
                {
                    var sD = date.clone();
                    var eD = date.clone();
                    sD.moveToFirstDayOfMonth();
                    eD.moveToLastDayOfMonth();                    
                    var opt = {
                        empId:$('#SSempId').val(),
                        empName :"KAPUSETTI NAGA SRINIVA",
                        designation :"Software Engineer",
                        salary :17500,
                        hourSal : 91.5,
                        sDate:sD,
                        eDate:eD
                    }
                    
                    options.sDate = sD;
                    options.eDate = eD;
                    
                    timeSheet.reports.generateSalaryReport($('#SSchart')[0], options);
                }
            }            
            
            /**
             * This Method Used to Register the Project Status Element Events
             */
            function registerProjectStatus()
            {
                var pid = null;
                var sd = new Date();
                var ed = new Date();
                
                sd.moveToFirstDayOfMonth();
                ed.moveToLastDayOfMonth();
                
                //alert(sd);
                
                $('#PSstartDate').val(sd.toString("yyyy-MM-dd"));
                $('#PSendDate').val(ed.toString("yyyy-MM-dd"));                                
                
                $('#PSprojId').change(function(){
                    pid = $(this).attr('projId').length<1?$(this).val():$(this).attr('projId');
                    draw();
                });
                
                projAutoFill.registerFields($('#PSprojId')[0]);
                
                $('#PSstartDate').change(function(){
                    sd = Date.parse($(this).val());
                    draw();
                });
                $('#PSendDate').change(function(){
                    ed = Date.parse($(this).val());
                    draw();
                });
                
                
                function draw()
                {
                    var d1,d2,d3,d4;
                    d1 = document.getElementById('PSBarChart');
                    d2 = document.getElementById('PSPieChart');
                    d3 = document.getElementById('PSLineChart');
                    d4 = document.getElementById('PSBurnChart');
                    
                    $(d1).html("No data found with in the Selected Range");
                    $(d2).html("No data found with in the Selected Range");
                    $(d3).html("No data found with in the Selected Range");
                    $(d4).html("No data found with in the Selected Range");
                    
                    if(pid == null || pid.length<1)
                        return;
                    
                    if(ed < sd)
                    {
                        $(d1).html("<h4 class='errorInfo'>Unable to Draw the Char please choose Proper Dates</h4>");
                        $(d2).html("<h4 class='errorInfo'>Unable to Draw the Char please choose Proper Dates</h4>");
                        $(d3).html("<h4 class='errorInfo'>Unable to Draw the Char please choose Proper Dates</h4>");
                        $(d4).html("<h4 class='errorInfo'>Unable to Draw the Char please choose Proper Dates</h4>");
                        return;
                    }
                    //alert('done');
                    //alert(sd+"  :  "+ed);
                    timeSheet.reports.generateProjectStatusByPhase(d1, {
                        projs : [pid],
                        sDate : sd,
                        eDate : ed
                    },'BAR');
                    
                    timeSheet.reports.generateProjectStatusByPhase(d2, {
                        projs : [pid],
                        sDate : sd,
                        eDate : ed
                    },'PIE');
                    
                    timeSheet.reports.generateProjectStatus(d3, {
                        projs : [pid],
                        sDate : sd,
                        eDate : ed
                    });
                    
                    timeSheet.reports.generateProjectBudgetChart(d4, {
                        projs : [pid],
                        sDate : sd,
                        eDate : ed
                    });
                    
                    
                }
            }            
            
        </script>

        <style type="text/css">

        </style>
    </head>
    <body>
        <!-- WPR Chart Block -->
        <div id="wprChartDiv" class="">
            <h4 class="chartHead top_border">Man Hours Survey</h4>
            <div class="chartBody bottom_border">
                <fieldset class="myFieldset">
                    <legend>Man Hours Survey</legend>
                    <table class="formFields">
                        <tr>
                            <td class="label">Start Date</td>
                            <td><input type="text" id="wprSDate" value="2011-1-1" class="date"/></td>
                            <td rowspan="2">
                                <label class="labelButton weekNavigator">&lt;Previous Week</label>&nbsp;&nbsp;<label class='labelButton weekNavigator'>Next Week&gt;</label>
                            </td>
                        </tr>
                        <tr>
                            <td class="label">End Date</td>
                            <td><input type="text" id="wprEDate" value="2012-1-31"  class="date"/></td>
                        </tr>
                    </table>
                </fieldset>
                <div id="wprChart">
                </div>  
            </div>            
        </div>

        <!-- Salary Sheet Block -->
        <div id="salaryReportDiv">
            <h4 class="chartHead top_border">Salary Sheet</h4>
            <div>
                Testing arun kuamr
            </div>
            <div class="chartBody bottom_border">
                <fieldset class="myFieldset">
                    <legend>Salary Sheet Generation</legend>

                    <table class="formFields">
                        <tr>
                            <td class="label">Enter Employee Name</td>
                            <td><input type="text" id="SSempId" /></td>
                        </tr>
                        <tr>
                            <td class="label">Choose Year</td>
                            <td>
                                <select id="SSyear"></select>
                            </td>
                        </tr>
                        <tr>
                            <td class="label">Choose Month</td>
                            <td>
                                <select id="SSmonth">                                    
                                </select>
                            </td>
                        </tr>
                    </table>
                </fieldset>
                <div id="SSchart">
                </div>
            </div>
        </div>

        <!-- Employee Status Block -->
        <div id="empStatusDiv">
            <h4 class="chartHead top_border">Employee Status</h4>
            <div class="chartBody bottom_border">
                <fieldset class="myFieldset">
                    <legend>Employee Status</legend>    

                    <table class="formFields">
                        <tr>
                            <td class="label">Employee Name</td>
                            <td class="label"><input type="text" id="ESempId"/></td>
                        </tr>
                        <tr>
                            <td class="label">From</td>
                            <td class="label"><input type="text" class="date" id="ESstartDate" /></td>
                        </tr>
                        <tr>
                            <td class="label">To</td>
                            <td class="label"><input type="text" class="date" id="ESendDate" /></td>
                        </tr>
                    </table>
                </fieldset>
                <div id="ESempChart"></div>
            </div>
        </div>


        <!-- Project Status Report -->
        <div id="projStatusDiv">
            <h4 class="chartHead top_border">Project Status</h4>
            <div class="chartBody bottom_border">
                <fieldset class="myFieldset">
                    <legend>Project Status</legend>

                    <table class="formFields">
                        <tr>
                            <td class="label">Enter Project Name</td>
                            <td class="label"><input type="text" id="PSprojId" /></td>
                        </tr>
                        <tr>
                            <td class="label">Status From</td>
                            <td class="label"><input type="text" id="PSstartDate"  class="date" value="2011-1-1" /></td>
                        </tr>
                        <tr>
                            <td class="label">Status To</td>
                            <td class="label"><input type="text" id="PSendDate"  class="date" value="2012-1-31" /></td>
                        </tr>
                    </table>
                </fieldset>
                <div class="TabsPanel top_border">
                    <div class="tabs">
                        <span>Bar Chart</span>                
                        <span>PIE Chart</span>
                        <span>Line Chart</span>
                        <span>Burn Rate</span>
                    </div>
                    <div class="tabsContainer">
                        <div id="PSBarChart" class="tabContent"></div>
                        <div id="PSPieChart" class="tabContent"></div>
                        <div id="PSLineChart" class="tabContent"></div>
                        <div id="PSBurnChart" class="tabContent"></div>
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>