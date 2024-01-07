import classNames from 'classnames/bind';
import React from 'react';
import ProductSkeleton from '~/components/ProductSkeleton';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <React.Fragment>
            {Array(12)
                .fill(null)
                .map((_, key) => (
                    <div key={key} className={cx('col', 'l-3', 'm-4', 'c-12')}>
                        <ProductSkeleton />
                    </div>
                ))}
        </React.Fragment>
    );
}

export default Loading;
