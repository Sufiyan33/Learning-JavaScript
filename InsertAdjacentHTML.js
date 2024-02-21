console.log("By using this we can insertion HTML Adjacent element or text ")

let first = document.getElementById("first");

first.insertAdjacentHTML('beforebegin', '<div class="test>beforebegin</div>')
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>')
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>')
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>')

// if you want to remove any node then you can use below methods

//first.remove();