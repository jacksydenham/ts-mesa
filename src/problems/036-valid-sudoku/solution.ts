export function validSudoku(board: string[][]) {
    const rows = Array.from({length: 9}, () => new Set<string>());
    const cols = Array.from({length: 9}, () => new Set<string>())
    const boxes = Array.from({length: 9}, () => new Set<string>())


    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r]![c];

            if (val === '.' || val === undefined) continue;

            const boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3);

            if (boxes[boxIndex]!.has(val) || cols[c]!.has(val) || rows[r]!.has(val)) {
                return false;
            }

            boxes[boxIndex]!.add(val);
            rows[r]!.add(val);
            cols[c]!.add(val);
        }
    }
    return true;
}