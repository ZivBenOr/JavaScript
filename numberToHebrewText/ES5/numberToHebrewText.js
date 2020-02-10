
/**
 * @description Converts number to hebrew text
 * @param {Number} number number to be converted to hebrew text
 * @returns {String} Converted hebrew text
 */
const numberToText = function (number) {
  if (number && number.toString().length > 12) return 'overflow';
  if (number == 0) return 'אפס';
  const n = ('000000000000' + number).substr(-12).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return '';
  let str = '', temp = '';
  const a = ['', 'אחת ', 'שתיים ', 'שלוש ', 'ארבע ', 'חמש ', 'שש ', 'שבע ', 'שמונה ', 'תשע ', 'עשר ', 'אחת עשרה ', 'שתים עשרה ', 'שלוש עשרה ', 'ארבע עשרה ', 'חמש עשרה ', 'שש עשרה ', 'שבע עשרה ', 'שמונה עשרה ', 'תשע עשרה ']
  const b = ['', '', 'עשרים ', 'שלושים ', 'ארבעים ', 'חמישים ', 'שישים ', 'שבעים ', 'שמונים ', 'תשעים ']
  const c = ['', 'אלף ', 'אלפיים ', 'שלושת אלפים ', 'ארבעת אלפים ', 'חמשת אלפים ', 'ששת אלפים ', 'שבעת אלפים ', 'שמונת אלפים ', 'תשעת אלפים ', 'עשרת אלפים ']
  const d = ['', 'מאה ', 'מאתיים '], e = ['', 'מיליון ', 'שני מיליון ']
  const f = ['', 'מיליארד ', 'שני מיליארד '];
  
  const Num = function (index, index2) { return index2 ?Number(n[index] + n[index2]) : Number(n[index])}
  const And = function (num) { num && temp && 'ו' + num || num }
  const Hunbreds = function (i) { d[Num(i)] || (a[Num(i)] && (a[Num(i)] + 'מאות ')) || '' }
  const Tens = function (i) { ((temp = str), Num(i) > 0 ? (And(a[Num(i)]) || ((temp = b[n[i][0]]) + And(a[n[i][1]]))) : '') }

    str += Num(1, 2) > 0 ? (f[Num(1, 2)] || Hunbreds(1) + Tens(2) + 'מיליארד ') : ''
    str += Num(3, 4) > 0 ? (e[Num(3, 4)] || Hunbreds(3) + Tens(4) + 'מיליון ') : ''
    str += Num(5, 6) > 0 ? (c[Num(5, 6)] || Hunbreds(5) + Tens(6) + 'אלף ') : ''
    str += Hunbreds(7)
    str += Tens(8)
    
    return str.replace(/^\s+|\s+$/g, '');
};
