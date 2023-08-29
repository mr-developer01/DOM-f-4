var addComment = document.querySelector("#addComment")
var change = document.querySelector("#change")
var msg = document.querySelector("#msg")
var del = document.querySelector("#del")


addComment.addEventListener("click", () => {
    var comments = msg.value
    console.log(comments);
    change.textContent = comments
    msg.value = ''
});

del.addEventListener('click', () => {
    change.textContent = 'Your Comment Will Reflect Here!!'
})