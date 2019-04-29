import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
    return (
        <Helmet bodyAttributes={{class: "cookiePolicyPage"}}>
            <title>Cookie Policy</title>
        </Helmet>
    );
}

const CookiePolicy = () => (
    <section className="content_block cookiePolicy">
        {head()}
    
        <div className="grid">
            
            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">Cookie Policy</div>
                    <p className="desc">
                        This is dummy text. Nurse 2 Nurse 
                    </p>
                </div>
            </div>

        </div>

    </section>
);

export default CookiePolicy;