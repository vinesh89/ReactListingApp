import React from 'react';
import PageHeader from '../components/UIComponents/pageHeader/PageHeader';
import Layout from '../components/UIComponents/layout/Layout';

const withTitleHeader = ({ component: Component, title }) => {
    return class Title extends React.Component {
        render() {
            return(
                <div>
                    <PageHeader title={title} />
                    <Layout>
                        <Component {...this.props} />
                    </Layout>
                </div>
            );
        }
    }
}

export default withTitleHeader;