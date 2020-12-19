const deleteFave = require('./deleteFave');

test("deletes news article from favourites list and returns the length", () => {
    // given
    const articleIndex = 1;

    // when
    const favesList = deleteFave(articleIndex);
    const finalLength = 2;

    // then
    expect(favesList).toBe(finalLength);
});