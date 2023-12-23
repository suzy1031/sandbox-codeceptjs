Feature("はじめてのCodeceptJS");

// 参考: https://miko.info/i_love_codeceptjs
// Scenario("Googleで検索する", async ({ I }) => {
//   I.amOnPage("https://www.google.com");
//   I.fillField("#APjFqb", "cheese"); // #APjFqb -> textareaのid
//   I.pressKey("Enter");
//   I.wait(1);
//   let firstResult = await I.grabTextFrom("h3");
//   console.log(firstResult);
// });

Scenario("localhostでボタンをクリックする", async ({ I }) => {
  I.amOnPage("http://localhost:5173/");
  I.click("#count-up"); // #count-up -> buttonのid
  I.wait(1);
  I.see("count is 1", "#count-up"); // 第二引数に指定したid要素に第一引数の文字列が含まれているか
});
