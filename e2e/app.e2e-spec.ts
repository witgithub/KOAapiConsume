import { ConsumeAPIPage } from './app.po';

describe('consume-api App', () => {
  let page: ConsumeAPIPage;

  beforeEach(() => {
    page = new ConsumeAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
