import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-section">
            <div className="container">
                <div className="content">
                    <div className="image-container">
                        <img
                            src="about.png"
                            alt="Team members in discussion"
                        />
                    </div>
                    <div className="content-container">
                        <h2 className="heading">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="paragraph">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="paragraph-secondary">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}