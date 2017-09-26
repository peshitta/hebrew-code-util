/** @module hebrew */

/**
 * Hebrew base 22 consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  '\u05D0', // א HEBREW LETTER ALEF  = aleph  → \u2135 ℵ alef symbol
  '\u05D1', // ב HEBREW LETTER BET  → \u2136 ℶ bet symbol
  '\u05D2', // ג HEBREW LETTER GIMEL  → \u2137 ℷ gimel symbol
  '\u05D3', // ד HEBREW LETTER DALET  → \u2138 ℸ dalet symbol
  '\u05D4', // ה HEBREW LETTER HE
  '\u05D5', // ו HEBREW LETTER VAV
  '\u05D6', // ז HEBREW LETTER ZAYIN
  '\u05D7', // ח HEBREW LETTER HET
  '\u05D8', // ט HEBREW LETTER TET
  '\u05D9', // י HEBREW LETTER YOD
  '\u05DB', // כ HEBREW LETTER KAF
  '\u05DC', // ל HEBREW LETTER LAMED
  '\u05DE', // מ HEBREW LETTER MEM
  '\u05E0', // נ HEBREW LETTER NUN
  '\u05E1', // ס HEBREW LETTER SAMEKH
  '\u05E2', // ע HEBREW LETTER AYIN
  '\u05E4', // פ HEBREW LETTER PE
  '\u05E6', // צ HEBREW LETTER TSADI = zade
  '\u05E7', // ק HEBREW LETTER QOF
  '\u05E8', // ר HEBREW LETTER RESH
  '\u05E9', // ש HEBREW LETTER SHIN
  '\u05EA' // ת HEBREW LETTER TAV
]);

/**
 * Hebrew 5 final consonants
 * @constant
 * @type { string[] }
*/
export const finalConsonants = Object.freeze([
  '\u05DA', // ך HEBREW LETTER FINAL KAF
  '\u05DD', // ם HEBREW LETTER FINAL MEM
  '\u05DF', // ן HEBREW LETTER FINAL NUN
  '\u05E3', // ף HEBREW LETTER FINAL PE
  '\u05E5' // ץ HEBREW LETTER FINAL TSADI
]);

/**
 * Hebrew 5 with final pair consonants
 * @constant
 * @type { string[] }
*/
export const withFinalConsonants = Object.freeze([
  '\u05DB', // כ HEBREW LETTER KAF
  '\u05DE', // מ HEBREW LETTER MEM
  '\u05E0', // נ HEBREW LETTER NUN
  '\u05E4', // פ HEBREW LETTER PE
  '\u05E6' // צ HEBREW LETTER TSADI = zade
]);

/**
 * Map from regular to final consonant
 * @constant
 * @type { Object.<string, string> }
*/
export const toFinalConsonantMap = Object.freeze(
  Object.create(null, {
    כ: { value: '\u05DA', enumerable: true }, // כ HEBREW LETTER KAF
    מ: { value: '\u05DD', enumerable: true }, // מ HEBREW LETTER MEM
    נ: { value: '\u05DF', enumerable: true }, // נ HEBREW LETTER NUN
    פ: { value: '\u05E3', enumerable: true }, // פ HEBREW LETTER PE
    צ: { value: '\u05E5', enumerable: true } // צ HEBREW LETTER TSADI = zade
  })
);
/**
 * Yiddish digraphs
 * @constant
 * @type { string[] }
*/
export const yiddishDigraphs = Object.freeze([
  '\u05F0', // װ HEBREW LIGATURE YIDDISH DOUBLE VAV = tsvey vovn
  '\u05F1', // ױ HEBREW LIGATURE YIDDISH VAV YOD
  '\u05F2' // ײ HEBREW LIGATURE YIDDISH DOUBLE YOD = tsvey yudn
]);

/**
 * All Hebrew consonants including final ones and yiddish digraphs
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(
  consonants.concat(finalConsonants).concat(yiddishDigraphs)
);

/**
 * Hebrew punctuation
 * @constant
 * @type { string[] }
*/
export const punctuation = Object.freeze([
  '\u05BE', // ־ HEBREW PUNCTUATION MAQAF
  '\u05C0', // ׀ HEBREW PUNCTUATION PASEQ  = legarmeh  • may be treated as spacing punctuation, not as  a point  → 007C | vertical line
  '\u05C3', // ׃ HEBREW PUNCTUATION SOF PASUQ • may be used as a Hebrew punctuation colon → 003A : colon
  '\u05C6', // ׆ HEBREW PUNCTUATION NUN HAFUKHA • does not historically derive from the letter nun → 05E0 נ hebrew letter nun
  '\u05F3', // ׳ HEBREW PUNCTUATION GERESH → 0027 ' apostrophe
  '\u05F4' // ״ HEBREW PUNCTUATION GERSHAYIM → 0022 " quotation mark
]);

