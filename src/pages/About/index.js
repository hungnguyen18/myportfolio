import React from 'react';
import classNames from 'classnames/bind';
import { FaFacebook, FaGithub, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

import styles from './About.module.scss';
import { Avatar, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function About({ isModeTheme }) {
    return (
        <div className={cx('body', isModeTheme ? 'dark' : 'light')}>
            <div className="container">
                <Row gutter={[0, 40]}>
                    <Col lg={14} md={24} sm={24}>
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
                    <Col lg={6} offset={4}>
                        <Avatar
                            size={210}
                            src="https://lh3.googleusercontent.com/a/ALm5wu1BwGSz_UtEx5KYyEhmxaa5kLl_re9JzqmYZhn1tA=s288-p-rw-no"
                        />
                    </Col>
                </Row>

                <span className={cx('title')}>
                    About me
                    <span className={cx('sub-title')}>My introduction</span>
                </span>

                <div className={cx('about')}>
                    <Row>
                        <Col lg={12}>
                            <img
                                src="https://pbs.twimg.com/media/FhXOk4EaAAEjTI8?format=jpg&name=4096x4096"
                                alt=""
                                className={cx('img')}
                            />
                        </Col>
                        <Col lg={12}>
                            <div>
                                <Row gutter={[40, 0]}>
                                    <Col lg={8}>
                                        <div className={cx('block')}>
                                            <FaFacebook />

                                            <span>Experience</span>

                                            <p>1 Year Working</p>
                                        </div>
                                    </Col>

                                    <Col lg={8}>
                                        <div className={cx('block')}>
                                            <FaFacebook />

                                            <span>Experience</span>

                                            <p>1 Year Working</p>
                                        </div>
                                    </Col>

                                    <Col lg={8}>
                                        <div className={cx('block')}>
                                            <FaFacebook />

                                            <span>Experience</span>

                                            <p>1 Year Working</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default About;
