 /*
 ________________________________________________________
|BrainJS 1.0  | By SquirrelCorn  | SPDX License: GPL-3.0 |
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 A web brainf**k compiler.
 ________________________________________________________
 Go to: https://github.com/SquirrelCorn/BrainJS

 ________________________________________________________
       THIS IS THE LIABRY, NOT THE SOURCE CODE
 
const BrainfuckCompiler={compile:function(e,a){let r=0,i=[];if(void 0!==a)for(let $=0;$<a.length;$++)i.push(a.charCodeAt($));let l='var p=0;var b="";var a=[];for(i=0;i<30000;i++){a[i]=0};x='+JSON.stringify(i)+";";for(;r<e.length;)if("+"===e[r]||"-"===e[r]){let c=0,o=!0;for(;o;){switch(e[r]){case"+":c++;break;case"-":c--;break;default:o=!1}r++}l+="a[p]+="+c+";a[p]=(256+a[p])%256;",r--}else if("<"===e[r]||">"===e[r]){let p=0,s=!0;for(;s;){switch(e[r]){case"<":p++;break;case">":p--;break;default:s=!1}r++}l+="p+="+p+";p=(30001+p)%30000;",r--}else{switch(e[r]){case".":l+="b+=String.fromCharCode(a[p]);";break;case",":l+="a[p]=x[0];x.splice(0, 1);";break;case"[":l+="while(a[p]){";break;case"]":l+="}"}r++}return l+"console.log(b);"}};
