const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const todos = JSON.parse(localStorage.getItem('todos'))

todos.forEach(el => {  // when page load. data retrieve from localStorage
  $list.append(
    `<li class="item" id=${el.id}>
        <span class="item-text ${el.done ? 'done' : ''}">${el.text}</span>
        <button class="item-remove">Remove</button>
    </li>`
  );
})

$add.click(function(event) {
  event.preventDefault();
  if($input.val().trim()) {
      const uniqueId = Math.random().toString(36).substr(2, 9);
      todos.push({
        id: uniqueId,
        text: $input.val().trim(),
        done: false
      });
      
    localStorage.setItem('todos', JSON.stringify(todos));

    $list.append(
      `<li class="item" id=${uniqueId}>
        <span class="item-text">${$input.val().trim()}</span>
        <button class="item-remove">Remove</button>
     </li>`
    )
    $input.val('');
  }
});

$(".list").on('click', function(e){
  let $target = $(e.target);
  if($target.hasClass('item-text')) {
      let indexInTodos = todos.findIndex((el) => {
        return el.id === $target.parent().attr('id')
      })

      $target.toggleClass('done');
      todos[indexInTodos].done = !todos[indexInTodos].done;
      localStorage.setItem('todos', JSON.stringify(todos));

  } else if($target.hasClass('item-remove')) {
    $target.parent().fadeOut('slow', function() { 
     let indexInTodos = todos.findIndex((el) => {
        return el.id === $target.parent().attr('id')
      })
  
      todos.splice(indexInTodos, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      $target.parent().remove();
    });
  }
 
})


$('#search-input').on('input',function(e){
  for(let element of $('.list .item-text').toArray()) {
    if(!$(element).text().toLowerCase().startsWith(this.value)) {
     ($(element).parent().addClass( "unvisible" ));
    } else {
      $(element).parent().removeClass("unvisible");
    }
  }
 });