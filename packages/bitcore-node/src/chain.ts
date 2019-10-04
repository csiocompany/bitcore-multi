module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  BSV: {
    lib: require('bitcore-lib-sv'),
    p2p: require('bitcore-p2p-sv'),
  },
  LTC: {
    lib: require('litecore-lib'),
    p2p: require('litecore-p2p'),
  },
  DASH: {
    lib: require('@dashevo/dashcore-lib'),
    p2p: require('@dashevo/dashcore-p2p'),
  },
  ZEC: {
    lib: require('zcashcore-lib'),
    p2p: require('zcashcore-p2p'),
  },
  DOGE: {
    lib: require('@csio.company/dogecore-lib'),
    p2p: require('@csio.company/dogecore-p2p'),
  },
}
