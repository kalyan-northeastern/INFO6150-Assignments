document.addEventListener("DOMContentLoaded", function() {
    const subBtn = document.getElementById("submit-btn");
    const addNewStd = document.getElementById("add-new-std");
    const tabBody = document.querySelector("#std-table tbody");
    const editTabHead = document.querySelector(".edit-table-head");
    const delTabHead = document.querySelector(".delete-table-head");

    let stdCount = 1;
    addNewStd.addEventListener("click", function() {
        // Check if we already have 10 students (1 existing + 9 new = 10 total)
        if (stdCount >= 10) {
            showErrorPopup(`Failed to add Student ${stdCount + 1} record. Maximum limit of 10 students reached.`);
            return;
        }

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

        // Show success popup instead of alert
        showSuccessPopup(`Student ${stdCount} Record added successfully`);
    });

    // Function to show success popup
    function showSuccessPopup(message) {
        const popup = document.createElement("div");
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #d4edda;
            border: 2px solid #28a745;
            color: #155724;
            padding: 20px;
            border-radius: 8px;
            z-index: 2000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 90%;
            max-width: 400px;
            min-width: 250px;
            box-sizing: border-box;
        `;
        popup.innerHTML = `
            <div style="font-size: clamp(1.2rem, 4vw, 1.5rem); color: #28a745; margin-bottom: 10px;">✓</div>
            <p style="margin: 10px 0; font-weight: bold; font-size: clamp(0.8rem, 3vw, 1rem); line-height: 1.4;">${message}</p>
            <button onclick="this.parentElement.remove()" style="background-color: #28a745; color: white; border: none; padding: 10px 16px; border-radius: 4px; cursor: pointer; font-size: clamp(0.7rem, 2.5vw, 0.9rem); width: 100%; max-width: 100px;">OK</button>
        `;
        document.body.appendChild(popup);

        // Auto-close after 3 seconds
        setTimeout(() => {
            if (document.body.contains(popup)) {
                popup.remove();
            }
        }, 3000);
    }

    // Function to show error popup
    function showErrorPopup(message) {
        const popup = document.createElement("div");
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #f8d7da;
            border: 2px solid #dc3545;
            color: #721c24;
            padding: 20px;
            border-radius: 8px;
            z-index: 2000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 90%;
            max-width: 400px;
            min-width: 250px;
            box-sizing: border-box;
        `;
        popup.innerHTML = `
            <div style="font-size: clamp(1.2rem, 4vw, 1.5rem); color: #dc3545; margin-bottom: 10px;">✗</div>
            <p style="margin: 10px 0; font-weight: bold; font-size: clamp(0.8rem, 3vw, 1rem); line-height: 1.4;">${message}</p>
            <button onclick="this.parentElement.remove()" style="background-color: #dc3545; color: white; border: none; padding: 10px 16px; border-radius: 4px; cursor: pointer; font-size: clamp(0.7rem, 2.5vw, 0.9rem); width: 100%; max-width: 100px;">OK</button>
        `;
        document.body.appendChild(popup);
    }

    function addNewRow(row, moreDetails) {
        const checkbox = row.querySelector(".select-row");
        const toggleButton = row.querySelector(".toggle");

        checkbox.addEventListener("change", function() {
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

        toggleButton.addEventListener("click", function() {
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
        editBtn.addEventListener("click", function() {
            const studentName = row.children[1].textContent;
            showEditPopup(studentName, row);
        });

        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", function() {
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
        updBtn.addEventListener("click", function() {
            alert(`${studentName} record is up-to-date`);
            document.body.removeChild(popupBox);
            document.body.removeChild(popup);
        });
        popup.appendChild(updBtn);
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", function() {
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