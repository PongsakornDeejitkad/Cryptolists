import './global.css';
import CartContext from './context/cart';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

export default function App() {
  const cryptolists = [
    {
      id: 1,
      name: 'Bitcoin',
      shortName: 'BTC',
      picture: 'https://crypto.com/price/coin-data/icon/BTC/color_icon.png',
      price: 57040,
      changePerDay: '+2.42%',
      volumnPerDay: 90126991018,
      description:
        'Bitcoin (BTC) is the world\'s first cryptocurrency built on distributed ledger (blockchain) with the proof-of-work mechanism that is not backed by any country\'s central bank or government, it was founded by "Satoshi Nakamoto", a pseudonym representing an individual or group of individuals, who published the whitepaper in October 31st, 2008.    Bitcoins can be used as a digital currency for peer-to-peer electronic transactions and traded for goods or services with vendors who accept Bitcoins as payment bitcoin.org. The Bitcoin price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 2,
      name: 'Ethereum',
      shortName: 'ETH',
      picture: 'https://crypto.com/price/coin-data/icon/ETH/color_icon.png',
      price: 2264,
      changePerDay: '+8.31%',
      volumnPerDay: 46352547881,
      description:
        'Ether (ETH) is the native currency that powers the Ethereum platform. Ethereum is a decentralized software platform created by Vitalik Buterin that enables SmartContracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control or interference from a third party. Ethereum is not just a platform but also a programming language (Turing complete) running on a blockchain, helping developers to build and publish distributed applications. The Ethereum price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 3,
      name: 'Binance Coin',
      shortName: 'BNB',
      picture: 'https://crypto.com/price/coin-data/icon/BNB/color_icon.png',
      price: 532,
      changePerDay: '+12.28%',
      volumnPerDay: 7374300999,
      description:
        'Binance Coin (BNB) is a cryptocurrency used to pay fees on the Binance cryptocurrency exchange. Fees paid in Binance Coin on the exchange receive a discount. Binance is a cryptocurrency exchange known for its fast processing speeds and ability to process an enormous 1.4 million transactions each second. The Binance Coin price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 4,
      name: 'XRP',
      shortName: 'XRP',
      picture: 'https://crypto.com/price/coin-data/icon/XRP/color_icon.png',
      price: 1.46,
      changePerDay: '+13.64%',
      volumnPerDay: 22011158096,
      description:
        'Ripple (XRP) connects traditional financial institutions, payment providers, digital asset exchanges and corporates via RippleNet, an independent real time gross settlement system, to provide one frictionless experience to send money globally. It is built on the most advanced blockchain technology that is scalable, secure and interoperates different networks. XRP provides an optional access to the world’s fastest and most scalable digital asset for payments. The XRP price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 5,
      name: 'Tether',
      shortName: 'USDT',
      picture: 'https://crypto.com/price/coin-data/icon/USDT/color_icon.png',
      price: 1,
      changePerDay: '-1.01%',
      volumnPerDay: 213681587329,
      description:
        'Tether (USDT) is a cryptocurrency that is USD-pegged, otherwise known as a stablecoin. USDT is backed 100% by actual assets in the Tether platform’s reserve account. Therefore, each unit of USDT has a monetary value of one US dollar. USDT provides protection from the volatility of cryptocurrencies. USDT is now available on DeFi Swap. Users can swap USDT, be USDT Liquidity Providers to earn fees and boost their yield by up to 20x when staking CRO. The Tether price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 6,
      name: 'Dogecoin',
      shortName: 'DOGE',
      picture: 'https://crypto.com/price/coin-data/icon/DOGE/color_icon.png',
      price: 0.336,
      changePerDay: '+28.91%',
      volumnPerDay: 22628367534,
      description:
        'Based on the popular "Doge" internet meme and featuring a Shiba Inu on its logo, Dogecoin (DOGE) is a cryptocurrency that was forked from Litecoin in Dec 2013. Dogecoin has been used primarily as a tipping system on Reddit and Twitter to reward the creation or sharing of quality content. Dogecoin was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia. Both had envisaged Dogecoin as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience. There is no hard cap on the number of Dogecoins that can be produced. The Dogecoin price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 7,
      name: 'Cardano',
      shortName: 'ADA',
      picture: 'https://crypto.com/price/coin-data/icon/ADA/color_icon.png',
      price: 1.31,
      changePerDay: '+9.11%',
      volumnPerDay: 7185134280,
      description:
        'Cardano (ADA) is a decentralised public blockchain and cryptocurrency project and is fully open source. Cardano is developing a smart contract platform seeks to allow complex programmable transfers of value in a secure and scalable fashion through its unique solutions. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The Cardano price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 8,
      name: 'Polkadot',
      shortName: 'DOT',
      picture:
        'https://images.prismic.io/token-price-prod/9ea52d3e-eed8-42ce-a9b6-6ef58e0eeb42_DOTxxxhdpi.png?auto=compress,format&rect=0,0,96,96',
      price: 38.47,
      changePerDay: '+8.7%',
      volumnPerDay: 5307400595,
      description:
        'Polkadot is a sharded protocol that enables blockchain networks to operate together. Polkadot is an open-source project founded by the Web3 Foundation. The Polkadot coin serves three distinct purposes: governance over the network, staking, and bonding. Check out the Polkadot price chart, Polkadot price history and Polkadot current price today! The Polkadot price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 9,
      name: 'Bitcoin Cash',
      shortName: 'BCH',
      picture: 'https://crypto.com/price/coin-data/icon/BCH/color_icon.png',
      price: 1024.75,
      changePerDay: '+15.85%',
      volumnPerDay: 10718968,
      description:
        'Bitcoin Cash (BCH) is a peer-to-peer electronic cash for the Internet. It is fully decentralized, with no central bank and requires no trusted third parties to operate. Bitcoin Cash is the continuation of the Bitcoin project as peer-to-peer digital cash, which seeks to add more transaction capacity to the network. Bitcoin cash is therefore a hard fork of the Bitcoin blockchain ledger, with upgraded consensus rules that allow it to grow and scale. Bitcoin Cash increased and will continue to increase block sizes which thereby increase the potential volume of transactions on the network. The Bitcoin Cash price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
    {
      id: 10,
      name: 'Litecoin',
      shortName: 'LTC',
      picture: 'https://crypto.com/price/coin-data/icon/LTC/color_icon.png',
      price: 278.77,
      changePerDay: '+9.74%',
      volumnPerDay: 11836135171,
      description:
        'Litecoin (LTC) is one of the oldest cryptocurrencies in existence founded by Charlie Lee. Litecoin as a cryptocurrency is a fork of Bitcoin, therefore they share many of the same characteristics but LTC benefits from shorter block generation times as it uses a faster payment confirmation schedule and a different cryptographic algorithm. Litecoin also has lower transaction fees than Bitcoin and can be used as a digital currency on the web to pay for goods and services and to play at crypto casinos. The Litecoin price page is part of Crypto.com Price Index that features price history, price ticker, market cap and live charts for the top cryptocurrencies.',
      updateDate: '19/04/2021',
    },
  ];
  const [cart, setCart] = useState(cryptolists);
  const [otherShop, setOtherShop] = useState([]);
  useEffect(() => {
    fetch('https://my-shop.zenon.si/shops')
      .then(response => response.json())
      .then(data => {
        setOtherShop(data);
      }, []);
  });
  console.log('Wlecrommeee');

  return (
    <CartContext.Provider value={{ cart, setCart, otherShop }}>
      <BrowserRouter>
        <div className="header">
          <Router />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}
