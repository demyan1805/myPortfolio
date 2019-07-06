import React from 'react';
import envelope from '../envelope.svg';
import smartphone from '../smartphone.svg';
import plane from '../plane.svg';
import gitlogo from '../gitlogo.svg';
import avatar from '../avatar.jpg';


export default class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <h1>Обо мне</h1>
                <div className="content-wrap">
                    <div className="description">
                        <p>Здравствуйте! Меня зовут Степан, я начинающий Frontend-разработчик. <a href="/projects/">Здесь</a> представлено мое скромное портфолио и вся необходимая информация чтобы со мной связаться.</p>
                        <p className="skills">
                            Вот краткий список моих навыков:
                        </p>
                        <ul>
                            <li>Верстка HTML5</li>
                            <li>CSS3, в т.ч. препроцессор Sass</li>
                            <li>JavaScript (ES6)</li>
                            <li>React</li>
                            <li>Базовые знания Python, Django, SQL</li>
                            <li>Свободное владение Adobe Photoshop, Illustrator</li>
                        </ul>

                    </div>
                    <div className="me">
                        <img src={avatar} alt="avatar" className="avatar"/>
                        <div className="contacts">
                            <div className="contacts-item"><a href="mailto:demyan1805@gmail.com" className="link">demyan1805@gmail.com</a><img src={envelope} alt="email" className="icon"/></div>
                            <div className="contacts-item"><a href="tel:+79221200388" className="link">+7(922)120-03-88</a><img src={smartphone} alt="phone" className="icon"/></div>
                            <div className="contacts-item"><a href="https://t.me/demyan1805" className="link" target="_blank">@demyan1805</a><img src={plane} alt="telegram" className="icon"/></div>
                            <div className="contacts-item"><a href="https://github.com/demyan1805" className="link" target="_blank"><img src={gitlogo} alt="github" className="icon"/></a></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}