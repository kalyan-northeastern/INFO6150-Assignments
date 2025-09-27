document.addEventListener("DOMContentLoaded", function () {
    const subBtn = document.getElementById("submit-btn");
    const addNewStd = document.getElementById("add-new-std");
    const tabBody = document.querySelector("#std-table tbody");
    const editTabHead = document.querySelector(".edit-table-head");
    const delTabHead = document.querySelector(".delete-table-head");

    let stdCount = 1; 
    addNewStd.addEventListener("click", function () {
        stdCount++;
        const new_row = document.createElement("tr");
        new_row.innerHTML = 
            `<td class="action">
                <input type="checkbox" class="select-row">
                <br>
                <span class="toggle">&#9660;</span>
             </td>
             <td>Student ${stdCount}</td>
             <td>Teacher ${stdCount}</td>
             <td>Approved</td>
             <td>Fall</td>
             <td>TA</td>
             <td>${12345 + (stdCount - 1) * 11111}</td>
             <td>100%</td>`;

        const moreDetails = document.createElement("tr");
        moreDetails.classList.add("details");
        moreDetails.style.display = "none";
        moreDetails.innerHTML = 
            `<td colspan="10">
                <b>Advisor:</b> Teacher ${stdCount}<br>
                <b>Award Details:</b> Summer 1-2024 (TA)<br>
                <b>Budget:</b> ${12345 + (stdCount - 1) * 11111}<br>
                <b>Tuition Number:</b> T${12345 + (stdCount - 1) * 11111}<br>
                <b>Comments:</b> None<br>
                <b>Award Status:</b> Approved<br>
             </td>`;

        tabBody.appendChild(new_row);
        tabBody.appendChild(moreDetails);
        addNewRow(new_row, moreDetails);

        alert(`Student ${stdCount} records were added`);
    });
    function addNewRow(row, moreDetails) {
        const checkbox = row.querySelector(".select-row");
        const toggleButton = row.querySelector(".toggle");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                row.classList.add("row-selected");
                subBtn.disabled = false;
                subBtn.classList.add("enabled");
                colEditDel(row);
                showEditDel();
            } else {
                row.classList.remove("row-selected");
                if (document.querySelectorAll(".select-row:checked").length === 0) {
                    subBtn.disabled = true;
                    subBtn.classList.remove("enabled");
                    hideEditDel();
                }
                hideEditDelCol(row);
            }
        });

        toggleButton.addEventListener("click", function () {
            if (moreDetails.style.display === "none") {
                moreDetails.style.display = "table-row";
                toggleButton.innerHTML = "&#9650;";
            } else {
                moreDetails.style.display = "none";
                toggleButton.innerHTML = "&#9660;";
            }
        });
    }
    function colEditDel(row) {
        const editCol = document.createElement("td");
        const delCol = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function () {
            const studentName = row.children[1].textContent;
            showEditPopup(studentName, row);
        });

        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", function () {
            const studentName = row.children[1].textContent;
            row.nextElementSibling.remove();
            row.remove();
            alert(`${studentName} record deleted`);
            if (document.querySelectorAll(".select-row:checked").length === 0) {
                hideEditDel();
            }
        });

        editCol.appendChild(editBtn);
        delCol.appendChild(delBtn);

        row.appendChild(editCol);
        row.appendChild(delCol);
    }
    function hideEditDelCol(row) {
        row.removeChild(row.lastChild); 
        row.removeChild(row.lastChild); 
    }
    function showEditDel() {
        editTabHead.style.display = "table-cell";
        delTabHead.style.display = "table-cell";
    }
    function hideEditDel() {
        editTabHead.style.display = "none";
        delTabHead.style.display = "none";
    }
    function showEditPopup(studentName, row) {
        const popupBox = document.createElement("div");
        popupBox.classList.add("popup-box");
        const popup = document.createElement("div");
        popup.classList.add("popup");
        const title = document.createElement("h2");
        title.textContent = `Edit details of ${studentName}`;
        popup.appendChild(title);
        const stdDetails = 
           `<p><b>Student:</b> ${row.children[1].textContent}</p>
            <p><b>Advisor:</b> ${row.children[2].textContent}</p>
            <p><b>Award Status:</b> ${row.children[3].textContent}</p>
            <p><b>Semester:</b> ${row.children[4].textContent}</p>
            <p><b>Type:</b> ${row.children[5].textContent}</p>
            <p><b>Budget:</b> ${row.children[6].textContent}</p>
            <p><b>Percentage:</b> ${row.children[7].textContent}</p>`;
        popup.innerHTML += stdDetails;

        const updBtn = document.createElement("button");
        updBtn.textContent = "Update";
        updBtn.addEventListener("click", function () {
            alert(`${studentName} record is up-to-date`);
            document.body.removeChild(popupBox);
            document.body.removeChild(popup);
        });
        popup.appendChild(updBtn);
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", function () {
            document.body.removeChild(popupBox);
            document.body.removeChild(popup);
        });
        popup.appendChild(cancelBtn);
        document.body.appendChild(popupBox);
        document.body.appendChild(popup);
    }
    
    document.querySelectorAll("#std-table tbody tr").forEach(row => {
        const moreDetails = row.nextElementSibling;
        if (moreDetails && moreDetails.classList.contains("details")) {
            addNewRow(row, moreDetails);
        }
    });
});