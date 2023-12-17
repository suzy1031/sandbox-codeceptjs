Feature("はじめてのCodeceptJS");

Scenario("Googleで検索する", async ({ I }) => {
  I.amOnPage("https://www.google.com");
  I.fillField("#APjFqb", "cheese"); // #APjFqb -> textareaのid
  I.pressKey("Enter");
  I.wait(1);
  let firstResult = await I.grabTextFrom("h3");
  console.log(firstResult);
});
