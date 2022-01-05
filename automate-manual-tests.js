const { Builder, Capabilities, By, until } = require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("");
});

//login page//

test("Helo", async () => {
  await driver.get("https://helo.devmountain.com/#/");

  let userNameElement = await driver.findElement(By.css('<input value="$0">'));

  let passwordElement = await driver.findElement(
    By.css('<div class="auth-input-box">')
  );

  await loginButton.click();
});

//create post//

await createNewPostButton.click();

let titleBarElement = await driver.findElement(
  By.css('<p>Title:</p> <input value="">')
);

let imageUrlElement = await driver.findElement(
  By.css('<p>Image URL:</p> <input value="">')
);

let contentElement = await driver.findElement(
  By.css('<p>Content:</p> <input value="">')
);

await postButton.click();

//return to home screen//

await homeButton.click();

//logout process//

await logOutButton.click();

//search posts//

let contentElement = await driver.findElement(
  By.css('<input class="dash-search-bar"> <input value="">')
);

await searchButton.click();

await resetButton.click();

await driver.sleep(5000);

await driver.quit();

afterAll(async () => {
  await driver.quit();
});
