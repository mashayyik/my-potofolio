import style from '../styles/App.module.scss';
import { Line } from './Line';
import { Main } from './Main';
import { techStack, FEtechStack, BEtechStack, project, link, otherTechStack } from '../lib/info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { Typewriter } from 'react-simple-typewriter';
function App() {
    return (
        <Main>
            <div className={style.content}>
                <div className={style.head}>
                    <div className={style.picture}>
                        <img width='150px' height='150px' style={{ objectFit: 'cover' }} src='/images/profile.png' alt='Hayyik Lanaa Rosyada' />
                        <div className={style.greet}>
                            <span className={style.name}>Hayyik Lanaa Rosyada</span>
                            <span style={{ marginTop: 10 }}>
                                I'm a{' '}
                                <Typewriter
                                    words={['Fullstack Developer', 'Frontend Developer', 'Mobile Developer', 'Backend Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={70}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}>About Me</div>
                        <p className={style.aboutMe}>
                            With a deep interest in programming, especially in web and mobile app development, I have a strong background as a
                            full-stack web developer. I am an active person who enjoys working in teams, particularly in my lifelong passion for
                            technology.
                        </p>
                    </div>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}>Programming Language</div>
                        <ul className={style.techStackList}>
                            {techStack.map((v) => {
                                return (
                                    <li key={nanoid()}>
                                        <div className={style.logo}>
                                            <img src={v.logo} width={v.width} height={v.height} alt={v.title} />
                                        </div>
                                        <div className={style.techDetail}>
                                            <span>{v.title}</span>
                                            <Line color='#007acc' length={v.line} />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}>Front End Tech Stack</div>
                        <ul className={style.techStackList}>
                            {FEtechStack.map((v) => {
                                return (
                                    <li key={nanoid()}>
                                        <div className={style.logo}>
                                            <img src={v.logo} width={v.width} height={v.height} alt={v.title} />
                                        </div>
                                        <div className={style.techDetail}>
                                            <span>{v.title}</span>
                                            <Line color='#007acc' length={v.line} />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}>Back End Tech Stack</div>
                        <ul className={style.techStackList}>
                            {BEtechStack.map((v) => {
                                return (
                                    <li key={nanoid()}>
                                        <div className={style.logo}>
                                            <img src={v.logo} width={v.width} height={v.height} alt={v.title} />
                                        </div>
                                        <div className={style.techDetail}>
                                            <span>{v.title}</span>
                                            <Line color='#007acc' length={v.line} />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}>Other Skills</div>
                        <ul className={style.techStackList}>
                            {otherTechStack.map((v) => {
                                return (
                                    <li key={nanoid()}>
                                        <div className={style.logo}>
                                            <img src={v.logo} width={v.width} height={v.height} alt={v.title} />
                                        </div>
                                        <div className={style.techDetail}>
                                            <span>{v.title}</span>
                                            <Line color='#007acc' length={v.line} />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}>Project</div>
                        <div className={style.projectBox}>
                            {project.map((v) => {
                                return (
                                    <div className={style.project} key={nanoid()}>
                                        <div className={style.projectTitle}>
                                            <FontAwesomeIcon className={style.fa} icon={v.font} />
                                            <a href={v.url}>{v.title}</a>
                                            <a
                                                href={v.repo}
                                                style={{
                                                    textDecoration: 'none',
                                                    fontSize: 11,
                                                    marginBottom: 10,
                                                    color: '#b8ca18',
                                                    marginLeft: 10,
                                                    fontStyle: 'italic',
                                                }}>
                                                View Repository
                                            </a>
                                        </div>
                                        <div className={style.ProjectDescription}>{v.description}</div>
                                        <div className={style.language}>
                                            <div
                                                style={{
                                                    backgroundColor: v.color,
                                                    width: 14,
                                                    height: 14,
                                                    borderRadius: '100%',
                                                }}
                                            />
                                            <span>{v.language}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={style.infoBox}>
                        <div className={style.sectionTitle}></div>
                        <div className={style.projectBox}>
                            <div className={style.link}>
                                {link.map((v) => {
                                    return (
                                        <a key={nanoid()} href={v.url}>
                                            <FontAwesomeIcon icon={v.logo} color='#eee' size='2x' />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default App;
