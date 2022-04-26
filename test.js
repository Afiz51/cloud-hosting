function joust(listField, vKnightLeft, vKnightRight) {
  //m.
  while (true) {
    left = listField[0];
    right = listField[1];
    if (
      left.indexOf(">") >= right.indexOf("<") ||
      (vKnightLeft == 0 && vKnightRight == 0)
    ) {
      return listField;
    }
    if (vKnightLeft != 0) {
      listField[0] = " ".repeat(vKnightLeft) + left.slice(0, -vKnightLeft);
    }
    if (vKnightRight != 0) {
      listField[1] = right.slice(vKnightRight) + " ".repeat(vKnightRight);
    }
  }
}
