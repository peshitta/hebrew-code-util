const test = require('assert');
const sut = require('../build/hebrew-code-util');

describe('Hebrew', () => {
  it('Is Consonant', () => {
    test.ok(sut.isConsonant('א'), 'א isConsonant');
    test.ok(sut.isConsonant('ה'), 'ה isConsonant');
    test.ok(!sut.isConsonant('b'), '! b isConsonant');
    test.ok(!sut.isConsonant('X'), '! X isConsonant');
  });
  it('Is Final Consonant', () => {
    test.ok(sut.isFinalConsonant('ך'), 'ך isFinalConsonant');
    test.ok(sut.isFinalConsonant('ץ'), 'ץ isFinalConsonant');
    test.ok(sut.isFinalConsonant('ף'), 'ף isFinalConsonant');
    test.ok(!sut.isFinalConsonant('ד'), '! ד isFinalConsonant');
    test.ok(!sut.isFinalConsonant('ו'), "! 'ו' isFinalConsonant");
  });
  it('Is Western Vowel', () => {
    test.ok(sut.hasFinalConsonant('מ'), 'מ hasFinalConsonant');
    test.ok(sut.hasFinalConsonant('צ'), 'צ hasFinalConsonant');

    test.ok(!sut.hasFinalConsonant('ל'), "! ל hasFinalConsonant");
  });
  it('Is Vowel', () => {
    test.ok(sut.isVowel('ֻ'), 'ֹֹֻ isֹVowel');
    test.ok(sut.isVowel('ֶ'), 'ֶ isVowel');
    test.ok(sut.isVowel('ִ'), 'ִ isVowel');

    test.ok(!sut.isVowel('U'), 'U isVowel');
    test.ok(!sut.isVowel(':'), ': isVowel');
    test.ok(!sut.isVowel(''), "! '' isVowel");
  });
  it('Is Common Diacritic', () => {
    test.ok(sut.isRegularDiacritic('ֿ'), 'ֿ isRֿegularDiacritic');
    test.ok(sut.isRegularDiacritic('ׁ'), 'ׁ isRegularDiacritic');
    test.ok(sut.isRegularDiacritic('ׅ'), 'ׅ isRegularDiacritic');
    test.ok(sut.isRegularDiacritic('ׂ'), 'ׂ isRegularDiacritic');


    test.ok(!sut.isRegularDiacritic("'"), "! ' isRegularDiacritic");
    test.ok(!sut.isRegularDiacritic(','), '! , isRegularDiacritic');
    test.ok(!sut.isRegularDiacritic('*'), '! * isRegularDiacritic');
    test.ok(!sut.isRegularDiacritic('_'), '! _ isRegularDiacritic');
    test.ok(!sut.isRegularDiacritic(''), "! '' isRegularDiacritic");
    test.ok(!sut.isRegularDiacritic(' '), "! ' ' isRegularDiacritic");
  });
  it('Is Cantillation Diacritic', () => {
    test.ok(sut.isCantillationDiacritic('֤'), '֤ isCantillationDiacritic');
    test.ok(sut.isCantillationDiacritic('֑'), '֑ isCantillationDiacritic');

    test.ok(!sut.isCantillationDiacritic("'"), "! ' isCantillationDiacritic");
    test.ok(!sut.isCantillationDiacritic(' '), "! ' ' isCantillationDiacritic");
  });
  it('Is Diacritic', () => {
    test.ok(sut.isDiacritic('ֿ'), 'ֿ isRֿegularDiacritic');
    test.ok(sut.isDiacritic('ׁ'), 'ׁ isRegularDiacritic');
    test.ok(sut.isDiacritic('ׅ'), 'ׅ isRegularDiacritic');
    test.ok(sut.isDiacritic('ׂ'), 'ׂ isRegularDiacritic');
    test.ok(sut.isDiacritic('֤'), '֤ isCantillationDiacritic');
    test.ok(sut.isDiacritic('֑'), '֑ isCantillationDiacritic');

    test.ok(!sut.isDiacritic("'"), "! ' isDiacritic");
    test.ok(!sut.isDiacritic(','), '! , isDiacritic');
    test.ok(!sut.isDiacritic(' '), "! ' ' isDiacritic");
  });
  it('Is Punctuation', () => {
    test.ok(sut.isPunctuation('־'), '־ isPunctuation');
    test.ok(sut.isPunctuation('״'), '״ isPunctuation');
    test.ok(sut.isPunctuation('׳'), '׳ isPunctuation');

    test.ok(!sut.isPunctuation(' '), "! ' ' isPunctuation");
    test.ok(!sut.isPunctuation('&'), '! & isPunctuation');
    test.ok(!sut.isPunctuation('.'), '! . isPunctuation');
    test.ok(!sut.isPunctuation('`'), '! ` isPunctuation');
    test.ok(!sut.isPunctuation('~'), '! ~ isPunctuation');
    test.ok(!sut.isPunctuation(','), '! , isPunctuation');
  });
  it('Is Dotting', () => {
    test.ok(sut.isDotting('֔'), ' ֔ isDotting');
    test.ok(sut.isDotting('ֿ'), 'ֿ isDotting');
    test.ok(sut.isDotting('ֱ'), 'ֱ isDotting');
    test.ok(sut.isDotting('ֺ'), 'ֺ isDotting');
    test.ok(sut.isDotting('ָ'), 'ָ isDotting');

    test.ok(!sut.isDotting("'"), "! ' isDotting");
    test.ok(!sut.isDotting(','), '! , isDotting');
    test.ok(!sut.isDotting('*'), '! * isDotting');
    test.ok(!sut.isDotting('_'), '! _ isDotting');
    test.ok(!sut.isDotting(''), "! '' isDotting");
    test.ok(!sut.isDotting(' '), "! ' ' isDotting");
  });

  describe('Remove Dotting', () => {
    it('Remove Dotting', () => {
      let word = 'אשכולית';
      let expected = 'אשכולית';
      test.strictEqual(
        sut.removeDotting(word),
        expected,
        'אשכולית removeDotting'
      );
      word = 'בְּרֵאשִׁית,';
      expected = 'בראשית,';
      test.strictEqual(
        sut.removeDotting(word),
        expected,
        'בראשית, removeDotting'
      );
  
      word = 'הָאָרֶץ דֶּשֶׁא';
      expected = 'הארץ דשא';
      test.strictEqual(
        sut.removeDotting(word),
        expected,
        'הָאָרֶץ דֶּשֶׁא removeDotting'
      );
  
      word = 'וַיְהִי-עֶרֶב';
      expected = 'ויהי-ערב';
      test.strictEqual(
        sut.removeDotting(word),
        expected,
        'וַיְהִי-עֶרֶב removeDotting'
      );
  
      test.strictEqual(sut.removeDotting("'"), "'", "' removeDotting");
      test.strictEqual(sut.removeDotting(','), ',', ', removeDotting');
      test.strictEqual(sut.removeDotting('*'), '*', '* removeDotting');
      test.strictEqual(sut.removeDotting('_'), '_', '_ removeDotting');
      test.strictEqual(sut.removeDotting(''), '', "'' removeDotting");
      test.strictEqual(sut.removeDotting(' '), ' ', "' ' removeDotting");
    });
      
  })
  describe('Endify', () => {
    it('Standalone non-vocalized return non-final', () => {
      test.strictEqual(sut.endify('נ'), 'נ', 'נ endify');
      test.strictEqual(sut.endify('כ'), 'כ', 'כ endify');
    });
    it('Standalone vocalized returns non-final', () => {
      test.strictEqual(sut.endify('מֵ'), 'מֵ', 'מ endify');
      test.strictEqual(sut.endify('פִּ'), 'פִּ', 'פּ endify');
    });
    // ------------------------------------------------------
    it('Non-standalone vocalized final', () => {
      test.strictEqual(sut.endify('הַחֹשֶׁךְ'), 'הַחֹשֶׁךְ', 'הַחֹשֶׁךְ endify');
      test.strictEqual(sut.endify('הַחֹשֶׁכְ'), 'הַחֹשֶׁךְ', 'הַחֹשֶׁכְ endify');
    });
    it('Non-standalone vocalized final other', () => {
      test.strictEqual(sut.endify('הַיּוֹם'), 'הַיּוֹם', 'הַיּוֹם endify');
      test.strictEqual(sut.endify('הַיּוֹמ'), 'הַיּוֹם', 'הַיּוֹמ endify');
      test.strictEqual(sut.endify('בֵּינ'), 'בֵּין', 'בֵּינ endify');
    });
    it('Endify empty word', () => {
      test.strictEqual(sut.endify(''), '', "'' endify");
      test.strictEqual(sut.endify(0), 0, '0 endify');
      test.strictEqual(sut.endify(null), null, 'null endify');
    });

  });
});
