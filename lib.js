 /*
 ________________________________________________________
|BrainJS 1.0  | By SquirrelCorn  | SPDX License: GPL-3.0 |
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 A web brainf**k compiler.
 ________________________________________________________
 Go to: https://github.com/SquirrelCorn/BrainJS

 ________________________________________________________
       THIS IS THE LIABRY NOT THE SOURCE CODE
 
 */const brainjs={version:1,compile:function(e,a,r){let $=0,s=[];for(let i=0;i<a.length;i++)s.push(a.charCodeAt(i));let t='var p=0;var b="";var a=[];for(i=0;i<30000;i++){a[i]=0};x='+JSON.stringify(s)+";";for(;$<e.length;)if("+"===e[$]||"-"===e[$]){let c=0,l=!0;for(;l;){switch(e[$]){case"+":c++;break;case"-":c--;break;default:l=!1}$++}t+="a[p]+="+c+";a[p]=(256+a[p])%256;",$--}else if("<"===e[$]||">"===e[$]){let o=0,p=!0;for(;p;){switch(e[$]){case"<":o++;break;case">":o--;break;default:p=!1}$++}t+="p+="+o+";p=(30001+p)%30000;",$--}else{switch(e[$]){case".":t+="b+=String.fromCharCode(a[p]);";break;case",":t+="a[p]=x[0];x.splice(0, 1);";break;case"[":t+="while(a[p]){";break;case"]":t+="}"}$++}return""===r?t+="console.log(b);":t+=r,t}};
