import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
export default function TabButtons(props) {

    const tabButtonTitle = ["Components", "JSX", "Props", "State"];
    const [stateOfButton, setStateOfButton] = useState("components");
    const buttonClickHandler = (selectedButton) => {

        setStateOfButton(selectedButton);
    };
    return (
        <Section id="examples" title="Examples">

            <menu>
                {tabButtonTitle.map((title) => {

                    return (
                        <TabButton
                            key={title}
                            isSelected={stateOfButton === title.toLowerCase()}
                            onClick={() => buttonClickHandler(title.toLowerCase())}
                        >
                            {title}
                        </TabButton>
                    );
                })}

            </menu>
            {
                <div id="tab-content">
                    <h3>{EXAMPLES[stateOfButton.toLowerCase()].title}</h3>
                    <p>{EXAMPLES[stateOfButton.toLowerCase()].description}</p>
                    <pre>
                        <code>{EXAMPLES[stateOfButton.toLowerCase()].code}</code>
                    </pre>
                </div>
            }

        </Section>
    );
}