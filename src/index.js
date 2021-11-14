//import和commonjs都是浏览器不能直接识别的语句,如果要使用,需要经过babel处理或者node编译;
//webpack提供了一种处理方式,因此可以在webpack中使用import语句以及所说的"node开发环境"
import _ from "lodash";
import print from "./print"
import "./style.css";

function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  print("func from module")
  return element;
}

document.body.appendChild(component());
