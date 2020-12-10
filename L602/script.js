function insertAfter(elem, refElem) {
  if (refElem.nextElementSibling === null) {
    refElem.parentElement.append(elem);
  } else refElem.parentElement.insertBefore(elem, refElem.nextElementSibling);
}
