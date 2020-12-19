const addFave = require('./addFave.js');

test("add news article to favourites list and returns the length", () => {
    // given
    const articleIndex = 1;

    // when
    const favesList = addFave(articleIndex);
    const finalLength = 1;

    // then
    expect(favesList).toBe(finalLength);
})
