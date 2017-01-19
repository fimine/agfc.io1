import { AgfcAppPage } from './app.po';

describe('agfc-app App', function() {
  let page: AgfcAppPage;

  beforeEach(() => {
    page = new AgfcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
