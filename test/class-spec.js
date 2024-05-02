const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class.js");


describe("Word", function () {
  let word1;
  let word2;

  beforeEach(() => {
    word1 = new Word('real')
    word2 = new Word('nice')
  })
  
  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(word1.word);
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word1.word).to.equal('real');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word1.removeVowels()).to.equal("rl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word2.removeConsonants()).to.equal('ie')
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word2.pigLatin()).to.equal("icenay")
    });
  });
});
