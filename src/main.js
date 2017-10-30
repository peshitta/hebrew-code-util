/** @module hebrewCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

/**
 * Hebrew consonant name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alef: { value: '\u05D0', enumerable: true }, // א HEBREW LETTER ALEF = aleph → \u2135 ℵ alef symbol
    bet: { value: '\u05D1', enumerable: true }, // ב HEBREW LETTER BET  → \u2136 ℶ bet symbol
    gimel: { value: '\u05D2', enumerable: true }, // ג HEBREW LETTER GIMEL  → \u2137 ℷ gimel symbol
    dalet: { value: '\u05D3', enumerable: true }, // ד HEBREW LETTER DALET  → \u2138 ℸ dalet symbol

    he: { value: '\u05D4', enumerable: true }, // ה HEBREW LETTER HE
    vav: { value: '\u05D5', enumerable: true }, // ו HEBREW LETTER VAV
    zayin: { value: '\u05D6', enumerable: true }, // ז HEBREW LETTER ZAYIN

    het: { value: '\u05D7', enumerable: true }, // ח HEBREW LETTER HET
    tet: { value: '\u05D8', enumerable: true }, // ט HEBREW LETTER TET
    yod: { value: '\u05D9', enumerable: true }, // י HEBREW LETTER YOD

    kaf: { value: '\u05DB', enumerable: true }, // כ HEBREW LETTER KAF
    lamed: { value: '\u05DC', enumerable: true }, // ל HEBREW LETTER LAMED
    mem: { value: '\u05DE', enumerable: true }, // מ HEBREW LETTER MEM
    nun: { value: '\u05E0', enumerable: true }, // נ HEBREW LETTER NUN

    samekh: { value: '\u05E1', enumerable: true }, // ס HEBREW LETTER SAMEKH
    ayin: { value: '\u05E2', enumerable: true }, // ע HEBREW LETTER AYIN
    pe: { value: '\u05E4', enumerable: true }, // פ HEBREW LETTER PE
    tsadi: { value: '\u05E6', enumerable: true }, // צ HEBREW LETTER TSADI = zade

    qof: { value: '\u05E7', enumerable: true }, // ק HEBREW LETTER QOF
    resh: { value: '\u05E8', enumerable: true }, // ר HEBREW LETTER RESH
    shin: { value: '\u05E9', enumerable: true }, // ש HEBREW LETTER SHIN
    tav: { value: '\u05EA', enumerable: true }, // ת HEBREW LETTER TAV

    finalKaf: { value: '\u05DA', enumerable: true }, // ך HEBREW LETTER FINAL KAF
    finalMem: { value: '\u05DD', enumerable: true }, // ם HEBREW LETTER FINAL MEM
    finalNun: { value: '\u05DF', enumerable: true }, // ן HEBREW LETTER FINAL NUN
    finalPe: { value: '\u05E3', enumerable: true }, // ף HEBREW LETTER FINAL PE
    finalTsadi: { value: '\u05E5', enumerable: true } // ץ HEBREW LETTER FINAL TSADI
  })
);

const l = consonantsByName;
/**
 * Hebrew base 22 consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  l.alef,
  l.bet,
  l.gimel,
  l.dalet,

  // hawaz
  l.he,
  l.vav,
  l.zayin,

  // ḥaṭy
  l.het,
  l.tet,
  l.yod,

  // kalman
  l.kaf,
  l.lamed,
  l.mem,
  l.nun,

  // saʿpac
  l.samekh,
  l.ayin,
  l.pe,
  l.tsadi,

  // qarshat
  l.qof,
  l.resh,
  l.shin,
  l.tav
]);

/**
 * Hebrew 5 final consonants
 * @constant
 * @type { string[] }
*/
export const finalConsonants = Object.freeze([
  l.finalKaf, // ך HEBREW LETTER FINAL KAF
  l.finalMem, // ם HEBREW LETTER FINAL MEM
  l.finalNun, // ן HEBREW LETTER FINAL NUN
  l.finalPe, // ף HEBREW LETTER FINAL PE
  l.finalTsadi // ץ HEBREW LETTER FINAL TSADI
]);

/**
 * Hebrew 5 with final pair consonants
 * @constant
 * @type { string[] }
*/
export const withFinalConsonants = Object.freeze([
  l.kaf, // כ HEBREW LETTER KAF
  l.mem, // מ HEBREW LETTER MEM
  l.nun, // נ HEBREW LETTER NUN
  l.pe, // פ HEBREW LETTER PE
  l.tsadi // צ HEBREW LETTER TSADI = zade
]);

/**
 * Map from regular to final consonant
 * @constant
 * @type { Object.<string, string> }
*/
export const toFinalConsonantMap = Object.freeze(
  Object.create(null, {
    כ: { value: l.finalKaf, enumerable: true }, // כ HEBREW LETTER KAF
    מ: { value: l.finalMem, enumerable: true }, // מ HEBREW LETTER MEM
    נ: { value: l.finalNun, enumerable: true }, // נ HEBREW LETTER NUN
    פ: { value: l.finalPe, enumerable: true }, // פ HEBREW LETTER PE
    צ: { value: l.finalTsadi, enumerable: true } // צ HEBREW LETTER TSADI = zade
  })
);

