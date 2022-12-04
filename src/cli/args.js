const parseArgs = () => {
    const argvList = process.argv.slice(2)
    for(let i=0; i<argvList.length; i+=2) {
        console.log(`${argvList[i].slice(2)} is ${argvList[i+1]}`);
    }
};

parseArgs();