const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    let result = isPangram(text);

    // Assert
    expect(result).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwxyz";

    // Act
    let result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz";
    // Act
    let result = isPangram(text);
    // Assert
    expect(result).toBe(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = "";
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog 38';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  test('26 letters but missing Y', () => {
    const text = 'the quick brown fox jumps over the laz dog';

    const result = isPangram(text);

    expect(result).toBe(false);
  })

  test('uppercase', () => {
    let text = 'the QUICK brown fox jumps over the lazy dog';

    const result = isPangram(text);

    expect(result).toBe(true);
  })
});
