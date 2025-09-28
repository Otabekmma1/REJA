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
                alert("Iltimos qaytadan harakat qiling!");
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
                    alert(err)
                });
            }
        })
    };

    if (e.target.classList.contains("edit-me")) {
        alert('update button bosildi')
    }
});