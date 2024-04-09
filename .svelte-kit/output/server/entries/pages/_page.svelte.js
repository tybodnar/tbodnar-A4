import { c as create_ssr_component, a as subscribe, b as set_store_value, d as add_attribute, f as each, e as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const css = {
  code: 'ul.svelte-a0ppei.svelte-a0ppei{list-style:none}li.svelte-a0ppei.svelte-a0ppei{font-size:1.3rem;padding-bottom:2.5vw}.done.svelte-a0ppei.svelte-a0ppei{opacity:40%;text-decoration:line-through}.remove.svelte-a0ppei.svelte-a0ppei{color:inherit;cursor:pointer;float:right;font-size:1.3em}h1.svelte-a0ppei.svelte-a0ppei{text-align:center;padding-top:5vw;font-size:3em}.flex.svelte-a0ppei.svelte-a0ppei{display:flex;justify-content:center;align-items:center;gap:10px;padding-bottom:5vw}.center.svelte-a0ppei.svelte-a0ppei{align-items:center;display:flex;justify-content:center;gap:10px;color:black}.centerList.svelte-a0ppei.svelte-a0ppei{padding:0vw 20vw;padding-right:20vw}button.svelte-a0ppei.svelte-a0ppei{background-color:#0275ff;border:none;color:white;padding:18px 32px;text-align:center;text-decoration:none;font-size:1.3em;cursor:pointer}button.svelte-a0ppei.svelte-a0ppei:hover{opacity:80%}input[type=text].svelte-a0ppei.svelte-a0ppei{width:50%;padding:15px 20px;box-sizing:border-box;outline:none;border:3px solid #bfbfbf;font-size:1.3em}input[type=text].svelte-a0ppei.svelte-a0ppei:focus{border:3px solid #0275ff}input[type=checkbox].svelte-a0ppei.svelte-a0ppei{cursor:pointer;height:25px;width:25px;background-color:#ffffff}.switch.svelte-a0ppei.svelte-a0ppei{position:relative;display:inline-block;width:60px;height:34px;float:right;margin-right:2vw}.switch.svelte-a0ppei input.svelte-a0ppei{opacity:0;width:0;height:0}.slider.svelte-a0ppei.svelte-a0ppei{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider.svelte-a0ppei.svelte-a0ppei:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s}input.svelte-a0ppei:checked+.slider.svelte-a0ppei{background-color:#2196F3}input.svelte-a0ppei:focus+.slider.svelte-a0ppei{box-shadow:0 0 1px #2196F3}input.svelte-a0ppei:checked+.slider.svelte-a0ppei:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-a0ppei.svelte-a0ppei{border-radius:34px}.slider.round.svelte-a0ppei.svelte-a0ppei:before{border-radius:50%}.darkModeText.svelte-a0ppei.svelte-a0ppei{padding-left:1vh;padding-top:0.5vh}@media only screen and (max-width: 1150px){.centerList.svelte-a0ppei.svelte-a0ppei{padding:0vw 15vw;padding-right:10vw}}@media only screen and (max-width: 500px){.centerList.svelte-a0ppei.svelte-a0ppei{padding:0vw 0vw;margin-right:10vw}input[type=text].svelte-a0ppei.svelte-a0ppei{width:60%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDone;
  let $todoList, $$unsubscribe_todoList;
  let todoItem = "";
  let storedList;
  let todoList = writable([]);
  $$unsubscribe_todoList = subscribe(todoList, (value) => $todoList = value);
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    storedList = localStorage.getItem("storedList");
    if (storedList) {
      set_store_value(todoList, $todoList = JSON.parse(storedList), $todoList);
    }
  }
  $$result.css.add(css);
  isDone = $todoList.filter((item) => item.done);
  $$unsubscribe_todoList();
  return `<label class="switch svelte-a0ppei"><input type="checkbox" class="svelte-a0ppei"> <span class="slider round svelte-a0ppei"></span></label> <h3 class="darkModeText svelte-a0ppei" id="DarkModetext" data-svelte-h="svelte-bzfvv3">Light Mode is OFF</h3> <h1 id="hOne" class="svelte-a0ppei" data-svelte-h="svelte-3t5vip">To Do List!</h1> <form class="flex svelte-a0ppei"><input type="text" class="svelte-a0ppei"${add_attribute("value", todoItem, 0)}> <div data-svelte-h="svelte-1jl9fcl"><button type="submit" class="svelte-a0ppei">Add</button></div></form>  <div class="centerList svelte-a0ppei"><ul class="svelte-a0ppei">${each($todoList, (item, index) => {
    return `<li class="svelte-a0ppei"><input type="checkbox" class="svelte-a0ppei"${add_attribute("checked", item.done, 1)}> <span class="${["svelte-a0ppei", item.done ? "done" : ""].join(" ").trim()}">${escape(item.text)}</span> <span class="remove svelte-a0ppei" id="remover" role="button" tabindex="0" data-svelte-h="svelte-bgpr6e">×</span> </li>`;
  })}</ul></div>  <div class="center svelte-a0ppei">${isDone.length > 0 ? `<button style="align-items: center; display: flex; justify-content: center;" class="svelte-a0ppei" data-svelte-h="svelte-5aslw6">Remove Done</button>` : ``} </div>`;
});
export {
  Page as default
};
