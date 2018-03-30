import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD716c84447e2aC7865b15Aec2a73D527fe7bF1b4'
);

export default instance;
