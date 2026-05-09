/**
 * WhaleTrucker Standard — Asset Valuation Unit Tests
 * Goal: Ensure precision in real-time asset monitoring.
 */

// แก้ไข Path จาก ../src/valuation เป็น ../src/utils/valuation ให้ตรงกับ Explorer
const { calculateTotalValue } = require('../src/utils/valuation');

describe('WhaleTrucker Command – Valuation Engine', () => {

    test('should accurately calculate total value across multiple chain assets', () => {
        // จำลองข้อมูลสินทรัพย์ (SOL และ REEF) ตามที่บอสพัฒนา
        const mockAssets = [
            { symbol: 'SOL', balance: 10, price: 150 },
            { symbol: 'REEF', balance: 10000, price: 0.002 }
        ];

        // สูตรคำนวณ: (10 * 150) + (10000 * 0.002) = 1500 + 20 = 1520
        const total = calculateTotalValue(mockAssets);
        
        expect(total).toBe(1520);
    });

    test('should return 0 if asset list is empty', () => {
        const total = calculateTotalValue([]);
        expect(total).toBe(0);
    });
});
