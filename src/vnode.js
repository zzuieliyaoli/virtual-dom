import {
  isString,
  isArray,
  isObject
} from './utils'

class Vnode {
  constructor(tagName, props, children) {
    if (isString(tagName) === false) throw new Error('Vnode:tagName isnt string')
    if (isObject(props) === false) throw new Error('Vnode:props isnt object')
    if (isArray(children) === false) throw new Error('Vnode:tagName isnt array')
    this.tagName = tagName
    this.props = props
    this.children = children
  }
  isVnode(obj) {
    return obj instanceof Vnode
  }
  render() {
    let node = document.createElement(this.tagName)
    Object.keys(this.props).forEach((prop) => {
      node.setAttribute(prop, this.props[prop])
    })
    this.children.forEach((child) => {
      let childEl = this.isVnode(child) ? child.render() : document.createTextNode(child)
      node.appendChild(childEl)
    })
    return node
  }
}

export default Vnode
