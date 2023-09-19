const deleteButtons = document.querySelectorAll("#adress_delete");

const deleteAddressItem = (event) => {
	const addressItem = event.target.closest(".adress_item");
	if (addressItem) {
		addressItem.remove();
	}
};

deleteButtons.forEach((button) => {
	button.addEventListener("click", deleteAddressItem);
});

const addButton = document.getElementById("adress_item_add");
const addModal = document.getElementById("adress_add_modal");

const showAddModal = () => {
	addModal.classList.add("visible");
};

addButton.addEventListener("click", showAddModal);