/**
 * Hebrew common vowels - common in relation to Syriac
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  '\u05B7', //  ַ HEBREW POINT PATAH • furtive patah is not a distinct character
  '\u05B8', //  ָ HEBREW POINT QAMATS • used generically or as qamats gadol in orthography which distinguishes that from qamats qatan → \u05C7 ׇ  hebrew point qamats qatan
  '\u05B5', // ֵ HEBREW POINT TSERE
  '\u05B4', //  ִ HEBREW POINT HIRIQ
  '\u05BC' //  ּ HEBREW POINT DAGESH OR MAPIQ = shuruq • falls within the base letter - functions as diacritic as well
]);

/**
 * Hebrew vowels common to eastern syriac
 * @constant
 * @type { string[] }
*/
export const easternCommonVowels = Object.freeze([
  '\u05B6', //  ֶ HEBREW POINT SEGOL
  '\u05BA' //  ֺ HEBREW POINT HOLAM HASER FOR VAV
]);

/**
 * Rest of Hebrew vowels
 * @constant
 * @type { string[] }
*/
export const otherVowels = Object.freeze([
  '\u05B9', //  ֹ HEBREW POINT HOLAM
  '\u05BB', //  ֻ HEBREW POINT QUBUTS
  '\u05B0', //  ְ HEBREW POINT SHEVA
  '\u05B1', //  ֱ HEBREW POINT HATAF SEGOL
  '\u05B2', //  ֲ HEBREW POINT HATAF PATAH
  '\u05B3', //  ֳ HEBREW POINT HATAF QAMATS
  '\u05C7' //  ׇ HEBREW POINT QAMATS QATAN → \u05B8 hebrew point qamats
]);

/**
 * All Hebrew vowels
 * @constant
 * @type { string[] }
 */
export const allVowels = commonVowels
  .concat(easternCommonVowels)
  .concat(otherVowels);

/**
 * Hebrew regular diacritics
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze([
  '\u05BD', //  ֽ HEBREW POINT METEG  = siluq  • may be used as a Hebrew accent sof pasuq
  '\u05BF', //  ֿ HEBREW POINT RAFE  → \uFB1E ﬞ  hebrew point judeo-spanish varika
  '\u05C1', // ׁ HEBREW POINT SHIN DOT
  '\u05C2', //  ׂ HEBREW POINT SIN DOT
  '\u05C4', //  ׄ HEBREW MARK UPPER DOT
  '\u05C5' //  ׅ HEBREW MARK LOWER DOT • punctum extraordinarium (Psalms 27:13) → \u05B4 hebrew point hiriq
]);

/**
 * Hebrew cantillation marks
 * @constant
 * @type { string[] }
*/
export const cantillationDiacritics = Object.freeze([
  '\u0591', //  ֑ HEBREW ACCENT ETNAHTA = atnah
  '\u0592', //  ֒ HEBREW ACCENT SEGOL = segolta
  '\u0593', //  ֓ HEBREW ACCENT SHALSHELET
  '\u0594', //  ֔ HEBREW ACCENT ZAQEF QATAN
  '\u0595', //  ֕ HEBREW ACCENT ZAQEF GADOL
  '\u0596', //  ֖ HEBREW ACCENT TIPEHA = tarha, me'ayla ~ mayla
  '\u0597', //  ֗ HEBREW ACCENT REVIA
  '\u0598', //  ֘ HEBREW ACCENT ZARQA = tsinorit, zinorit; tsinor, zinor • This character is to be used when Zarqa or Tsinor are placed above, and also for Tsinorit. → \u05AE hebrew accent zinor
  '\u0599', // HEBREW ACCENT PASHTA
  '\u059A', // $֚ HEBREW ACCENT YETIV
  '\u059B', //  ֛ HEBREW ACCENT TEVIR
  '\u059C', //  ֜ HEBREW ACCENT GERESH = teres
  '\u059D', //  ֝ HEBREW ACCENT GERESH MUQDAM
  '\u059E', //  ֞ HEBREW ACCENT GERSHAYIM
  '\u059F', //  ֟ HEBREW ACCENT QARNEY PARA = pazer gadol
  '\u05A0', //  ֠ HEBREW ACCENT TELISHA GEDOLA
  '\u05A1', //  ֡ HEBREW ACCENT PAZER = pazer qatan
  '\u05A2', //  ֢ HEBREW ACCENT ATNAH HAFUKH → 05AA $ hebrew accent yerah ben yomo
  '\u05A3', //  ֣ HEBREW ACCENT MUNAH
  '\u05A4', //  ֤ HEBREW ACCENT MAHAPAKH
  '\u05A5', //  ֥ HEBREW ACCENT MERKHA = yored
  '\u05A6', //  ֦ HEBREW ACCENT MERKHA KEFULA
  '\u05A7', //  ֧ HEBREW ACCENT DARGA
  '\u05A8', //  ֨ HEBREW ACCENT QADMA = azla
  '\u05A9', //  ֩ HEBREW ACCENT TELISHA QETANA
  '\u05AA', //  ֪ HEBREW ACCENT YERAH BEN YOMO = galgal → 05A2 $ hebrew accent atnah hafukh
  '\u05AB', //  ֫ HEBREW ACCENT OLE
  '\u05AC', //  ֬ HEBREW ACCENT ILUY
  '\u05AD', //  ֭ HEBREW ACCENT DEHI
  '\u05AE', //  ֮ HEBREW ACCENT ZINOR = tsinor; zarqa • This character is to be used when Zarqa or Tsinor are placed above left. → 0598 $ hebrew accent zarqa
  '\u05AF' //  ֯ HEBREW MARK MASORA CIRCLE
]);

