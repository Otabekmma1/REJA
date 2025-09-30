
console.log("JS runned");

let createField = document.getElementById('create-field');

function itemTemplate(item) {
    // console.log(item);
    return `
    
        <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                    O'zgartirish
                </button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
            </div>
        </li>
   
    `
}

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    if (createField.value !== "") {
        axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document.getElementById("item-list")
            .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            
            const deleteAllBtn = document.querySelector(".delete-all");
            deleteAllBtn.style.display = 'inline-block';

            createField.value = "";
            createField.focus();
            
        })
        .catch((err) => {
            console.log("Iltimos qaytatdan uruning", err)
        })
    }

});

document.addEventListener("click", function(e) {
    if (e.target.classList.contains('delete-me')) {
         Swal.fire({
        title: 'Aniq o‘chirmoqchimisiz?',
        text: "Bu amalni qaytarib bo‘lmaydi!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ha, o‘chirish',
        cancelButtonText: 'Bekor qilish'
        }).then((result) => {
          if (result.isConfirmed) {
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then(response => {
                e.target.parentElement.parentElement.remove();
            })
            .catch(err => {
                console.log("delete-item:", err)
            });
          } 
        }    
        );
    };

    if (e.target.classList.contains("delete-all")) {
        Swal.fire({
        title: 'Barcha rejalarni o‘chirmoqchimisiz?',
        text: "Bu amalni qaytarib bo‘lmaydi!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ha, o‘chirish',
        cancelButtonText: 'Bekor qilish'
        }).then(result => {
            if (result.isConfirmed){
                axios
                .post('/delete-all')
                .then(response => {
                    const item_list = document.getElementById("item-list");
                    item_list.innerHTML = "";
                    e.target.style.display = "none";
                })
                .catch(err => {
                    console.log("Delete-all:", err)
                });
            }
        })
    };

    if (e.target.classList.contains("edit-me")) {
        const currentValue = e.target.parentElement.parentElement.querySelector(".item-text").innerHTML;
        // let userInput = prompt("O'zgarishni kiriting",
        //      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        Swal.fire({
        title: "O'zgarishni kiriting",
        input: 'text',
        inputValue: currentValue,
        showCancelButton: true,
        confirmButtonText: 'Saqlash',
        cancelButtonText: 'Bekor qilish',
        inputValidator: (value) => {
            if (!value) {
                return 'Iltimos, bo\'sh qoldirmang!'
            }
        }
        }).then(result => {
            if (result.isConfirmed) {
                axios.post("edit-item", {
                    id: e.target.getAttribute("data-id"),
                    new_input: result.value,
                }).then(response => {
                    console.log(response.data)
                    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = result.value
                }).catch(err => {
                    console.log("Edit item:", err)
                })
            }
        })
    }
});