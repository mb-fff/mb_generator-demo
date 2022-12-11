/**
 * templates 存放模板文件
 * index.js 配置文件
 * 完成之后，通过 yarn link 到全局
 * 创建文件目录，通过 yo demo  创建项目模板
 */

const Generator = require('yeoman-generator')
const templates = require('./template.json')

module.exports = class extends Generator {
  // 询问
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ])
      .then(answers => {
        this.answers = answers
      })
  }

  // 把每一个文件都通过模板转换到目标路径
  writing () {

    templates.data.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}