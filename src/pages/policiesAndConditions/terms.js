import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
    return (
        <Helmet bodyAttributes={{class: "termsPage"}}>
            <title>Terms - React Starter Kit</title>
        </Helmet>
    );
}

const Terms = () => (
    <section className="content_block terms">
    {head()}
        
        <div className="grid">
            
            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">Terms</div>
                    <p className="desc">
                        This is terms and Conditions page.
                    </p>
                </div>
            </div>

        </div>

    </section>
);

export default Terms;