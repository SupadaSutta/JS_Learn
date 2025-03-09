document.addEventListener("DOMContentLoaded", function() {
    let items = []; // ประกาศตัวแปร array เพื่อเก็บค่าที่รับจาก prompt
    let count = parseInt(prompt("คุณต้องการเพิ่มกี่รายการ? (สูงสุด 3 รายการ)")); // รับจำนวนรายการที่ต้องการเพิ่ม

    if (!isNaN(count) && count > 0) {
        count = Math.min(3, count); // จำกัดจำนวนรายการไม่เกิน 3

        for (let i = 0; i < count; i++) {
            let value = prompt("กรอกค่ารายการที่ " + (i + 1)); // รับค่าจากผู้ใช้
            if (value) {
                items.push(value); // เพิ่มค่าลงใน array
            }
        }

        let listElement = document.getElementById("itemList");
        items.sort(); // เรียงลำดับข้อมูลใน array

        items.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item; // กำหนดข้อความให้ <li>
            listElement.appendChild(li); // เพิ่ม <li> ลงใน <ul>
        });
    } else {
        alert("กรุณากรอกจำนวนที่ถูกต้อง");
    }
});
