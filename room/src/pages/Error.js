import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
            <Banner title="ERROR 404" subtitle="Page not found">
                <Link to="/" className="btn-custome">
                    Go to home Page
                </Link>
            </Banner>
        </Hero>
    );
}