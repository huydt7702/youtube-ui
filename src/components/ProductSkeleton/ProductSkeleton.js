import classNames from 'classnames/bind';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import styles from './ProductSkeleton.module.scss';

const cx = classNames.bind(styles);

function ProductSkeleton() {
    return (
        <div className={cx('wrapper')}>
            <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                <Skeleton height="160px" />
                <div className={cx('product-footer')}>
                    <Skeleton circle className={cx('product-avatar')} />
                    <div className={cx('product-title')}>
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    );
}

export default ProductSkeleton;
