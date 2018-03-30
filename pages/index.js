import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout'
import { Link } from '../routes'


class CampaignIndex extends Component {
//must use getInitialProps for nextJS server side rendering 
//static for class functions
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns }
  }
  
  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />
  }
  render(){
    return (
      <Layout>
      <div> 
      
     
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
        <Button content='Create Campaign' 
                icon='add'
                floated="right"
                primary 
        />
        </Link>
        { this.renderCampaigns() }

      </div>
    </Layout>)
  }
}

export default CampaignIndex;
