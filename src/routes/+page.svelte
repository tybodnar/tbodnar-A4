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
</script>



<h1>To Do List</h1>

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