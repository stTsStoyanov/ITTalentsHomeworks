let collapse = document.getElementsByClassName("collapsible");
let contentPosts = document.getElementById('content2');


for (let i = 0; i < collapse.length; i++) { // collapse.length = 1, this is my button tag!

    console.log(collapse[i]) //<button type="button" class="collapsible">Open Collapsible</button>
    collapse[i].addEventListener("click", function (e) {

        // this.classList.toggle("active"); // the same as the down one with e.target -> this refers to the button as well e.target does
        e.target.classList.toggle('active');

        let content = this.nextElementSibling;
        //The Element.nextElementSibling read-only property
        //returns the element immediately following the specified one in its parent's children list,
        // or null if the specified element is the last one in the list.

        console.log(content) // content = 'div', because this/e.target returns our button, whith the property .nextElementSibling, i get next
        // elemant in the node, which is the 'div' tag, so i can display=block, display=none on the 'div' block!!!

        // if (content.style.display === "block") {
        //     content.style.display = "none";
        // } else {
        //     content.style.display = "block";
        // }

        //--------------------------------------------------------------------------------------------------------------

        if (content.style.display === "block") {

            content.style.display = "none";

        } else {

            content.style.display = "block";



            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {

                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log('Someting went wrong!');
                    }
                })

                .then(users => {
                    users.forEach(element => {

                        fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}/comments`)
                            .then(response => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    console.log('Someting went wrong');
                                }
                            })
                            .then(posts => {
                                contentPosts.innerHTML = "";
                                posts.forEach(element => {
                                    let h1 = document.createElement('h1');
                                    let p = document.createElement('p');
                                    h1.innerText = element.name;
                                    p.innerText = element.body;

                                    contentPosts.append(h1, p);
                                    console.log(element)
                                })
                                
                            })
                    });
                })

                .catch(err => {
                    console.log(err);
                })
        }




    });
}


