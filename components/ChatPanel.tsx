import React from 'react'
import ChatPanelYou from './ChatPanelYou'
import ChatPanelSender from './ChatPanelSender'

export default function ChatPanel() {
    return (
        <div className="flex-1 relative flex flex-col overflow-y-scroll scrollbar">
            <div className="flex-1 flex flex-col z-50 py-5 px-10 w-full gap-4">
                <ChatPanelYou message='Hi, What is your name?' sentAt='8:16 AM' />
                <ChatPanelSender>
                    <p className="text-sm text-gray-700">
                        Hi, there! My name is Jamil, nice to meet you!
                    </p>
                </ChatPanelSender>
                <ChatPanelYou message='Tell me about yourself' sentAt='8:20 AM' />
                <ChatPanelSender>
                    <p className="text-sm text-gray-700 text-justify">
                        Passionate and skilled Software Engineer with 8 years of extensive experience
                        in designing, developing, and maintaining robust web and mobile applications.
                        Proficient in full-stack development, with a deep understanding of front-end and
                        back-end technologies. Demonstrated expertise in delivering high-quality,
                        scalable solutions tailored to meet user needs and business objectives.
                    </p>
                    <p className="text-sm text-gray-700 text-justify mt-2">
                        Experienced in agile development methodologies, collaborating
                        effectively with cross-functional teams to drive projects from
                        concept to deployment. Committed to continuous learning and staying
                        up-to-date with industry trends to implement innovative solutions.
                    </p>
                    <p className="text-sm text-gray-700 text-justify mt-2">
                        Seeking to leverage comprehensive technical
                        knowledge and problem-solving abilities to contribute to
                        dynamic and forward-thinking development teams.
                    </p>
                </ChatPanelSender>
                <ChatPanelYou message='Skills' sentAt='8:25 AM' />
                <ChatPanelSender>
                    <div className="text-sm text-gray-700 text-justify flex
                    flex-col gap-5 w-sm">
                        <div>
                            <strong>Programming Language</strong>
                            <ul className="list-disc ml-5">
                                <li>PHP</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Dart</li>
                                <li>Kotlin</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Frameworks</strong>
                            <ul className="list-disc ml-5">
                                <li>Symfony</li>
                                <li>Slim</li>
                                <li>Laravel</li>
                                <li>Flutter</li>
                                <li>React.js</li>
                                <li>Vue.js</li>
                                <li>Vite.js</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Database</strong>
                            <ul className="list-disc ml-5">
                                <li>MySQL</li>
                                <li>Postgres</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>Vercel Storage</li>
                            </ul>
                        </div>
                        <div>
                            <strong>DevOps & CI/CD</strong>
                            <ul className="list-disc ml-5">
                                <li>Github Actions</li>
                                <li>Bitbucket Pipelines</li>
                                <li>AWS</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                </ChatPanelSender>
            </div>
        </div>
    )
}
