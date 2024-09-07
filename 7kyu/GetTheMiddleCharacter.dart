/**
 * Title: Get The Middle Character
 * Difficulty: 7kyu
 * Link: https://www.codewars.com/kata/56747fd5cb988479af000028/dart
 * Language attempt: Dart
 **/

String getMiddle(String input) {
  var inputArray = input.split('');
  var length = inputArray.length;
  var result = <String>[];

  if ((length % 2) == 1) {
    result.add(inputArray[length ~/ 2]);
  } else {
    var charAfter = length ~/ 2;
    result.add(inputArray[charAfter - 1]);
    result.add(inputArray[charAfter]);
  }

  return result.join('');
}

String getMiddle(String input) {
  var middleChar = input.length ~/ 2;
  return input.length.isOdd
      ? input[middleChar]
      : input.substring(middleChar - 1, middleChar + 1);
}
