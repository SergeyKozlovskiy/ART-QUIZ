export default function checkRoundNum(params) {
  switch (params) {
    case '1':
      return 1;
    case '2':
      return 11;
    case '3':
      return 21;
    case '4':
      return 31;
    case '5':
      return 41;
    case '6':
      return 51;
    case ' 7':
      return 61;
    case '8':
      return 71;
    case '9':
      return 81;
    case '10':
      return 91;
    case '11':
      return 101;
    case '12':
      return 111;
    default:
      console.log('Error');
  }
}
