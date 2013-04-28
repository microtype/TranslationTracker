/*
 * This function will extract the selected text and currently pops an alert until further functionality is defined.
 */

function getSelectedText() {
  var selected = '';
  if (window.getSelection) {
    selected = window.getSelection();
  } else if (document.getSelection) {
    selected = document.getSelection();
  } else if (document.selection) {
    selected = document.selection.createRange().text;
  } else return;
  alert(selected);
}