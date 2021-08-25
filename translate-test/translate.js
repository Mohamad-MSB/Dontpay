const translate = require('@vitalets/google-translate-api');



translate(process.argv[2], {to: process.argv[3]}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});

