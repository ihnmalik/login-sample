import React, { Component } from 'react';
import withAuth from './../hoc/withAuth';
import { Helmet } from 'react-helmet';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    head() {
        return (
            <Helmet bodyAttributes={{class: "dashboardPage"}}>
                <title>Dashboard</title>
            </Helmet>
        );
    }

    render() {

        return (
            <section className="content_block dashboard">
                {this.head()}
                <div className="grid">

                    <div className="column column_12_12">
                        <div className="content_wrap">
                            <div className="title">What is nurse 2 nurse?</div>
                            <p className="desc">
                                nurse 2 nurse 
                            </p>
                        </div>
                    </div>

                    <div className="column column_4_12">
                        <div className="content_wrap">
                            <div className="title">What is nurse 2 nurse?</div>
                            <p className="desc">
                                nurse 2 nurse
                            </p>
                        </div>
                    </div>

                    <div className="column column_4_12">
                        <div className="content_wrap">
                            <div className="title">What is nurse 2 nurse?</div>
                            <p className="desc">
                                nurse 2 nurse
                            </p>
                        </div>
                    </div>

                    <div className="column column_4_12">
                        <div className="content_wrap">
                            <div className="title">What is nurse 2 nurse?</div>
                            <p className="desc">
                                nurse 2 nurse
                            </p>
                        </div>
                    </div>

                </div>


            </section>
        );

    }

}

export default withAuth(session => session && session.getCurrentUser)(Dashboard);