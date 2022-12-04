import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaAlignJustify, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(0px at 10px 10px)',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

function Header({ isModeTheme, onSetTheme }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className={cx('header', isModeTheme ? 'dark' : 'light')}>
                <div className="container">
                    <div className={cx('navbar')}>
                        <div className={cx('logo')}>🐧Hng18</div>

                        <div className={cx('navbar')}>
                            <div className={cx('nav')}>
                                <ul className={cx('menu')}>
                                    <li>About</li>
                                    <li>Projects</li>
                                    <li>Skills</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={cx(
                                    'mode',
                                    isModeTheme ? 'dark' : 'light'
                                )}
                                onClick={() => onSetTheme(!isModeTheme)}
                            >
                                {isModeTheme ? <FaSun /> : <FaMoon />}
                            </motion.button>

                            <div className={cx('button')}>
                                <button
                                    className={cx('toggle')}
                                    onClick={() => {
                                        // const setClick =
                                        //     showMenu == 'none' ? 'block' : 'none';

                                        setShowMenu((showMenu) => !showMenu);
                                    }}
                                >
                                    <FaAlignJustify />
                                </button>

                                <motion.nav
                                    animate={showMenu ? 'open' : 'closed'}
                                    variants={variants}
                                >
                                    <ul
                                        className={cx(
                                            'menu-list',
                                            isModeTheme ? 'dark' : 'light'
                                        )}
                                        // style={{ display: showMenu }}
                                    >
                                        <li>About</li>
                                        <li>Projects</li>
                                        <li>Skills</li>
                                        <li>Contact</li>
                                    </ul>
                                </motion.nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
