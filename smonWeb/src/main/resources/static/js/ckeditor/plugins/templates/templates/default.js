﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.addTemplates("default",{imagesPath:CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates")+"templates/images/"),

    templates:[
	
                {title:"시스템 재기동 매뉴얼",image:"template1.gif",description:"서버 內 기동 중인 프로세스 설명과 기동/중지 명령어 기술",
                 html:
                	 '<h3><em><strong>1. OOO WAS 1번기 프로세스</strong></em></h3>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ' +
                	 '<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"><strong><span style="font-family:Courier New,Courier,monospace;">※ JEUS admin 매니저(jeus7 계정으로 프로세스 1개)</span></strong>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ' +
                	 '<hr />jeus7 &nbsp; &nbsp;10863 &nbsp; &nbsp; 1 &nbsp;1 &nbsp;2017 ? &nbsp; &nbsp; &nbsp; &nbsp;05:28:03 /usr/java/jdk1.7.0_72/jre/bin/java -DadminServer -Xmx1024m -XX:MaxPermSize=128m -server -Xbootclasspath/p:/app/jeus7/lib/system/extension.jar -classpath /app/jeus7/lib/system/bootstrap.jar -Djava.security.policy=/app/jeus7/domains/cms_domain/config/security/policy -Djava.library.path=/app/jeus7/lib/system -Djava.endorsed.dirs=/app/jeus7/lib/endorsed -Djeus.properties.replicate=jeus,sun.rmi,java.util,java.net -Djeus.jvm.version=hotspot -Djava.util.logging.config.file=/app/jeus7/bin/logging.properties -Dsun.rmi.dgc.server.gcInterval=3600000 -Djava.util.logging.manager=jeus.util.logging.JeusLogManager -Djeus.home=/app/jeus7 -Djava.net.preferIPv4Stack=true -Djeus.tm.checkReg=true -Dsun.rmi.dgc.client.gcInterval=3600000 -Djeus.tool.webadmin.locale.language=ko -Djeus.domain.name=cms_domain -Djava.naming.factory.initial=jeus.jndi.JNSContextFactory -Djava.naming.factory.url.pkgs=jeus.jndi.jns.url -Djeus.server.protectmode=false -XX:+UnlockDiagnosticVMOptions -XX:+LogVMOutput -XX:LogFile=/app/jeus7_logs/adminServer/jvm.log jeus.server.admin.DomainAdminServerBootstrapper -domain cms_domain -server adminServer -u jeusstar ' +
                	 '<hr />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ' +
                	 '<p>&rarr; 중지 명령어 : <span style="font-size:16px;"><strong>dsdown</strong></span><br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                	 '&rarr; 기동 명령어 : <strong><span style="font-size:16px;">dsboot</span></strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ' +
                	 '</div>' +
                	 
                	 '<h3><em><strong>2. OOO WAS 2번기 프로세스</strong></em></h3>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ' +
                	 '<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"><strong><span style="font-family:Courier New,Courier,monospace;">※ JEUS admin 매니저(jeus7 계정으로 프로세스 1개)</span></strong>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ' +
                	 '<hr />jeus7 &nbsp; &nbsp;10863 &nbsp; &nbsp; 1 &nbsp;1 &nbsp;2017 ? &nbsp; &nbsp; &nbsp; &nbsp;05:28:03 /usr/java/jdk1.7.0_72/jre/bin/java -DadminServer -Xmx1024m -XX:MaxPermSize=128m -server -Xbootclasspath/p:/app/jeus7/lib/system/extension.jar -classpath /app/jeus7/lib/system/bootstrap.jar -Djava.security.policy=/app/jeus7/domains/cms_domain/config/security/policy -Djava.library.path=/app/jeus7/lib/system -Djava.endorsed.dirs=/app/jeus7/lib/endorsed -Djeus.properties.replicate=jeus,sun.rmi,java.util,java.net -Djeus.jvm.version=hotspot -Djava.util.logging.config.file=/app/jeus7/bin/logging.properties -Dsun.rmi.dgc.server.gcInterval=3600000 -Djava.util.logging.manager=jeus.util.logging.JeusLogManager -Djeus.home=/app/jeus7 -Djava.net.preferIPv4Stack=true -Djeus.tm.checkReg=true -Dsun.rmi.dgc.client.gcInterval=3600000 -Djeus.tool.webadmin.locale.language=ko -Djeus.domain.name=cms_domain -Djava.naming.factory.initial=jeus.jndi.JNSContextFactory -Djava.naming.factory.url.pkgs=jeus.jndi.jns.url -Djeus.server.protectmode=false -XX:+UnlockDiagnosticVMOptions -XX:+LogVMOutput -XX:LogFile=/app/jeus7_logs/adminServer/jvm.log jeus.server.admin.DomainAdminServerBootstrapper -domain cms_domain -server adminServer -u jeusstar ' +
                	 '<hr />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ' +
                	 '<p>&rarr; 중지 명령어 : <span style="font-size:16px;"><strong>dsdown</strong></span><br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                	 '&rarr; 기동 명령어 : <strong><span style="font-size:16px;">dsboot</span></strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ' +
                	 '</div>'            
                },
                
                {title:"시스템 서비스 확인",image:"template2.gif",description:"시스템별 서비스 확인용",
                 html:
                	  '<h4>※ 사내망 &harr; 공인망 방화벽 작업 시 서비스 확인</h4>                                                                                                                                                                                                                                                                                                                                       ' +
                	  '<h4>&nbsp;</h4>                                                                                                                                                                                                                                                                                                                                                                                   ' +
                	  '<h4>※ 시스템&nbsp;</h4>                                                                                                                                                                                                                                                                                                                                                                          ' +
                	  '<div style="background: rgb(238, 238, 238); padding: 5px 10px; border: 1px solid rgb(204, 204, 204); border-image: none;"><span style="font-size: 12px;">1. DM반출 시스템(</span>&nbsp;URL : <a href="https://dmdrm.shinsegae.com/drmone/">https://dmdrm.shinsegae.com/drmone/</a>)&nbsp;<u><strong><span class="marker">외부망(단, 포트가 막혀있어 VPN 접속 후 확인 必)</span></strong></u></div>' +
                	  '<p><iframe frameborder="0" height="640" scrolling="no" src="https://dmdrm.shinsegae.com/drmone" width="1024"></iframe></p>                                                                                                                                                                                                                                                                        '	  
                 },

{title:"Text and Table",image:"template3.gif",description:"A title with some text and a table.",
html:'\x3cdiv style\x3d"width: 80%"\x3e\x3ch3\x3eTitle goes here\x3c/h3\x3e\x3ctable style\x3d"width:150px;float: right" cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"1"\x3e\x3ccaption style\x3d"border:solid 1px black"\x3e\x3cstrong\x3eTable title\x3c/strong\x3e\x3c/caption\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3cp\x3eType the text here\x3c/p\x3e\x3c/div\x3e'}
]});