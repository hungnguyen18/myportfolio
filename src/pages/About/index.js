import React from 'react';
import classNames from 'classnames/bind';
import { FaFacebook, FaBriefcase, FaAward, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

import styles from './About.module.scss';
import { Avatar, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { DevSvg } from '../../components/Svg';

const cx = classNames.bind(styles);

function About({ isModeTheme }) {
    return (
        <div className={cx('body', isModeTheme ? 'dark' : 'light')}>
            <div className="container">
                <Row gutter={[0, 40]}>
                    <Col lg={14}>
                        <div
                            className={cx(
                                'box',
                                isModeTheme ? 'dark' : 'light'
                            )}
                        >
                            <span>
                                Hello, I'm an indie front-end developer based in
                                Vietnam 🐧!
                            </span>
                        </div>
                        <div className={cx('info')}>
                            <span className={cx('name')}>Nguyen Kim Hung</span>
                            <p>
                                Front-end developer ({' '}
                                <span className={cx('highlight')}>student</span>{' '}
                                )
                            </p>
                        </div>
                        <div className={cx('overview')}>
                            <span>
                                My full name is Nguyen Kim Hung. Currently I am
                                a student of UTE. I am learning about{' '}
                                <span className={cx('highlight')}>
                                    Front-end programming
                                </span>
                                .
                            </span>
                        </div>
                    </Col>
                    <Col
                        lg={{ span: 6, offset: 4 }}
                        sm={{ offset: 8 }}
                        xs={{ offset: 4 }}
                    >
                        <div className={cx('avatar')}>
                            <Avatar
                                size={210}
                                src="https://lh3.googleusercontent.com/a/ALm5wu1BwGSz_UtEx5KYyEhmxaa5kLl_re9JzqmYZhn1tA=s288-p-rw-no"
                            />
                        </div>
                    </Col>
                </Row>

                <div className={cx('title')}>
                    <h3 className={cx(isModeTheme ? 'dark' : 'light')}>
                        About me
                    </h3>
                </div>

                <div className={cx('about')}>
                    <Row>
                        <Col lg={12} md={12} span={0}>
                            <DevSvg />
                        </Col>
                        <Col lg={12} md={12} xs={24}>
                            <div className={cx('my-about')}>
                                <Row gutter={[20, 20]}>
                                    <Col lg={8} md={8} sm={12} xs={24}>
                                        <div
                                            className={cx(
                                                'block',
                                                isModeTheme ? 'dark' : 'light'
                                            )}
                                        >
                                            <FaAward />

                                            <span>Experience</span>

                                            <p>Student</p>
                                        </div>
                                    </Col>

                                    <Col lg={8} md={8} sm={12} xs={24}>
                                        <div
                                            className={cx(
                                                'block',
                                                isModeTheme ? 'dark' : 'light'
                                            )}
                                        >
                                            <FaBriefcase />

                                            <span>Completed</span>

                                            <p>3+ Projects</p>
                                        </div>
                                    </Col>

                                    <Col lg={8} md={8} sm={12} xs={24}>
                                        <div
                                            className={cx(
                                                'block',
                                                isModeTheme ? 'dark' : 'light'
                                            )}
                                        >
                                            <FaBriefcase />

                                            <span>Completed</span>

                                            <p>3+ Projects</p>
                                        </div>
                                    </Col>
                                </Row>

                                <span className={cx('overview-about')}>
                                    I am learning about Front-end programming.
                                    Also I have I have a few small web pages in
                                    the process of learning and creating.
                                </span>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={cx('btn-download')}
                                >
                                    Download CV
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default About;
