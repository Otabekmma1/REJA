console.log("JS runned");

const createField = document.getElementById('create-field');
const createForm = document.getElementById("create-form");
const itemList = document.getElementById("item-list");
const deleteAllBtn = document.querySelector(".delete-all");

function itemTemplate(item) {
    return `
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
        </div>
    </li>
    `;
}

function showConfirm({ title, text, icon = 'warning', confirmText = 'Ha', cancelText = 'Bekor qil', callback }) {
    Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    }).then(result => {
        if (result.isConfirmed) callback();
    });
}

function postRequest(url, data, onSuccess, onError) {
    axios.post(url, data)
        .then(onSuccess)
        .catch(err => {
            console.log(`${url} ERROR:`, err);
            if (onError) onError(err);
        });
}

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = createField.value.trim();
    if (!value) return;

    postRequest("/create-item", { reja: value }, (response) => {
        itemList.insertAdjacentHTML("beforeend", itemTemplate(response.data));
        if (response.data['newItem']) {
            deleteAllBtn.style.display = 'inline-block';
        }
        createField.value = "";
        createField.focus();
    });
});

document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains('delete-me')) {
        showConfirm({
            title: 'Aniq o‘chirmoqchimisiz?',
            text: "Bu amalni qaytarib bo‘lmaydi!",
            callback: () => {
                postRequest("/delete-item", { id: target.dataset.id }, (response) => {
                    console.log(response.data);
                    if (response.data['deletedAllItems']) {
                        deleteAllBtn.style.display = "none";
                    }
                    target.closest("li").remove();
                });
            }
        });
    }

    if (target.classList.contains("delete-all")) {
        showConfirm({
            title: 'Barcha rejalarni o‘chirmoqchimisiz?',
            text: "Bu amalni qaytarib bo‘lmaydi!",
            callback: () => {
                postRequest("/delete-all", {}, (response) => {
                    itemList.innerHTML = "";
                    deleteAllBtn.style.display = "none";
                });
            }
        });
    }

    if (target.classList.contains("edit-me")) {
        const itemTextEl = target.closest("li").querySelector(".item-text");
        const currentValue = itemTextEl.textContent;

        Swal.fire({
            title: "O'zgarishni kiriting",
            input: 'text',
            inputValue: currentValue,
            showCancelButton: true,
            confirmButtonText: 'Saqlash',
            cancelButtonText: 'Bekor qilish',
            inputValidator: value => !value ? 'Iltimos, bo\'sh qoldirmang!' : null
        }).then(result => {
            if (!result.isConfirmed) return;
            postRequest("edit-item", { id: target.dataset.id, new_input: result.value }, () => {
                itemTextEl.textContent = result.value;
            });
        });
    }
});
