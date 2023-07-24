import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import {
    AddIcon,
    ArrowDownIcon,
    ExploreIcon,
    FeedbackIcon,
    FlagIcon,
    GamingIcon,
    HelpIcon,
    HistoryIcon,
    HomeIcon,
    LibraryIcon,
    LikeIcon,
    LiveIcon,
    SettingsIcon,
    ShortsIcon,
    SubsIcon,
    TrophyIcon,
    UserIcon,
    VideoIcon,
    WatchIcon,
} from '~/components/Icons';
import config from '~/config';
import { signInWithGoogle } from '~/firebaseConfig';
import MenuSidebar from './Menu';
import styles from './Sidebar.module.scss';

const HOME = [
    {
        icon: HomeIcon,
        title: 'Home',
        to: config.routes.home,
    },
    {
        icon: ExploreIcon,
        title: 'Explore',
        to: config.routes.explore,
    },
    {
        icon: ShortsIcon,
        title: 'Shorts',
        to: config.routes.shorts,
    },
    {
        icon: SubsIcon,
        title: 'Subscriptions',
        to: config.routes.subscriptions,
    },
];

const LIBRARY = [
    {
        icon: LibraryIcon,
        title: 'Library',
        to: config.routes.library,
    },
    {
        icon: HistoryIcon,
        title: 'History',
        to: config.routes.history,
    },
];

const LIBRARY_LOGIN = [
    ...LIBRARY,
    {
        icon: VideoIcon,
        title: 'Your videos',
    },
    {
        icon: WatchIcon,
        title: 'Watch later',
    },
    {
        icon: LikeIcon,
        title: 'Liked videos',
    },
    {
        icon: ArrowDownIcon,
        title: 'Show more',
    },
];

const SUBSCRIPTIONS = [
    {
        image: 'https://yt3.ggpht.com/3ErdBd0bg2Qw5rKdqDK-7vPAf0tirRuodlGGZuhZePQcjEu8i5KniCN-EUCBtQkSOy14M26O=s176-c-k-c0x00ffffff-no-rj-mo',
        title: 'English Speeches',
        pathname: '/EnglishSpeeches',
    },
    {
        image: 'https://yt3.ggpht.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s176-c-k-c0x00ffffff-no-rj-mo',
        title: 'F8 Official',
        pathname: '/F8VNOfficial',
    },
    {
        image: 'https://yt3.googleusercontent.com/yJLMdoVY9K4sujPxlVT3t7iaOd50RbYBVGMSDfbpx980hvIPNw0skSzn24Ct3u26DZKHkCbT=s176-c-k-c0x00ffffff-no-rj',
        title: 'FAP TV',
        pathname: '/FAPtivi',
    },
    {
        image: 'https://yt3.ggpht.com/zBUnmMo28sCLCYtBl2vSKdKHTFgrF6wGhs2N1SsWqbWu8ERcxto3FV5WcYprDc6hIdJwGOgk3q0=s88-c-k-c0x00ffffff-no-rj',
        title: "Men's Bay",
        pathname: '/MensBay',
    },
    {
        image: 'https://yt3.ggpht.com/UtzXAAKz-qnKPqnzX2ec9zmKgWx1yHb9cUWPj5gFcF_Imw3KgAbNBpOuXN0HZ7P1WadZyzkW=s88-c-k-c0x00ffffff-no-rj',
        title: 'evondev',
        pathname: '/evondevfrontend',
    },
    {
        image: 'https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s88-c-k-c0x00ffffff-no-rj',
        title: 'Easy Frontend',
        pathname: '/EasyFrontend',
    },
    {
        icon: ArrowDownIcon,
        title: 'Show 43 more',
    },
];

