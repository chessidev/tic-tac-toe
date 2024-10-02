import { useEffect, useState } from "react";
import cross from "../../assets/cross.png";
import circle from "../../assets/circle.png";

const board = ["", "", "", "", "", "", "", "", ""];

let winner = "X";

const Board = () => {
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(count % 2 === 0 ? "X" : "O");
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);

  const reset = () => {
    setCount(0);
    setTurn(count % 2 === 0 ? "X" : "O");
    setWin(false);
    setDraw(false);
    board.fill("");
    const cells = document.querySelectorAll("#board > div > div");
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  };

  useEffect(() => {
    if (count < 9) {
      if (
        count > 4 &&
        ((board[0] === board[1] && board[1] === board[2] && board[0] !== "") ||
          (board[3] === board[4] && board[4] === board[5] && board[3] !== "") ||
          (board[6] === board[7] && board[7] === board[8] && board[6] !== "") ||
          (board[0] === board[3] && board[3] === board[6] && board[0] !== "") ||
          (board[1] === board[4] && board[4] === board[7] && board[1] !== "") ||
          (board[2] === board[5] && board[5] === board[8] && board[2] !== "") ||
          (board[0] === board[4] && board[4] === board[8] && board[0] !== "") ||
          (board[2] === board[4] && board[4] === board[6] && board[2] !== ""))
      ) {
        console.log("Winner");
        setWin(true);
        setCount(10);
      } else if (count % 2 === 0) {
        setTurn("X");
      } else {
        setTurn("O");
      }
    } else if (count === 9) {
      console.log("Draw");
      setDraw(true);
    }

    console.log(board);
  }, [count]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (count < 9) {
      const target = e.target as HTMLElement;
      const id = Number(target.id);
      if (target && board[id] === "") {
        if (turn === "X") {
          target.innerHTML = `<img src=${cross} alt='x' />`;
          board[id] = "X";
          winner = "X";
        } else if (turn === "O") {
          target.innerHTML = `<img src=${circle} alt='o' />`;
          board[id] = "O";
          winner = "O";
        }
        setCount(count + 1);
      }
    }
  }

  return (
    <main className="py-8 space-y-8">
      <article>
        <h1 className="text-4xl font-bold text-center text-white">
          Tic Tac Toe With <span className="text-primary">React</span>
        </h1>
        <h2 className="text-4xl font-bold text-center text-white">
          <span className={turn === "X" ? "text-secondary" : "text-primary"}>
            {turn}
          </span>
          's Turn
        </h2>
      </article>
      <div id="board" className="relative flex flex-col items-center gap-2 p-4">
        {/* frist row */}
        <div className="flex gap-2">
          <div
            id="0"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
          <div
            id="1"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
          <div
            id="2"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
        </div>
        {/* second row */}
        <div className="flex gap-2">
          <div
            id="3"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
          <div
            id="4"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
          <div
            id="5"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
        </div>
        {/* third row */}
        <div className="flex gap-2">
          <div
            id="6"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
          <div
            id="7"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
          <div
            id="8"
            onClick={handleClick}
            className="flex items-center justify-center w-40 h-40 cursor-pointer rounded-xl bg-lighterDark"
          ></div>
        </div>
        {/* Win */}
        <div
          className={`absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full backdrop-blur ${
            win ? "flex" : "hidden"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-white">
            Winner:{" "}
            <span
              className={winner === "X" ? "text-secondary" : "text-primary"}
            >
              {winner}
            </span>
          </h2>
        </div>
        {/* Draw */}
        <div
          className={`absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full backdrop-blur ${
            draw ? "flex" : "hidden"
          }`}
        >
          <h2 className="text-4xl font-bold text-center text-white">Draw</h2>
        </div>
      </div>
      <button
        onClick={reset}
        className="relative z-50 block px-4 py-1 mx-auto text-2xl font-semibold text-white border-2 rounded-lg border-primary"
      >
        Reset
      </button>
    </main>
  );
};

export default Board;
