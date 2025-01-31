<%-- 
    Document   : applications
    Created on : Sep 11, 2012, 9:30:51 AM
    Author     : Vamsee Achanta
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="res/js/jquery-1.6.2.min.js"></script>
        <script type="text/javascript" src="res/js/aceEng.js"></script>
        <script type="text/javascript" src="res/js/core.js"></script>

        <script type="text/javascript">
            $(function(){
                $('.hasSubMenu').hover(
                function(){
                    $(this).find('ul').show(1000).stop(true,true);
                },function(){
                    $(this).find('ul').hide(100).stop(true,true);
                });0
                
                $(window).scroll(function(){
                    var v = ($(window).height()-$(div).height())/2;
                    v += $(window).scrollTop();
                    $(div).css({
                        //                left:'-'+($(div).width()-20)+'px',
                        top:v-100
                    });
                });
            });
        </script>
        <!-- Google analytics code  -->
        <script type="text/javascript">

            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-38279667-1']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

        </script>

        <!-- End of google analytics code -->
        <script>
            (function() {
                var cx = '000347195480838471887:yla6vgzgiiq';
                var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
                gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                    '//www.google.com/cse/cse.js?cx=' + cx;
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
            })();
        </script>


        <link href="res/css/ace.css" rel="stylesheet" type="text/css"/>
        <link href="res/css/core.css" rel="stylesheet" type="text/css"/>
        <link type="image/x-icon" href="AcenT logo.ico" rel="icon">
        <title>AceEngineer</title>

    </head>
    <body >
        <div align="center" >
            <div class="feedback">
                <a id="feedback_button" class="a"><img src="res/images/feedback.png"/></a>
                <form class="form" id="form">
                    <h2>Feedback Please</h2>
                    <p><label>Name: </label><input type="text" name="senderName" id="senderName"/></p>
                    <p><label>Email: </label><input type="text"  name="Email" id="Email"/></p>
                    <p><label>Subject: </label><input type="text" name="Subject" id="Subject"/></p>
                    <p><label>Message: </label><textarea id="msgBody" name="msgBody"></textarea></p>
                    <p align="right"><input type="button" value="SEND" class="btn" id="feedback_Submit"/></p>
                    <label id="feedback_Result" style="display: none; width: 300px"></label>
                </form>
            </div>
            <!--Menu content here -->
            <table width="990" class="content" border="0">
                <tr>
                    <td>
                        <table border="0"   cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="200" valign="top" >
                                    <div align="left">
                                        <a href="#"><img src="logo.png" ></a>
                                    </div>
                                </td>
                                <td width="790" align="right">
                                    <jsp:include page="header.jsp"/>
                                </td>
                            </tr>
                            <tr>
                                <td width="250" colspan="2" align="right">
                            <gcse:searchbox-only></gcse:searchbox-only>
                    </td>
                </tr>
                <tr>
                    <td valign="bottom" class="menu" colspan="2">
                        <ul class="dropMenu">
                            <li ><a class="active" href="Home.html">Home</a></li>
                            <li ><a href="Services.html">Services</a></li>
                            <li class="hasSubMenu"><a href="applications.html">Applications</a>
                                <ul class="subMenu ">
                                    <li><a href="http://aceengineer.com/AceTools/vmStressCheck.jsp">Oil & Gas</a></li>
                                    <li><a href="http://aceengineer.com/StatisticalAnalysis/">Statistical Analysis</a></li>
                                    <li><a href="http://aceengineer.com/StockAnalysis/">Stock Management</a></li>
                                    <li><a href="http://aceengineer.com/StructuralAnalysis/">Structural Analysis</a></li>
                                    <li><a href="http://aceengineer.com/DataManipulation/">Data Manipulation</a></li>
                                    <li class="bottom_border"><a href="#">Fluid Mechanics</a></li>
                                </ul>
                            </li>
                            <li class="hasSubMenu" ><a href="aboutUs.html" >About Us</a>
                            <li><a href="Careers.html">Careers</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <img src="res/images/applications.png"/>
        </td>
    </tr>

    <tr>
        <td>
            <blockquote>
                <table class="main" align="center">
                    <tr>
                        <td align="" valign="top">
                            <table class="appTab">
                                <tr>
                                    <td>
                                        <a href="http://aceengineer.com/AceTools/vmStressCheck.jsp">
                                            <h2 class="headingMedium">Oil & Gas</h2>
                                        </a>
                                        <table>
                                            <tr>
                                                <td><a href="http://aceengineer.com/AceTools/vmStressCheck.jsp"><img src="res/images/og.png"/></a></td>
                                                <td>
                                                    <p>
                                                        AceEngineer provides Web based applications as vmStress and Shear7 for Oil & Gas Modules. These applications are very user friendly and very useful for real time world. For more information about these applications  <a href="http://aceengineer.com/AceTools/vmStressCheck.jsp">click here</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <a href="http://aceengineer.com/StatisticalAnalysis/">
                                            <h2 class="headingMedium">Statistical Analysis</h2>
                                        </a>
                                        <table>
                                            <tr>
                                                <td><a href="http://aceengineer.com/StatisticalAnalysis/"> <img src="res/images/stat1.png"/></a></td>
                                                <td>
                                                    <p>
                                                        AceEngineer provides powerful, convenient statistical analysis application. This is an interactive web application to help you select the right kind of analysis to perform on your data. It fits your data into proper distribution. For more information about these applications <a href="http://aceengineer.com/StatisticalAnalysis/">click here</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://aceengineer.com/StockAnalysis/">
                                            <h2 class="headingMedium">Stock Management</h2>
                                        </a>
                                        <table>
                                            <tr>
                                                <td><a href="http://aceengineer.com/StockAnalysis/"><img src="res/images/stock.png"/></a></td>
                                                <td>
                                                    <p>
                                                        Stock market due to the financial crisis have been very volatile lately. Individual investors need not only to monitor their holdings but also may need to make decisions of when to buy and sell their assets. AceEngineer provides a free online tool to analyze your Stock Market and provide so many benefits to you. For more information <a href="http://aceengineer.com/StockAnalysis/">click here</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <a href="http://aceengineer.com/StructuralAnalysis/">
                                            <h2 class="headingMedium">Structural Analysis</h2>
                                        </a>
                                        <table>
                                            <tr>
                                                <td><a href="http://aceengineer.com/StructuralAnalysis/"><img src="res/images/struct_1.png"/></a></td>
                                                <td>
                                                    <p>
                                                        Structural Analysis is a field of engineering, dealing with the analysis and design of structures that support or resist loads. AceEngineer provides different types of applications like Beam Calculations, Suction pile and Weldment's in Structural Analysis. For more information about these applications <a href="http://aceengineer.com/StructuralAnalysis/">click here</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="http://aceengineer.com/DataManipulation/">
                                            <h2 class="headingMedium">Data Manipulation</h2>
                                        </a>
                                        <table>
                                            <tr>
                                                <td><a href="http://aceengineer.com/DataManipulation/"><img src="res/images/dataManip.jpg"/></a></td>
                                                <td>

                                                    <p>
                                                        The statistical data application helps to determine the key statistical parameters based on sample and laboratory data obtained and interpret information from data. Applications are user friendly and output can be saved as PDF for peer presentations and future reference. For more information about these applications please <a href="http://aceengineer.com/DataManipulation/">click here</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <h2 class="headingMedium">Fluid Mechanics</h2>
                                        <table>
                                            <tr>
                                                <td><img src="res/images/fm.jpg"/></td>
                                                <td>
                                                    <p>
                                                        AceEngineer Provides Web based application as Emptying a fluid filled container and Loss Of Buoyancy. These Applications are very user friendly and very useful for real time world. For more information about these applications <a href="#">click here</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </blockquote>
        </td>    
    </tr>
