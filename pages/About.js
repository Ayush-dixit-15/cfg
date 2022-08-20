import React from "react";
import Navbar from "../components/Navbar";

const About = ({ product, subTotal }) => {
    return (
        <div>
            <Navbar
                product={product}
                KYC={"KYC"}
                About={null}
                Contact={"Contact"}
                Login={"Login"}
                Signup={"Signup"}
                subTotal={subTotal}
            />
            <div className="about_box1">
                <img src="/1523.jpg" alt="Craving For Gaming" />

            </div>
            <div className="about_box2">
                <img src="/2_20220725_221708_0001 1.png" alt="Craving For Gaming" />

                <div className="about_p1">
                    <h3>MISSION</h3>
                    <p> ipsum dolor sit amet consectetur adipisicing elit. Neque natus quae, iste magnam recusandae dignissimos
                        ex harum, commodi minima placeat eligendi facere soluta voluptatem ut possimus quaerat fugiat in tempore
                        et a earum voluptate corporis! Cumque fuga maxime rerum aut totam nesciunt eligendi veniam quasi
                        voluptas hic expedita doloremque corporis nemo sequi perspiciatis, eos quidem ipsa soluta libero
                        aspernatur provident dolorum quisquam deserunt. Architecto, facilis.</p>
                </div>

            </div>
            <div className="about_box3">
                <div className="about_p2">
                    <h3>VISION</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam unde nemo eum. Quaerat natus, eum
                        explicabo eos, voluptatibus fugiat veritatis, laborum eaque veniam assumenda perspiciatis illum! Modi
                        eaque corporis reiciendis accusamus aliquid aspernatur quasi cumque molestias quia hic mollitia
                        exercitationem nam libero natus incidunt, dolore consectetur praesentium officiis. Ab beatae impedit,
                        voluptatibus id obcaecati explicabo non tempore dicta, nam natus sit voluptatem quis numquam?</p>
                </div>
                <img src="/3_20220725_221708_0002 1.png" alt="Craving For Gaming" />
            </div>
        </div>
    );
};

export default About;
