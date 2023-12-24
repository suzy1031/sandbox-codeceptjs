Feature("はじめてのCodeceptJS");

/**
 * 動作テスト シナリオ
 * 参考: https://miko.info/i_love_codeceptjs
 */
// Scenario("Googleで検索する", async ({ I }) => {
//   I.amOnPage("https://www.google.com");
//   I.fillField("#APjFqb", "cheese"); // #APjFqb -> textareaのid
//   I.pressKey("Enter");
//   I.wait(1);
//   let firstResult = await I.grabTextFrom("h3");
//   console.log(firstResult);
// });

/**
 * local動作テスト シナリオ
 * 参考: https://codecept.io/plugins/#customlocator
 */
// Scenario("localhostでカウントアップボタンをクリックする", async ({ I }) => {
//   I.amOnPage("http://localhost:5173/");
//   I.click("$count-up"); // #count-up -> buttonのcustom id
//   I.wait(1);
//   I.see("count is 1", "$count-up"); // 第二引数に指定したcustom id要素に第一引数の文字列が含まれているか
// });

Scenario("localhostでモーダルを開く", async ({ I }) => {
  I.amOnPage("http://localhost:5173/");
  I.click("$open-modal-button");
  I.wait(1);
  I.see("Use Google's location service?", "#alert-dialog-title"); // モーダルタイトルの表示を確認
  I.see(
    `Let Google help apps determine location. This means sending anonymous
  location data to Google, even when no apps are running.`,
    "#alert-dialog-description"
  ); // モーダルメッセージの表示を確認
  I.click("$right-button");
  I.wait(1);
  I.dontSee("Use Google's location service?"); // モーダルタイトルの非表示を確認
  I.dontSee(`Let Google help apps determine location. This means sending anonymous
  location data to Google, even when no apps are running.`); // モーダルメッセージの非表示を確認
});
