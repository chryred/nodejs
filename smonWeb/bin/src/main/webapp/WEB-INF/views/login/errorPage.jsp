<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%
response.setStatus(200);
StringBuffer requestURL = request.getRequestURL();
String requestScheme = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();

// System.out.println ("requestURL    " + requestURL);   
//System.out.println ("requestScheme " + requestScheme);   
//System.out.println ("Seesion ID    " + request.getSession().getId());   

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>����� �ý���</title>
</head>
<body>
<br>
<br>
<div style="text-align: center;"><img src="/images/error/error_logo.jpg" alt=""></div>
<br>
<br>
<!-- <div style="text-align: center;"><span style="">�������� ������ �ƴմϴ�. URL�� Ȯ���Ͻñ� �ٶ��ϴ�.</span><br style="font-family:����;">
</div> -->
<h2 align="center"></h2>
</body>
</html>
