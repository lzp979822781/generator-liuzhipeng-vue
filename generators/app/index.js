const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name? ',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers;
        });
    }
    
    writing() {
        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'package.json',
            'README.md',
            '.gitignore',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/App.vue',
            'src/main.js'
        ];

        templates.forEach(item => {
            const tmpl = this.templatePath(item);
            const output = this.destinationPath(item);
            this.fs.copyTpl(tmpl, output, this.answers);
        });
    }
};
