
<label class="switch" onclick="darkMode()">
     <input type="checkbox">
     <span class="slider round"></span>
</label>


<h3 id="DarkModetext">Dark Mode is OFF</h3>

<h1 id="hOne">To Do List</h1>

<form on:submit|preventDefault={addToArray}  class="flex">
     <input type="text" bind:value={todoItem}>
     <div>
          <button type="submit">Add</button>
     </div>
</form>



<!-- WORKING HERE -->

<div class="centerList">

     <ul>
          {#each $todoList as item, index}
               <li>

                    <input type="checkbox" bind:checked={item.done} on:change={updateList}>


                    <span class:done={item.done} >{item.text}</span>
                    <span on:click={() => removeThis(index)} class="remove" role="button" tabindex="0">&times;</span>
               </li>
          {/each}
     </ul>

</div>

<!-- WORKING HERE -->




<div class="center">
     {#if isDone.length > 0}
     <button style="align-items: center; display: flex; justify-content: center;" on:click={clearDone}>Remove Done</button>
     {/if}
     
</div>

<style>
     ul {
          list-style: none;
     }
     li {
          font-size: 1.3rem;
          padding-bottom: 2.5vw;
     }
     .done {
          opacity: 40%;
          text-decoration: line-through;
     }
     .remove {
          color: rgb(255, 255, 255);
          cursor: pointer;
          float: right;
          font-size: 1.3em;
     }

     h1{
          text-align: center;
          padding-top: 5vw;
          font-size: 3em;
     }

     .flex{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding-bottom: 5vw;
     }

     .center{
          align-items: center;
          display: flex;
          justify-content: center;
          gap: 10px;
          color: black;
     }

     .centerList{
          
          padding: 0vw 20vw;
          padding-right: 20vw;
     }

    
     button {
          background-color: #0275ff;
          border: none;
          color: white;
          padding: 18px 32px;
          text-align: center;
          text-decoration: none;
          font-size: 1.3em;
          cursor: pointer;
     }

     button:hover{
          opacity: 80%;
     }

     input[type=text] {
          width: 50%;
          padding: 15px 20px;
          box-sizing: border-box;
          outline: none;
          border: 3px solid #bfbfbf;
          font-size: 1.3em;
     }

     input[type=text]:focus {
          border: 3px solid #0275ff;
     }

     

     input[type=checkbox] {
          cursor: pointer;
          height: 25px;
          width: 25px;
          background-color: #ffffff;
     }



     /* SWITCH CODE FROM W3SCHOOLS.COM */

     /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  float: right;
  margin-right: 2vw;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
     


     @media only screen and (max-width: 1150px){
          .centerList{
               padding: 0vw 15vw;
               padding-right: 10vw;
          }
     }

     @media only screen and (max-width: 500px){
          .centerList{
               padding: 0vw 0vw;
               margin-right: 10vw;
          }
          input[type=text] {
          width: 60%;
          }
          html, body {
               overflow-x: hidden !important;
          }
          body{
               position: relative;
          }
     }

</style>

<script>
     import '../style.css';
     import {writable} from 'svelte/store';
     let todoItem = '';
     let storedList;
     let todoList = writable([]);

     if(typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
          storedList = localStorage.getItem('storedList');
          if (storedList) {
               $todoList = (JSON.parse(storedList));
          }
     }

     function updateList() {
          return storedList = localStorage.setItem('storedList', JSON.stringify($todoList));
     }




     $: isDone = $todoList.filter(item => item.done);

     function addToArray() {
          if (todoItem == '') {
               return;
          }
          $todoList = [...$todoList, {
               text: todoItem,
               done: false,

          }];
          console.log($todoList);
          updateList();
          todoItem = '';
     }
     function removeThis(index) {
          $todoList.splice(index, 1);
          $todoList = $todoList;
          updateList();
     }
     function clearDone() {
          $todoList = $todoList.filter(item => !item.done)
          updateList();
     }

     //window.darkMode = darkMode;

     function darkMode() {
          let content = document.getElementById("DarkModetext");
          content.innerText = "Dark Mode is ON";
     }


</script>