import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6eaF701F99A3f87e81D20811d79A1A61ee8aCeda'
);

export default instance;
