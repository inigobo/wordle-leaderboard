export const normalizeBoard = (text) => {
    const grid = text.match(/🟨|⬜|🟩/g);
    const emojiMap = {
        "🟨": "p",
        "⬜": "w",
        "🟩": "c"
    };

    const board = grid.map((row) => {
        let paint = "";
        for (let i = 0; i < row.length; i++) {
            paint += emojiMap[row[i]];
        }
        return { word: "", paint };
    });
}
