import CoinProp from './coin.prop';

class Coins {
  clickCoin = (name) => browser.click(CoinProp.trade.coinImage.replace('^VALUE^', name));

  clickContinueButton = () => browser.click(CoinProp.trade.continueButton);

  clickInputCoin = () => browser.click(CoinProp.trade.inputCoin);

  clickNavigationLink = (name) => browser.click(CoinProp.header.navigationLink.replace('^VALUE^', name));

  clickOutputCoin = () => browser.click(CoinProp.trade.outputCoin);

  getDescription = (name) => browser.getText(CoinProp.company.description.replace('^VALUE^', name));

  is24HourStatsDisplayed = () => browser.isVisible(CoinProp.stats.container);

  isAverageProcessingTimeDisplayed = () => browser.isVisible(CoinProp.stats.averageProcessingTime);

  isBitcoinVolumeDisplayed = () => browser.isVisible(CoinProp.stats.bitcoinVolume);

  isCoinModalClosed = () => browser.waitForVisible(CoinProp.trade.coinModal, 5000, true);

  isCoinModalOpen = () => browser.waitForVisible(CoinProp.trade.coinModal, 5000);

  isDescriptionDisplayed = (name) => browser.isVisible(CoinProp.company.description.replace('^VALUE^', name));

  isDropdownOpen = (name) => browser.isVisible(CoinProp.header.openDropdown.replace('^VALUE^', name));

  isFromAddressDisplayed = () => browser.isVisible(CoinProp.trade.fromAddress);

  isInputCoinDisplayed = () => browser.isVisible(CoinProp.trade.inputCoin);

  isInputCoinSelected = (name) => browser.isVisible(CoinProp.trade.inputCoinSelected.replace('^VALUE^', name));

  isInstantRateDisplayed = () => browser.isVisible(CoinProp.trade.instantRate);

  isLogoDisplayed = () => browser.isVisible(CoinProp.header.logo);

  isMarketDataDisplayed = () => browser.isVisible(CoinProp.marketData.container);

  isMaximumDepositDisplayed = () => browser.isVisible(CoinProp.trade.maximumDeposit);

  isMinerFeeDisplayed = () => browser.isVisible(CoinProp.trade.minerFee);

  isMinimumDepositDisplayed = () => browser.isVisible(CoinProp.trade.minimumDeposit);

  isMostPopularTradeDisplayed = () => browser.isVisible(CoinProp.stats.mostPopularTrade);

  isNavigationLinksDisplayed = () => browser.isVisible(CoinProp.header.navigationLinks);

  isNumberOfTransactionsDisplayed = () => browser.isVisible(CoinProp.stats.numberOfTransactions);

  isOrderQuantityChartDisplayed = () => browser.isVisible(CoinProp.stats.orderQuantityChart);

  isOrderValueChartDisplayed = () => browser.isVisible(CoinProp.stats.orderValueChart);

  isOuputCoinDisplayed = () => browser.isVisible(CoinProp.trade.outputCoin);

  isOutputCoinSelected = (name) => browser.isVisible(CoinProp.trade.outputCoinSelected.replace('^VALUE^', name));

  isRecentTransactionDisplayed = (name) => browser.isVisible(CoinProp.recent.transaction.replace('^VALUE^', name));

  isSocialIconsDisplayed = () => browser.isVisible(CoinProp.header.socialIcons);

  isToAddressDisplayed = () => browser.isVisible(CoinProp.trade.toAddress);

  isTradeHeaderDisplayed = () => browser.isVisible(CoinProp.trade.header);

  isTradingCointainerDisplayed = () => browser.isVisible(CoinProp.trade.container);

  isTransactionModalDisplayed = () => browser.isVisible(CoinProp.trade.transactionModal);

  waitForLoadingComplete = () => browser.waitForVisible(CoinProp.header.loadingCircle, 5000, true);
}

export default new Coins();
