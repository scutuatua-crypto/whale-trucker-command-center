function calculateTotalValue(assets) {
    // ต้องมีคำว่า return ข้างหน้าการคำนวณครับ
    return assets.reduce((total, asset) => {
        return total + (asset.balance * asset.price);
    }, 0);
}

// ต้องส่งออกฟังก์ชันให้ไฟล์เทสต์เรียกใช้ได้ด้วยครับ
module.exports = { calculateTotalValue };

