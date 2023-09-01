const parse = function (str) {
    let index = 0
    const n = str.length
    let stack1 = []
    let stack2 = []
    let rest = str
    let startRegExp = /^\<([a-zA-Z0-9]+)(\s.*\s)*?(\/)?\>/
    let endRegExp = /^\<\/([a-z]+[1-6]?)\>/
    let wordErgExp = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/

    while (index < n) {
        let rest = str.substring(index)
        if (startRegExp.test(rest)) {
            let result = rest.match(startRegExp)
            let tag = result[1]
            let attrsString = result[2]
            stack1.push(tag)
            stack2.push({ 'tag': tag, 'children': [], attrs: parseAttrsString(attrsString) })
            console.log(result[0])
            index += result[0].length
            if(result[0].trim().endsWith('/>')){
                stack1.shift()
            }
        } else if (endRegExp.test(rest)) {
            let tag = rest.match(endRegExp)[1]
            let pop_tag = stack1.pop()
            if (tag === pop_tag) {
                let pop_arr = stack2.pop()
                stack2.push(pop_arr)
            } else {
                new Error(stack1[stack1.length - 1] + '标签没有闭合')
            }
            index += tag.length + 3
        } else if (wordErgExp.test(rest)) {
            let word = rest.match(wordErgExp)[1]
            if (!/^\s+$/.test(word)) {
                stack2[stack2.length - 1].children.push({ 'text': word, 'type': 3 })
            }
            index += word.length
        }else {
            index++
        }
    }
    return stack2
}
function parseAttrsString(attrsString) {
    if (attrsString == undefined) return []
    attrsString = attrsString.trim()
    let isClass = false
    let point = 0
    let result = []
    for (let i = 0; i < attrsString.length; i++) {
        let char = attrsString[i]
        if (char == '"') {
            isClass = !isClass
        } else if (char == ' ' && !isClass) {
            if (!/^\s*$/.test(attrsString.substring(point, i).trim())) {
                result.push(attrsString.substring(point, i).trim())
                point = i
            }
        }
    }
    result.push(attrsString.substring(point).trim())
    result = result.map(item => {
        let obj = item.match(/^(.+)="(.+)"$/)
        return {
            name: obj[1],
            value: obj[2]
        }
    })
    return result
}
module.exports = function (source) {
    const callback = this.async();
    const ast = parse(source);
    console.log(ast)
    const generate = (ast) => {

        let code = `
        const parentEl = document.getElementsByTagName("body")[0]
        const createElement = (text) => {
            const el = document.createElement("div")
            el.textContent = text
            parentEl.append(el);
        }
     `
        ast.forEach(v => {
            if (v.tag === 'wxs') {
                const attrs = {}
                v.attrs.forEach(o => {
                    attrs[o.name] = o.value
                })
                code += `const ${attrs.module} = require('${attrs.src}') \n`
            } else if (v.tag === 'view') {
                v.children.forEach(o => {
                    code += `createElement(${o.text.match(/{{(.*)}}/)[1]})\n`
                })
            }
        })
        return code;
    }

    const code = generate(ast);
    callback(null, code);
}
