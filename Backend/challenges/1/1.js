const fs = require("fs");
const { flushCompileCache } = require("module");

//Challenge 1: Create and Read
/*
Task:
Use fs.writeFile() to create a file named hello.txt that contains the text:

Copy
Edit
Hello, Node.js!
Then use fs.readFile() to read the file and display its content in the console.

fs.writeFile("hello.txt", "Hello from Node.js", (err)=>{
    if(err){
        console.log("This file is wrong: ", err);
    }else{
        fs.readFile("./hello.txt", "utf8", (err,data)=>{
            if(err){
                throw err;
            }
            console.log("Your content: ", data);
        })
    }
})



 Challenge 2: Log a Quote
Task:
Use fs.writeFile() to create a file named quote.txt with any quote you like.

Then immediately use fs.readFile() to confirm the quote was saved correctly by logging the file content.


fs.writeFile("quote.txt", "Al que madruga Dios le ayuda", (err)=>{
    if(err){
        console.log("There was a problem with your file: ", err);
    }else{
        fs.readFile("quote.txt", "utf8", (err, data)=>{
            if(err){
                console.log("There was an error reading your file: ", err);
            }
            console.log("Your quote was saved successfully, here it is: ", data);
        })
    }
})


Challenge 3: Combine 2 Texts
Task:
You’re given two files: part1.txt and part2.txt.
Use fs.readFile() to read both files, then use fs.writeFile() to write their combined content into a new file called full.txt.


fs.writeFile("part1.txt", "Solia caminar solo y desemparado, hacia frio y llovia.\n", (err)=>{
    if(err) throw err;
})

fs.writeFile("part2.txt", "Pero eso no le iba a detener, el tuvo que completar su mision.", (err)=>{
    if(err) throw err;
})


fs.readFile("part1.txt", "utf8", (err, data1)=>{
    if(err) throw err;
    fs.readFile("part2.txt", "utf8", (err, data2)=>{
        if(err) throw err;
        fs.writeFile("full.txt", data1 + data2, (err)=>{
            if(err){
                console.log("There was an error reading youe file: ", err);
            }else{
                console.log(" This is your full quote: ", data1 + data2);
            }
        })
    })
})



Challenge 4: Journal Entry Appender
Goal:
Create a small journal file. Then, ask the user to write a new entry and append it to the journal.

Steps:

Create a file journal.txt with an opening line like “My Journal:\n”.
Simulate a new entry (hardcoded string is fine for now).
Append the entry to the file using fs.appendFile.
Read the full journal and print it.


fs.writeFile("journal.txt", "My Journal:\n", (err)=>{
    if(err) throw err;
    const newEntry = "Today I learned how to use appendFile in Node.js.\n";
    fs.appendFile("journal.txt",newEntry, (err)=>{
        if(err){
            console.log("There was an error in your code: ", err);
        }else{
            fs.readFile("journal.txt", "utf8", (err, data)=>{
                if(err){
            console.log("There was an error in your code: ", err);
                }else{
                    console.log(data);
                }
            })
        }
    })
})

Challenge 5: Quote Collector
Goal:
Store multiple quotes in a file, each added on its own line.

Steps:

Create (or overwrite) a file called quotes.txt with one quote.
Append 2–3 more quotes to the file using fs.appendFile.
Read the file and print the list of quotes in the console.



fs.writeFile("quote01.txt", "Hard work always pays off whatever you do.\n", (err) => {
    if (err) throw err;
    fs.appendFile("quote01.txt", "You must do that thing which you think you cannot do.\n", (err) => {
        if (err) throw err;
        fs.appendFile("quote01.txt", "Dreams don't work unless you do.\n", (err) => {
            if (err) throw err;
            fs.appendFile("quote01.txt", "Turn your wounds into wisdom.\n", (err) => {
                if (err) throw err;
                fs.readFile("quote01.txt", "utf8", (err,data)=>{
                 if(err){
                 console.log("This error: ", err);
                 }else{
                   console.log("Your quotes: ", data);
                    }
                })
            });
        });
    });
});


Challenge 3: Task Logger
Goal:
Log tasks into a file and summarize the total number of tasks at the end.

Steps:

Create a file called tasks.txt with a heading “Task List:\n”.

Append 3 tasks using fs.appendFile.

Read the file and count how many tasks are there (one per line, excluding the heading).

At the bottom of the file, append a line like:
"Total tasks: 3"

*/

fs.writeFile("tasks.txt", "Task List: \n", (err)=>{
    if(err) throw err;
    fs.appendFile("tasks.txt", "Go gym\n", (err)=>{
        if(err) throw err
    })
    fs.appendFile("tasks.txt", "Cook\n", (err)=>{
        if(err) throw err
    })
    fs.appendFile("tasks.txt", "Drive back home\n", (err)=>{
        if(err) throw err
        fs.readFile("tasks.txt", "utf8", (err, data)=>{
            if(err)throw err;
            const tasks = data
            .split("\n")
            .slice(1)
            .filter((line)=>line.trim() !="")
            console.log("Total tasks:", tasks.length);
            console.log("Tasks:\n", tasks.join("\n"));;
        })
    })
})

