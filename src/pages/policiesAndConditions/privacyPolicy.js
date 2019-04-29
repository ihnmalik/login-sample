import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
    return (
        <Helmet bodyAttributes={{class: "privacyPolicyPage"}}>
            <title>Privacy Policy - React Starter Kit</title>
        </Helmet>
    );
}

const PrivacyPolicy = () => (
    <section className="content_block privacyPolicy">
    {head()}
        
        <div className="grid">
            
            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">Privacy Policy</div>
                    <p className="desc">
                        This is PrivacyPolicy page.
                    </p>
                </div>
            </div>

        </div>

    </section>
);

export default PrivacyPolicy;