import React from 'react';

function About() {
    const pictureStyle = {
        width: "28em"
    }

    return (
        <div id="main-wrapper">
            <div className="wrapper style2">
                <div className="inner">
                    <div class="container">
                        <div id="content">
                            <article>
                                <header class="major">
                                    <h2>About</h2>
                                    <p>A little about me</p>
                                </header>
                                <span className="image featured"><img src="https://cdn.discordapp.com/attachments/457421693527392287/651687263255658516/picture.jpg" alt="Picture of me" style={pictureStyle} /></span>

                                <p>I created this website for people to do Secret Santa with their friends and family.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;