process.stdin.setEncoding('utf-8');

var OSinfo = require('./modules/OSinfo');

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        var version = process.versions.node;
        var lang = process.env.lang;
        switch (instruction) {
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            
            case 'version':
                process.stdout.write('Node in version: ' + version + '\n');
                break;
            
            case 'lang':
                process.stdout.write('Your language is: ' + lang + '\n');
                break;
            
            case 'getOSinfo':
                OSinfo.print();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }            
    }
});