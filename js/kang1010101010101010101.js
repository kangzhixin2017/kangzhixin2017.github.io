var is=true;var a;var fla=0;var k=0;var index=0;var name="";var m=0;var htmlobj1=$.ajax({url:"001.txt",async:false});var htmlobj2=$.ajax({url:"002.txt",async:false});var htmlobj3=$.ajax({url:"003.txt",async:false});var str=htmlobj1.responseText;console.log(str);$("#string").append("<span class='kang "+name+" kang"+fla+"'>");function type(){if(is&&(str.substring(index, index + 19) == 'ound-color: rgb(0,3')){$("body").css("color","rgb(222,222,222)");is=false}if(index>=str.length){index=0;fla=111111111;index=0;name="";clearInterval(a);if(k==0){str=htmlobj2.responseText;k++;a=setInterval(resume,40)}}if(str.substring(index,index+1)=="/"){fla++;name="prolog";$("#string").append("</span>");$("#string").append("<span class='kang "+name+" kang"+fla+"'>")}else{if((str.substring(index,index+1)==".")&&(str.substring(index+1,index+3)!="cn")||((str.substring(index,index+1)=="*")&&(str.substring(index+1,index+2)=="{"))||(str.substring(index,index+4)=="body")||(str.substring(index,index+2)=="li")){fla++;name="classname";$("#string").append("</span>");$("#string").append("<span class='kang "+name+" kang"+fla+"'>")}else{if((str.substring(index,index+1)=="{")||(str.substring(index,index+1)=="}")){fla++;name="brackets";$("#string").append("</span>");$("#string").append("<span class='kang "+name+" kang"+fla+"'>")}else{if((str.substring(index,index+1)==":")||(str.substring(index,index+1)==";")){fla++;name="colon";$("#string").append("</span>");$("#string").append("<span class='kang "+name+" kang"+fla+"'>")}else{if(str.substring(index,index+1)=="\t"){fla++;name="property";$("#string").append("</span>");$("#string").append("<span class='kang "+name+" kang"+fla+"'>")}else{if(str.substring(index-1,index)==":"){fla++;name="cdata";$("#string").append("</span>");$("#string").append("<span class='kang "+name+" kang"+fla+"'>")}}}}}}$(".kang"+fla).append(str.substring(index,index+1));$(".stylecon").append(str.substring(index,index+1));if(str.substring(index-1,index)=="\n"){$("#string").scrollTop($("#string")[0].scrollHeight)}index++}a=setInterval(type,40);function resume(){if(index>=str.length){index=0;fla=555555555;index=0;name="";clearInterval(a);str=htmlobj3.responseText;$("#string").append("<span class='kang "+name+" kang"+fla+"'>");a=setInterval(type,60)}if(str.substring(index,index+1)=="#"){fla++;name="title";$("#string2").append("</span>");m++;$("#string2").append("<span class='kang "+name+" kang2"+fla+"'>");index++}else{if(str.substring(index,index+1)=="$"){fla++;name="information";$("#string2").append("</span>");$("#string2").append("<span class='kang "+name+" kang2"+fla+"'>");index++}else{if(str.substring(index,index+1)=="*"){fla++;name="queue";$("#string2").append("</span>");$("#string2").append("<span class='kang "+name+" kang2"+fla+"'>");index++}else{if(str.substring(index,index+1)=="!"){fla++;name="point";$("#string2").append("<li class='kang "+name+" kang2"+fla+" ka"+m+"'>");index++}else{if(str.substring(index,index+1)=="%"){$("#string2").append("</span>");$("#string2").append("<ul>");index++}else{if(str.substring(index,index+1)=="^"){$("#string2").append("</li>");index++}else{$(".kang2"+fla).append(str.substring(index,index+1));index++}}}}}}$("#string2").scrollTop($("#string2")[0].scrollHeight)};