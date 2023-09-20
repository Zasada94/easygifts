//delete adress
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

//add adress
const addButton = document.getElementById("adress_item_add");
const addModal = document.getElementById("adress_add_modal");
const saveButton = document.querySelector(".add_modal_wrapper .save");
const addressList = document.querySelector(".data_wrapper_adresses");

const toggleAddModal = () => {
	addModal.classList.toggle("visible");
};

addButton.addEventListener("click", toggleAddModal);

const saveAddress = () => {
	const companyNameInput = document.querySelector(
		".add_modal_wrapper .input.company"
	);
	const streetInput = document.querySelector(
		".add_modal_wrapper .input.adress"
	);
	const postalCodeInput = document.querySelector(
		".add_modal_wrapper .input.code"
	);
	const cityInput = document.querySelector(".add_modal_wrapper .input.city");
	const telInput = document.querySelector(".add_modal_wrapper .input.phone");
	const contactPersonInput = document.querySelector(
		".add_modal_wrapper .input.contact"
	);
	const isDefaultCheckbox = document.getElementById("is_default");

	const newAddressItem = document.createElement("div");
	newAddressItem.classList.add("adress_item");

	const addressItemData = document.createElement("div");
	addressItemData.classList.add("adress_item_data");

	const title = document.createElement("p");
	title.classList.add("title");
	title.textContent = "Adres";

	const company = document.createElement("p");
	company.classList.add("company");
	company.textContent = companyNameInput.value;

	const streetLine = document.createElement("p");
	streetLine.classList.add("adress_line", "first_line");
	streetLine.textContent = streetInput.value;

	const city = document.createElement("p");
	city.classList.add("adress_line", "second_line");
	city.textContent = postalCodeInput.value + " " + cityInput.value;

	const tel = document.createElement("p");
	tel.classList.add("number");
	tel.textContent = telInput.value;

	const contact = document.createElement("p");
	contact.classList.add("name");
	contact.textContent = contactPersonInput.value;

	const defaultDiv = document.createElement("div");
	defaultDiv.classList.add("default");

	if (isDefaultCheckbox.checked) {
		const defaultIcon = document.createElement("div");
		defaultIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
            d="M13 8L9 12L7 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
            stroke="#E6007E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
`;
		defaultDiv.appendChild(defaultIcon);

		const defaultText = document.createElement("p");
		defaultText.classList.add("default_adress");
		defaultText.textContent = "Domyślny adres odbiorcy";
		defaultDiv.appendChild(defaultText);
	}

	addressItemData.appendChild(title);
	addressItemData.appendChild(company);
	addressItemData.appendChild(streetLine);
	addressItemData.appendChild(city);
	addressItemData.appendChild(contact);
	addressItemData.appendChild(tel);
	addressItemData.appendChild(defaultDiv);
	newAddressItem.appendChild(addressItemData);

	const line = document.createElement("div");
	line.classList.add("line");
	newAddressItem.appendChild(line);

	const bottomBar = document.createElement("div");
	bottomBar.classList.add("bottom_bar");

	const deleteIcon = document.createElement("div");
	deleteIcon.innerHTML = `
    <svg id="adress_delete" xmlns="http://www.w3.org/2000/svg" width="15" height="17"
    viewBox="0 0 15 17" fill="none">
    <path
        d="M4.61538 6.23333C4.76839 6.23333 4.91514 6.29304 5.02333 6.39931C5.13153 6.50558 5.19231 6.64971 5.19231 6.8V13.6C5.19231 13.7503 5.13153 13.8944 5.02333 14.0007C4.91514 14.107 4.76839 14.1667 4.61538 14.1667C4.46238 14.1667 4.31563 14.107 4.20744 14.0007C4.09924 13.8944 4.03846 13.7503 4.03846 13.6V6.8C4.03846 6.64971 4.09924 6.50558 4.20744 6.39931C4.31563 6.29304 4.46238 6.23333 4.61538 6.23333ZM7.5 6.23333C7.65301 6.23333 7.79975 6.29304 7.90795 6.39931C8.01614 6.50558 8.07692 6.64971 8.07692 6.8V13.6C8.07692 13.7503 8.01614 13.8944 7.90795 14.0007C7.79975 14.107 7.65301 14.1667 7.5 14.1667C7.34699 14.1667 7.20025 14.107 7.09205 14.0007C6.98386 13.8944 6.92308 13.7503 6.92308 13.6V6.8C6.92308 6.64971 6.98386 6.50558 7.09205 6.39931C7.20025 6.29304 7.34699 6.23333 7.5 6.23333ZM10.9615 6.8C10.9615 6.64971 10.9008 6.50558 10.7926 6.39931C10.6844 6.29304 10.5376 6.23333 10.3846 6.23333C10.2316 6.23333 10.0849 6.29304 9.97667 6.39931C9.86847 6.50558 9.80769 6.64971 9.80769 6.8V13.6C9.80769 13.7503 9.86847 13.8944 9.97667 14.0007C10.0849 14.107 10.2316 14.1667 10.3846 14.1667C10.5376 14.1667 10.6844 14.107 10.7926 14.0007C10.9008 13.8944 10.9615 13.7503 10.9615 13.6V6.8Z"
        fill="#34224F" />
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M15 3.4C15 3.70058 14.8784 3.98885 14.662 4.20139C14.4457 4.41393 14.1522 4.53333 13.8462 4.53333H13.2692V14.7333C13.2692 15.3345 13.0261 15.911 12.5933 16.3361C12.1605 16.7612 11.5736 17 10.9615 17H4.03846C3.42642 17 2.83945 16.7612 2.40668 16.3361C1.9739 15.911 1.73077 15.3345 1.73077 14.7333V4.53333H1.15385C0.847827 4.53333 0.554342 4.41393 0.337954 4.20139C0.121566 3.98885 0 3.70058 0 3.4V2.26667C0 1.96609 0.121566 1.67782 0.337954 1.46528C0.554342 1.25274 0.847827 1.13333 1.15385 1.13333H5.19231C5.19231 0.832755 5.31387 0.544487 5.53026 0.331946C5.74665 0.119404 6.04013 0 6.34615 0H8.65385C8.95987 0 9.25335 0.119404 9.46974 0.331946C9.68613 0.544487 9.80769 0.832755 9.80769 1.13333H13.8462C14.1522 1.13333 14.4457 1.25274 14.662 1.46528C14.8784 1.67782 15 1.96609 15 2.26667V3.4ZM3.02077 4.53333L2.88462 4.6002V14.7333C2.88462 15.0339 3.00618 15.3222 3.22257 15.5347C3.43896 15.7473 3.73244 15.8667 4.03846 15.8667H10.9615C11.2676 15.8667 11.561 15.7473 11.7774 15.5347C11.9938 15.3222 12.1154 15.0339 12.1154 14.7333V4.6002L11.9792 4.53333H3.02077ZM1.15385 3.4V2.26667H13.8462V3.4H1.15385Z"
        fill="#34224F" />
</svg>
    `;
	const deleteButton = document.createElement("div");
	deleteButton.classList.add("adress_delete");

	deleteButton.appendChild(deleteIcon);

	deleteButton.addEventListener("click", deleteAddressItem);

	const editIcon = document.createElement("div");
	editIcon.innerHTML = `
    <svg id="adress_edit" xmlns="http://www.w3.org/2000/svg" width="19" height="19"
    viewBox="0 0 19 19" fill="none">
    <path
        d="M10.7879 3.28282L14.9091 7.48773M9.75758 18H18M1 17.4744L1.51515 12.7439L12.4217 1.61579C13.2264 0.794735 14.5311 0.794735 15.3359 1.61579L16.5429 2.84739C17.3477 3.66844 17.3476 4.99964 16.5429 5.8207L5.63636 16.9488L1 17.4744Z"
        stroke="#34224F" stroke-width="1.2" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>
    `;
	const editButton = document.createElement("div");
	editButton.classList.add("adress_edit");
	editButton.addEventListener("click", editAddressItem);

	editButton.appendChild(editIcon);

	bottomBar.appendChild(editButton);
	bottomBar.appendChild(deleteButton);
	newAddressItem.appendChild(bottomBar);

	const parentElement = document.querySelector(".data_wrapper_adresses");

	parentElement.insertBefore(newAddressItem, addButton);

	toggleAddModal();
};

saveButton.addEventListener("click", saveAddress);

//edit adress
const editButtons = document.querySelectorAll("#adress_edit");
const editModal = document.getElementById("adress_edit_modal");
const editButton = document.getElementById("editButton");
const isDefaultCheckbox = document.getElementById("is_def");
const defaultDivs = document.querySelectorAll(".default");
let defaultDiv;

const editAddressItem = (event) => {
	const clickedElement = event.target.closest(".adress_item");
	const hasNotDefaultChild = clickedElement.querySelector(".not_default");
	defaultDiv = clickedElement.querySelector(".default");
	console.log(defaultDiv);

	if (hasNotDefaultChild) {
		isDefaultCheckbox.checked = false;
		defaultDiv.style.display = "none";
	} else {
		isDefaultCheckbox.checked = true;
		defaultDiv.style.display = "flex";
	}

	editModal.classList.add("visible");
};

editButtons.forEach((button) => {
	button.addEventListener("click", editAddressItem);
});

editButton.addEventListener("click", () => {
	editModal.classList.remove("visible");
});

isDefaultCheckbox.addEventListener("change", () => {
	if (isDefaultCheckbox.checked) {
		defaultDiv.style.display = "flex";
	} else {
		defaultDiv.style.display = "none";
	}
});