const BEST_OF_YOUTUBE = [
    {
        image: 'https://yt3.googleusercontent.com/vCqmJ7cdUYpvR0bqLpWIe8ktaor4QafQLlfQyTuZy-M9W_YafT8Wo9kdsKL2St1BrkMRpVSJgA=s900-c-k-c0x00ffffff-no-rj',
        title: 'Music',
        pathname: '/Music',
    },
    {
        image: 'https://yt3.googleusercontent.com/mUhuJiCiL8jf0Ngf9sh7BFBZCO0MUL2JyH_5ElHbV2fd13hxZ9zQ3-x-YePA_-PCUUH360G0=s88-c-k-c0x00ffffff-no-rj-mo',
        title: 'Sports',
        pathname: '/Sports',
    },
    {
        image: 'https://yt3.googleusercontent.com/pzvUHajbQDLDt63gKFYUX445k3VprUs8CeJFpNTxGQZlk0grOSkAqU8Th1_C97dyYM3nENgjbw=s88-c-k-c0x00ffffff-no-rj-mo',
        title: 'Gaming',
        pathname: '/Gaming',
    },
    {
        image: 'https://yt3.googleusercontent.com/qj80UVa3fFaLL9c0Cgd-BrEPuShbZnGBqrh2AArMRlfH2DZRAl4ilScrSqIRR3WIu01lSlJM=s88-c-k-c0x00ffffff-no-rj-mo',
        title: 'News',
        pathname: '/News',
    },
    {
        image: 'https://yt3.googleusercontent.com/uL4xlF3_o_605wg887ENKIaMdEwJn5aP5t-r7HRpQshXL5gIn2AKfNfjZkRN15kTcgS3wK7c=s88-c-k-c0x00ffffff-no-rj-mo',
        title: 'Live',
        pathname: '/Live',
    },
    {
        image: 'https://yt3.googleusercontent.com/ljyOn_c3m39msB4Vw_qsCneJn9lYMH43fBpuTkbLIQu0rqyFApK1qvxJ_DJy8mvyZs4-op5i39Q=s176-c-k-c0x00ffffff-no-rj',
        title: '360° Video',
        pathname: '/360Video',
    },
];

const BROWSE_CHANNELS = [
    {
        icon: AddIcon,
        title: 'Browse channels',
    },
];

const MORE_FROM_YOUTUBE = [
    {
        icon: LiveIcon,
        title: 'Live',
        to: config.routes.live,
    },
];

const MORE_FROM_YOUTUBE_LOGIN = [
    {
        icon: GamingIcon,
        title: 'Gaming',
        to: config.routes.gaming,
    },
    ...MORE_FROM_YOUTUBE,
    {
        icon: TrophyIcon,
        title: 'Sports',
        to: config.routes.sports,
    },
];

const SETTINGS = [
    {
        icon: SettingsIcon,
        title: 'Settings',
        to: config.routes.settings,
    },
    {
        icon: FlagIcon,
        title: 'Report history',
        to: config.routes.report,
    },
    {
        icon: HelpIcon,
        title: 'Help',
    },
    {
        icon: FeedbackIcon,
        title: 'Send feedback',
    },
];

const cx = classNames.bind(styles);

function Sidebar({ noPosition = false }) {
    const currentUser = !!localStorage.getItem('name');

    return (
        <div className={cx('wrapper', { 'no-position': noPosition })}>
            <MenuSidebar items={HOME} />
            <MenuSidebar items={currentUser ? LIBRARY_LOGIN : LIBRARY} lessPadding={!currentUser} />

            {currentUser ? (
                <>
                    <MenuSidebar items={SUBSCRIPTIONS} heading="Subscriptions" lessPadding />
                </>
            ) : (
                <>
                    <div className={cx('sign-in')}>
                        <p>Sign in to like videos, comment, and subscribe.</p>
                        <Button primary leftIcon={<UserIcon />} className={cx('button')} onClick={signInWithGoogle}>
                            SIGN IN
                        </Button>
                    </div>
                    <MenuSidebar items={BEST_OF_YOUTUBE} heading="Best of YouTube" lessPadding />
                    <MenuSidebar items={BROWSE_CHANNELS} lessPadding />
                </>
            )}

            <MenuSidebar
                items={currentUser ? MORE_FROM_YOUTUBE_LOGIN : MORE_FROM_YOUTUBE}
                heading="More from YouTube"
                lessPadding
            />

            <MenuSidebar items={SETTINGS} lessPadding />

            <footer className={cx('footer')}>
                <div className={cx('links-primary')}>
                    <a href="https://www.youtube.com/about/">About</a>
                    <a href="https://www.youtube.com/about/press/">Press</a>
                    <a href="https://www.youtube.com/about/copyright/">Copyright</a>
                    <Link to="/t/contact_us/">Contact us</Link>
                    <a href="https://www.youtube.com/creators/">Creators</a>
                    <a href="https://www.youtube.com/ads/">Advertise</a>
                    <a href="https://developers.google.com/youtube">Developers</a>
                </div>

                <div className={cx('links-secondary')}>
                    <Link to="/t/terms">Terms</Link>
                    <Link to="/t/privacy">Privacy</Link>
                    <a href="https://www.youtube.com/about/policies/">Policy &amp; Safety</a>
                    <a href="https://www.youtube.com/howyoutubeworks">How YouTube works</a>
                    <Link to="/new">Test new features</Link>
                </div>

                <p className={cx('copyright')}>© 2022 Google LLC</p>
            </footer>
        </div>
    );
}

Sidebar.propTypes = {
    noPosition: PropTypes.bool,
};

export default Sidebar;
