import Coins from './Coins.page';

describe('Coins', () => {
  beforeAll(() => {
    browser.url('/#/coins');
    Coins.waitForLoadingComplete();
  });

  describe('Header', () => {
    it('should display ShapeShift logo', () => {
      expect(Coins.isLogoDisplayed()).toBe(true);
    });

    it('should display social icons', () => {
      expect(Coins.isSocialIconsDisplayed()).toBe(true);
    });

    it('should display navigation links', () => {
      expect(Coins.isNavigationLinksDisplayed()).toBe(true);
    });

    it('should display a dropdown when clicking "API + Tools"', () => {
      Coins.clickNavigationLink('API + Tools');

      expect(Coins.isDropdownOpen('API + Tools')).toBe(true);
    });

    it('should display a dropdown when clicking "Resources"', () => {
      Coins.clickNavigationLink('Resources');

      expect(Coins.isDropdownOpen('Resources')).toBe(true);
    });

    it('should display a dropdown when clicking "Support"', () => {
      Coins.clickNavigationLink('Support');

      expect(Coins.isDropdownOpen('Support')).toBe(true);
    });

    it('should display a dropdown when clicking "English"', () => {
      Coins.clickNavigationLink('English');

      expect(Coins.isDropdownOpen('English')).toBe(true);
    });
  });

  describe('Trade', () => {
    it('should display trade header', () => {
      expect(Coins.isTradeHeaderDisplayed()).toBe(true);
    });

    it('should display asset trading container', () => {
      expect(Coins.isTradingCointainerDisplayed()).toBe(true);
    });

    it('should display input coin', () => {
      expect(Coins.isInputCoinDisplayed()).toBe(true);
    });

    it('should display output coin', () => {
      expect(Coins.isOuputCoinDisplayed()).toBe(true);
    });

    it('should allow me to select a coin for input', () => {
      Coins.clickInputCoin();
      expect(Coins.isCoinModalOpen()).toBe(true);

      Coins.clickCoin('vertcoin');
      expect(Coins.isCoinModalClosed()).toBe(true);
      expect(Coins.isInputCoinSelected('vertcoin')).toBe(true);
    });

    it('should allow me to select a coin from output', () => {
      Coins.clickOutputCoin();
      expect(Coins.isCoinModalOpen()).toBe(true);

      Coins.clickCoin('dash');
      expect(Coins.isCoinModalClosed()).toBe(true);
      expect(Coins.isOutputCoinSelected('dash')).toBe(true);
    });

    it('should display Transaction modal when clicking "Continue"', () => {
      Coins.clickContinueButton();

      expect(Coins.isTransactionModalDisplayed()).toBe(true);
    });

    it('should display the Instant Rate', () => {
      expect(Coins.isInstantRateDisplayed()).toBe(true);
    });

    it('should display the Minimum Deposit', () => {
      expect(Coins.isMinimumDepositDisplayed()).toBe(true);
    });

    it('should display the Maximum Deposit', () => {
      expect(Coins.isMaximumDepositDisplayed()).toBe(true);
    });

    it('should display the Miner Fee', () => {
      expect(Coins.isMinerFeeDisplayed()).toBe(true);
    });

    it('should display the To Address', () => {
      expect(Coins.isToAddressDisplayed()).toBe(true);
    });

    it('should display the From Address', () => {
      expect(Coins.isFromAddressDisplayed()).toBe(true);
    });
  });

  describe('Market Data', () => {
    it('should display market data', () => {
      expect(Coins.isMarketDataDisplayed()).toBe(true);
    });
  });

  describe('Company Description', () => {
    it('should display Easy column with correct text', () => {
      expect(Coins.isDescriptionDisplayed('EASY')).toBe(true);

      expect(Coins.getDescription('EASY'))
        .toBe('Choose the altcoins or blockchain tokens you would like to exchange, input your receiving address,'
          + ' & send your funds. Fast crypto market exchanges, no fees, and a delightful process.');
    });

    it('should display Safe column with correct text', () => {
      expect(Coins.isDescriptionDisplayed('SAFE')).toBe(true);

      expect(Coins.getDescription('SAFE'))
        .toBe('Unlike other digital asset and bitcoin exchanges, you don’t need an account to use ShapeShift.'
          + ' This means your funds and information don’t suffer custodial risk.');
    });

    it('should display Competitive column with correct text', () => {
      expect(Coins.isDescriptionDisplayed('COMPETITIVE')).toBe(true);

      expect(Coins.getDescription('COMPETITIVE'))
        .toBe('We offer competitive altcoin and btc exchange rates that update in real time, with no fees on top.'
          + ' Our liquidity and expertise in cryptocurrency trading continually improve.');
    });
  });

  describe('Recent Transactions', () => {
    it('should display recent BTC to ALT transactions', () => {
      expect(Coins.isRecentTransactionDisplayed('btc_alt')).toBe(true);
    });

    it('should display recent ALT to BTC transactions', () => {
      expect(Coins.isRecentTransactionDisplayed('alt_btc')).toBe(true);
    });

    it('should display recent ALT to ALT transactions', () => {
      expect(Coins.isRecentTransactionDisplayed('alt_alt')).toBe(true);
    });
  });

  describe('24 Hour Statistics', () => {
    it('should display the 24 Hour Statistics section', () => {
      expect(Coins.is24HourStatsDisplayed()).toBe(true);
    });

    it('should display the order quantity chart', () => {
      expect(Coins.isOrderQuantityChartDisplayed()).toBe(true);
    });

    it('should display the order value chart', () => {
      expect(Coins.isOrderValueChartDisplayed()).toBe(true);
    });

    it('should display number of transactions', () => {
      expect(Coins.isNumberOfTransactionsDisplayed()).toBe(true);
    });

    it('should display average processing time', () => {
      expect(Coins.isAverageProcessingTimeDisplayed()).toBe(true);
    });

    it('should display bitcoin volume equivalent', () => {
      expect(Coins.isBitcoinVolumeDisplayed()).toBe(true);
    });

    it('should display most popular trade', () => {
      expect(Coins.isMostPopularTradeDisplayed()).toBe(true);
    });
  });
});
