let piece = window.prompt("Piece");
let res = piece.toLowerCase();

switch (res) {
  case "king":
    console.log("One square in any direction");
    break;
  case "queen":
    console.log("Any one straight direction");
    break;
  case "rook":
    console.log("Only forward, backward and to the sides, as many squares it can get");
    break;
  case "bishop":
    console.log("Only diagonally, as many squares it can get");
    break;
  case "knight":
    console.log("Two squares in one direction, and then one more move at a 90 degree angle");
    break;
  case "pawn":
    console.log("Move only forward, but capture diagonally, one square at a time");
    break;
  default:
    console.error("Peça inválida");
}