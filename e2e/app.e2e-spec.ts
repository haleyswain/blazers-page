import { BlazersPage } from './app.po';

describe('blazers App', function() {
  let page: BlazersPage;

  beforeEach(() => {
    page = new BlazersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