/**
 * All hebrew diacritics
 * @constant
 * @type { string[] }
 */
export const allDiacritics = diacritics.concat(cantillationDiacritics);

/**
 * Vowels and diacritics: used for consonantal only mapping
 * @constant
 * @type { Array.<string> }
 */
export const dotting = Object.freeze(allVowels.concat(allDiacritics));

/**
 * Is character c a Hebrew consonant? All consonants and diagraphs are included.
 * @param { string } c input character
 * @returns { boolean } true if c is Hebrew consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c one of the 5 Hebrew final consonant?
 * @param { string } c input character
 * @returns { boolean } true if c is Hebrew final consonant
 */
export const isFinalConsonant = c => finalConsonants.indexOf(c) > -1;

/**
 * Is character c one of the 5 Hebrew consonant that have final pairs?
 * @param { string } c input character
 * @returns { boolean } true if c is Hebrew consonant with final pair
 */
export const hasFinalConsonant = c => withFinalConsonants.indexOf(c) > -1;

/**
 * Is character c a vowel? Shuruq may stand as diagraph too - context needed for that.
 * @param { string } c input character
 * @returns { boolean } true if c is a vowel
 */
export const isVowel = c => allVowels.indexOf(c) > -1;

/**
 * Is character c a regular diacritic?
 * @param { string } c input character
 * @returns { boolean } true if c is a regular diacritic
 */
export const isRegularDiacritic = c => diacritics.indexOf(c) > -1;

/**
 * Is character c a cantillation diacritic?
 * @param { string } c input character
 * @returns { boolean } true if c is a cantillation diacritic
 */
export const isCantillationDiacritic = c =>
  cantillationDiacritics.indexOf(c) > -1;

/**
 * Is character c a diacritic.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacritic
 */
export const isDiacritic = c => allDiacritics.indexOf(c) > -1;

/**
 * Is character c a punctuation character.
 * @param { string } c input character
 * @returns { boolean } true if c is punctuation
 */
export const isPunctuation = c => punctuation.indexOf(c) > -1;

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = c => dotting.indexOf(c) > -1;

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = word => {
  if (!word) {
    return word;
  }

  let hasDotting = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      hasDotting = true;
    } else {
      stack.push(c);
    }
  }
  return hasDotting ? stack.join('') : word;
};

/**
 * Fix end consonant for a Hebrew word
 * @param { string } word input word
 * @returns { string } word with end consonant corrected
 */
export const endify = word => {
  if (!word) {
    return word;
  }

  const len = word.length;
  let i = len;
  while (--i >= 0) {
    const c = word.charAt(i);
    if (isConsonant(c)) {
      if (!hasFinalConsonant(c) || i === 0) {
        return word;
      }
      return `${word.substring(0, i)}${toFinalConsonantMap[c]}${i < len - 1
        ? word.substring(i + 1, len)
        : ''}`;
    }
  }
  return word;
};
