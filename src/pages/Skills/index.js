import React from 'react';
import classNames from 'classnames/bind';
import { Col, Row } from 'antd';
import { SlCheck } from 'react-icons/sl';

import styles from './Skills.module.scss';

const cx = classNames.bind(styles);
function Skills() {
    const skills = {
        main: [
            { skill: 'HTML', level: 'Intermediate' },
            { skill: 'CSS', level: 'Intermediate' },
            { skill: 'JS', level: 'Intermediate' },
            { skill: 'SCSS', level: 'Basic' },
            { skill: 'Bootstrap', level: 'Basic' },
            { skill: 'Axios', level: 'Basic' },
            { skill: 'React', level: 'Basic' },
        ],
        other: [
            { skill: 'Good English documentation reading' },
            { skill: 'GIT' },
            { skill: 'Self-researching' },
        ],
    };

    return (
        <>
            <Row gutter={[10, 10]}>
                <Col lg={12} md={12} sm={24}>
                    <div className={cx('skills')}>
                        <h1>Main</h1>

                        <div className={cx('body')}>
                            <Row justify="center">
                                {skills.main.map((item, index) => (
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <div className={cx('content')}>
                                            <SlCheck className={cx('icon')} />
                                            <div className={cx('skill')}>
                                                <span>{item.skill}</span>
                                                <p>{item.level}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col lg={12} md={12} sm={24}>
                    <div className={cx('skills')}>
                        <h1>Other</h1>

                        <div className={cx('body')}>
                            <Row>
                                <Col lg={12}>
                                    <span>Hung</span>
                                </Col>
                                <Col lg={12}>
                                    <span>Hung</span>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Skills;
