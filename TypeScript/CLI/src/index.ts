#!/usr/bin/env node

import yargs  from "yargs";
import fs from "fs";
import { exec } from 'child_process'

const argv = yargs
    .command("create","Create a new file",{
        "name": {
            describe:"File name",
            demondOption: true,
            type:"string",
            alias: 'n'
        }
    })
    .command("build","Build CLI")
    .command("new", "Create a new project", {
        "name": {
            describe:"Project name",
            demondOption: true,
            type:"string",
            alias: 'n'
        }
    })
    .help()
    .argv as { [key: string]: unknown, _ : string[]}


if (argv._.includes("create")) {
    // console.log("Create işlemi başlattın..");
    let fileName = argv.name as string;

    if (!fileName) {
        fileName = "style"
    } 
    const example = `*{
        margin:0;
        padding: 0;
    }`;

    fs.writeFileSync(fileName + ".css",example);
    console.log("Style css dosyası başarıyla oluşturuldu");
    
} 

if(argv._.includes("build")) {
    exec("npm run build",(error,stdout,stderr) => {
        if (error) {
            console.error(`Error: ${stdout}`);
            
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        
    });
}

if(argv._.includes("new")) {
    const projectName = argv.name;
    
    exec(`git clone https://github.com/TanerSaydam/SmartEnum.git ${projectName}`,(error,stdout,stderr) => {
        if (error) {
            console.error(`Error: ${stdout}`);
            
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        
    });
}
