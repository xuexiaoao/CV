const fs = require('fs');
var marked = require('marked');

fs.readFile('./static/template.html', 'utf8', (err, template)=>{  
    if(err){  
        throw err  
    }else{  
        fs.readFile('./README.md', 'utf8', (err,markContent)=>{  
            if(err){  
                throw err  
            }else{  
                // 转化好的html字符串  
                let htmlStr = marked(markContent.toString())  
                // 将html模板文件中的 '@markdown' 替换为html字符串  
                template = template.replace('@markdown', htmlStr)  
                // 将新生成的字符串template重新写入到文件中,并生成一个新的html  
                fs.writeFile('./index.html', template, err=>{  
                    if(err){  
                        throw err  
                    }else{  
                        console.log("success")  
                    }  
                })  
            }  
        })  
    }  
})