/**
 * Begadkepat letters
 * @constant
 * @type { string[] }
*/
export const begadkepat = Object.freeze([
  l.bet, // ב HEBREW LETTER BET  → \u2136 ℶ bet symbol
  l.gimel, // ג HEBREW LETTER GIMEL  → \u2137 ℷ gimel symbol
  l.dalet, // ד HEBREW LETTER DALET  → \u2138 ℸ dalet symbol
  l.finalKaf, // ך HEBREW LETTER FINAL KAF
  l.kaf, // כ HEBREW LETTER KAF
  l.finalPe, // ף HEBREW LETTER FINAL PE
  l.pe, // פ HEBREW LETTER PE
  l.tav // ת HEBREW LETTER TAV
]);

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
 * Hebrew vowel name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const vowelsByName = Object.freeze(
  Object.create(null, {
    patah: { value: '\u05B7', enumerable: true },
    qamats: { value: '\u05B8', enumerable: true },
    tsere: { value: '\u05B5', enumerable: true },
    hiriq: { value: '\u05B4', enumerable: true },
    shuruq: { value: '\u05BC', enumerable: true },

    segol: { value: '\u05B6', enumerable: true },
    holamHaser: { value: '\u05BA', enumerable: true },

    holam: { value: '\u05B9', enumerable: true }, //  ֹ HEBREW POINT HOLAM
    qubuts: { value: '\u05BB', enumerable: true }, //  ֻ HEBREW POINT QUBUTS
    sheva: { value: '\u05B0', enumerable: true }, //  ְ HEBREW POINT SHEVA
    hatafSegol: { value: '\u05B1', enumerable: true }, //  ֱ HEBREW POINT HATAF SEGOL
    hatafPatah: { value: '\u05B2', enumerable: true }, //  ֲ HEBREW POINT HATAF PATAH
    hatafQamats: { value: '\u05B3', enumerable: true }, //  ֳ HEBREW POINT HATAF QAMATS
    qamatsQatan: { value: '\u05C7', enumerable: true } //  ׇ HEBREW POINT QAMATS QATAN → \u05B8 hebrew point qamats
  })
);

const v = vowelsByName;
/**
 * Hebrew common vowels - common in relation to Syriac
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  v.patah, //  ַ HEBREW POINT PATAH • furtive patah is not a distinct character
  v.qamats, //  ָ HEBREW POINT QAMATS • used generically or as qamats gadol in orthography which distinguishes that from qamats qatan → \u05C7 ׇ  hebrew point qamats qatan
  v.tsere, //  ֵ HEBREW POINT TSERE
  v.hiriq, //  ִ HEBREW POINT HIRIQ
  v.shuruq //  ּ HEBREW POINT DAGESH OR MAPIQ = shuruq • falls within the base letter - functions as diacritic as well
]);

/**
 * Hebrew vowels common to eastern syriac
 * @constant
 * @type { string[] }
*/
export const easternCommonVowels = Object.freeze([
  v.segol, //  ֶ HEBREW POINT SEGOL
  v.holamHaser //  ֺHEBREW POINT HOLAM HASER FOR VAV
]);

/**
 * Rest of Hebrew vowels
 * @constant
 * @type { string[] }
*/
export const otherVowels = Object.freeze([
  v.holam, //  ֹ HEBREW POINT HOLAM
  v.qubuts, //  ֻ HEBREW POINT QUBUTS
  v.sheva, //  ְ HEBREW POINT SHEVA
  v.hatafSegol, //  ֱ HEBREW POINT HATAF SEGOL
  v.hatafPatah, //  ֲ HEBREW POINT HATAF PATAH
  v.hatafQamats, //  ֳ HEBREW POINT HATAF QAMATS
  v.qamatsQatan //  ׇ HEBREW POINT QAMATS QATAN → \u05B8 hebrew point qamats
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
 * Hebrew regular diacritics name/value map
 * @constant
 * @type { string[] }
*/
export const diacriticsByName = Object.freeze(
  Object.create(null, {
    meteg: { value: '\u05BD', enumerable: true }, //  ֽ HEBREW POINT METEG  = siluq  • may be used as a Hebrew accent sof pasuq
    rafe: { value: '\u05BF', enumerable: true }, //  ֿ HEBREW POINT RAFE  → \uFB1E ﬞ  hebrew point judeo-spanish varika
    shin: { value: '\u05C1', enumerable: true }, //  ׁHEBREW POINT SHIN DOT
    sin: { value: '\u05C2', enumerable: true }, //  ׂHEBREW POINT SIN DOT
    upper: { value: '\u05C4', enumerable: true }, //  ׄ HEBREW MARK UPPER DOT
    lower: { value: '\u05C5', enumerable: true } //  ׅ HEBREW MARK LOWER DOT • punctum extraordinarium (Psalms 27:13) → \u05B4 hebrew point hiriq
  })
);

const d = diacriticsByName;
/**
 * Hebrew regular diacritics
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze([
  d.meteg, //  ֽ HEBREW POINT METEG  = siluq  • may be used as a Hebrew accent sof pasuq
  d.rafe, //  ֿ HEBREW POINT RAFE  → \uFB1E ﬞ  hebrew point judeo-spanish varika
  d.shin, //  ׁHEBREW POINT SHIN DOT
  d.sin, //  ׂHEBREW POINT SIN DOT
  d.upper, //  ׄ HEBREW MARK UPPER DOT
  d.lower //  ׅ HEBREW MARK LOWER DOT • punctum extraordinarium (Psalms 27:13) → \u05B4 hebrew point hiriq
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
  '\u0599', //  ֙ HEBREW ACCENT PASHTA
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
 * Return true if input word has vowels or diacritics
 * @param { string } word input CAL code word
 * @returns { boolean } true if word has vowels or diacritics
 */
export const isDotted = hasDotting(isDotting);

/**
 * Returns true if c is begadkepat character
 * @param { string } c input character
 * @returns { boolean } true if c is begadkepat
 */
export const isBegadkepat = c => begadkepat.indexOf(c) > -1;

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = clearDotting(isDotting);

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
