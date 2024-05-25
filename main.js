 /*
 ________________________________________________________
|BrainJS 1.0  | By SquirrelCorn  | SPDX License: GPL-3.0 |
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 A web brainf**k compiler.
 ________________________________________________________
 Go to: https://github.com/SquirrelCorn/BrainJS

 ________________________________________________________
       THIS IS THE SOURCE CODE, NOT THE LIBARY

 
const BrainfuckCompiler = {
    compile: function(bf, input) {
        let i = 0;
        let inputarray = [];
        // Check if input is provided and not undefined
        if (input !== undefined) {
            for (let b = 0; b < input.length; b++) {
                inputarray.push(input.charCodeAt(b));
            }
        }
        let compiled = 'var p=0;var b="";var a=[];for(i=0;i<30000;i++){a[i]=0};x=' + JSON.stringify(inputarray) + ';';
        while (i < bf.length) {
            if (bf[i] === '+' || bf[i] === '-') {
                let value = 0;
                let flag = true;
                while (flag) {
                    switch (bf[i]) {
                        case '+':
                            value++;
                            break;
                        case '-':
                            value--;
                            break;
                        default:
                            flag = false;
                            break;
                    }
                    i++;
                }
                compiled += 'a[p]+=' + value + ';a[p]=(256+a[p])%256;';
                i--;
            } else if (bf[i] === '<' || bf[i] === '>') {
                let value = 0;
                let flag = true;
                while (flag) {
                    switch (bf[i]) {
                        case '<':
                            value++;
                            break;
                        case '>':
                            value--;
                            break;
                        default:
                            flag = false;
                            break;
                    }
                    i++;
                }
                compiled += 'p+=' + value + ';p=(30001+p)%30000;';
                i--;
            } else {
                switch (bf[i]) {
                    case '.':
                        compiled += 'b+=String.fromCharCode(a[p]);';
                        break;
                    case ',':
                        compiled += 'a[p]=x[0];x.splice(0, 1);';
                        break;
                    case '[':
                        compiled += 'while(a[p]){';
                        break;
                    case ']':
                        compiled += '}';
                        break;
                }
                i++;
            }
        }
        compiled += 'console.log(b);';
        return compiled;
    }
};