</table>
<!-- Feed back -->
<!-- End of Feed back -->
<div id="Footer" style="border: 1px solid #ffffff">
    <table id="siteMap" width="990" align="center">
        <tr>
            <td valign="top">
                <ul type="none">
                    <li><a href="Home.html"><strong>Home</strong></a></li>
                </ul>
            </td>
            <td valign="top">
                <ul type="none">
                    <li>
                        <a href="aboutUs.html"><strong>About Us</strong></a><br> 
                        <a href="aboutUs.html">Mission and Values</a><br>
                        <a href="aboutUs.html">History</a>
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul type="none">
                    <li> 
                        <a href="Services.html"><strong>Services</strong></a><br>
                        <a href="Services.html">Financial Engineering</a><br>
                        <a href="Services.html">Mechanical Engineering</a><br>
                        <a href="Services.html">Civil and Structural Engineering</a><br>
                        <a href="Services.html">Project Management Tools</a><br>
                        <a href="Services.html">Web Designing and Web Hosting</a><br>
                        <a href="Services.html">Mobile Apps development</a><br>
                        <a href="Services.html">Business improvement plans</a>
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul type="none">
                    <li>
                        <a href="applications.html"><strong>Applications</strong></a><br>
                        <a href="http://aceengineer.com/AceTools/vmStressCheck.jsp">Oil & Gas</a><br>
                        <a href="http://aceengineer.com/StatisticalAnalysis/">Statistical Analysis</a><br>
                        <a href="http://aceengineer.com/StockAnalysis/">Stock Management</a><br>
                        <!--<a href="#">Heat Transfer</a><br>-->
                        <a href="http://aceengineer.com/StructuralAnalysis/">Structural Analysis</a><br>
                        <a href="http://aceengineer.com/DataManipulation/">Data Manipulation</a><br>
                        <a href="#">Fluid Mechanics</a><br>
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul type="none">
                    <li>
                        <a href="Careers.html"><strong>Careers</strong></a><br>
                        <a href="Careers.html">Current Openings</a>
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul type="none">
                    <li><a href="contactus.html"><strong>Contact Us</strong></a></li>
                </ul>
            </td>
        </tr>
        <tr>

            <td colspan="6" align="right" valign="baseline" style="border-bottom: 1px solid white;">
                <label  style="color:white; vertical-align: top; font-size:16px; ">Follow us on :</label>
                <a target="blank" href="http://www.facebook.com/AceEngineer?ref=hl"><img src="res/images/Facebook-Buttons-1-10-.png"/></a>
                <a target="blank" href="https://twitter.com/AceEngineer1"><img src="res/images/twitter.png"/></a>
                <a target="blank" href="https://plus.google.com/u/0/b/107017400816259920540/107017400816259920540/posts"><img src="res/images/Googleplus.png"/></a>
                <a target="blank" href="http://www.linkedin.com/company/aceengineer"><img src="res/images/linkin_icon.png"/></a>
            </td>
        </tr>

        <tr align="center">
            <td colspan="6">
                <a href="http://aceengineer.com/AceTools/vmStressCheck.jsp">Oil & Gas &nbsp;&Vert;&nbsp;</a>
                <a href="http://aceengineer.com/StatisticalAnalysis/">Statistical Analysis &nbsp;&Vert;&nbsp;</a>
                <a href="http://aceengineer.com/StockAnalysis/HistoricalPrices.html">Stock Management&nbsp;&Vert;&nbsp;</a>
                <!--<a href="#">Heat Transfer&nbsp;&Vert;&nbsp;</a>-->
                <a href="http://aceengineer.com/StructuralAnalysis/">Structural Analysis&nbsp;&Vert;&nbsp;</a>
                <a href="http://aceengineer.com/DataManipulation/">Data Manipulation&nbsp;&Vert;&nbsp;</a>
                <a href="#">Fluid Mechanics</a><br>
                <a href="Terms-conditions.html">Terms & Conditions&nbsp;&Vert;&nbsp;</a>
                <a href="Terms-conditions.html">Privacy policy</a>
            </td>
        </tr>
        <tr align="center">
            <td colspan="6" style="color:#ffffff;">
                AceEngineer &copy; 2011, powered by PEPL
            </td>
        </tr>
    </table>
</div>
</div>
</body>
</html>
