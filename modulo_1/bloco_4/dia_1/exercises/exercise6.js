let piece;
piece = "King";
// piece = "Queen";
// piece = "Rook";
// piece = "Bishop";
// piece = "Knight";
// piece = "Pawn";
// piece = "Alpaca";

switch (piece) {
  case "King":
    console.log("One square in any direction");
    break;
  case "Queen":
    console.log("Any one straight direction");
    break;
  case "Rook":
    console.log("Only forward, backward and to the sides, as many squares it can get");
    break;
  case "Bishop":
    console.log("Only diagonally, as many squares it can get");
    break;
  case "Knight":
    console.log("Two squares in one direction, and then one more move at a 90 degree angle");
    break;
  case "Pawn":
    console.log("Move only forward, but capture diagonally, one square at a time");
    break;
  default:
    console.error("Peça inválida");
}